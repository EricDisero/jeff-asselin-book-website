// Utility functions for grouping videos by song/piece name

/**
 * Extract the base song name from a video title
 * @param {string} title - The video title
 * @returns {string} - The base song name
 */
export function extractSongName(title) {
  // Remove common suffixes and tempo information
  let baseName = title
    .replace(/The Rudimental Blueprint /i, '') // Remove book prefix first
    .replace(/ - \d+.*$/i, '') // Remove "- 50 BPM" etc
    .replace(/ Part \d+.*$/i, '') // Remove "Part 1" etc
    .replace(/ with Counting$/i, '') // Remove "with Counting"
    .replace(/ Performance.*$/i, '') // Remove "Performance Tempo"
    .replace(/ Duet.*$/i, '') // Remove "Duet"
    .trim();
  
  console.log(`Extracting song name: "${title}" -> "${baseName}"`);
  return baseName;
}

/**
 * Group videos by their song/piece name
 * @param {Array} videos - Array of video objects
 * @returns {Object} - Object with song names as keys and video arrays as values
 */
export function groupVideosBySong(videos) {
  const groups = {};
  
  videos.forEach(video => {
    const songName = extractSongName(video.title);
    
    if (!groups[songName]) {
      groups[songName] = [];
    }
    
    groups[songName].push(video);
  });
  
  // Sort each group by tempo (counting first, then by BPM)
  Object.keys(groups).forEach(songName => {
    groups[songName].sort((a, b) => {
      // Counting versions first
      if (a.type === 'counting' && b.type !== 'counting') return -1;
      if (b.type === 'counting' && a.type !== 'counting') return 1;
      
      // Then by tempo
      return a.tempo - b.tempo;
    });
  });
  
  return groups;
}

/**
 * Get video folders sorted by various criteria
 * @param {Object} videoGroups - Grouped videos from groupVideosBySong
 * @param {string} sortBy - Sort criteria: 'name', 'count', 'recent'
 * @returns {Array} - Array of objects with songName and videos
 */
export function getSortedVideoFolders(videoGroups, sortBy = 'name') {
  const folders = Object.entries(videoGroups).map(([songName, videos]) => ({
    songName,
    videos,
    videoCount: videos.length,
    minTempo: Math.min(...videos.map(v => v.tempo)),
    maxTempo: Math.max(...videos.map(v => v.tempo))
  }));
  
  switch (sortBy) {
    case 'count':
      return folders.sort((a, b) => b.videoCount - a.videoCount);
    case 'name':
      return folders.sort((a, b) => a.songName.localeCompare(b.songName));
    default:
      return folders;
  }
}

/**
 * Filter video folders based on search query
 * @param {Array} folders - Array of folder objects
 * @param {string} searchQuery - Search query
 * @returns {Array} - Filtered and marked folders
 */
export function filterVideoFolders(folders, searchQuery) {
  if (!searchQuery) {
    return folders.map(folder => ({ ...folder, shouldExpand: false, matchingVideos: [] }));
  }
  
  const query = searchQuery.toLowerCase();
  
  return folders.map(folder => {
    const songMatches = folder.songName.toLowerCase().includes(query);
    const matchingVideos = folder.videos.filter(video => 
      video.title.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query) ||
      video.tags.some(tag => tag.toLowerCase().includes(query)) ||
      video.rudiments.some(rudiment => rudiment.toLowerCase().includes(query))
    );
    
    const hasMatches = songMatches || matchingVideos.length > 0;
    
    return {
      ...folder,
      shouldExpand: hasMatches && matchingVideos.length > 0,
      matchingVideos,
      isVisible: hasMatches
    };
  }).filter(folder => folder.isVisible);
} 