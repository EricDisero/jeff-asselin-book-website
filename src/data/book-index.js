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
    'UP & RUNNIN\'': { page: 46 },
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
    'RATA\'S & ROLL': { part1: 76, part2: 77 },
    'TETRALOGY': { part1: 78, part2: 79, part3: 80, part4: 81 },
    'SHAKE WELL': { page: 82 },
    'MOVIN\' OUT': { part1: 84, part2: 85 },
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

// COMPLETE RUDIMENT CATALOG PAGE MAPPING
// Based on the "Complete Rudiment Catalog" index (pages 106-109) in the book
export const rudimentPageMapping = {
  // ROLLS
  '5 Stroke Roll': [14, 16, 20, 22, 24, 26, 28, 30, 32],
  '6 Stroke Roll': [26, 32],
  '7 Stroke Roll': [20, 24, 26, 28],
  '9 Stroke Roll': [14, 16, 20, 22, 26, 28, 30, 32],
  '13 Stroke Roll': [16, 26],
  '17 Stroke Roll': [24, 28],

  // PARADIDDLES
  'Double Paradiddle': [14, 15, 16, 17, 18, 19, 20, 23, 32, 33], // 14–20, 23, 32–33
  'Paradiddle': [14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 32], // 14–19, 22–27, 32
  'Paradiddle-diddle': [15, 19, 21, 25],
  'Triple Paradiddle': [14, 16, 18, 19],

  // FLAMS
  'Flam': [20, 21, 23, 24, 25, 27, 28, 29, 30, 31],
  'Flam Accent': [21, 28, 29],
  'Flam Drag': [21],
  'Flam Paradiddle': [20, 21, 22, 24, 25, 27, 28, 29, 31, 33],
  'Flam Tap': [21, 24, 25, 27, 28, 29, 30],
  'Flamacue': [20, 22, 24, 25, 29],

  // DRAGS
  'Drag': [17, 23, 25, 28, 29, 30, 33],
  'Drag Paradiddle (Flam added)': [28], // Special notation from index
  'Drag Paradiddle #1': [23, 24], // 23–24
  'Drag Paradiddle #2': [24],
  'Single Drag': [21],
  'Single Drag Tap': [33],
  'Single Dragadiddle': [32],

  // RATAMACUES
  'Double Ratamacue': [24, 30],
  'Single Ratamacue': [24, 25, 30],

  // STROKES
  'Single Stroke 4': [18, 19, 20, 21, 23, 24, 25, 28, 29, 30],
  'Single Stroke 7': [18, 19, 21, 22, 24, 25],

  // ADVANCED/HYBRID
  'Swiss Army Triplet': [30, 31], // 30–31

  // SPECIAL TECHNIQUE (from index)
  'Lesson 25': [22, 24, 25, 28, 29]
};

// TEMPO RANGES (Pure BPM segmentation without assumptions)
export const tempoRanges = {
  slow: { range: '40-50', bpm: [40, 45, 50] },
  mediumSlow: { range: '60-70', bpm: [60, 65, 70] },
  mediumFast: { range: '80-90', bpm: [80, 85, 90] },
  fast: { range: '100+', bpm: [100, 110, 120] }
};

// VIDEO TYPE CLASSIFICATIONS - SIMPLIFIED SYSTEM
export const videoTypes = {
  'with-counting': {
    description: 'Slow tempo with counting overlay for timing development',
    tempoRange: '40-50',
    tags: ['with counting', 'timing']
  },
  'practice-tempo': {
    description: 'At slower practice tempo for skill building',
    tempoRange: 'any',
    tags: ['practice tempo']
  },
  'performance-tempo': {
    description: 'At target performance tempo (includes blueprint demos)',
    tempoRange: '100+',
    tags: ['performance tempo']
  }
};

// METER CLASSIFICATIONS REMOVED - These were just exercises at the beginning of the book

// PART TYPE CLASSIFICATIONS - SIMPLIFIED SYSTEM
export const partTypes = {
  'part-1': 'First part of a two-part piece',
  'part-2': 'Second part of a two-part piece',
  'standalone': 'Single-part piece',
  'duet': 'Videos with part 1 and part 2 in the same video'
};

