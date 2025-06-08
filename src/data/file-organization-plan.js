// FILE ORGANIZATION PLAN FOR JEFF ASSELIN DRUM BOOK SITE
// This file serves as the master reference for organizing all video data files
// to prevent duplication and ensure consistent structure

export const fileOrganizationPlan = {
  // EXISTING FILES TO KEEP (already well-organized)
  existingFiles: {
    'solos-1-5.js': {
      description: 'Solo #1 through Solo #5 (pages 14-23)',
      songs: [
        'Solo #1 Part 1', 'Solo #1 Part 2',
        'Solo #2 Part 1', 'Solo #2 Part 2', 
        'Solo #3 Part 1', 'Solo #3 Part 2',
        'Solo #4 Part 1', 'Solo #4 Part 2',
        'Solo #5 Part 1', 'Solo #5 Part 2'
      ],
      pageRange: '14-23',
      status: 'KEEP - Well organized'
    },
    'solos-6-10.js': {
      description: 'Solo #6 through Solo #10 (pages 24-33)',
      songs: [
        'Solo #6 Part 1', 'Solo #6 Part 2',
        'Solo #7 Part 1', 'Solo #7 Part 2',
        'Solo #8 Part 1', 'Solo #8 Part 2', 
        'Solo #9 Part 1', 'Solo #9 Part 2',
        'Solo #10 Part 1', 'Solo #10 Part 2'
      ],
      pageRange: '24-33',
      status: 'KEEP - Well organized'
    }
  },

  // NEW REORGANIZED FILES (8 evenly-distributed files for easier management)
  newFiles: {
    'named-pieces-1.js': {
      description: 'Named pieces (pages 34-44)',
      songs: [
        'SIMP Part 1', 'SIMP Part 2',           // p34-35
        'SHOUT! Part 1', 'SHOUT! Part 2',       // p36-37
        'BOINK Part 1', 'BOINK Part 2',         // p38, 40
        'STAGGER Part 1', 'STAGGER Part 2',     // p39, 41
        'TRIX Part 1', 'TRIX Part 2'            // p42-43
      ],
      pageRange: '34-44',
      songCount: 10
    },

    'named-pieces-2.js': {
      description: 'Named pieces (pages 44-53)',
      songs: [
        'TWIST Part 1', 'TWIST Part 2',         // p44-45
        'UP & RUNNIN\'',                        // p46
        'SLASH & RUN',                          // p46
        'SUNDAY STRUT',                         // p47
        'A MINOR DOWNFALL',                     // p47
        'WALK ON',                              // p48
        'SCOOTER Part 1', 'SCOOTER Part 2',     // p48-49
        'READY SET'                             // p49
      ],
      pageRange: '44-53',
      songCount: 9
    },

    'named-pieces-3.js': {
      description: 'Named pieces (pages 50-61)',
      songs: [
        'EASY',                                 // p50
        'ROLL AROUND',                          // p51
        'BOTHE Part 1', 'BOTHE Part 2',         // p52, 54
        'THREE FOR ALL',                        // p53
        'ROLL AROUND 2',                        // p55
        'EASY DOES IT',                         // p56 (duet)
        'ROLL AROUND 3',                        // p57
        'LATER'                                 // p58
      ],
      pageRange: '50-61',
      songCount: 9
    },

    'named-pieces-4.js': {
      description: 'Named pieces (pages 60-69)',
      songs: [
        'TURN-A-ROUND',                         // p60
        'SPIRAL',                               // p61
        'WALTZ',                                // p61
        'RHODA Part 1', 'RHODA Part 2',         // p62-63
        '3 TO GO Part 1', '3 TO GO Part 2',     // p64-65
        'TWINKY Part 1', 'TWINKY Part 2'        // p66-67
      ],
      pageRange: '60-69',
      songCount: 9
    },

    'named-pieces-5.js': {
      description: 'Named pieces (pages 68-77)',
      songs: [
        'AWK Part 1', 'AWK Part 2',             // p68, 70
        'PARADIDDLE TRIPLETS',                  // p69
        'NEEDLE NOSE',                          // p71
        'ANGEL',                                // p72
        'RAMBLE Part 1', 'RAMBLE Part 2',       // p74-75
        '12 TO GO Part 1', '12 TO GO Part 2',   // p74-75
        'RATA\'S & ROLL Part 1'                 // p76-77
      ],
      pageRange: '68-77',
      songCount: 9
    },

    'named-pieces-6.js': {
      description: 'Named pieces (pages 76-89)',
      songs: [
        'RATA\'S & ROLL Part 2',                // p76-77
        'TETRALOGY Part 1', 'TETRALOGY Part 2', 'TETRALOGY Part 3', 'TETRALOGY Part 4', // p78-81
        'SHAKE WELL',                           // p82
        'MOVIN\' OUT Part 1', 'MOVIN\' OUT Part 2', // p84-85
        'GARY GARY Part 1', 'GARY GARY Part 2'  // p86-87
      ],
      pageRange: '76-89',
      songCount: 9
    },

    'named-pieces-7.js': {
      description: 'Named pieces (pages 88-97)',
      songs: [
        'TWO DAY',                              // p88
        'OKAY',                                 // p89
        'HERE & THERE',                         // p90
        'ERASER',                               // p91
        'OLAY Part 1', 'OLAY Part 2',           // p92-93
        'UPSIDE Part 1', 'UPSIDE Part 2',       // p94-95
        'BUMBLES Part 1', 'BUMBLES Part 2'      // p96-97
      ],
      pageRange: '88-97',
      songCount: 9
    },

    'named-pieces-8.js': {
      description: 'Named pieces (pages 98-104)',
      songs: [
        'STRAIGHT UP Part 1', 'STRAIGHT UP Part 2', // p98-99
        'A LITTLE STAGGER Part 1', 'A LITTLE STAGGER Part 2', // p100-101
        'A LITTLE MAD',                             // p102
        'RHONDA',                                   // p103
        'BALANCE POINT'                             // p104
      ],
      pageRange: '98-104',
      songCount: 7
    }
  },

  // FILES TO DELETE (contain duplicates and poor organization)
  filesToDelete: [
    'named-pieces.js',
    // Current numbered files will be replaced with new page-based structure
    // Keep numbered naming but reorganize by pages, not skill level
  ],

  // SUMMARY STATISTICS
  summary: {
    totalSongs: {
      solos: 20, // 10 solos × 2 parts each
      namedPieces: 73, // Total individual named pieces/parts (updated count)
      total: 93
    },
    totalFiles: {
      current: 11, // Current state (2 solos + 9 named pieces)
      planned: 10, // Clean state (2 solos + 8 named pieces)
      organization: 'Page-based, not skill-based'
    },
    pageDistribution: {
      'solos-1-5.js': 'Pages 14-23',
      'solos-6-10.js': 'Pages 24-33', 
      'named-pieces-1.js': 'Pages 34-42',
      'named-pieces-2.js': 'Pages 43-51',
      'named-pieces-3.js': 'Pages 52-61', 
      'named-pieces-4.js': 'Pages 62-72',
      'named-pieces-5.js': 'Pages 74-82',
      'named-pieces-6.js': 'Pages 84-91',
      'named-pieces-7.js': 'Pages 92-99',
      'named-pieces-8.js': 'Pages 100-104'
    }
  }
};

// VALIDATION RULES
export const validationRules = {
  noPageOverlaps: 'Each page should only appear in one file',
  noSongDuplicates: 'Each song should only appear in one file',
  sequentialPages: 'Files should cover sequential page ranges with minimal gaps',
  reasonableFileSize: 'Files should be 5-12 songs for easier one-file-at-a-time handling',
  pageBasedOrganization: 'Organization by page number, not artificial skill levels',
  consistentNaming: 'Use numbered files (named-pieces-1.js through named-pieces-8.js)',
  tempoNeutral: 'No tempo assumptions - just organize by book structure'
};

export default fileOrganizationPlan; 