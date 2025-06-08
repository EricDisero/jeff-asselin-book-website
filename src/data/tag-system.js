// 🏷️ CENTRALIZED TAG SYSTEM
// Single source of truth for ALL tags and UI filters
// Edit tags here - UI updates automatically

// BOOK SECTIONS - Maps to "BOOK SECTION" in UI
export const bookSectionTags = {
  'all-videos': { 
    id: 'all-videos',
    name: 'All Videos', 
    uiLabel: 'All Videos',
    count: 0 
  },
  'solos-1-5': { 
    id: 'solos-1-5',
    name: 'Solos #1-#5', 
    uiLabel: 'Solos #1-#5',
    pages: '14-23',
    count: 0 
  },
  'solos-6-10': { 
    id: 'solos-6-10',
    name: 'Solos #6-#10', 
    uiLabel: 'Solos #6-#10',
    pages: '24-33',
    count: 0 
  },
  'named-pieces': { 
    id: 'named-pieces',
    name: 'Named Pieces', 
    uiLabel: 'Named Pieces',
    pages: '34-104',
    count: 0 
  }
};

// METER TAGS REMOVED - These were just exercises at the beginning of the book

// PART TYPES - Maps to "PART TYPE" in UI
export const partTypeTags = {
  'part-1': {
    id: 'part-1',
    name: 'Part 1',
    uiLabel: 'Part 1',
    tagValue: 'part 1',
    description: 'First part of multi-part pieces'
  },
  'part-2': {
    id: 'part-2', 
    name: 'Part 2',
    uiLabel: 'Part 2',
    tagValue: 'part 2',
    description: 'Second part of multi-part pieces'
  },
  'standalone': {
    id: 'standalone',
    name: 'Standalone',
    uiLabel: 'Standalone', 
    tagValue: 'standalone',
    description: 'Single-part pieces'
  },
  'duet': {
    id: 'duet',
    name: 'Duet',
    uiLabel: 'Duet',
    tagValue: 'duet',
    description: 'Videos with part 1 and part 2 in the same video'
  }
};

// VIDEO TYPES - Maps to "VIDEO TYPE" in UI
export const videoTypeTags = {
  'with-counting': {
    id: 'with-counting',
    name: 'With Counting',
    uiLabel: 'With Counting',
    tagValue: 'with counting',
    description: 'Slow tempo with counting overlay'
  },
  'practice-tempo': {
    id: 'practice-tempo',
    name: 'Practice Tempo',
    uiLabel: 'Practice Tempo',
    tagValue: 'practice tempo',
    description: 'At slower practice tempo'
  },
  'performance-tempo': {
    id: 'performance-tempo',
    name: 'Performance Tempo', 
    uiLabel: 'Performance Tempo',
    tagValue: 'performance tempo',
    description: 'At target performance tempo (includes blueprint demos)'
  }
};

// TEMPO RANGES - Maps to "TEMPO RANGE" in UI
// Pure tempo segmentation without arbitrary performance assumptions
export const tempoRangeTags = {
  '40-50': {
    id: '40-50',
    name: '40-50 BPM',
    uiLabel: '40-50 BPM',
    tagValue: '40-50',
    bpmRange: [40, 50],
    description: 'Slowest tempo range'
  },
  '60-70': {
    id: '60-70', 
    name: '60-70 BPM',
    uiLabel: '60-70 BPM',
    tagValue: '60-70',
    bpmRange: [60, 70],
    description: 'Medium-slow tempo range'
  },
  '80-90': {
    id: '80-90',
    name: '80-90 BPM', 
    uiLabel: '80-90 BPM',
    tagValue: '80-90',
    bpmRange: [80, 90],
    description: 'Medium-fast tempo range'
  },
  '100+': {
    id: '100+',
    name: '100+ BPM',
    uiLabel: '100+ BPM', 
    tagValue: '100+',
    bpmRange: [100, null],
    description: 'Fastest tempo range'
  }
};

