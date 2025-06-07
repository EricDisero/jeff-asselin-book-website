// NAMED PIECES FROM THE RUDIMENTAL BLUEPRINT - PART 7
// Multi-part pieces focusing on intermediate to advanced techniques
// Contains STRAIGHT UP, UPSIDE, BUMBLES, OLAY, A LITTLE MAD, A LITTLE STAGGER

import { validateVideo, sortVideos } from '../video-helpers.js';

const namedPieces7Videos = [
  // STRAIGHT UP - Complete Part 1/Part 2 structure (pages 79-80)
  {
    id: 'straight-up-part1-50-counting',
    title: 'Straight Up Part 1 - 50 BPM with Counting',
    youtubeId: 'K3Rs1ipMPJk',
    url: 'https://www.youtube.com/watch?v=K3Rs1ipMPJk',
    category: 'named-pieces',
    tags: ['straight up', 'part 1', 'counting', 'beginner'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'counting',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 1 with counting overlay for timing development.',
    pageNumber: 79,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part1-50',
    title: 'Straight Up Part 1 - 50 BPM',
    youtubeId: 'OxcoLXGr_yE',
    url: 'https://www.youtube.com/watch?v=OxcoLXGr_yE',
    category: 'named-pieces',
    tags: ['straight up', 'part 1'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'breakdown',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 1 at learning tempo.',
    pageNumber: 79,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part1-60',
    title: 'Straight Up Part 1 - 60 BPM',
    youtubeId: 'N8BIsL8qzuM',
    url: 'https://www.youtube.com/watch?v=N8BIsL8qzuM',
    category: 'named-pieces',
    tags: ['straight up', 'part 1'],
    tempo: 60,
    tempoCategory: '60-70',
    type: 'breakdown',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 1 at moderate tempo.',
    pageNumber: 79,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part1-70',
    title: 'Straight Up Part 1 - 70 BPM',
    youtubeId: 'C6nmQOVUSpk',
    url: 'https://www.youtube.com/watch?v=C6nmQOVUSpk',
    category: 'named-pieces',
    tags: ['straight up', 'part 1'],
    tempo: 70,
    tempoCategory: '60-70',
    type: 'breakdown',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 1 at intermediate tempo.',
    pageNumber: 79,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part1-80',
    title: 'Straight Up Part 1 - 80 BPM',
    youtubeId: 's_CjHvktqxY',
    url: 'https://www.youtube.com/watch?v=s_CjHvktqxY',
    category: 'named-pieces',
    tags: ['straight up', 'part 1', 'performance'],
    tempo: 80,
    tempoCategory: '80-90',
    type: 'performance',
    partType: 'part1',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 1 at performance tempo.',
    pageNumber: 79,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part2-50-counting',
    title: 'Straight Up Part 2 - 50 BPM with Counting',
    youtubeId: 'ZOGetVAOg38',
    url: 'https://www.youtube.com/watch?v=ZOGetVAOg38',
    category: 'named-pieces',
    tags: ['straight up', 'part 2', 'counting', 'beginner'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'counting',
    partType: 'part2',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 2 with counting overlay for timing development.',
    pageNumber: 80,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part2-50',
    title: 'Straight Up Part 2 - 50 BPM',
    youtubeId: 'ZvEwjCVAXlk',
    url: 'https://www.youtube.com/watch?v=ZvEwjCVAXlk',
    category: 'named-pieces',
    tags: ['straight up', 'part 2'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'breakdown',
    partType: 'part2',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 2 at learning tempo.',
    pageNumber: 80,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part2-60',
    title: 'Straight Up Part 2 - 60 BPM',
    youtubeId: 'iFQ0mDDlXmA',
    url: 'https://www.youtube.com/watch?v=iFQ0mDDlXmA',
    category: 'named-pieces',
    tags: ['straight up', 'part 2'],
    tempo: 60,
    tempoCategory: '60-70',
    type: 'breakdown',
    partType: 'part2',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 2 at moderate tempo.',
    pageNumber: 80,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part2-70',
    title: 'Straight Up Part 2 - 70 BPM',
    youtubeId: '3OBkbztjppY',
    url: 'https://www.youtube.com/watch?v=3OBkbztjppY',
    category: 'named-pieces',
    tags: ['straight up', 'part 2'],
    tempo: 70,
    tempoCategory: '60-70',
    type: 'breakdown',
    partType: 'part2',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 2 at intermediate tempo.',
    pageNumber: 80,
    author: 'Chuck Burrows'
  },
  {
    id: 'straight-up-part2-80',
    title: 'Straight Up Part 2 - 80 BPM',
    youtubeId: 'jngBpGCB4X4',
    url: 'https://www.youtube.com/watch?v=jngBpGCB4X4',
    category: 'named-pieces',
    tags: ['straight up', 'part 2', 'performance'],
    tempo: 80,
    tempoCategory: '80-90',
    type: 'performance',
    partType: 'part2',
    meter: 'simple',
    rudiments: ['Paradiddle', 'Flam', '5 Stroke Roll'],
    rudimentFamilies: ['paradiddles', 'flams', 'rolls'],
    description: 'Straight Up Part 2 at performance tempo.',
    pageNumber: 80,
    author: 'Chuck Burrows'
  }
];

// Validate all videos on module load
namedPieces7Videos.forEach(validateVideo);

// Export sorted videos
export const videos = sortVideos(namedPieces7Videos);

console.log(`Loaded ${videos.length} videos for Named Pieces Part 7`);

export default videos; 