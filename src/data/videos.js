// Video data - modular architecture
// Page-based organization (not skill-based) for easier one-file-at-a-time handling

// SOLOS (well-organized, keep as-is)
import { videos as solos1to5Videos } from './videos/solos-1-5.js';
import { videos as solos6to10Videos } from './videos/solos-6-10.js';

// NAMED PIECES (current structure - to be reorganized into 8 page-based files)
import { videos as namedPiecesVideos } from './videos/named-pieces.js';
import { videos as namedPieces2Videos } from './videos/named-pieces-2.js';
import { videos as namedPieces3Videos } from './videos/named-pieces-3.js';
import { videos as namedPieces4Videos } from './videos/named-pieces-4.js';
import { videos as namedPieces5Videos } from './videos/named-pieces-5.js';
import { videos as namedPieces6Videos } from './videos/named-pieces-6.js';
import { videos as namedPieces7Videos } from './videos/named-pieces-7.js';
import { videos as namedPieces8Videos } from './videos/named-pieces-8.js';
import { videos as namedPieces9Videos } from './videos/named-pieces-9.js';

// PLANNED REORGANIZATION (see file-organization-plan.js):
// named-pieces-1.js (pages 34-42) - 10 songs
// named-pieces-2.js (pages 43-51) - 11 songs  
// named-pieces-3.js (pages 52-61) - 9 songs
// named-pieces-4.js (pages 62-72) - 11 songs
// named-pieces-5.js (pages 74-82) - 11 songs
// named-pieces-6.js (pages 84-91) - 8 songs
// named-pieces-7.js (pages 92-99) - 8 songs
// named-pieces-8.js (pages 100-104) - 5 songs

// 🏷️ IMPORT CENTRALIZED TAG SYSTEM
import { tagHelpers, tagCollections } from './tag-system.js';

// 🏷️ DYNAMICALLY GENERATED FILTERS FROM CENTRALIZED TAG SYSTEM
// Edit tags in tag-system.js - UI updates automatically!

// Categories for filtering - from centralized system
export const videoCategories = Object.values(tagCollections.bookSections).map(tag => ({
  id: tag.id,
  name: tag.uiLabel,
  count: 0
}));

// Tempo categories for filtering - from centralized system  
export const tempoCategories = Object.values(tagCollections.tempoRanges).map(tag => ({
  id: tag.id,
  name: tag.uiLabel,
  count: 0
}));

// Video types for filtering - now dynamic from centralized system
export const videoTypes = Object.fromEntries(
  Object.values(tagCollections.videoTypes).map(tag => [tag.id, tag.uiLabel])
);

// Meter types removed - these were just exercises at the beginning of the book

// Part types for filtering - from centralized system
export const partTypes = Object.values(tagCollections.partTypes).map(tag => ({
  id: tag.id,
  name: tag.uiLabel
}));

// Rudiment families - from centralized system
export const rudimentFamilies = Object.values(tagCollections.rudimentFamilies).map(tag => ({
  id: tag.id,
  name: tag.uiLabel
}));

// Specific rudiments list - from centralized system
export const rudimentTypes = Object.values(tagCollections.specificRudiments).map(tag => tag.tagValue);

// Utility functions
function extractYouTubeId(url) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
}

function categorizeTempoRange(bpm) {
  if (bpm <= 50) return '40-50';
  if (bpm <= 70) return '60-70';
  if (bpm <= 90) return '80-90';
  return '100+';
}

function getVideoType(title) {
  if (title.includes('with counting')) return 'with counting';
  if (title.includes('Part 1 and Part 2') || title.includes('duet')) return 'performance tempo'; // Duet videos are performance tempo
  if (title.includes('100bpm') || title.includes('110bpm') || title.includes('120bpm')) return 'performance tempo';
  if (title.includes('40bpm') || title.includes('50bpm') || title.includes('60bpm') || title.includes('70bpm') || title.includes('80bpm') || title.includes('90bpm')) return 'practice tempo';
  return 'practice tempo'; // Default for slower tempos
}

// Combine all videos from modules
export const videos = [
  ...solos1to5Videos,
  ...solos6to10Videos,
  ...namedPiecesVideos,
  ...namedPieces2Videos,
  ...namedPieces3Videos,
  ...namedPieces4Videos,
  ...namedPieces5Videos,
  ...namedPieces6Videos,
  ...namedPieces7Videos,
  ...namedPieces8Videos,
  ...namedPieces9Videos
];

// Update category counts based on current videos
videoCategories.forEach(category => {
  category.count = videos.filter(video => video.category === category.id).length;
});

// Update tempo category counts
tempoCategories.forEach(category => {
  category.count = videos.filter(video => video.tempoCategory === category.id).length;
});

console.log(`Loaded ${videos.length} videos from modular architecture: Solos #1-#5, #6-#10, and Named Pieces`);

// Utility functions for filtering
export const getVideosByCategory = (category) => {
  return videos.filter(video => video.category === category);
};

export const getVideosByTempo = (tempoRange) => {
  return videos.filter(video => video.tempoCategory === tempoRange);
};

export const getVideosByRudiment = (rudiment) => {
  return videos.filter(video => video.rudiments.includes(rudiment));
};

export const getVideosByRudimentFamily = (family) => {
  return videos.filter(video => video.rudimentFamilies.includes(family));
};

// Meter filtering removed - these were just exercises at the beginning of the book

export const getVideosByPartType = (partType) => {
  return videos.filter(video => video.partType === partType);
};

export const searchVideos = (query) => {
  const searchTerm = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(searchTerm) ||
    video.description.toLowerCase().includes(searchTerm) ||
    video.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    video.rudiments.some(rudiment => rudiment.toLowerCase().includes(searchTerm))
  );
}; 