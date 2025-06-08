# 🏷️ **DEFINITIVE VIDEO TAGGING RULES**
## **Aligning Book Content + UI Filters + Video Organization**

---

## **📖 FUNDAMENTAL PRINCIPLE:**
**Every video tag must serve the book's educational structure AND enable the UI's filtering capabilities.**

---

## **🎯 MANDATORY TAG CATEGORIES**
### **Every video MUST include tags from ALL these categories:**

### **1. PAGE REFERENCE** 
- **Format**: `p{number}`
- **Examples**: `'p14'`, `'p34'`, `'p67'`
- **Rule**: Extracted from `pageNumber` field
- **Purpose**: Direct book page lookup

### **2. PIECE NAME**
- **Format**: Exact book title (lowercase)
- **Examples**: `'solo #1'`, `'simp'`, `'waltz'`, `'tetralogy'`
- **Rule**: Extracted from video title, standardized to lowercase
- **Purpose**: Piece identification and book section filtering

### **3. PART TYPE** 
- **Values**: `'part 1'`, `'part 2'`, `'standalone'`, `'full'`, `'movement 1'`, `'movement 2'`, `'movement 3'`, `'movement 4'`
- **Rules**:
  - Solos & Duet Pieces → `'part 1'`, `'part 2'`, `'full'`
  - Standalone Pieces → `'standalone'`
  - TETRALOGY → `'movement 1'` through `'movement 4'`
- **Purpose**: Structural organization & UI Part Type filters

### **4. VIDEO TYPE**
- **Values**: `'counting'`, `'breakdown'`, `'performance'`, `'full-performance'`, `'demonstration'`
- **UI Alignment**:
  - `'counting'` → "With Counting" filter
  - `'performance'` → "Performance Tempo" filter  
  - `'full-performance'` → "Duet" filter
  - `'demonstration'` → Blueprint content
- **Purpose**: Instructional purpose & UI Video Type filters

### **5. TEMPO RANGE**
- **Values**: `'40-50'`, `'60-70'`, `'80-90'`, `'100+'`, `'demonstration'`
- **Auto-Generated From**: `tempo` field
- **Mapping**:
  - ≤50 BPM → `'40-50'`
  - 51-70 BPM → `'60-70'`
  - 71-90 BPM → `'80-90'`
  - 91+ BPM → `'100+'`
  - Demo videos → `'demonstration'`
- **Purpose**: UI Tempo Range filters

### **6. METER TYPE**
- **Values**: `'simple'`, `'compound'`, `'waltz'`
- **Auto-Generated From**: `meter` field
- **Mapping**:
  - 2/4, 4/4 → `'simple'`
  - 6/8, 9/8, 12/8 → `'compound'`
  - 3/4, waltz → `'waltz'`
- **Purpose**: UI Meter filters

### **7. SKILL LEVEL**
- **Values**: `'beginner'`, `'intermediate'`, `'advanced'`
- **Auto-Generated Rules**:
  - `'counting'` videos → `'beginner'`
  - ≤50 BPM OR Solos 1-3 → `'beginner'`
  - 60-80 BPM OR Solos 4-5 → `'intermediate'`
  - 90+ BPM OR Solos 6-10 → `'advanced'`
- **Purpose**: Educational progression

---

## **🥁 RUDIMENT TAG CATEGORIES**

### **8. RUDIMENT FAMILIES**
- **Values**: `'rolls'`, `'paradiddles'`, `'flams'`, `'drags'`, `'ratamacues'`, `'strokes'`, `'advanced'`
- **Auto-Generated From**: `rudimentFamilies` field
- **Purpose**: UI Rudiment Family filters
- **Must Match**: UI "RUDIMENT FAMILY" section exactly

### **9. SPECIFIC RUDIMENTS**  
- **Values**: Individual rudiment names from `rudimentPageMapping`
- **Examples**: `'5 Stroke Roll'`, `'Paradiddle'`, `'Flam'`, `'Swiss Army Triplet'`
- **Auto-Generated From**: `rudiments` array field
- **Purpose**: UI Specific Rudiment filters
- **Must Match**: UI "SPECIFIC RUDIMENT" section exactly

---

## **🎭 SPECIAL CATEGORY TAGS**

