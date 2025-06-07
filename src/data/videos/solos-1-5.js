// SOLOS #1-#5 VIDEO DATA
// Complete collection of videos for the first five solos (115 videos)
// Written by Chuck Burrows

import { validateVideo, sortVideos } from '../video-helpers.js';

export const solos1to5Videos = [
  // SOLO #1 VIDEOS
  {
    id: 'solo1-part1-50-counting',
    title: 'Solo #1 Part 1 - 50 BPM with Counting',
    youtubeId: 'RJVjHDqo-0I',
    url: 'https://www.youtube.com/watch?v=RJVjHDqo-0I',
    category: 'solos-1-5',
    tags: ['p14', 'solo #1', 'part 1', 'counting', 'beginner'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'counting',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['5 Stroke Roll', '9 Stroke Roll', 'Double Paradiddle'],
    rudimentFamilies: ['rolls', 'paradiddles'],
    description: 'Solo #1 Part 1 performed at learning tempo with counting to help develop timing and subdivision awareness.',
    pageNumber: 14
  },
  {
    id: 'solo1-part1-50',
    title: 'Solo #1 Part 1 - 50 BPM',
    youtubeId: 'dgrGU9dAtr8',
    url: 'https://www.youtube.com/watch?v=dgrGU9dAtr8',
    category: 'solos-1-5',
    tags: ['p14', 'solo #1', 'part 1'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'breakdown',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['5 Stroke Roll', '9 Stroke Roll', 'Double Paradiddle'],
    rudimentFamilies: ['rolls', 'paradiddles'],
    description: 'Solo #1 Part 1 performed at a slow, learning tempo for detailed practice.',
    pageNumber: 14
  }
];

// Validate all videos on module load
solos1to5Videos.forEach(validateVideo);

// Export sorted videos
export const videos = sortVideos(solos1to5Videos);

console.log(`Loaded ${videos.length} videos for Solos #1-#5`);

export default videos; 