// RUDIMENT FAMILIES - Maps to "RUDIMENT FAMILY" in UI
export const rudimentFamilyTags = {
  'rolls': {
    id: 'rolls',
    name: 'Rolls',
    uiLabel: 'Rolls',
    tagValue: 'rolls',
    description: 'Roll family rudiments',
    rudiments: ['5 Stroke Roll', '6 Stroke Roll', '7 Stroke Roll', '9 Stroke Roll', '10 Stroke Roll', '11 Stroke Roll', '13 Stroke Roll', '15 Stroke Roll', '17 Stroke Roll', 'Double Stroke Open Roll', 'Multiple Bounce Roll']
  },
  'paradiddles': {
    id: 'paradiddles',
    name: 'Paradiddles',
    uiLabel: 'Paradiddles', 
    tagValue: 'paradiddles',
    description: 'Paradiddle family rudiments',
    rudiments: ['Paradiddle', 'Paradiddle-diddle', 'Double Paradiddle', 'Triple Paradiddle', 'Single Paradiddle']
  },
  'flams': {
    id: 'flams',
    name: 'Flams',
    uiLabel: 'Flams',
    tagValue: 'flams', 
    description: 'Flam family rudiments',
    rudiments: ['Flam', 'Flam Accent', 'Flam Drag', 'Flam Paradiddle', 'Flam Paradiddle-diddle', 'Flam Tap', 'Flamacue', 'Inverted Flamacue']
  },
  'drags': {
    id: 'drags',
    name: 'Drags',
    uiLabel: 'Drags',
    tagValue: 'drags',
    description: 'Drag family rudiments', 
    rudiments: ['Drag', 'Drag Paradiddle #1', 'Drag Paradiddle #2', 'Single Drag', 'Single Drag Tap', 'Single Dragadiddle', 'Double Drag Tap', 'Lesson 25']
  },
  'ratamacues': {
    id: 'ratamacues',
    name: 'Ratamacues',
    uiLabel: 'Ratamacues',
    tagValue: 'ratamacues',
    description: 'Ratamacue family rudiments',
    rudiments: ['Single Ratamacue', 'Double Ratamacue', 'Triple Ratamacue']
  },
  'strokes': {
    id: 'strokes',
    name: 'Strokes', 
    uiLabel: 'Strokes',
    tagValue: 'strokes',
    description: 'Single stroke family rudiments',
    rudiments: ['Single Stroke 4', 'Single Stroke 7', 'Single Stroke Roll', 'Multiple Stroke Roll']
  },
  // Note: The book index doesn't actually have an "advanced" family
  // Swiss Army Triplet and other complex techniques are just listed individually
  // We should classify them properly or remove artificial groupings
};

