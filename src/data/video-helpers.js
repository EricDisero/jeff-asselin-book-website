// SHARED VIDEO UTILITY FUNCTIONS
// Used across all video modules for consistency

// Helper function to extract YouTube ID from URL
export function extractYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&\n?#]+)/);
  return match ? match[1] : null;
}

// Helper function to categorize tempo range
export function categorizeTempoRange(bpm) {
  if (bpm >= 40 && bpm <= 50) return '40-50';
  if (bpm >= 60 && bpm <= 70) return '60-70';
  if (bpm >= 80 && bpm <= 90) return '80-90';
  return '100+';
}

// Helper function to determine video type from title
export function getVideoType(title) {
  if (title.includes('with counting')) return 'counting';
  if (title.includes('Part 1 and Part 2') || title.includes('duet')) return 'duet';
  if (title.includes('100bpm') || title.includes('110bpm') || title.includes('120bpm')) return 'performance';
  return 'breakdown';
}

// Helper function to generate consistent video IDs
export function generateVideoId(pieceName, partType, tempo, videoType) {
  const piece = pieceName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const part = partType ? `-${partType}` : '';
  const tempoStr = `-${tempo}`;
  const typeStr = videoType !== 'breakdown' ? `-${videoType}` : '';
  return `${piece}${part}${tempoStr}${typeStr}`;
}

// Helper function to create multiple tempo variations of a base video
export function createTempoVariations(baseVideo, tempos) {
  return tempos.map(tempo => ({
    ...baseVideo,
    id: baseVideo.id.replace(/-\d+/, `-${tempo}`),
    title: baseVideo.title.replace(/\d+ BPM/, `${tempo} BPM`),
    tempo,
    tempoCategory: categorizeTempoRange(tempo)
  }));
}

// Helper function to validate video data structure
export function validateVideo(video) {
  const required = ['id', 'title', 'youtubeId', 'category', 'tempo', 'pageNumber'];
  const missing = required.filter(field => !video[field]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  // Validate tempo category matches tempo
  const expectedCategory = categorizeTempoRange(video.tempo);
  if (video.tempoCategory !== expectedCategory) {
    console.warn(`Tempo category mismatch for ${video.id}: expected ${expectedCategory}, got ${video.tempoCategory}`);
  }
  
  return true;
}

// Helper function to sort videos by logical order (piece, part, tempo)
export function sortVideos(videos) {
  return videos.sort((a, b) => {
    // First by page number
    if (a.pageNumber !== b.pageNumber) {
      return a.pageNumber - b.pageNumber;
    }
    
    // Then by part type (part1 before part2)
    if (a.partType !== b.partType) {
      if (a.partType === 'part1') return -1;
      if (b.partType === 'part1') return 1;
      if (a.partType === 'part2') return -1;
      if (b.partType === 'part2') return 1;
    }
    
    // Finally by tempo
    return a.tempo - b.tempo;
  });
}

// Helper to get standard tempo progressions
export const TEMPO_PROGRESSIONS = {
  standard: [50, 60, 70, 80, 90, 100],
  withCounting: [50, 60, 70, 80, 90, 100], // 50 includes counting version
  minimal: [50, 80, 100],
  advanced: [60, 80, 100, 120]
};

// Helper to get rudiment families for common patterns
export const COMMON_RUDIMENT_PATTERNS = {
  basicRolls: {
    rudiments: ['5 Stroke Roll', '9 Stroke Roll'],
    families: ['rolls']
  },
  paradiddles: {
    rudiments: ['Paradiddle', 'Double Paradiddle'],
    families: ['paradiddles']
  },
  flams: {
    rudiments: ['Flam', 'Flam Paradiddle', 'Flamacue'],
    families: ['flams']
  },
  mixed: {
    rudiments: ['5 Stroke Roll', '9 Stroke Roll', 'Paradiddle', 'Flam'],
    families: ['rolls', 'paradiddles', 'flams']
  }
}; 