// TAGGING STANDARDS
export const taggingStandards = {
  // CORE TAGGING RULES - Every video MUST have these categories
  mandatory: {
    pageReference: {
      rule: 'Every video MUST include page number from book',
      format: 'p{number}',
      examples: ['p14', 'p34', 'p67'],
      source: 'pageNumber field in video data'
    },
    pieceName: {
      rule: 'Exact piece name as written in book (lowercase for tags)',
      examples: ['solo #1', 'simp', 'waltz', 'tetralogy'],
      source: 'title field extraction'
    },
    partType: {
      rule: 'Structural designation of the video content',
      values: ['part 1', 'part 2', 'standalone', 'full', 'movement 1', 'movement 2', 'movement 3', 'movement 4'],
      notes: 'TETRALOGY uses movements, duets use parts, solos use parts, standalone pieces use standalone'
    },
    videoType: {
      rule: 'Instructional purpose of the video',
      values: ['counting', 'breakdown', 'performance', 'full-performance', 'demonstration'],
      alignment: {
        'counting': 'With Counting (UI)',
        'performance': 'Performance Tempo (UI)', 
        'full-performance': 'Duet (UI)',
        'demonstration': 'Blueprint official content'
      }
    },
    tempoRange: {
      rule: 'Tempo categorization matching UI filters exactly',
      values: ['40-50', '60-70', '80-90', '100+', 'demonstration'],
      source: 'Auto-generated from tempo field',
      mapping: {
        '40-50': 'Learning tempo with counting',
        '60-70': 'Practice tempo', 
        '80-90': 'Building tempo',
        '100+': 'Performance tempo',
        'demonstration': 'Blueprint overview videos'
      }
    },
    meterType: {
      rule: 'Time signature classification matching UI filters',
      values: ['simple', 'compound', 'waltz'],
      source: 'meter field in video data',
      mapping: {
        'simple': ['2/4', '4/4', 'simple time signatures'],
        'compound': ['6/8', '9/8', '12/8', 'compound time signatures'], 
        'waltz': ['3/4', 'waltz time signature']
      }
    },
    skillLevel: {
      rule: 'Educational level based on tempo + piece complexity',
      values: ['beginner', 'intermediate', 'advanced'],
      autoGeneration: {
        'beginner': 'Counting videos OR tempo <= 50 BPM OR solos 1-3',
        'intermediate': 'Tempo 60-80 BPM OR solos 4-5 OR moderate named pieces',
        'advanced': 'Tempo 90+ BPM OR solos 6-10 OR complex named pieces'
      }
    }
  },

  // RUDIMENT FAMILY TAGGING - Must align with UI filters and book content
  rudimentFamilies: {
    rule: 'Auto-generated from rudiments array using rudimentCatalog',
    values: ['rolls', 'paradiddles', 'flams', 'drags', 'ratamacues', 'strokes', 'advanced'],
    source: 'rudimentFamilies field + bookHelpers.getRudimentFamily()',
    uiAlignment: 'Must match "RUDIMENT FAMILY" section in UI exactly'
  },

  // SPECIFIC RUDIMENT TAGGING - Individual rudiments for precise filtering  
  specificRudiments: {
    rule: 'Include actual rudiment names for advanced filtering',
    source: 'rudiments array field',
    format: 'Exact names from rudimentPageMapping',
    examples: ['5 Stroke Roll', 'Paradiddle', 'Flam', 'Swiss Army Triplet'],
    uiAlignment: 'Must match "SPECIFIC RUDIMENT" section in UI'
  },

  // DUET DETECTION RULES - Comprehensive duet tagging system
  duetRules: {
    definition: 'Any piece with BOTH Part 1 AND Part 2 is a duet',
    exceptions: ['TETRALOGY has 4 movements, not duet parts'],
    autoTagging: {
      condition: 'partType === "full" OR type === "full-performance" OR title contains "Part 1 and Part 2"',
      requiredTag: 'duet',
      additionalTags: ['ensemble', 'complete']
    },
    soloRule: 'ALL Solos #1-10 are duets by definition',
    namedPieceRule: 'Named pieces with Part 1 + Part 2 structure are duets',
    tetralogy: 'TETRALOGY movements are NOT duets (separate movements, not duet parts)'
  },

  // BLUEPRINT CONTENT TAGGING
  blueprintContent: {
    rule: 'Official "Rudimental Blueprint" demonstration videos',
    requiredTags: ['blueprint', 'demonstration', 'overview'],
    identification: 'type === "demonstration" OR title contains "Blueprint"',
    purpose: 'Official book content overview and demonstration'
  },

  // BOOK SECTION ALIGNMENT
  bookSections: {
    'solos-1-5': {
      pages: '14-23',
      pieceNames: ['solo #1', 'solo #2', 'solo #3', 'solo #4', 'solo #5'],
      characteristics: ['all duets', 'foundational pieces', 'progressive difficulty']
    },
    'solos-6-10': {
      pages: '24-33', 
      pieceNames: ['solo #6', 'solo #7', 'solo #8', 'solo #9', 'solo #10'],
      characteristics: ['all duets', 'advanced pieces', 'performance level']
    },
    'named-pieces': {
      pages: '34-104',
      structure: 'Mix of standalone pieces and part 1/part 2 duets',
      specialCases: ['TETRALOGY has 4 movements', 'Various difficulty levels']
    }
  }
};

