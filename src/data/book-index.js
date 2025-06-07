// THE RUDIMENTAL BLUEPRINT - BOOK INDEX
// Authoritative reference for all video tagging and categorization
// Based on book table of contents and index (pages 106-109)

// BOOK STRUCTURE & PAGE MAPPINGS
export const bookSections = {
  introduction: { pages: [7, 8, 9], category: 'introduction' },
  rollBreakdown: { 
    simple: { pages: [10, 11], category: 'roll-breakdown' },
    compound: { pages: [12, 13], category: 'roll-breakdown' }
  },
  solos1to5: {
    solo1: { part1: 14, part2: 15, category: 'solos-1-5' },
    solo2: { part1: 16, part2: 17, category: 'solos-1-5' },
    solo3: { part1: 18, part2: 19, category: 'solos-1-5' },
    solo4: { part1: 20, part2: 21, category: 'solos-1-5' },
    solo5: { part1: 22, part2: 23, category: 'solos-1-5' }
  },
  solos6to10: {
    solo6: { part1: 24, part2: 25, category: 'solos-6-10', author: 'Jeff Asselin' },
    solo7: { part1: 26, part2: 27, category: 'solos-6-10', author: 'Jeff Asselin' },
    solo8: { part1: 28, part2: 29, category: 'solos-6-10', author: 'Jeff Asselin' },
    solo9: { part1: 30, part2: 31, category: 'solos-6-10', author: 'Jeff Asselin' },
    solo10: { part1: 32, part2: 33, category: 'solos-6-10', author: 'Jeff Asselin' }
  },
  namedPieces: {
    // Pages 34-104, category: 'named-pieces', author: 'Chuck Burrows'
    'SIMP': { part1: 34, part2: 35 },
    'SHOUT!': { part1: 36, part2: 37 },
    'BOINK': { part1: 38, part2: 40 },
    'STAGGER': { part1: 39, part2: 41 },
    'TRIX': { part1: 42, part2: 43 },
    'TWIST': { part1: 44, part2: 45 },
         'UP & RUNNIN': { page: 46 },
    'SLASH & RUN': { page: 46 },
    'SUNDAY STRUT': { page: 47 },
    'A MINOR DOWNFALL': { page: 47 },
    'WALK ON': { page: 48 },
    'SCOOTER': { part1: 48, part2: 49 },
    'READY SET': { page: 49 },
    'EASY': { page: 50 },
    'ROLL AROUND': { page: 51 },
    'BOTHE': { part1: 52, part2: 54 },
    'THREE FOR ALL': { page: 53 },
    'ROLL AROUND 2': { page: 55 },
    'EASY DOES IT': { page: 56, type: 'duet' },
    'ROLL AROUND 3': { page: 57 },
    'LATER': { page: 58 },
    'TURN-A-ROUND': { page: 60 },
    'SPIRAL': { page: 61 },
    'WALTZ': { page: 61 },
    'RHODA': { part1: 62, part2: 63 },
    '3 TO GO': { part1: 64, part2: 65 },
    'TWINKY': { part1: 66, part2: 67 },
    'AWK': { part1: 68, part2: 70 },
    'PARADIDDLE TRIPLETS': { page: 69 },
    'NEEDLE NOSE': { page: 71 },
    'ANGEL': { page: 72 },
    'RAMBLE': { part1: 74, part2: 75 },
    '12 TO GO': { part1: 74, part2: 75 },
         'RATAS & ROLL': { part1: 76, part2: 77 },
    'TETRALOGY': { part1: 78, part2: 79, part3: 80, part4: 81 },
    'SHAKE WELL': { page: 82 },
         'MOVIN OUT': { part1: 84, part2: 85 },
    'GARY GARY': { part1: 86, part2: 87 },
    'TWO DAY': { page: 88 },
    'OKAY': { page: 89 },
    'HERE & THERE': { page: 90 },
    'ERASER': { page: 91 },
    'OLAY': { part1: 92, part2: 93 },
    'UPSIDE': { part1: 94, part2: 95 },
    'BUMBLES': { part1: 96, part2: 97 },
    'STRAIGHT UP': { part1: 98, part2: 99 },
    'A LITTLE STAGGER': { part1: 100, part2: 101 },
    'A LITTLE MAD': { page: 102 },
    'RHONDA': { page: 103 },
    'BALANCE POINT': { page: 104 }
  }
};