// SPECIFIC RUDIMENTS - Maps to "SPECIFIC RUDIMENT" in UI
// Based on actual book index entries - only include rudiments that are actually indexed
export const specificRudimentTags = {
  // ROLLS (from book index)
  '5-stroke-roll': {
    id: '5-stroke-roll',
    name: '5 Stroke Roll',
    uiLabel: '5 Stroke Roll',
    tagValue: '5 Stroke Roll',
    family: 'rolls',
    pages: [14, 16, 20, 22, 24, 26, 28, 30, 32]
  },
  '6-stroke-roll': {
    id: '6-stroke-roll',
    name: '6 Stroke Roll',
    uiLabel: '6 Stroke Roll',
    tagValue: '6 Stroke Roll',
    family: 'rolls',
    pages: [26, 32]
  },
  '7-stroke-roll': {
    id: '7-stroke-roll',
    name: '7 Stroke Roll',
    uiLabel: '7 Stroke Roll',
    tagValue: '7 Stroke Roll',
    family: 'rolls',
    pages: [20, 24, 26, 28]
  },
  '9-stroke-roll': {
    id: '9-stroke-roll', 
    name: '9 Stroke Roll',
    uiLabel: '9 Stroke Roll',
    tagValue: '9 Stroke Roll',
    family: 'rolls',
    pages: [14, 16, 20, 22, 26, 28, 30, 32]
  },
  '13-stroke-roll': {
    id: '13-stroke-roll',
    name: '13 Stroke Roll',
    uiLabel: '13 Stroke Roll',
    tagValue: '13 Stroke Roll',
    family: 'rolls',
    pages: [16, 26]
  },
  '17-stroke-roll': {
    id: '17-stroke-roll',
    name: '17 Stroke Roll',
    uiLabel: '17 Stroke Roll',
    tagValue: '17 Stroke Roll',
    family: 'rolls',
    pages: [24, 28]
  },

  // PARADIDDLES (from book index)
  'paradiddle': {
    id: 'paradiddle',
    name: 'Paradiddle', 
    uiLabel: 'Paradiddle',
    tagValue: 'Paradiddle',
    family: 'paradiddles',
    pages: [14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 32]
  },
  'double-paradiddle': {
    id: 'double-paradiddle',
    name: 'Double Paradiddle',
    uiLabel: 'Double Paradiddle', 
    tagValue: 'Double Paradiddle',
    family: 'paradiddles',
    pages: [14, 15, 16, 17, 18, 19, 20, 23, 32, 33]
  },
  'paradiddle-diddle': {
    id: 'paradiddle-diddle',
    name: 'Paradiddle-diddle',
    uiLabel: 'Paradiddle-diddle',
    tagValue: 'Paradiddle-diddle',
    family: 'paradiddles',
    pages: [15, 19, 21, 25]
  },
  'triple-paradiddle': {
    id: 'triple-paradiddle',
    name: 'Triple Paradiddle',
    uiLabel: 'Triple Paradiddle',
    tagValue: 'Triple Paradiddle',
    family: 'paradiddles',
    pages: [14, 16, 18, 19]
  },

  // FLAMS (from book index)
  'flam': {
    id: 'flam',
    name: 'Flam',
    uiLabel: 'Flam',
    tagValue: 'Flam',
    family: 'flams',
    pages: [20, 21, 23, 24, 25, 27, 28, 29, 30, 31]
  },
  'flam-accent': {
    id: 'flam-accent',
    name: 'Flam Accent',
    uiLabel: 'Flam Accent',
    tagValue: 'Flam Accent',
    family: 'flams',
    pages: [21, 28, 29]
  },
  'flam-drag': {
    id: 'flam-drag',
    name: 'Flam Drag',
    uiLabel: 'Flam Drag',
    tagValue: 'Flam Drag',
    family: 'flams',
    pages: [21]
  },
  'flam-paradiddle': {
    id: 'flam-paradiddle',
    name: 'Flam Paradiddle',
    uiLabel: 'Flam Paradiddle',
    tagValue: 'Flam Paradiddle', 
    family: 'flams',
    pages: [20, 21, 22, 24, 25, 27, 28, 29, 31, 33]
  },
  'flam-tap': {
    id: 'flam-tap',
    name: 'Flam Tap',
    uiLabel: 'Flam Tap',
    tagValue: 'Flam Tap',
    family: 'flams',
    pages: [21, 24, 25, 27, 28, 29, 30]
  },
  'flamacue': {
    id: 'flamacue',
    name: 'Flamacue',
    uiLabel: 'Flamacue',
    tagValue: 'Flamacue',
    family: 'flams',
    pages: [20, 22, 24, 25, 29]
  },

  // DRAGS (from book index)
  'drag': {
    id: 'drag',
    name: 'Drag',
    uiLabel: 'Drag',
    tagValue: 'Drag',
    family: 'drags',
    pages: [17, 23, 25, 28, 29, 30, 33]
  },
  'drag-paradiddle-1': {
    id: 'drag-paradiddle-1',
    name: 'Drag Paradiddle #1',
    uiLabel: 'Drag Paradiddle #1',
    tagValue: 'Drag Paradiddle #1',
    family: 'drags',
    pages: [23, 24]
  },
  'drag-paradiddle-2': {
    id: 'drag-paradiddle-2',
    name: 'Drag Paradiddle #2',
    uiLabel: 'Drag Paradiddle #2',
    tagValue: 'Drag Paradiddle #2',
    family: 'drags',
    pages: [24]
  },
  'single-drag': {
    id: 'single-drag',
    name: 'Single Drag',
    uiLabel: 'Single Drag',
    tagValue: 'Single Drag',
    family: 'drags',
    pages: [21]
  },
  'single-drag-tap': {
    id: 'single-drag-tap',
    name: 'Single Drag Tap',
    uiLabel: 'Single Drag Tap',
    tagValue: 'Single Drag Tap',
    family: 'drags',
    pages: [33]
  },
  'single-dragadiddle': {
    id: 'single-dragadiddle',
    name: 'Single Dragadiddle',
    uiLabel: 'Single Dragadiddle',
    tagValue: 'Single Dragadiddle',
    family: 'drags',
    pages: [32]
  },

  // RATAMACUES (from book index)
  'single-ratamacue': {
    id: 'single-ratamacue',
    name: 'Single Ratamacue',
    uiLabel: 'Single Ratamacue',
    tagValue: 'Single Ratamacue',
    family: 'ratamacues',
    pages: [24, 25, 30]
  },
  'double-ratamacue': {
    id: 'double-ratamacue',
    name: 'Double Ratamacue',
    uiLabel: 'Double Ratamacue',
    tagValue: 'Double Ratamacue',
    family: 'ratamacues',
    pages: [24, 30]
  },

  // STROKES (from book index)
  'single-stroke-4': {
    id: 'single-stroke-4',
    name: 'Single Stroke 4',
    uiLabel: 'Single Stroke 4',
    tagValue: 'Single Stroke 4',
    family: 'strokes',
    pages: [18, 19, 20, 21, 23, 24, 25, 28, 29, 30]
  },
  'single-stroke-7': {
    id: 'single-stroke-7',
    name: 'Single Stroke 7',
    uiLabel: 'Single Stroke 7',
    tagValue: 'Single Stroke 7',
    family: 'strokes',
    pages: [18, 19, 21, 22, 24, 25]
  },

  // SPECIAL TECHNIQUES (from book index)
  'swiss-army-triplet': {
    id: 'swiss-army-triplet',
    name: 'Swiss Army Triplet',
    uiLabel: 'Swiss Army Triplet',
    tagValue: 'Swiss Army Triplet',
    family: 'strokes', // Actually appears to be a stroke technique, not separate family
    pages: [30, 31]
  },
  'lesson-25': {
    id: 'lesson-25',
    name: 'Lesson 25',
    uiLabel: 'Lesson 25',
    tagValue: 'Lesson 25',
    family: 'drags', // Based on book context, this seems drag-related
    pages: [22, 24, 25, 28, 29]
  }
};