// COMPREHENSIVE TAG GENERATION RULES
export const tagGenerationRules = {
  // Mandatory tags that EVERY video must have
  generateMandatoryTags: (videoData) => {
    const { pageNumber, tempo, type, partType, meter, title } = videoData;
    const mandatoryTags = [];
    
    // 1. PAGE REFERENCE (always required)
    if (pageNumber) mandatoryTags.push(`p${pageNumber}`);
    
    // 2. PIECE NAME (extracted and standardized)
    const pieceName = extractPieceName(title).toLowerCase();
    if (pieceName) mandatoryTags.push(pieceName);
    
    // 3. PART TYPE (standardized)
    if (partType && partType !== 'standalone') {
      mandatoryTags.push(partType.replace('part', 'part '));
    } else if (partType === 'standalone') {
      mandatoryTags.push('standalone');
    }
    
    // 4. VIDEO TYPE (direct mapping)
    if (type) mandatoryTags.push(type);
    
    // 5. TEMPO RANGE (auto-generated)
    const tempoRange = generateTempoRange(tempo, type);
    if (tempoRange) mandatoryTags.push(tempoRange);
    
    // 6. METER TYPE (standardized)
    const meterType = standardizeMeter(meter);
    if (meterType) mandatoryTags.push(meterType);
    
    // 7. SKILL LEVEL (calculated)
    const skillLevel = calculateSkillLevel(tempo, type, pieceName);
    if (skillLevel) mandatoryTags.push(skillLevel);
    
    return mandatoryTags;
  },

  // Rudiment-based tags
  generateRudimentTags: (videoData) => {
    const { rudiments, rudimentFamilies } = videoData;
    const rudimentTags = [];
    
    // Add rudiment family tags
    if (rudimentFamilies) {
      rudimentTags.push(...rudimentFamilies);
    }
    
    // Add specific rudiment tags
    if (rudiments) {
      rudimentTags.push(...rudiments);
    }
    
    return rudimentTags;
  },

  // Special category tags
  generateSpecialTags: (videoData) => {
    const { type, title, partType } = videoData;
    const specialTags = [];
    
    // Blueprint content
    if (type === 'demonstration' || title.includes('Blueprint')) {
      specialTags.push('blueprint', 'overview');
    }
    
    // Duet detection
    const pieceName = extractPieceName(title);
    if (bookHelpers.isDuet(pieceName) && 
        (partType === 'full' || type === 'full-performance' || 
         title.toLowerCase().includes('part 1 and part 2'))) {
      specialTags.push('duet', 'ensemble', 'complete');
    }
    
    return specialTags;
  }
};

