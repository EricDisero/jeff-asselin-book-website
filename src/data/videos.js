// Video data structure organized by the book's methodology
// Tags: solo-number, part, tempo, type, difficulty, rudiment-type

export const videoCategories = {
  'roll-breakdown': {
    name: 'Roll Breakdown',
    description: 'Foundation rolls in simple and compound metres',
    order: 1
  },
  'solos-1-5': {
    name: 'Solos #1-#5',
    description: 'Beginning level solos with fundamental patterns',
    order: 2
  },
  'solos-6-10': {
    name: 'Solos #6-#10', 
    description: 'Intermediate solos introducing complex rudiments',
    order: 3
  },
  'named-pieces': {
    name: 'Named Pieces',
    description: 'Musical compositions with character and style',
    order: 4
  },
  'advanced-studies': {
    name: 'Advanced Studies',
    description: 'Complex patterns and musical applications',
    order: 5
  }
};

export const tempoCategories = [
  { range: '40-50', label: 'Learning Tempo (40-50 BPM)', color: 'bg-green-500' },
  { range: '60-70', label: 'Practice Tempo (60-70 BPM)', color: 'bg-blue-500' },
  { range: '80-90', label: 'Intermediate Tempo (80-90 BPM)', color: 'bg-yellow-500' },
  { range: '100+', label: 'Performance Tempo (100+ BPM)', color: 'bg-red-500' }
];

export const videoTypes = {
  'counting': 'With Counting',
  'performance': 'Performance Tempo', 
  'duet': 'Duet (Both Parts)',
  'breakdown': 'Technical Breakdown'
};

export const rudimentTypes = [
  'Single Stroke Roll',
  'Double Stroke Roll', 
  'Paradiddle',
  'Flam',
  'Drag',
  'Multiple Bounce Roll',
  'Single Ratamacue',
  'Double Ratamacue',
  'Flamacue',
  'Drag Paradiddle',
  'Swiss Army Triplet'
];

