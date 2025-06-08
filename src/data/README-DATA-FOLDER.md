# DATA FOLDER STRUCTURE & INSTRUCTIONS
## Jeff Asselin Drum Book Site - Video Data Organization

This document explains the complete data folder structure and how all the files work together to organize the video content for the Jeff Asselin Drum Book Site.

---

## 📁 FOLDER OVERVIEW

```
src/data/
├── book-index.js                    # Master book reference & rudiment catalog
├── urls.csv                         # Individual YouTube video links database
├── file-organization-plan.js        # Scaffolding plan for file reorganization
├── videos.js                        # Main video data aggregator
├── video-helpers.js                 # Utility functions for video operations
└── videos/                          # Individual video data files
    ├── solos-1-5.js                # Solo #1-5 video data (KEEP)
    ├── solos-6-10.js               # Solo #6-10 video data (KEEP) 
    ├── named-pieces-basic.js        # Basic named pieces p34-51 (NEW)
    ├── named-pieces-intermediate.js # Intermediate pieces p52-67 (NEW)
    ├── named-pieces-advanced-1.js   # Advanced pieces p68-82 (NEW)
    ├── named-pieces-advanced-2.js   # Advanced pieces p84-104 (NEW)
    └── [old files to delete]       # named-pieces-*.js (2-9.js)
```

---

## 📋 FILE DESCRIPTIONS

### **1. book-index.js** - Master Book Reference
**Purpose**: Authoritative source for all book structure and rudiment information
**Contains**:
- `bookSections`: Complete table of contents with page mappings
- `rudimentCatalog`: Rudiment families and classifications  
- `rudimentPageMapping`: Detailed rudiment-to-page index (from book pages 106-109)
- `tempoStandards`: BPM ranges and their purposes
- `videoTypes`: Classification system for video types
- `taggingStandards`: Consistent naming conventions
- `bookHelpers`: Utility functions for book data

**Key Functions**:
- `getRudimentsOnPage(pageNumber)` - Find all rudiments on a specific page
- `getPagesForRudiment(rudimentName)` - Get all pages where a rudiment appears
- `getRudimentFamily(rudimentName)` - Determine rudiment family
- `searchRudiments(searchTerm)` - Search rudiments by name

### **2. urls.csv** - YouTube Video Links Database  
**Purpose**: Central database of all individual YouTube video links
**Format**: CSV with columns for video ID, YouTube URL, title, etc.
**Usage**: Referenced by video data files to get actual YouTube URLs
**Note**: This is the SINGLE SOURCE OF TRUTH for YouTube links

### **3. file-organization-plan.js** - Reorganization Blueprint
**Purpose**: Master plan for reorganizing video files to eliminate duplicates
**Contains**:
- `existingFiles`: Files to keep (solos-1-5.js, solos-6-10.js)
- `newFiles`: New organized files with song lists and page ranges
- `filesToDelete`: Old duplicated files to remove
- `summary`: Statistics on file count reduction
- `validationRules`: Rules to prevent future duplication

### **4. videos.js** - Main Video Aggregator
**Purpose**: Combines all individual video files into one export
**Usage**: Import this file to get all video data across the site
**Note**: Gets updated when video files are reorganized

### **5. video-helpers.js** - Utility Functions
**Purpose**: Helper functions for video operations
**Contains**: Functions for filtering, searching, and manipulating video data

---

## 🎵 VIDEO DATA FILE ORGANIZATION

### **Current Structure** (TO BE REPLACED):
- ❌ 9 messy `named-pieces-*.js` files with duplicates and poor organization
- ❌ No clear page range separation
- ❌ Hard to maintain and prone to duplication errors

### **New Clean Structure** (TO IMPLEMENT):

#### **✅ solos-1-5.js** (KEEP - Already Well Organized)
- **Pages**: 14-23
- **Songs**: Solo #1-5, both parts each
- **Count**: 10 videos total

#### **✅ solos-6-10.js** (KEEP - Already Well Organized)  
- **Pages**: 24-33
- **Songs**: Solo #6-10, both parts each
- **Count**: 10 videos total

#### **🆕 named-pieces-basic.js** (NEW)
- **Pages**: 34-51 
- **Difficulty**: Beginner/Basic level
- **Songs**: SIMP, SHOUT!, BOINK, STAGGER, TRIX, TWIST, UP & RUNNIN', etc.
- **Count**: ~19 songs/parts