// VALIDATION RULES - Ensure all videos meet standards
export const validationRules = {
  requiredFields: ['pageNumber', 'tempo', 'type', 'partType', 'meter', 'rudiments', 'rudimentFamilies'],
  
  requiredTags: (videoData) => {
    const required = [];
    
    // Every video needs page reference
    required.push(`p${videoData.pageNumber}`);
    
    // Every video needs piece name
    const pieceName = extractPieceName(videoData.title);
    if (pieceName) required.push(pieceName.toLowerCase());
    
    // Every video needs tempo range
    const tempoRange = generateTempoRange(videoData.tempo, videoData.type);
    if (tempoRange) required.push(tempoRange);
    
    // Every video needs meter type
    const meterType = standardizeMeter(videoData.meter);
    if (meterType) required.push(meterType);
    
    return required;
  },
  
  validateVideo: (videoData) => {
    const errors = [];
    const warnings = [];
    
    // Check required fields
    validationRules.requiredFields.forEach(field => {
      if (!videoData[field]) {
        errors.push(`Missing required field: ${field}`);
      }
    });
    
    // Check required tags
    const requiredTags = validationRules.requiredTags(videoData);
    requiredTags.forEach(tag => {
      if (!videoData.tags.includes(tag)) {
        warnings.push(`Missing required tag: ${tag}`);
      }
    });
    
    // Check duet tagging
    const duetValidation = bookHelpers.validateDuetTagging(videoData);
    if (!duetValidation.isValid) {
      warnings.push(duetValidation.message);
    }
    
    return { errors, warnings, isValid: errors.length === 0 };
  }
};

// HELPER FUNCTIONS FOR TAG GENERATION
const generateTempoRange = (tempo, type) => {
  if (!tempo) return null;
  
  if (tempo <= 50) return '40-50';
  if (tempo <= 70) return '60-70'; 
  if (tempo <= 90) return '80-90';
  return '100+';
};

// Meter standardization removed - these were just exercises at the beginning of the book

// Skill level calculation removed - we only use the book's natural organization without artificial levels

