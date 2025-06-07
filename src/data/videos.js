// Video data - modular architecture
// This file imports videos from separate module files for better organization

import { videos as solos1to5Videos } from './videos/solos-1-5.js';

// Categories for filtering
export const videoCategories = [
  { id: 'all', name: 'All Videos', count: 0 },
  { id: 'solos-1-5', name: 'Solos #1-#5', count: 0 },
  { id: 'solos-6-10', name: 'Solos #6-#10', count: 0 },
  { id: 'named-pieces', name: 'Named Pieces', count: 0 },
  { id: 'mixed-meter', name: 'Mixed Meter', count: 0 },
  { id: 'duets', name: 'Duets', count: 0 },
  { id: 'practice-tips', name: 'Practice Tips', count: 0 }
];

// Tempo categories for filtering
export const tempoCategories = [
  { id: 'all', name: 'All Tempos', count: 0 },
  { id: '40-50', name: '40-50 BPM (Learning)', count: 0 },
  { id: '60-70', name: '60-70 BPM (Practice)', count: 0 },
  { id: '80-90', name: '80-90 BPM (Building)', count: 0 },
  { id: '100+', name: '100+ BPM (Performance)', count: 0 }
];

// Video types for filtering
export const videoTypes = {
  'counting': 'With Counting',
  'performance': 'Performance Tempo', 
  'duet': 'Duet (Both Parts)',
  'breakdown': 'Technical Breakdown'
};

// Meter types for filtering
export const meterTypes = [
  { id: 'simple', name: 'Simple Metre' },
  { id: 'compound', name: 'Compound Metre' }
];

// Part types for filtering
export const partTypes = [
  { id: 'part1', name: 'Part 1 (Full)' },
  { id: 'part2', name: 'Part 2 (Intro)' }
];

// Rudiment families organized by type (from book index pp. 106-109)
export const rudimentFamilies = [
  { id: 'rolls', name: 'Rolls' },
  { id: 'paradiddles', name: 'Paradiddles' },
  { id: 'flams', name: 'Flams' },
  { id: 'drags', name: 'Drags' },
  { id: 'ratamacues', name: 'Ratamacues' },
  { id: 'strokes', name: 'Single Strokes' },
  { id: 'advanced', name: 'Advanced Studies' }
];

// Specific rudiments list for filtering
export const rudimentTypes = [
  '5 Stroke Roll',
  '6 Stroke Roll', 
  '7 Stroke Roll',
  '9 Stroke Roll',
  '13 Stroke Roll',
  '17 Stroke Roll',
  'Paradiddle',
  'Paradiddle-diddle',
  'Double Paradiddle',
  'Triple Paradiddle',
  'Flam',
  'Flam Accent',
  'Flam Drag',
  'Flam Paradiddle',
  'Flam Tap',
  'Flamacue',
  'Drag',
  'Drag Paradiddle #1',
  'Drag Paradiddle #2',
  'Single Drag',
  'Single Drag Tap',
  'Single Dragadiddle',
  'Single Ratamacue',
  'Double Ratamacue',
  'Single Stroke 4',
  'Single Stroke 7',
  'Swiss Army Triplet',
  'Lesson 25'
];

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
  if (title.includes('with counting')) return 'counting';
  if (title.includes('Part 1 and Part 2') || title.includes('duet')) return 'duet';
  if (title.includes('100bpm') || title.includes('110bpm') || title.includes('120bpm')) return 'performance';
  return 'breakdown';
}

// Combine all videos from modules
export const videos = [
  ...solos1to5Videos
];

// Update category counts based on current videos
videoCategories.forEach(category => {
  category.count = videos.filter(video => video.category === category.id).length;
});

// Update tempo category counts
tempoCategories.forEach(category => {
  category.count = videos.filter(video => video.tempoCategory === category.id).length;
});

console.log(`Loaded ${videos.length} videos from modular architecture: Solos #1-#5`);

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