// COMPLETE RUDIMENT CATALOG (from book index pages 106-109)
export const rudimentCatalog = {
  // ROLL FAMILY
  rolls: {
    family: 'rolls',
    rudiments: [
      '5 Stroke Roll',
      '6 Stroke Roll',
      '7 Stroke Roll',
      '9 Stroke Roll',
      '10 Stroke Roll',
      '11 Stroke Roll',
      '13 Stroke Roll',
      '15 Stroke Roll',
      '17 Stroke Roll',
      'Double Stroke Open Roll',
      'Multiple Bounce Roll'
    ]
  },
  // PARADIDDLE FAMILY
  paradiddles: {
    family: 'paradiddles',
    rudiments: [
      'Paradiddle',
      'Paradiddle-diddle',
      'Double Paradiddle',
      'Triple Paradiddle',
      'Single Paradiddle'
    ]
  },
  // FLAM FAMILY
  flams: {
    family: 'flams',
    rudiments: [
      'Flam',
      'Flam Accent',
      'Flam Drag',
      'Flam Paradiddle',
      'Flam Paradiddle-diddle',
      'Flam Tap',
      'Flamacue',
      'Inverted Flamacue'
    ]
  },
  // DRAG FAMILY
  drags: {
    family: 'drags',
    rudiments: [
      'Drag',
      'Drag Paradiddle #1',
      'Drag Paradiddle #2',
      'Single Drag',
      'Single Drag Tap',
      'Single Dragadiddle',
      'Double Drag Tap',
      'Lesson 25'
    ]
  },
  // RATAMACUE FAMILY
  ratamacues: {
    family: 'ratamacues',
    rudiments: [
      'Single Ratamacue',
      'Double Ratamacue',
      'Triple Ratamacue'
    ]
  },
  // STROKE FAMILY
  strokes: {
    family: 'strokes',
    rudiments: [
      'Single Stroke 4',
      'Single Stroke 7',
      'Single Stroke Roll',
      'Multiple Stroke Roll'
    ]
  },
  // ADVANCED/HYBRID TECHNIQUES
  advanced: {
    family: 'advanced',
    rudiments: [
      'Swiss Army Triplet',
      'Pataflafla',
      'Cheese'
    ]
  }
};

// TEMPO STANDARDS (BPM ranges and their purposes)
export const tempoStandards = {
  learning: { range: '40-50', purpose: 'Initial learning, with counting', bpm: [40, 45, 50] },
  practice: { range: '60-70', purpose: 'Practice tempo, building muscle memory', bpm: [60, 65, 70] },
  intermediate: { range: '80-90', purpose: 'Intermediate development', bpm: [80, 85, 90] },
  performance: { range: '100+', purpose: 'Performance and demonstration tempo', bpm: [100, 110, 120] }
};

// VIDEO TYPE CLASSIFICATIONS
export const videoTypes = {
  counting: {
    description: 'Slow tempo with counting overlay for timing development',
    tempoRange: '40-50',
    tags: ['counting', 'beginner', 'timing']
  },
  breakdown: {
    description: 'Step-by-step instruction at various practice tempos',
    tempoRange: 'any',
    tags: ['breakdown', 'instruction']
  },
  performance: {
    description: 'Full performance demonstration at target tempo',
    tempoRange: '100+',
    tags: ['performance', 'demonstration']
  },
  duet: {
    description: 'Two parts performed together',
    tempoRange: '100+',
    tags: ['duet', 'ensemble']
  }
};

// METER CLASSIFICATIONS
export const meterTypes = {
  simple: ['2/4', '4/4', 'simple time signatures'],
  compound: ['6/8', '9/8', '12/8', 'compound time signatures'],
  mixed: ['mixed meters', 'changing time signatures']
};