const extractPieceName = (title) => {
  // Extract piece name from video title
  const match = title.match(/^([^-]+)/);
  return match ? match[1].trim() : null;
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

  // Get all rudiments that appear on a specific page
  getRudimentsOnPage: (pageNumber) => {
    const rudimentsOnPage = [];
    for (const [rudimentName, pages] of Object.entries(rudimentPageMapping)) {
      if (pages.includes(pageNumber)) {
        rudimentsOnPage.push(rudimentName);
      }
    }
    return rudimentsOnPage;
  },

  // Get all pages where a specific rudiment appears
  getPagesForRudiment: (rudimentName) => {
    return rudimentPageMapping[rudimentName] || [];
  },

  // Get rudiment family for a specific rudiment
  getRudimentFamily: (rudimentName) => {
    for (const [familyKey, familyData] of Object.entries(rudimentCatalog)) {
      if (familyData.rudiments && familyData.rudiments.includes(rudimentName)) {
        return familyData.family;
      }
    }
    return null;
  },

  // Search rudiments by partial name
  searchRudiments: (searchTerm) => {
    const searchLower = searchTerm.toLowerCase();
    return Object.keys(rudimentPageMapping).filter(rudiment => 
      rudiment.toLowerCase().includes(searchLower)
    );
  },

  // Check if a piece should be considered a duet
  isDuet: (pieceName) => {
    // Special case: TETRALOGY has 4 movements, not duet parts
    if (pieceName.toUpperCase().includes('TETRALOGY')) {
      return false;
    }
    
    // Check if piece has both Part 1 and Part 2 in bookSections
    const pieceData = bookSections.namedPieces[pieceName] || 
                     bookSections.solos1to5[pieceName.toLowerCase().replace(/#\s*/g, '').replace(/\s+/g, '')] ||
                     bookSections.solos6to10[pieceName.toLowerCase().replace(/#\s*/g, '').replace(/\s+/g, '')];
    
    if (pieceData) {
      return (pieceData.part1 !== undefined && pieceData.part2 !== undefined);
    }
    
    // Fallback: check if name contains both "part 1" and "part 2" logic
    // All solos #1-10 are duets by definition
    if (pieceName.toLowerCase().includes('solo #')) {
      return true;
    }
    
    return false;
  },

  // Get all pieces that are duets
  getAllDuets: () => {
    const duets = [];
    
    // All solos are duets
    for (let i = 1; i <= 10; i++) {
      duets.push(`Solo #${i}`);
    }
    
    // Check named pieces (exclude TETRALOGY)
    Object.entries(bookSections.namedPieces).forEach(([pieceName, pieceData]) => {
      if (pieceName.toUpperCase() !== 'TETRALOGY' && 
          pieceData.part1 !== undefined && 
          pieceData.part2 !== undefined) {
        duets.push(pieceName);
      }
    });
    
    return duets;
  },

  // Validate duet tagging for a video
  validateDuetTagging: (videoData) => {
    const { title, tags, type, partType } = videoData;
    const pieceName = title.split(' - ')[0].replace(/Part \d+.*/, '').trim();
    
    // If this is a full performance (both parts), it should have duet tags
    if (partType === 'full' || type === 'full-performance' || 
        title.toLowerCase().includes('part 1 and part 2')) {
      
      if (bookHelpers.isDuet(pieceName)) {
        const shouldHaveDuetTag = tags.includes('duet') || tags.includes('full-performance');
        return {
          isValid: shouldHaveDuetTag,
          message: shouldHaveDuetTag ? 'Correctly tagged as duet' : 'Missing duet tag for multi-part performance'
        };
      }
    }
    
    return { isValid: true, message: 'Duet tagging validation passed' };
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
    'Category assignment correct',
    'Duet tagging correct for multi-part performances'
  ],
  consistency: [
    'All videos for a piece follow same pattern',
    'Tempo progression is logical',
    'Part types are consistent',
    'Rudiment families are accurate',
    'Duet pieces have proper duet videos at performance tempo'
  ],
  duetValidation: [
    'Any piece with Part 1 AND Part 2 is tagged as duet (except TETRALOGY)',
    'All Solos #1-10 are duets by definition',
    'TETRALOGY has 4 separate movements, not duet parts',
    'Full performances (Part 1 and Part 2 together) include "duet" tag',
    'Individual parts are not tagged as duets'
  ],
  technical: [
    'No duplicate IDs',
    'All required fields present',
    'Builds without errors',
    'TypeScript types correct',
    'Duet helper functions work correctly'
  ]
};

// ENHANCED VIDEO TAGGING SYSTEM
export const enhancedTagging = {
  // Automatic tag generation based on video metadata
  generateStandardTags: (videoData) => {
    const { pageNumber, tempo, type, partType, rudiments, title } = videoData;
    const standardTags = [];
    
    // 1. PAGE REFERENCE (always include)
    if (pageNumber) {
      standardTags.push(`p${pageNumber}`);
    }
    
    // 2. PIECE NAME (extracted from title)
    const pieceName = extractPieceName(title);
    if (pieceName) {
      standardTags.push(pieceName.toLowerCase());
    }
    
    // 3. PART DESIGNATION
    if (partType && partType !== 'standalone') {
      standardTags.push(partType.replace('part', 'part '));
    }
    
    // 4. VIDEO TYPE SPECIFIC TAGS
    if (videoTypes[type] && videoTypes[type].tags) {
      standardTags.push(...videoTypes[type].tags);
    }
    
    // 5. TEMPO-BASED SKILL LEVEL REMOVED - We only use book's natural organization
    
    // 6. RUDIMENT FAMILY TAGS (for advanced filtering)
    if (rudiments && rudiments.length > 0) {
      const families = rudiments.map(r => bookHelpers.getRudimentFamily(r)).filter(Boolean);
      const uniqueFamilies = [...new Set(families)];
      standardTags.push(...uniqueFamilies);
    }
    
    // 7. DUET DETECTION
    const isDuetPiece = bookHelpers.isDuet(pieceName);
    if (isDuetPiece && (partType === 'full' || type === 'full-performance' || 
        title.toLowerCase().includes('part 1 and part 2'))) {
      standardTags.push('duet');
    }
    
    // 8. BLUEPRINT OFFICIAL CONTENT
    if (type === 'demonstration' || title.includes('Blueprint')) {
      standardTags.push('blueprint');
    }
    
    return [...new Set(standardTags)]; // Remove duplicates
  },
  
  // Enhanced validation against book-index standards
  validateVideoTags: (videoData) => {
    const { tags, pageNumber, rudiments, type, partType, title } = videoData;
    const validation = {
      isValid: true,
      warnings: [],
      suggestions: []
    };
    
    // Check for required page reference
    const hasPageRef = tags.some(tag => tag.startsWith('p') && /p\d+/.test(tag));
    if (!hasPageRef && pageNumber) {
      validation.warnings.push(`Missing page reference tag 'p${pageNumber}'`);
    }
    
    // Check duet tagging
    const duetValidation = bookHelpers.validateDuetTagging(videoData);
    if (!duetValidation.isValid) {
      validation.warnings.push(duetValidation.message);
    }
    
    // Check rudiment alignment with page
    if (pageNumber && rudiments) {
      const pageRudiments = bookHelpers.getRudimentsOnPage(pageNumber);
      const missingRudiments = rudiments.filter(r => !pageRudiments.includes(r));
      if (missingRudiments.length > 0) {
        validation.suggestions.push(`Rudiments not found on page ${pageNumber}: ${missingRudiments.join(', ')}`);
      }
    }
    
    // Check for missing blueprint tags
    if (type === 'demonstration' && !tags.includes('blueprint')) {
      validation.warnings.push('Demonstration videos should include "blueprint" tag');
    }
    
    // Suggest auto-generated tags
    const autoTags = enhancedTagging.generateStandardTags(videoData);
    const missingTags = autoTags.filter(tag => !tags.includes(tag));
    if (missingTags.length > 0) {
      validation.suggestions.push(`Consider adding auto-generated tags: ${missingTags.join(', ')}`);
    }
    
    validation.isValid = validation.warnings.length === 0;
    return validation;
  },
  
  // Batch update video tags based on standards
  updateVideoTags: (videoData, options = {}) => {
    const { keepExisting = true, addMissing = true, fixDuets = true } = options;
    let updatedTags = keepExisting ? [...videoData.tags] : [];
    
    if (addMissing) {
      const autoTags = enhancedTagging.generateStandardTags(videoData);
      autoTags.forEach(tag => {
        if (!updatedTags.includes(tag)) {
          updatedTags.push(tag);
        }
      });
    }
    
    if (fixDuets) {
      const duetValidation = bookHelpers.validateDuetTagging(videoData);
      if (!duetValidation.isValid && videoData.partType === 'full') {
        updatedTags.push('duet');
      }
    }
    
    return {
      ...videoData,
      tags: [...new Set(updatedTags)].sort()
    };
  }
};

// HELPER FUNCTIONS FOR TAGGING
// extractPieceName function already defined above at line 571

// Skill level function removed - we only use the book's natural organization without artificial levels

// TAGGING MIGRATION TOOLS
export const taggingMigration = {
  // Analyze current tagging across all video files
  analyzeTaggingConsistency: (allVideos) => {
    const analysis = {
      totalVideos: allVideos.length,
      missingPageRefs: 0,
      missingDuetTags: 0,
      missingBlueprintTags: 0,
      rudimentMismatches: 0,
      suggestions: []
    };
    
    allVideos.forEach(video => {
      const validation = enhancedTagging.validateVideoTags(video);
      if (!validation.isValid) {
        analysis.suggestions.push({
          id: video.id,
          issues: validation.warnings,
          suggestions: validation.suggestions
        });
      }
    });
    
    return analysis;
  },
  
  // Generate migration script for updating all video files
  generateMigrationPlan: (allVideos) => {
    const plan = {
      videosToUpdate: [],
      estimatedChanges: 0,
      summary: {}
    };
    
    allVideos.forEach(video => {
      const updated = enhancedTagging.updateVideoTags(video);
      if (JSON.stringify(updated.tags) !== JSON.stringify(video.tags)) {
        plan.videosToUpdate.push({
          id: video.id,
          currentTags: video.tags,
          updatedTags: updated.tags,
          changes: updated.tags.filter(tag => !video.tags.includes(tag))
        });
        plan.estimatedChanges++;
      }
    });
    
    return plan;
  }
};

export default {
  bookSections,
  rudimentCatalog,
  rudimentPageMapping,
  tempoRanges,
  videoTypes,
  partTypes,
  taggingStandards,
  tagGenerationRules,
  qaChecklist,
  enhancedTagging,
  taggingMigration
}; 