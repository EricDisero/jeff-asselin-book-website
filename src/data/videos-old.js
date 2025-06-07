// MAIN VIDEO DATA AGGREGATOR
// Combines all video modules into a single export for the application
// This keeps the API consistent while organizing data into manageable modules

import { solos1to5Videos } from './videos/solos-1-5.js';
import { videoCategories as baseVideoCategories, tempoCategories as baseTempoCategories, meterTypes, partTypes, rudimentFamilies, rudimentTypes } from './legacy-categories.js';

// AGGREGATE ALL VIDEOS
export const videos = [
  ...solos1to5Videos
  // Future modules will be added here:
  // ...solos6to10Videos,
  // ...namedPiecesAMVideos,
  // ...namedPiecesNZVideos,
  // ...advancedStudiesVideos
];

// Re-export category data for backward compatibility
export const videoCategories = baseVideoCategories;
export const tempoCategories = baseTempoCategories;
export { meterTypes, partTypes, rudimentFamilies, rudimentTypes };

// Update category counts based on actual video data
videoCategories.forEach(category => {
  category.count = videos.filter(video => video.category === category.id).length;
});

tempoCategories.forEach(category => {
  category.count = videos.filter(video => video.tempoCategory === category.id).length;
});

// UTILITY FUNCTIONS FOR FILTERING
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

export const getVideosByMeter = (meter) => {
  return videos.filter(video => video.meter === meter);
};

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

console.log(`Total videos loaded: ${videos.length}`);
console.log(`Video modules: Solos #1-#5 (${solos1to5Videos.length})`);

export default videos; 