// PART TYPE CLASSIFICATIONS
export const partTypes = {
  part1: 'First part of a two-part piece (often easier/introductory)',
  part2: 'Second part of a two-part piece (often more advanced)',
  standalone: 'Single-part piece',
  movement: 'Part of a multi-movement work (like Tetralogy)'
};

// TAGGING STANDARDS
export const taggingStandards = {
  pageReference: {
    format: 'p{number}',
    example: 'p34',
    description: 'Always include page reference for easy book lookup'
  },
  pieceName: {
    format: 'exact book title',
    example: 'solo #1', 'SIMP', 'UP & RUNNIN\'',
    description: 'Use exact piece name as written in book'
  },
  partDesignation: {
    format: 'part 1', 'part 2', etc.,
    description: 'Specify which part when applicable'
  },
  skillLevel: {
    beginner: ['counting versions', 'slow tempos', 'solos 1-3'],
    intermediate: ['medium tempos', 'solos 4-5', 'simpler named pieces'],
    advanced: ['performance tempos', 'solos 6-10', 'complex named pieces']
  },
  videoQuality: {
    counting: 'Include "counting" tag for versions with counting overlay',
    performance: 'Include "performance" tag for demonstration versions',
    breakdown: 'Default for instructional versions'
  }
};

// NAMING CONVENTIONS
export const namingConventions = {
  solos: {
    format: 'Solo #{number} Part {part} - {tempo} BPM{suffix}',
    examples: [
      'Solo #1 Part 1 - 50 BPM with Counting',
      'Solo #1 Part 1 - 100 BPM',
      'Solo #1 Part 1 and Part 2 - 100 BPM Duet'
    ]
  },
  namedPieces: {
    format: '{PIECE NAME} - {tempo} BPM{suffix}',
    examples: [
      'SIMP Part 1 - 60 BPM',
      'UP & RUNNIN\' - 100 BPM',
      'EASY DOES IT - 80 BPM Duet'
    ]
  }
};

// HELPER FUNCTIONS
export const bookHelpers = {
  // Get page number for a piece
  getPageNumber: (pieceName, partType = null) => {
    // Implementation would look up page numbers from bookSections
    // This is a reference for the video creation process
  },
  
  // Get appropriate rudiments for a piece
  getRudimentsForPiece: (pieceName) => {
    // This would be populated based on book analysis
    // For now, serves as a reference structure
  },
  
  // Validate video metadata
  validateVideoMetadata: (videoData) => {
    // Validation logic for ensuring consistency
    const required = ['id', 'title', 'youtubeId', 'category', 'tempo', 'pageNumber'];
    return required.every(field => videoData[field]);
  },
  
  // Generate consistent video ID
  generateVideoId: (pieceName, partType, tempo, videoType) => {
    const piece = pieceName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const part = partType ? `-${partType}` : '';
    const tempoStr = `-${tempo}`;
    const typeStr = videoType !== 'breakdown' ? `-${videoType}` : '';
    return `${piece}${part}${tempoStr}${typeStr}`;
  }
};

// QUALITY ASSURANCE CHECKLIST
export const qaChecklist = {
  videoData: [
    'YouTube ID extracted correctly',
    'Page number matches book',
    'Rudiments assigned accurately',
    'Tempo category matches BPM',
    'Tags follow naming standards',
    'Description is descriptive',
    'Category assignment correct'
  ],
  consistency: [
    'All videos for a piece follow same pattern',
    'Tempo progression is logical',
    'Part types are consistent',
    'Rudiment families are accurate'
  ],
  technical: [
    'No duplicate IDs',
    'All required fields present',
    'Builds without errors',
    'TypeScript types correct'
  ]
};

export default {
  bookSections,
  rudimentCatalog,
  tempoStandards,
  videoTypes,
  meterTypes,
  partTypes,
  taggingStandards,
  namingConventions,
  bookHelpers,
  qaChecklist
}; 