### **10. DUET DETECTION**
- **Core Rule**: Any piece with BOTH Part 1 AND Part 2 = duet
- **Required Tags**: `'duet'`, `'ensemble'`, `'complete'`
- **Auto-Applied When**:
  - `partType === 'full'` 
  - `type === 'full-performance'`
  - Title contains "Part 1 and Part 2"
- **Special Cases**:
  - ✅ ALL Solos #1-10 are duets
  - ✅ Named pieces with Part 1 + Part 2 structure are duets
  - ❌ TETRALOGY has movements, NOT duet parts

### **11. BLUEPRINT CONTENT**
- **Required Tags**: `'blueprint'`, `'demonstration'`, `'overview'`  
- **Auto-Applied When**:
  - `type === 'demonstration'`
  - Title contains "Blueprint"
- **Purpose**: Official book demonstration content

---

## **📚 BOOK SECTION ALIGNMENT**

### **SOLOS 1-5 (Pages 14-23)**
- **Piece Names**: `'solo #1'` through `'solo #5'`
- **Characteristics**: All duets, foundational, progressive difficulty
- **Skill Levels**: Primarily beginner to intermediate

### **SOLOS 6-10 (Pages 24-33)**  
- **Piece Names**: `'solo #6'` through `'solo #10'`
- **Characteristics**: All duets, advanced, performance level
- **Skill Levels**: Primarily intermediate to advanced

### **NAMED PIECES (Pages 34-104)**
- **Structure**: Mix of standalone and duet pieces
- **Special Cases**: TETRALOGY (4 movements), varying difficulty
- **Page References**: MUST be included (currently missing)

---

## **🔧 TAG GENERATION ALGORITHM**

### **For Every Video:**
```javascript
const videoTags = [
  // MANDATORY CORE TAGS
  `p${pageNumber}`,                    // Page reference
  extractPieceName(title).toLowerCase(), // Piece name  
  standardizePartType(partType),        // Part type
  type,                                // Video type
  generateTempoRange(tempo, type),     // Tempo range
  standardizeMeter(meter),             // Meter type
  calculateSkillLevel(tempo, type, piece), // Skill level
  
  // RUDIMENT TAGS  
  ...rudimentFamilies,                 // Family tags
  ...rudiments,                        // Specific rudiments
  
  // SPECIAL TAGS (conditional)
  ...(isDuet(piece) && isFullPerformance ? ['duet', 'ensemble', 'complete'] : []),
  ...(isBlueprint ? ['blueprint', 'demonstration', 'overview'] : [])
];
```

---

## **✅ VALIDATION REQUIREMENTS**

### **Every Video Must Pass:**
1. **Has page reference** (`p{number}`)
2. **Has piece name** (extracted from title)
3. **Has tempo range** (auto-generated)
4. **Has meter type** (auto-generated)
5. **Has skill level** (auto-generated)
6. **Has rudiment families** (from video data)
7. **Duet rule compliance** (if applicable)
8. **Blueprint tagging** (if demonstration video)

### **UI Filter Compatibility:**
- All tags must enable corresponding UI filters
- No orphaned tags (tags that don't serve UI functionality)
- No missing tags (UI filters must have underlying tag support)

---

## **🎯 IMPLEMENTATION OUTCOME**

### **PERFECT UI SYNCHRONIZATION:**
- ✅ **Book Section** filters work (solos vs named pieces)
- ✅ **Meter** filters work (simple/compound/waltz)  
- ✅ **Part Type** filters work (part 1/part 2/standalone)
- ✅ **Video Type** filters work (counting/performance/duet)
- ✅ **Tempo Range** filters work (40-50/60-70/80-90/100+)
- ✅ **Rudiment Family** filters work (rolls/paradiddles/flams/etc)
- ✅ **Specific Rudiment** filters work (5 Stroke Roll/Paradiddle/etc)

### **EDUCATIONAL COHERENCE:**
- Videos organized by skill progression
- Book page references enable direct lookup
- Rudiment categorization supports learning paths
- Duet identification enables ensemble practice

### **MAINTENANCE EFFICIENCY:**
- Auto-generated tags reduce manual effort
- Validation rules ensure consistency
- Book-index.js serves as single source of truth
- UI and data stay automatically synchronized

---

## **🚀 THIS IS THE STANDARD**
**All future videos must follow these rules. All existing videos should be migrated to this system.** 