// No artificial skill levels - let the book's tempo organization speak for itself

// Special tags removed - these are unnecessary

// CENTRALIZED TAG COLLECTIONS FOR UI GENERATION
export const tagCollections = {
  bookSections: bookSectionTags,
  partTypes: partTypeTags,
  videoTypes: videoTypeTags,
  tempoRanges: tempoRangeTags,
  rudimentFamilies: rudimentFamilyTags,
  specificRudiments: specificRudimentTags
};

// UI FILTER SECTIONS - Defines what appears in the UI and in what order
export const uiFilterSections = [
  {
    id: 'book-section',
    title: 'BOOK SECTION',
    tagCollection: 'bookSections',
    filterType: 'category'
  },
  {
    id: 'part-type',
    title: 'PART TYPE',
    tagCollection: 'partTypes', 
    filterType: 'partType'
  },
  {
    id: 'video-type',
    title: 'VIDEO TYPE',
    tagCollection: 'videoTypes',
    filterType: 'type'
  },
  {
    id: 'tempo-range',
    title: 'TEMPO RANGE',
    tagCollection: 'tempoRanges',
    filterType: 'tempo'
  },
  {
    id: 'rudiment-family', 
    title: 'RUDIMENT FAMILY',
    tagCollection: 'rudimentFamilies',
    filterType: 'rudimentFamily'
  },
  {
    id: 'specific-rudiment',
    title: 'SPECIFIC RUDIMENT',
    tagCollection: 'specificRudiments', 
    filterType: 'rudiment'
  }
];

// HELPER FUNCTIONS FOR TAG MANAGEMENT
export const tagHelpers = {
  // Get all tags for a specific collection
  getTagCollection: (collectionName) => {
    return tagCollections[collectionName] || {};
  },

  // Get UI labels for a collection (for generating filter buttons)
  getUILabels: (collectionName) => {
    const collection = tagCollections[collectionName] || {};
    return Object.values(collection).map(tag => ({
      id: tag.id,
      label: tag.uiLabel,
      value: tag.tagValue || tag.id
    }));
  },

  // Get all possible tag values for validation
  getAllTagValues: () => {
    const allValues = [];
    Object.values(tagCollections).forEach(collection => {
      Object.values(collection).forEach(tag => {
        if (tag.tagValue) allValues.push(tag.tagValue);
      });
    });
    return allValues;
  },

  // Find tag info by value
  findTagByValue: (tagValue) => {
    for (const collection of Object.values(tagCollections)) {
      for (const tag of Object.values(collection)) {
        if (tag.tagValue === tagValue || tag.id === tagValue) {
          return tag;
        }
      }
    }
    return null;
  },

  // Generate tempo range tag from BPM
  getTempoRangeTag: (bpm) => {
    if (!bpm) return null;
    if (bpm <= 50) return tempoRangeTags['40-50'].tagValue;
    if (bpm <= 70) return tempoRangeTags['60-70'].tagValue;
    if (bpm <= 90) return tempoRangeTags['80-90'].tagValue;
    return tempoRangeTags['100+'].tagValue;
  },



  // Simple tempo-based organization (following the book's structure)
  // No artificial skill levels - tempo ranges are the natural progression
};

export default {
  ...tagCollections,
  uiFilterSections,
  tagHelpers
}; 