#### **🆕 named-pieces-intermediate.js** (NEW)
- **Pages**: 52-67
- **Difficulty**: Intermediate level  
- **Songs**: BOTHE, THREE FOR ALL, ROLL AROUND 2, EASY DOES IT, etc.
- **Count**: ~16 songs/parts

#### **🆕 named-pieces-advanced-1.js** (NEW)
- **Pages**: 68-82
- **Difficulty**: Advanced level (part 1)
- **Songs**: AWK, PARADIDDLE TRIPLETS, NEEDLE NOSE, ANGEL, TETRALOGY, etc.
- **Count**: ~15 songs/parts

#### **🆕 named-pieces-advanced-2.js** (NEW)
- **Pages**: 84-104  
- **Difficulty**: Advanced level (part 2)
- **Songs**: MOVIN' OUT, GARY GARY, TWO DAY, OKAY, STRAIGHT UP, etc.
- **Count**: ~19 songs/parts

---

## 🔧 REORGANIZATION PROCESS

### **Phase 1: Preparation**
1. ✅ Create `file-organization-plan.js` (DONE)
2. ✅ Create this README (DONE)
3. Review and validate the plan

### **Phase 2: Implementation** 
1. Create 4 new clean `named-pieces-*.js` files
2. Migrate video data to new files (no duplicates!)
3. Update `videos.js` to import new files
4. Delete old messy files

### **Phase 3: Validation**
1. Verify no songs appear in multiple files
2. Verify all page ranges are covered
3. Test that all videos still work
4. Update any imports in components

---

## 📊 STATISTICS

### **Before Reorganization**:
- **Files**: 11 total (2 solos + 9 named-pieces)
- **Problems**: Duplicates, poor organization, hard to maintain

### **After Reorganization**:
- **Files**: 6 total (2 solos + 4 named-pieces)  
- **Benefits**: No duplicates, clear page ranges, easy to maintain
- **Reduction**: 5 fewer files (45% reduction)

---

## 🔍 VALIDATION RULES

### **Page Coverage**:
- Pages 14-23: solos-1-5.js
- Pages 24-33: solos-6-10.js  
- Pages 34-51: named-pieces-basic.js
- Pages 52-67: named-pieces-intermediate.js
- Pages 68-82: named-pieces-advanced-1.js
- Pages 84-104: named-pieces-advanced-2.js

### **No Overlaps**:
- Each page appears in exactly one file
- Each song appears in exactly one file
- No gaps in page coverage

### **File Size**:
- Target: 15-20 songs per file maximum
- Reason: Maintainability and performance

---

## 🚀 USAGE EXAMPLES

### **Get all rudiments on a page**:
```javascript
import { bookHelpers } from './book-index.js';
const rudiments = bookHelpers.getRudimentsOnPage(24);
// Returns: ['5 Stroke Roll', 'Double Paradiddle', 'Flam Tap', ...]
```

### **Find pages for a rudiment**:
```javascript
import { bookHelpers } from './book-index.js';
const pages = bookHelpers.getPagesForRudiment('Swiss Army Triplet');
// Returns: [30, 31]
```

### **Check file organization**:
```javascript
import { fileOrganizationPlan } from './file-organization-plan.js';
console.log(fileOrganizationPlan.summary);
// Shows total song counts and file reduction stats
```

---

## ⚠️ IMPORTANT NOTES

1. **NEVER DUPLICATE**: Each song should only exist in one file
2. **FOLLOW PAGE RANGES**: Stick to the defined page ranges for each file  
3. **UPDATE IMPORTS**: When files change, update imports in components
4. **VALIDATE**: Use the helper functions to check for duplicates
5. **CSV SYNC**: Keep video data in sync with urls.csv YouTube links

---

## 📞 MAINTENANCE

When adding new videos:
1. Check `book-index.js` for the correct page and rudiments
2. Add to the appropriate file based on page range
3. Update `urls.csv` with YouTube link
4. Verify no duplicates exist
5. Test the video appears correctly on site

This structure ensures scalability, maintainability, and eliminates the duplication problems that were plaguing the previous organization. 