// Test videos for initial development (10 diverse examples)
export const videos = [
  {
    id: 'solo-1-part-1-50-counting',
    title: 'Solo #1 Part 1 50bpm with counting',
    youtubeId: 'RJVjHDqo-0I',
    url: 'https://www.youtube.com/watch?v=RJVjHDqo-0I',
    category: 'solos-1-5',
    tags: ['solo-1', 'part-1', '50bpm', 'counting', 'beginner'],
    tempo: 50,
    tempoCategory: '40-50',
    type: 'counting',
    difficulty: 'beginner',
    rudiments: ['Single Stroke Roll', 'Double Stroke Roll', 'Paradiddle'],
    description: 'Foundation solo introducing basic rudiments with counting guide',
    pageNumber: 14
  },
  {
    id: 'solo-1-part-2-60',
    title: 'Solo #1 Part 2 60bpm',
    youtubeId: 'oUxFwGyhsJc', 
    url: 'https://www.youtube.com/watch?v=oUxFwGyhsJc',
    category: 'solos-1-5',
    tags: ['solo-1', 'part-2', '60bpm', 'practice-tempo', 'beginner'],
    tempo: 60,
    tempoCategory: '60-70',
    type: 'performance',
    difficulty: 'beginner',
    rudiments: ['Single Stroke Roll', 'Double Stroke Roll'],
    description: 'Part 2 of the foundation solo at practice tempo',
    pageNumber: 15
  },
  {
    id: 'solo-3-part-1-80',
    title: 'Solo #3 Part 1 80bpm',
    youtubeId: 'pHDtbjYS1Qw',
    url: 'https://www.youtube.com/watch?v=pHDtbjYS1Qw', 
    category: 'solos-1-5',
    tags: ['solo-3', 'part-1', '80bpm', 'intermediate-tempo', 'intermediate'],
    tempo: 80,
    tempoCategory: '80-90',
    type: 'performance',
    difficulty: 'intermediate',
    rudiments: ['Flam', 'Paradiddle', 'Single Stroke Roll'],
    description: 'Intermediate solo introducing flam rudiments',
    pageNumber: 18
  },
  {
    id: 'boink-part-1-70',
    title: 'Boink Part 1 70bpm',
    youtubeId: 't8WbcCY_W2c',
    url: 'https://www.youtube.com/watch?v=t8WbcCY_W2c',
    category: 'named-pieces', 
    tags: ['boink', 'part-1', '70bpm', 'practice-tempo', 'intermediate'],
    tempo: 70,
    tempoCategory: '60-70',
    type: 'performance',
    difficulty: 'intermediate',
    rudiments: ['Multiple Bounce Roll', 'Flam', 'Drag'],
    description: 'Musical piece with character and rhythmic complexity',
    pageNumber: 38
  },
  {
    id: 'stagger-part-2-110',
    title: 'Stagger Part 2 110bpm',
    youtubeId: 'alXCSImeYN0',
    url: 'https://www.youtube.com/watch?v=alXCSImeYN0',
    category: 'named-pieces',
    tags: ['stagger', 'part-2', '110bpm', 'performance-tempo', 'advanced'],
    tempo: 110,
    tempoCategory: '100+',
    type: 'performance', 
    difficulty: 'advanced',
    rudiments: ['Single Stroke Roll', 'Drag', 'Flam'],
    description: 'High-energy piece showcasing advanced sticking patterns',
    pageNumber: 41
  },
  {
    id: 'trix-part-1-60',
    title: 'Trix Part 1 60bpm',
    youtubeId: 'o9xXjq6Mg14',
    url: 'https://www.youtube.com/watch?v=o9xXjq6Mg14',
    category: 'named-pieces',
    tags: ['trix', 'part-1', '60bpm', 'practice-tempo', 'intermediate'],
    tempo: 60,
    tempoCategory: '60-70',
    type: 'performance',
    difficulty: 'intermediate', 
    rudiments: ['Paradiddle', 'Flam', 'Single Stroke Roll'],
    description: 'Intricate patterns requiring precise hand coordination',
    pageNumber: 42
  },
  {
    id: 'later-80',
    title: 'Later 80bpm',
    youtubeId: 'z8F33fL1Ygo',
    url: 'https://www.youtube.com/watch?v=z8F33fL1Ygo',
    category: 'advanced-studies',
    tags: ['later', '80bpm', 'intermediate-tempo', 'advanced'],
    tempo: 80,
    tempoCategory: '80-90',
    type: 'performance',
    difficulty: 'advanced',
    rudiments: ['Swiss Army Triplet', 'Flamacue', 'Drag Paradiddle'],
    description: 'Advanced study in compound rhythms and complex rudiments',
    pageNumber: 58
  },
  {
    id: 'easy-does-it-part-1-70',
    title: 'Easy Does It Part 1 70bpm',
    youtubeId: 'LYAfQQKT0F4',
    url: 'https://www.youtube.com/watch?v=LYAfQQKT0F4',
    category: 'named-pieces',
    tags: ['easy-does-it', 'part-1', '70bpm', 'duet', 'intermediate'],
    tempo: 70,
    tempoCategory: '60-70', 
    type: 'duet',
    difficulty: 'intermediate',
    rudiments: ['Single Stroke Roll', 'Double Stroke Roll', 'Paradiddle'],
    description: 'Duet for two snare drums with interlocking patterns',
    pageNumber: 56
  },
  {
    id: 'paradiddle-triplets-90',
    title: 'Paradiddle Triplets 90bpm', 
    youtubeId: 'p8hywdp4EXw',
    url: 'https://www.youtube.com/watch?v=p8hywdp4EXw',
    category: 'advanced-studies',
    tags: ['paradiddle-triplets', '90bpm', 'intermediate-tempo', 'advanced'],
    tempo: 90,
    tempoCategory: '80-90',
    type: 'performance',
    difficulty: 'advanced',
    rudiments: ['Paradiddle', 'Single Stroke Roll'],
    description: 'Triplet-based paradiddle variations for advanced coordination',
    pageNumber: 69
  },
  {
    id: 'balance-point-60',
    title: 'Balance Point 60bpm',
    youtubeId: 'rOWygjNhm9w', 
    url: 'https://www.youtube.com/watch?v=rOWygjNhm9w',
    category: 'advanced-studies',
    tags: ['balance-point', '60bpm', 'practice-tempo', 'advanced'],
    tempo: 60,
    tempoCategory: '60-70',
    type: 'performance',
    difficulty: 'advanced',
    rudiments: ['Multiple Bounce Roll', 'Flamacue', 'Drag'],
    description: 'Final study demonstrating mastery of all rudimental concepts',
    pageNumber: 104
  }
];

// Helper functions for filtering and searching
export const getVideosByCategory = (category) => {
  return videos.filter(video => video.category === category);
};

export const getVideosByTempo = (tempoRange) => {
  return videos.filter(video => video.tempoCategory === tempoRange);
};

export const getVideosByDifficulty = (difficulty) => {
  return videos.filter(video => video.difficulty === difficulty);
};

export const getVideosByRudiment = (rudiment) => {
  return videos.filter(video => video.rudiments.includes(rudiment));
};

export const searchVideos = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return videos.filter(video => 
    video.title.toLowerCase().includes(lowercaseQuery) ||
    video.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    video.rudiments.some(rudiment => rudiment.toLowerCase().includes(lowercaseQuery))
  );
}; 