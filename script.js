const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide pour relier les mots en ligne droite.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! 🔥",
        modalSuccessDesc: "Prêt à oser le niveau suivant ?",
        modalFinalTitle: "Parcours Oze Tour Terminé ! 🏆",
        modalFinalDesc: "Félicitations ! Vous avez relevé tous les défis jeunesse et avenir avec Abigaïl Alexandre !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début",
        timeLabel: "Temps réalisé :"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Found",
        instruction: "Instruction: Slide your finger or mouse smoothly to connect words in a straight line.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! 🔥",
        modalSuccessDesc: "Ready to dare the next level?",
        modalFinalTitle: "Oze Tour Completed! 🏆",
        modalFinalDesc: "Congratulations! You conquered all youth and future challenges with Abigaïl Alexandre!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start",
        timeLabel: "Time taken:"
    }
};

// 20 Niveaux de 6 mots courts chacun autour de la jeunesse, l'audace (oser) et l'avenir (FR & EN)
const LEVELS = [
    {
        title: { fr: "Niveau 1 : Esprit Jeunesse", en: "Level 1: Youth Spirit" },
        words: {
            fr: ["JEUNE", "ELAN", "VIGUEUR", "VIE", "FORCE", "FOUGUE"],
            en: ["YOUTH", "SPARK", "VIGOR", "LIFE", "POWER", "DRIVE"]
        }
    },
    {
        title: { fr: "Niveau 2 : L'Art d'Oser", en: "Level 2: The Art of Daring" },
        words: {
            fr: ["OSER", "AUDACE", "BRAVO", "RISQUE", "COURAGE", "HARDI"],
            en: ["DARE", "BOLD", "BRAVE", "RISK", "PLUCK", "GUTS"]
        }
    },
    {
        title: { fr: "Niveau 3 : Cap sur l'Avenir", en: "Level 3: Eyes on the Future" },
        words: {
            fr: ["AVENIR", "FUTUR", "DEMAIN", "HORIZON", "ESPOIR", "DESTIN"],
            en: ["FUTURE", "AHEAD", "NEXT", "HORIZON", "HOPE", "FATE"]
        }
    },
    {
        title: { fr: "Niveau 4 : Rêves & Ambitions", en: "Level 4: Dreams & Ambitions" },
        words: {
            fr: ["REVE", "BUT", "IDEAL", "VISION", "SOMMET", "GLOIRE"],
            en: ["DREAM", "GOAL", "IDEAL", "VISION", "PEAK", "GLORY"]
        }
    },
    {
        title: { fr: "Niveau 5 : Action & Mouvement", en: "Level 5: Action & Movement" },
        words: {
            fr: ["AGIR", "AVANCE", "PASSER", "SAUTER", "COURIR", "BOUGER"],
            en: ["ACT", "MOVE", "STEP", "LEAP", "RUN", "SHIFT"]
        }
    },
    {
        title: { fr: "Niveau 6 : Leadership & Voix", en: "Level 6: Leadership & Voice" },
        words: {
            fr: ["LEADER", "GUIDE", "VOIX", "CHOIX", "IMPACT", "CHEF"],
            en: ["LEADER", "GUIDE", "VOICE", "CHOICE", "IMPACT", "HEAD"]
        }
    },
    {
        title: { fr: "Niveau 7 : Création & Talents", en: "Level 7: Creation & Talents" },
        words: {
            fr: ["CREER", "TALENT", "IDEE", "ART", "GENIE", "DON"],
            en: ["CREATE", "TALENT", "IDEA", "ART", "GENIUS", "GIFT"]
        }
    },
    {
        title: { fr: "Niveau 8 : Confiance & Foi", en: "Level 8: Trust & Faith" },
        words: {
            fr: ["FOI", "SUR", "FIER", "CAPABLE", "VALEUR", "ESTIME"],
            en: ["FAITH", "SURE", "PROUD", "ABLE", "VALUE", "TRUST"]
        }
    },
    {
        title: { fr: "Niveau 9 : Savoir & Études", en: "Level 9: Knowledge & Study" },
        words: {
            fr: ["SAVOIR", "ECOLE", "LIVRE", "ETUDE", "LECON", "ESPRIT"],
            en: ["KNOW", "SCHOOL", "BOOK", "STUDY", "LEARN", "MIND"]
        }
    },
    {
        title: { fr: "Niveau 10 : Liberté & Envol", en: "Level 10: Freedom & Flight" },
        words: {
            fr: ["LIBRE", "ENVOL", "AILE", "CIEL", "VENT", "LARGE"],
            en: ["FREE", "FLIGHT", "WING", "SKY", "WIND", "OPEN"]
        }
    },
    {
        title: { fr: "Niveau 11 : Défis & Victoires", en: "Level 11: Challenges & Wins" },
        words: {
            fr: ["DEFI", "GAGNER", "SUCCES", "PRIX", "BRAVO", "VAINCRE"],
            en: ["DARE", "WIN", "SUCCESS", "PRIZE", "CHEER", "BEAT"]
        }
    },
    {
        title: { fr: "Niveau 12 : Lumière & Phare", en: "Level 12: Light & Beacon" },
        words: {
            fr: ["LUEUR", "PHARE", "SOLEIL", "ECLAT", "AUBE", "JOUR"],
            en: ["GLOW", "BEACON", "SUN", "SHINE", "DAWN", "DAY"]
        }
    },
    {
        title: { fr: "Niveau 13 : Union & Partage", en: "Level 13: Unity & Sharing" },
        words: {
            fr: ["UNION", "EQUIPE", "LIEN", "AMIS", "PAIX", "AIDE"],
            en: ["UNION", "TEAM", "LINK", "FRIEND", "PEACE", "HELP"]
        }
    },
    {
        title: { fr: "Niveau 14 : Volonté & Effort", en: "Level 14: Will & Effort" },
        words: {
            fr: ["VOULOIR", "EFFORT", "TENIR", "LUTTE", "ZÈLE", "ARDEUR"],
            en: ["WILL", "EFFORT", "HOLD", "FIGHT", "ZEAL", "GRIT"]
        }
    },
    {
        title: { fr: "Niveau 15 : Changement & Neuf", en: "Level 15: Change & New" },
        words: {
            fr: ["NEUF", "NOUVEAU", "CHANGER", "EVEIL", "ESSOR", "CYCLE"],
            en: ["NEW", "FRESH", "CHANGE", "WAKE", "BOOM", "CYCLE"]
        }
    },
    {
        title: { fr: "Niveau 16 : Projets & Bâtir", en: "Level 16: Projects & Build" },
        words: {
            fr: ["PROJET", "BATIR", "PLAN", "SOCLE", "OEUVRE", "BASE"],
            en: ["PLAN", "BUILD", "CRAFT", "BASE", "WORK", "CORE"]
        }
    },
    {
        title: { fr: "Niveau 17 : Passion & Feu", en: "Level 17: Passion & Fire" },
        words: {
            fr: ["FEU", "FLAMME", "COEUR", "AME", "JOIE", "VIBRER"],
            en: ["FIRE", "FLAME", "HEART", "SOUL", "JOY", "PULSE"]
        }
    },
    {
        title: { fr: "Niveau 18 : Voyage & Parcours", en: "Level 18: Journey & Path" },
        words: {
            fr: ["TOUR", "ROUTE", "VOIE", "PAS", "ETAPE", "CAP"],
            en: ["TOUR", "ROAD", "PATH", "STEP", "STAGE", "CAPE"]
        }
    },
    {
        title: { fr: "Niveau 19 : Réussite & Fierté", en: "Level 19: Achievement & Pride" },
        words: {
            fr: ["REUSSIR", "HONNEUR", "DIGNE", "HAUT", "NOBLE", "FORT"],
            en: ["THRIVE", "HONOR", "WORTHY", "HIGH", "NOBLE", "STRONG"]
        }
    },
    {
        title: { fr: "Niveau 20 : Oze Tour Ultime", en: "Level 20: Ultimate Oze Tour" },
        words: {
            fr: ["OZE", "TOUR", "ABIGAIL", "JEUNE", "OSER", "AVENIR"],
            en: ["OZE", "TOUR", "ABIGAIL", "YOUTH", "DARE", "FUTURE"]
        }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
const GRID_SIZE = 10;

// Normalise les accents pour la grille (ex: Ï -> I, É -> E)
function normalizeWord(word) {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, '').toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-light') ? '🌙' : '☀️';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `⏱️ ${mins}:${secs}`;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (currentLang === 'fr') {
        if (mins > 0) return `${mins} minute(s) et ${secs} seconde(s)`;
        return `${secs} seconde(s)`;
    } else {
        if (mins > 0) return `${mins} minute(s) and ${secs} second(s)`;
        return `${secs} second(s)`;
    }
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];
    
    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();
    
    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
    startTimer();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = normalizeWord(word);

        while (!placed && attempts < 150) {
            attempts++;
            const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ original: word, clean: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${idx}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;
    
    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    // Verrouille strictement les mouvements aux lignes droites (horizontale, verticale, diagonale à 45°)
    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    const t = I18N[currentLang];

    placedWords.forEach((pw, idx) => {
        const isMatch = pw.clean === formedWord || pw.clean === formedWord.split('').reverse().join('');
        if (isMatch && !foundWords.has(idx)) {
            foundWords.add(idx);

            selectedCells.forEach(key => {
                const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
                if (cell) cell.classList.add('found');
            });

            const chip = document.getElementById(`chip-${idx}`);
            if (chip) chip.classList.add('found');

            document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

            if (foundWords.size === currentWords.length) {
                stopTimer();
                setTimeout(showLevelModal, 400);
            }
        }
    });

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    const timeFormatted = formatTime(secondsElapsed);
    
    document.getElementById('modalTimeResult').innerText = `${t.timeLabel} ${timeFormatted}`;
    
    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}