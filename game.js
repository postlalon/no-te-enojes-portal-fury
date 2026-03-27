// --- ¡INICIO DE MAPA DE TABLERO! (VERSIÓN 1:1 - LÓGICA CORREGIDA) ---
const boardMap = {
    bases: {
        // Nuevos puntos de apilado en base
        morado: { top: '3.17%', left: '25.29%' },
        azul: { top: '77.24%', left: '25.36%' },
        verde: { top: '76.09%', left: '75.28%' },
        amarillo: { top: '3.17%', left: '73.65%' }
    },
    // Portal Central
    portalGeneral: { id: 'p-gen', top: '49.97%', left: '48.97%', isPortal: 'general' },
    // Vínculos (sin cambios)
    portalLinks: { 'sub1': 'sub3', 'sub3': 'sub1', 'sub2': 'sub4', 'sub4': 'sub2' },

    // Camino General (56 pasos)
    generalPath: [
        { i: 0, top: '95.99%', left: '49.68%', isPortal: null, isEntry: 'verde', isStart: null },
        { i: 1, top: '96.13%', left: '57.10%', isPortal: null, isEntry: null, isStart: null },
        { i: 2, top: '96.18%', left: '63.38%', isPortal: null, isEntry: null, isStart: 'verde' },
        { i: 3, top: '89.24%', left: '61.81%', isPortal: null, isEntry: null, isStart: null },
        { i: 4, top: '83.10%', left: '63.24%', isPortal: null, isEntry: null, isStart: null },
        { i: 5, top: '75.97%', left: '63.24%', isPortal: null, isEntry: null, isStart: null },
        { i: 6, top: '69.83%', left: '63.52%', isPortal: null, isEntry: null, isStart: null },
        { i: 7, top: '63.22%', left: '63.24%', isPortal: 'sub2', isEntry: null, isStart: null },
        { i: 8, top: '63.27%', left: '70.09%', isPortal: null, isEntry: null, isStart: null },
        { i: 9, top: '62.98%', left: '76.08%', isPortal: null, isEntry: null, isStart: null },
        { i: 10, top: '62.84%', left: '82.78%', isPortal: null, isEntry: null, isStart: null },
        { i: 11, top: '62.84%', left: '89.77%', isPortal: null, isEntry: null, isStart: null },
        { i: 12, top: '62.70%', left: '96.77%', isPortal: null, isEntry: null, isStart: null },
        { i: 13, top: '56.14%', left: '96.77%', isPortal: null, isEntry: null, isStart: null },
        { i: 14, top: '49.43%', left: '96.62%', isPortal: null, isEntry: 'amarillo', isStart: null },
        { i: 15, top: '43.01%', left: '96.77%', isPortal: null, isEntry: null, isStart: null },
        { i: 16, top: '36.64%', left: '96.62%', isPortal: null, isEntry: null, isStart: 'amarillo' },
        { i: 17, top: '36.78%', left: '89.77%', isPortal: null, isEntry: null, isStart: null },
        { i: 18, top: '36.21%', left: '83.50%', isPortal: null, isEntry: null, isStart: null },
        { i: 19, top: '36.49%', left: '76.36%', isPortal: null, isEntry: null, isStart: null },
        { i: 20, top: '36.35%', left: '70.09%', isPortal: null, isEntry: null, isStart: null },
        { i: 21, top: '36.57%', left: '63.24%', isPortal: 'sub3', isEntry: null, isStart: null },
        { i: 22, top: '29.87%', left: '63.09%', isPortal: null, isEntry: null, isStart: null },
        { i: 23, top: '23.02%', left: '63.38%', isPortal: null, isEntry: null, isStart: null },
        { i: 24, top: '16.58%', left: '63.52%', isPortal: null, isEntry: null, isStart: null },
        { i: 25, top: '9.45%', left: '63.52%', isPortal: null, isEntry: null, isStart: null },
        { i: 26, top: '3.03%', left: '63.52%', isPortal: null, isEntry: null, isStart: null },
        { i: 27, top: '3.03%', left: '56.96%', isPortal: null, isEntry: null, isStart: null },
        { i: 28, top: '2.46%', left: '50.40%', isPortal: null, isEntry: 'morado', isStart: null },
        { i: 29, top: '3.03%', left: '43.12%', isPortal: null, isEntry: null, isStart: null },
        { i: 30, top: '2.89%', left: '36.98%', isPortal: null, isEntry: null, isStart: 'morado' },
        { i: 31, top: '10.16%', left: '36.56%', isPortal: null, isEntry: null, isStart: null },
        { i: 32, top: '15.87%', left: '36.70%', isPortal: null, isEntry: null, isStart: null },
        { i: 33, top: '23.43%', left: '36.70%', isPortal: null, isEntry: null, isStart: null },
        { i: 34, top: '30.28%', left: '36.56%', isPortal: null, isEntry: null, isStart: null },
        { i: 35, top: '36.57%', left: '36.70%', isPortal: 'sub4', isEntry: null, isStart: null },
        { i: 36, top: '36.41%', left: '29.85%', isPortal: null, isEntry: null, isStart: null },
        { i: 37, top: '36.27%', left: '23.29%', isPortal: null, isEntry: null, isStart: null },
        { i: 38, top: '36.27%', left: '16.30%', isPortal: null, isEntry: null, isStart: null },
        { i: 39, top: '36.56%', left: '10.16%', isPortal: null, isEntry: null, isStart: null },
        { i: 40, top: '36.84%', left: '3.46%', isPortal: null, isEntry: null, isStart: null },
        { i: 41, top: '42.83%', left: '3.17%', isPortal: null, isEntry: null, isStart: null },
        { i: 42, top: '49.40%', left: '2.74%', isPortal: null, isEntry: 'azul', isStart: null },
        { i: 43, top: '56.67%', left: '2.89%', isPortal: null, isEntry: null, isStart: null },
        { i: 44, top: '63.24%', left: '3.17%', isPortal: null, isEntry: null, isStart: 'azul' },
        { i: 45, top: '63.38%', left: '10.16%', isPortal: null, isEntry: null, isStart: null },
        { i: 46, top: '63.16%', left: '16.58%', isPortal: null, isEntry: null, isStart: null },
        { i: 47, top: '63.02%', left: '23.00%', isPortal: null, isEntry: null, isStart: null },
        { i: 48, top: '63.16%', left: '30.42%', isPortal: null, isEntry: null, isStart: null },
        { i: 49, top: '62.97%', left: '36.70%', isPortal: 'sub1', isEntry: null, isStart: null },
        { i: 50, top: '69.86%', left: '36.84%', isPortal: null, isEntry: null, isStart: null },
        { i: 51, top: '76.71%', left: '36.84%', isPortal: null, isEntry: null, isStart: null },
        { i: 52, top: '83.70%', left: '36.27%', isPortal: null, isEntry: null, isStart: null },
        { i: 53, top: '89.27%', left: '36.13%', isPortal: null, isEntry: null, isStart: null },
        { i: 54, top: '96.26%', left: '36.13%', isPortal: null, isEntry: null, isStart: null },
        { i: 55, top: '96.40%', left: '43.41%', isPortal: null, isEntry: null, isStart: null }
    ],
    // Caminos Finales (5 pasos, formato compacto)
    finalPaths: {
        morado: [
            { top: '11.58%', left: '50.41%' }, { top: '16.09%', left: '50.09%' }, { top: '23.99%', left: '50.41%' },
            { top: '30.77%', left: '49.88%' }, { top: '37.12%', left: '49.78%' }
        ],
        azul: [
            { top: '49.71%', left: '10.16%' }, { top: '49.57%', left: '17.30%' }, { top: '49.57%', left: '23.29%' },
            { top: '49.71%', left: '29.99%' }, { top: '50.29%', left: '36.84%' }
        ],
        verde: [
            { top: '89.11%', left: '49.78%' }, { top: '81.49%', left: '49.78%' }, { top: '75.99%', left: '49.78%' },
            { top: '69.49%', left: '49.78%' }, { top: '62.93%', left: '50.09%' }
        ],
        amarillo: [
            { top: '50.19%', left: '89.63%' }, { top: '50.19%', left: '83.50%' }, { top: '49.62%', left: '76.22%' },
            { top: '49.62%', left: '70.09%' }, { top: '49.90%', left: '62.52%' }
        ],
    }
};

const mobileBoardMapBases = {
    morado: { top: '21.15%', left: '22.43%' },
    azul: { top: '76.24%', left: '24.36%' },
    verde: { top: '75.09%', left: '76.28%' },
    amarillo: { top: '21.58%', left: '75.94%' }
};
// --- ¡FIN DE MAPA DE TABLERO! ---

// --- MIDI SOUND ENGINE (FINAL FANTASY INSPIRED) ---
let audioCtx;
let isMuted = false;
let musicLoopTimeout;
let isMusicPlaying = false;
let isVictoryMusicPlaying = false;
let victoryMusicLoopTimeout;
const victoryLoopDuration = 2000; // 2 seconds loop
const victoryMusicNotes = [
    { freq: 523.25, duration: 0.15, type: 'sine', vol: 0.4, delay: 0 },
    { freq: 659.25, duration: 0.15, type: 'sine', vol: 0.4, delay: 0.1 },
    { freq: 783.99, duration: 0.15, type: 'sine', vol: 0.4, delay: 0.2 },
    { freq: 1046.50, duration: 0.3, type: 'sine', vol: 0.5, delay: 0.3 }
];

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playNote(freq, duration, type = 'sine', vol = 0.5, delay = 0) {
    if (!audioCtx || isMuted) return;

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime + delay);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + delay);
    gainNode.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + delay + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + delay + duration);

    oscillator.start(audioCtx.currentTime + delay);
    oscillator.stop(audioCtx.currentTime + delay + duration);
}

const bgMusicObj = new Audio('Echoes_of_the_Void_Nebula.mp3');
bgMusicObj.loop = true;
bgMusicObj.volume = 0.5;

function startBackgroundMusic() {
    if (isMusicPlaying || isMuted) return;
    isMusicPlaying = true;
    bgMusicObj.play().catch(e => console.error("Audio playback failed:", e));
}

function stopBackgroundMusic() {
    isMusicPlaying = false;
    bgMusicObj.pause();
    bgMusicObj.currentTime = 0;
}

function playVictoryMusicSequence() {
    if (!isVictoryMusicPlaying || !audioCtx) return;
    victoryMusicNotes.forEach(note => {
        playNote(note.freq, note.duration, note.type, note.vol, note.delay);
    });
    victoryMusicLoopTimeout = setTimeout(playVictoryMusicSequence, victoryLoopDuration);
}

function startVictoryMusic() {
    if (isVictoryMusicPlaying || isMuted) return;
    isVictoryMusicPlaying = true;
    playVictoryMusicSequence();
}

function stopVictoryMusic() {
    isVictoryMusicPlaying = false;
    clearTimeout(victoryMusicLoopTimeout);
}

function playSound(soundName) {
    if (!audioCtx || isMuted) return;

    switch (soundName) {
        case 'move':
            playNote(300, 0.08, 'triangle', 0.2); // Deeper thud sound
            break;
        case 'summon':
            playNote(440, 0.1, 'triangle', 0.2, 0);
            playNote(523.25, 0.1, 'triangle', 0.3, 0.05);
            playNote(659.25, 0.1, 'triangle', 0.4, 0.1);
            playNote(880, 0.2, 'triangle', 0.5, 0.15);
            break;

        case 'capture':
            playNote(392.00, 0.08, 'square', 0.4, 0.0);
            playNote(392.00, 0.08, 'square', 0.4, 0.1);
            playNote(392.00, 0.08, 'square', 0.4, 0.2);
            playNote(392.00, 0.3, 'square', 0.4, 0.3);
            playNote(349.23, 0.3, 'square', 0.4, 0.7);
            playNote(392.00, 0.3, 'square', 0.4, 1.1);
            playNote(440.00, 0.3, 'square', 0.4, 1.5);
            playNote(415.30, 0.15, 'square', 0.4, 1.9);
            playNote(392.00, 0.5, 'square', 0.4, 2.1);
            break;

        case 'portal':
            playNote(659.25, 0.2, 'triangle', 0.3, 0);
            playNote(987.77, 0.2, 'triangle', 0.3, 0.1);
            playNote(1318.51, 0.3, 'triangle', 0.3, 0.2);
            break;
        case 'goal':
            playNote(523.25, 0.15, 'sine', 0.4, 0);
            playNote(659.25, 0.15, 'sine', 0.4, 0.1);
            playNote(783.99, 0.15, 'sine', 0.4, 0.2);
            playNote(1046.50, 0.3, 'sine', 0.5, 0.3);
            break;
        case 'buttonClick':
            playNote(1396.91, 0.06, 'square', 0.15);
            break;
        case 'diceRoll':
            playNote(130.81, 0.08, 'square', 0.15, 0);
            playNote(261.63, 0.08, 'square', 0.15, 0.06);
            playNote(523.25, 0.08, 'square', 0.15, 0.12);
            break;

        case 'win':
            playNote(523.25, 0.15, 'sine', 0.4, 0);
            playNote(659.25, 0.15, 'sine', 0.4, 0.1);
            playNote(783.99, 0.15, 'sine', 0.4, 0.2);
            playNote(1046.50, 0.3, 'sine', 0.5, 0.3);
            break;

        case 'penalty':
            playNote(440, 0.1, 'sawtooth', 0.5, 0);
            playNote(329.63, 0.1, 'sawtooth', 0.5, 0.1);
            playNote(220, 0.25, 'sawtooth', 0.5, 0.2);
            break;
        case 'closeWindow':
            playNote(440, 0.1, 'sine', 0.2);
            playNote(349.23, 0.1, 'sine', 0.2, 0.1);
            break;
        case 'gameStart':
            playNote(261.63, 0.15, 'triangle', 0.4, 0);
            playNote(329.63, 0.15, 'triangle', 0.4, 0.1);
            playNote(392.00, 0.15, 'triangle', 0.4, 0.2);
            break;
    }
}

// --- FUNCIÓN DE RENDERIZADO DE TABLERO (CORREGIDA) ---
function renderBoard() {
    const fragment = document.createDocumentFragment();

    // Render general path
    boardMap.generalPath.forEach((casillaData, index) => {
        const casillaEl = document.createElement('div');
        casillaEl.className = 'casilla';
        casillaEl.style.top = casillaData.top;
        casillaEl.style.left = casillaData.left;
        casillaEl.dataset.index = index;
        if (casillaData.isPortal && casillaData.isPortal !== 'general') {
            casillaEl.classList.add('portal');
            casillaEl.dataset.portalId = casillaData.isPortal;
            // Add Corner Portal Effect DOM
            casillaEl.innerHTML = `
                <div class="corner-portal">
                    <i></i><i></i><i></i><i></i><i></i>
                    <i></i><i></i><i></i><i></i><i></i>
                </div>
            `;
        }
        if (casillaData.isStart) {
            casillaEl.classList.add('power-square');
            casillaEl.style.color = `var(--color-${casillaData.isStart})`;
        }
        if (casillaData.isEntry) {
            casillaEl.classList.add('casilla-entry');
            casillaEl.dataset.entryColor = casillaData.isEntry;
        }
        fragment.appendChild(casillaEl);
    });

    // Render final paths
    Object.keys(boardMap.finalPaths).forEach(color => {
        boardMap.finalPaths[color].forEach((casillaData, index) => {
            const casillaEl = document.createElement('div');
            casillaEl.className = 'casilla casilla-meta';
            casillaEl.style.top = casillaData.top;
            casillaEl.style.left = casillaData.left;
            casillaEl.dataset.color = color;
            casillaEl.dataset.index = index;

            // --- LÓGICA DE CORRECCIÓN ---
            if (index === boardMap.finalPaths[color].length - 1) {
                // Es la ÚLTIMA casilla (la meta final)
                casillaEl.classList.add('casilla-meta-final');
                // No se añaden esquinas
            } else {
                // Son las casillas del camino, AÑADIR esquinas
                casillaEl.innerHTML = `
                      <div class="meta-corner corner-tl" style="border-color: var(--color-${color}-light)"></div>
                      <div class="meta-corner corner-tr" style="border-color: var(--color-${color}-light)"></div>
                      <div class="meta-corner corner-bl" style="border-color: var(--color-${color}-light)"></div>
                      <div class="meta-corner corner-br" style="border-color: var(--color-${color}-light)"></div>
                    `;
            }
            // --- FIN DE LA CORRECCIÓN ---

            fragment.appendChild(casillaEl);
        });
    });

    // Render general portal
    const portalData = boardMap.portalGeneral;
    const portalEl = document.createElement('div');
    portalEl.className = 'casilla portal-general';
    portalEl.style.top = portalData.top;
    portalEl.style.left = portalData.left;
    portalEl.id = portalData.id;
    portalEl.dataset.portalId = portalData.isPortal;
    // Add Central Portal Shadow Loader DOM
    portalEl.innerHTML = `
        <div class="loader-wrapper">
          <div class="loader"></div>
        </div>
    `;
    fragment.appendChild(portalEl);

    boardContainer.appendChild(fragment);
}

// Elementos del DOM
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const boardContainer = document.getElementById('board-container');
const diceContainer = document.getElementById('dado-container');
const diceEl = document.getElementById('dado-container'); // Updated selector for 3D dice
const diceMessageEl = document.getElementById('dice-message');
const abilityDisplay = document.getElementById('ability-display');
const hud = document.getElementById('hud');
const globalMessageDisplay = document.getElementById('global-message-display');
const persistentTurnIndicator = document.getElementById('persistent-turn-indicator');
const pauseBtn = document.getElementById('btn-pausa');
const pauseMenu = document.getElementById('pause-menu');
const failsafeBtn = document.getElementById('failsafe-end-turn-btn');
const showHudBtn = document.getElementById('show-hud-btn');
const countdownOverlay = document.getElementById('countdown-overlay');
const shieldBtn = document.getElementById('shield-btn'); // MODO PROGRESO

// Estado del juego
let gameState = {};
let hudTimeout;

// Diccionario de idiomas
let currentLang = localStorage.getItem('portal_fury_lang') || 'es';

function updateLanguage() {
    const dict = translations[currentLang];
    if (!dict) return;

    // Update all elements with data-i18n tags
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        let translation = dict[key];

        if (translation) {
            // Handle placeholders if any (e.g., {steps})
            if (el.dataset.i18nVars) {
                const vars = JSON.parse(el.dataset.i18nVars);
                Object.keys(vars).forEach(v => {
                    translation = translation.replace(`{${v}}`, vars[v]);
                });
            }
            // Use innerHTML because some rules have nested tags like <strong>
            el.innerHTML = translation;
        }
    });

    // Update Ability Dropdowns if they exist
    if (document.getElementById('ability-selection-container').innerHTML !== '') {
        updateAbilitySelectors();
    }

    // Update dynamic game UI if game is active
    if (gameState && gameState.playerColors) {
        updateCaptureLogDisplays();
        updateEarningsDisplays(); // Re-render headers
        gameState.playerColors.forEach(c => updateEarningsDisplay(c));
        updateTurnIndicator();
    }
}

// Helper for JS strings
function t(key, vars = {}) {
    const dict = translations[currentLang];
    if (!dict || !dict[key]) return key;
    let translation = dict[key];
    Object.keys(vars).forEach(v => {
        translation = translation.replace(`{${v}}`, vars[v]);
    });
    return translation;
}

// Custom Language Selector Logic
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('language-btn');
    const langDropdown = document.getElementById('language-dropdown');

    if (langBtn && langDropdown) {
        langBtn.onclick = (e) => {
            e.stopPropagation();
            playSound('buttonClick');
            langDropdown.style.display = langDropdown.style.display === 'none' ? 'block' : 'none';
        };

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.onclick = () => {
                currentLang = opt.dataset.lang;
                localStorage.setItem('portal_fury_lang', currentLang);
                updateLanguage();
                langDropdown.style.display = 'none';
                playSound('buttonClick');
            };
        });

        window.onclick = () => {
            langDropdown.style.display = 'none';
        };
    }

    // Inicializar idioma al cargar
    updateLanguage();
});

const getEpicAbilities = () => {
    const dict = translations[currentLang];
    return {
        'abSpeed': { name: dict.abSpeed, desc: dict.abSpeedDesc, uses: Infinity },
        'abShield': { name: dict.abShield, desc: dict.abShieldDesc, uses: 3 },
        'abPortalMad': { name: dict.abPortalMad, desc: dict.abPortalMadDesc, uses: 3 },
        'abMasterSumm': { name: dict.abMasterSumm, desc: dict.abMasterSummDesc, uses: 4 },
        'abAttacker': { name: dict.abAttacker, desc: dict.abAttackerDesc, uses: 3 },
        'abStratMaster': { name: dict.abStratMaster, desc: dict.abStratMasterDesc, uses: Infinity }
    };
};
const allPlayerColors = ['morado', 'azul', 'verde', 'amarillo'];

// --- LÓGICA DE MENÚ ---

function updateAbilitySelectors() {
    const numPlayers = parseInt(document.querySelector('.player-buttons .selected').dataset.players);
    const container = document.getElementById('ability-selection-container');
    container.innerHTML = '';

    let selectedColors;
    if (numPlayers === 4) {
        selectedColors = allPlayerColors;
    } else {
        selectedColors = Array.from(document.querySelectorAll('.color-choice-input:checked')).map(cb => cb.value);
    }

    selectedColors.forEach(color => {
        const div = document.createElement('div');
        div.className = 'player-ability-select';

        const label = document.createElement('label');
        label.setAttribute('for', `ability-${color}`);
        // label.textContent = `Habilidad ${color.charAt(0).toUpperCase() + color.slice(1)}`;
        label.innerHTML = t('abilityLabel', { color: t('team' + color.charAt(0).toUpperCase() + color.slice(1)) });
        label.style.color = `var(--color-${color}-light)`;
        div.appendChild(label);

        const npcToggleWrapper = document.createElement('div');
        npcToggleWrapper.className = 'npc-toggle-wrapper';
        npcToggleWrapper.innerHTML = `
                <label for="npc-${color}">NPC</label>
                <input type="checkbox" id="npc-${color}" class="npc-checkbox">
            `;
        div.appendChild(npcToggleWrapper);

        const wrapper = document.createElement('div');
        wrapper.className = 'ability-control-wrapper';

        const select = document.createElement('select');
        select.id = `ability-${color}`;
        select.dataset.color = color;

        const eAbilities = getEpicAbilities();
        Object.keys(eAbilities).forEach(abilityId => {
            const option = document.createElement('option');
            option.value = abilityId;
            option.textContent = eAbilities[abilityId].name;
            select.appendChild(option);
        });

        const usesInput = document.createElement('input');
        usesInput.type = 'text'; // Text for '∞'
        usesInput.className = 'ability-uses-input';
        usesInput.maxLength = 2;
        usesInput.title = 'Usos de la habilidad';
        usesInput.id = `uses-${color}`;

        const randomBtn = document.createElement('button');
        randomBtn.className = 'random-ability-btn';
        randomBtn.innerHTML = '✨';
        randomBtn.dataset.color = color;
        randomBtn.title = 'Seleccionar habilidad aleatoria';

        randomBtn.addEventListener('click', (e) => {
            e.preventDefault();
            playSound('buttonClick');
            const targetColor = e.target.dataset.color;
            const targetSelect = document.getElementById(`ability-${targetColor}`);
            if (targetSelect) {
                const optionsCount = targetSelect.options.length;
                const randomIndex = Math.floor(Math.random() * optionsCount);
                targetSelect.selectedIndex = randomIndex;
                targetSelect.dispatchEvent(new Event('change'));
            }
        });

        const descDisplay = document.createElement('div');
        descDisplay.className = 'ability-description-display';

        select.addEventListener('change', () => {
            const selectedAbilityId = select.value;
            const dictAbils = getEpicAbilities();
            const selectedAbility = dictAbils[selectedAbilityId];
            descDisplay.textContent = selectedAbility ? selectedAbility.desc : '';
            if (selectedAbility) {
                if (selectedAbility.uses === Infinity) {
                    usesInput.value = '∞';
                    usesInput.readOnly = true;
                } else {
                    usesInput.value = selectedAbility.uses;
                    usesInput.readOnly = false;
                }
            }
        });

        usesInput.addEventListener('input', () => {
            if (usesInput.readOnly) return;
            usesInput.value = usesInput.value.replace(/[^0-9]/g, '');
        });

        wrapper.appendChild(select);
        wrapper.appendChild(usesInput);
        wrapper.appendChild(randomBtn);

        div.appendChild(wrapper);
        div.appendChild(descDisplay);
        container.appendChild(div);

        select.dispatchEvent(new Event('change'));
    });
}

document.querySelectorAll('.player-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        playSound('buttonClick');
        document.querySelectorAll('.player-buttons button').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        const numPlayers = parseInt(e.target.dataset.players);
        const colorSection = document.getElementById('color-selection-section');
        if (numPlayers < 4) {
            colorSection.style.display = 'block';
            document.querySelectorAll('.color-choice-input').forEach(cb => {
                cb.checked = false;
                cb.disabled = false;
            });
        } else {
            colorSection.style.display = 'none';
        }
        updateAbilitySelectors();
    });
});

document.querySelectorAll('.color-choice-input').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        playSound('buttonClick');
        const numPlayers = parseInt(document.querySelector('.player-buttons .selected').dataset.players);
        const checkedBoxes = document.querySelectorAll('.color-choice-input:checked');

        if (checkedBoxes.length >= numPlayers) {
            document.querySelectorAll('.color-choice-input:not(:checked)').forEach(cb => cb.disabled = true);
        } else {
            document.querySelectorAll('.color-choice-input').forEach(cb => cb.disabled = false);
        }
        updateAbilitySelectors();
    });
});

document.querySelectorAll('.pawn-count-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        playSound('buttonClick');
        document.querySelectorAll('.pawn-count-buttons button').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
    });
});

document.querySelectorAll('.mode-options label').forEach(label => {
    label.addEventListener('click', () => playSound('buttonClick'));
});


document.getElementById('mode-epic').addEventListener('change', (e) => {
    document.getElementById('ability-selection-section').style.display = e.target.checked ? 'block' : 'none';
});

document.getElementById('mode-codicia').addEventListener('change', (e) => {
    document.getElementById('pawn-value-section').style.display = e.target.checked ? 'block' : 'none';
});

// --- MODO PROGRESO: FUNCIONES DE AYUDA ---
function renderProgressMarkers() {
    if (!gameState.modes.progreso) return;

    gameState.playerColors.forEach(color => {
        const startIdx = gameState.startPoints[color];
        // Marcadores en pasos 14, 28, 42
        const steps = [14, 28, 42];

        steps.forEach((step, i) => {
            const targetIndex = (startIdx + step) % boardMap.generalPath.length;
            const coord = boardMap.generalPath[targetIndex];

            const marker = document.createElement('div');
            marker.className = 'progress-marker';
            marker.style.top = coord.top;
            marker.style.left = coord.left;
            marker.style.color = `var(--color-${color})`;
            marker.textContent = i + 1; // Nivel 1, 2, 3

            boardContainer.appendChild(marker);
        });
    });
}

function getPawnProgressSteps(pawn) {
    if (pawn.state === 'base') return 0;
    if (pawn.finished) return 62; // 56 + 5 + 1

    const pathLength = boardMap.generalPath.length;
    const startPoint = gameState.startPoints[pawn.color];

    if (pawn.state === 'general') {
        if (pawn.pathIndex >= startPoint) {
            return pawn.pathIndex - startPoint;
        } else {
            return (pathLength - startPoint) + pawn.pathIndex;
        }
    }

    if (pawn.state === 'final') {
        return pathLength + pawn.pathIndex + 1;
    }

    return 0; // Default
}

function updatePlayerProgressLevel(color) {
    if (!gameState.modes.progreso) return;

    const pawns = gameState.pawns.filter(p => p.color === color);
    // Calcula pasos de cada ficha
    const steps = pawns.map(p => getPawnProgressSteps(p));
    // Ordena de mayor a menor avance
    steps.sort((a, b) => b - a);

    let newLevel = 0;
    // Umbrales aproximados: 25% (~15), 50% (~30), 75% (~45) de 61 pasos totales
    if (steps[2] > 45) { // 3ra ficha pasó el 75%
        newLevel = 3;
    } else if (steps[1] > 30) { // 2da ficha pasó el 50%
        newLevel = 2;
    } else if (steps[0] > 15) { // 1ra ficha pasó el 25%
        newLevel = 1;
    }

    const oldLevel = gameState.playerLevels[color];
    if (newLevel !== oldLevel) {
        gameState.playerLevels[color] = newLevel;
        if (newLevel > oldLevel) {
            playSound('goal');
            const dict = translations[currentLang];
            showGlobalMessage(`${dict.msgLevelStr}${newLevel}!`, `${color} ${dict.msgLevelUp}`, 'default');
        } else {
            // Perdió nivel (por captura)
            if (oldLevel >= 2 && newLevel < 2) {
                // Pierde escudo si baja de nivel 2
                if (gameState.shieldedPawnId && gameState.shieldedPawnId.startsWith(color)) {
                    removeShield(gameState.shieldedPawnId);
                }
            }
        }
    }
}

function toggleShieldMode() {
    if (gameState.isShieldPlacingMode) {
        gameState.isShieldPlacingMode = false;
        shieldBtn.classList.remove('active');
        cleanMovableHighlights();
        // Re-highlight movable pawns based on dice
        const originalRoll = parseInt(diceEl.dataset.value);
        mostrarMovimientos(gameState.diceRoll, originalRoll);
    } else {
        gameState.isShieldPlacingMode = true;
        shieldBtn.classList.add('active');
        cleanMovableHighlights();

        // Highlight own pawns to receive shield
        const currentPlayer = gameState.playerColors[gameState.currentPlayerIndex];
        const myPawns = gameState.pawns.filter(p => p.color === currentPlayer && p.state !== 'base' && p.state !== 'finished');

        myPawns.forEach(pawn => {
            const el = document.getElementById(pawn.id);
            el.classList.add('movable');
            el.onclick = () => activateShieldOnPawn(pawn);
        });
    }
}

function activateShieldOnPawn(pawn) {
    // Remove existing shield if any for this player
    if (gameState.shieldedPawnId) {
        const oldPawn = document.getElementById(gameState.shieldedPawnId);
        if (oldPawn) oldPawn.classList.remove('shielded');
    }

    gameState.shieldedPawnId = pawn.id;
    const el = document.getElementById(pawn.id);
    el.classList.add('shielded');
    playSound('buttonClick');

    // Reset modes
    gameState.isShieldPlacingMode = false;
    shieldBtn.classList.remove('active');

    // Return to movement logic
    cleanMovableHighlights();
    const originalRoll = parseInt(diceEl.dataset.value);
    mostrarMovimientos(gameState.diceRoll, originalRoll);
}

function removeShield(pawnId) {
    if (gameState.shieldedPawnId === pawnId) {
        gameState.shieldedPawnId = null;
        const el = document.getElementById(pawnId);
        if (el) el.classList.remove('shielded');
    }
}


// --- LÓGICA DEL JUEGO ---

function iniciarJuego() {
    stopBackgroundMusic();

    let numPlayers, currentPlayers, numPawns;

    numPlayers = parseInt(document.querySelector('.player-buttons button.selected').dataset.players);
    if (numPlayers < 4) {
        currentPlayers = Array.from(document.querySelectorAll('.color-choice-input:checked')).map(cb => cb.value);
        if (currentPlayers.length !== numPlayers) {
            alert(`Debes seleccionar exactamente ${numPlayers} colores.`);
            return;
        }
    } else {
        currentPlayers = allPlayerColors.slice(0, numPlayers);
    }
    numPawns = parseInt(document.querySelector('.pawn-count-buttons button.selected').dataset.pawns);

    gameState = {
        numPlayers,
        playerColors: currentPlayers,
        numPawnsPerPlayer: numPawns,
        currentPlayerIndex: 0,
        pawns: [],
        diceRoll: 0,
        canRoll: false,
        isPaused: false,
        modes: {
            epic: document.getElementById('mode-epic').checked,
            codicia: document.getElementById('mode-codicia').checked,
            dominacion: document.getElementById('mode-dominacion').checked,
            progreso: document.getElementById('mode-progreso').checked, // NUEVO MODO
        },
        playerLevels: {}, // Para Modo Progreso
        shieldedPawnId: null, // Para Modo Progreso
        isShieldPlacingMode: false,
        playerIsNpc: {},
        pawnValue: parseInt(document.getElementById('pawn-value').value) || 100,
        scores: { dominacion: {} },
        captureLog: {},
        debts: {},
        earnings: {},
        playerAbilities: {},
        playerState: {},
        playerTurnCounts: {},
        entryPoints: {
            morado: boardMap.generalPath.findIndex(c => c.isEntry === 'morado'),
            azul: boardMap.generalPath.findIndex(c => c.isEntry === 'azul'),
            verde: boardMap.generalPath.findIndex(c => c.isEntry === 'verde'),
            amarillo: boardMap.generalPath.findIndex(c => c.isEntry === 'amarillo')
        },
        startPoints: {
            morado: boardMap.generalPath.findIndex(c => c.isStart === 'morado'),
            azul: boardMap.generalPath.findIndex(c => c.isStart === 'azul'),
            verde: boardMap.generalPath.findIndex(c => c.isStart === 'verde'),
            amarillo: boardMap.generalPath.findIndex(c => c.isStart === 'amarillo')
        },
        consecutiveSixes: {},
        lastMovedPawnId: null,
        isSplittingMove: false,
        splitMoves: [],
        firstPawnMovedInSplit: null,
    };

    currentPlayers.forEach(color => {
        const npcCheckbox = document.getElementById(`npc-${color}`);
        gameState.playerIsNpc[color] = npcCheckbox ? npcCheckbox.checked : false;
        gameState.playerLevels[color] = 0; // Nivel inicial
    });

    if (gameState.modes.epic) {
        abilityDisplay.style.display = 'block';
        document.querySelectorAll('#ability-selection-container select').forEach(select => {
            const color = select.dataset.color;
            if (!color) return;
            const abilityId = select.value;
            const usesInput = document.getElementById(`uses-${color}`);
            const dictAbils = getEpicAbilities();
            let usesValue = dictAbils[abilityId].uses;

            if (usesInput && !usesInput.readOnly) {
                const parsedUses = parseInt(usesInput.value, 10);
                if (!isNaN(parsedUses) && parsedUses > 0) {
                    usesValue = parsedUses;
                }
            }

            gameState.playerAbilities[color] = {
                id: abilityId,
                name: dictAbils[abilityId].name,
                desc: dictAbils[abilityId].desc,
                uses: usesValue,
            };
        });
    }

    // Renderizar marcadores de progreso
    document.querySelectorAll('.progress-marker').forEach(e => e.remove());
    renderProgressMarkers();

    document.getElementById('finished-counters-container').innerHTML = '';

    if (gameState.modes.codicia) {
        currentPlayers.forEach(p1 => {
            gameState.captureLog[p1] = {};
            gameState.debts[p1] = {};
            currentPlayers.forEach(p2 => {
                if (p1 !== p2) {
                    gameState.captureLog[p1][p2] = 0;
                    gameState.debts[p1][p2] = 0;
                }
            });
        });
        gameState.earnings = {};
        currentPlayers.forEach(p => gameState.earnings[p] = 0);
        createCaptureLogDisplays();
        createEarningsDisplays();
    }

    currentPlayers.forEach(color => {
        gameState.scores.dominacion[color] = 0;
        gameState.consecutiveSixes[color] = 0;
        gameState.playerState[color] = { firstSummoned: false };
        gameState.playerTurnCounts[color] = 0;

        const counterEl = document.createElement('div');
        counterEl.id = `finished-counter-${color}`;
        counterEl.className = 'finished-counter';
        document.getElementById('finished-counters-container').appendChild(counterEl);

        for (let i = 0; i < gameState.numPawnsPerPlayer; i++) {
            const pawnId = `${color}-${i}`;
            gameState.pawns.push({
                id: pawnId,
                color: color,
                state: 'base',
                pathIndex: i,
                finished: false,
            });

            const pawnEl = document.createElement('div');
            pawnEl.id = pawnId;
            pawnEl.className = `pawn ${color}`;
            pawnEl.style.display = 'none';
            boardContainer.appendChild(pawnEl);
        }
        updateBaseLayout(color);
    });

    updateModeDisplays();

    menuScreen.style.opacity = '0';
    document.getElementById('game-config-wrapper').style.display = 'none';

    setTimeout(() => {
        menuScreen.style.display = 'none';
        gameScreen.style.display = 'flex';

        const overlay = document.createElement('div');
        overlay.className = 'pre-game-overlay';
        overlay.textContent = t('preGameChoosing');
        boardContainer.appendChild(overlay);

        setTimeout(() => {
            gameState.currentPlayerIndex = Math.floor(Math.random() * numPlayers);
            boardContainer.removeChild(overlay);
            startGameCountdown();
        }, 2000);

    }, 500);
}

async function startGameCountdown() {
    playSound('gameStart');
    countdownOverlay.style.display = 'flex';
    const steps = ["3", "2", "1", t('preGameReady')];
    for (const step of steps) {
        playSound('buttonClick');
        if (step === t('preGameReady')) {
            countdownOverlay.innerHTML = `<span class="countdown-subtitle">${step}</span>`;
        } else {
            countdownOverlay.innerHTML = `<span>${step}</span>`;
        }
        countdownOverlay.style.animation = 'none';
        countdownOverlay.offsetHeight; // Trigger reflow
        countdownOverlay.style.animation = 'pop-in-and-fade 1.2s ease-out forwards';
        await new Promise(res => setTimeout(res, 1200));
    }
    countdownOverlay.style.display = 'none';
    siguienteTurno(false, true); // initial turn setup
}

function updateBaseLayout(color) {
    const pawnsInBase = gameState.pawns.filter(p => p.color === color && p.state === 'base');

    const isMobile = window.innerWidth <= 768;
    const basePosition = isMobile ? mobileBoardMapBases[color] : boardMap.bases[color];

    pawnsInBase.forEach((pawn, index) => {
        const pawnEl = document.getElementById(pawn.id);
        if (pawnEl) {
            const offset = index * 4;
            pawnEl.style.top = basePosition.top;
            pawnEl.style.left = basePosition.left;
            pawnEl.style.transform = `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px))`;
            pawnEl.style.zIndex = 10 + index;
            pawnEl.style.display = 'block';
        }
    });
}


function createCaptureLogDisplays() {
    const container = document.getElementById('capture-log-container');
    if (!container || !gameState.modes.codicia) return;
    container.innerHTML = '';

    gameState.playerColors.forEach(windowOwnerColor => {
        const captureWindow = document.createElement('div');
        captureWindow.className = 'capture-log-window';
        captureWindow.id = `capture-log-window-${windowOwnerColor}`;

        let html = `<h4>${t('hudCaptures')}</h4>`;
        html += `<div class="transaction-grid">`;

        html += `<div class="transaction-grid-header"></div>`;
        html += `<div class="transaction-grid-header">✔️</div>`;
        html += `<div class="transaction-grid-header">❌</div>`;

        gameState.playerColors.forEach(otherPlayer => {
            if (otherPlayer !== windowOwnerColor) {
                const playerName = t('team' + otherPlayer.charAt(0).toUpperCase() + otherPlayer.slice(1));
                html += `<div class="debt-player-label" style="color: var(--color-${otherPlayer}-light);">${playerName}:</div>`;
                // ID ÚNICO AÑADIDO:
                html += `<div class="debt-value" id="${windowOwnerColor}-captures-made-on-${otherPlayer}">0</div>`;
                // ID ÚNICO AÑADIDO:
                html += `<div class="debt-value" id="${windowOwnerColor}-captures-received-from-${otherPlayer}">0</div>`;
            }
        });

        html += `</div>`;

        captureWindow.innerHTML = html;
        container.appendChild(captureWindow);
    });
}

function updateCaptureLogDisplays() {
    if (!gameState.modes.codicia) return;

    gameState.playerColors.forEach(windowOwner => {
        gameState.playerColors.forEach(otherPlayer => {
            if (windowOwner !== otherPlayer) {
                // AHORA BUSCA EL ID CORRECTO Y ÚNICO
                const capturesMadeEl = document.getElementById(`${windowOwner}-captures-made-on-${otherPlayer}`);
                if (capturesMadeEl) {
                    // Esta lógica es correcta: Muestra las capturas hechas por el "dueño de la ventana" (windowOwner)
                    capturesMadeEl.textContent = gameState.captureLog[windowOwner][otherPlayer];
                }
                // AHORA BUSCA EL ID CORRECTO Y ÚNICO
                const capturesReceivedEl = document.getElementById(`${windowOwner}-captures-received-from-${otherPlayer}`);
                if (capturesReceivedEl) {
                    // Esta lógica es correcta: Muestra las capturas hechas por el "otro jugador" (otherPlayer)
                    capturesReceivedEl.textContent = gameState.captureLog[otherPlayer][windowOwner];
                }
            }
        });
    });
}

function createEarningsDisplays() {
    const container = document.getElementById('earnings-container');
    if (!container || !gameState.modes.codicia) return;
    container.innerHTML = '';
    gameState.playerColors.forEach(color => {
        const earningsWindow = document.createElement('div');
        earningsWindow.className = 'earnings-window';
        earningsWindow.id = `earnings-window-${color}`;
        earningsWindow.innerHTML = `
                <div class="earnings-label">${t('hudEarnings')}</div> <div class="earnings-value">💰 <span>0</span></div>
            `;
        container.appendChild(earningsWindow);
    });
}

function updateEarningsDisplay(color) {
    if (!gameState.modes.codicia) return;
    const el = document.getElementById(`earnings-window-${color}`);
    if (el) {
        // 1. Calcular total ganado (lo que has comido)
        const totalEarned = gameState.earnings[color] || 0;

        // 2. Calcular total que debes (lo que te han comido)
        let totalOwed = 0;
        if (gameState.debts[color]) {
            for (const otherPlayer in gameState.debts[color]) {
                totalOwed += gameState.debts[color][otherPlayer];
            }
        }

        // 3. Calcular saldo neto (Ganado - Debido)
        const netBalance = totalEarned - totalOwed;

        // 4. Actualizar la UI
        const valueEl = el.querySelector('.earnings-value span');
        valueEl.textContent = netBalance;

        // 5. Cambiar color si es negativo (Rojo) o positivo (Verde)
        if (netBalance < 0) {
            valueEl.style.color = '#FF5733'; // Rojo
        } else if (netBalance > 0) {
            valueEl.style.color = '#2ECC71'; // Verde
        } else {
            valueEl.style.color = '#FFFFFF'; // Blanco
        }
    }
}

function updateModeDisplays() {
    const container = document.getElementById('game-modes-display');
    container.innerHTML = '';
}

function showGlobalMessage(mainText, subText = '', type = 'default') {
    const mainEl = globalMessageDisplay.querySelector('.global-message-main');
    const subEl = globalMessageDisplay.querySelector('.global-message-sub');

    mainEl.textContent = mainText;
    subEl.textContent = subText;
    subEl.style.display = subText ? 'block' : 'none';

    let color = '#FFFFFF'; // Blanco por defecto para todos los mensajes
    if (type === 'penalty') color = '#ff4747'; // Rojo para penalización
    else if (type === 'capture') color = '#ff4747'; // Rojo para captura

    globalMessageDisplay.style.color = color;
    globalMessageDisplay.style.display = 'flex';
    globalMessageDisplay.style.animation = 'none';
    globalMessageDisplay.offsetHeight; /* trigger reflow */
    globalMessageDisplay.style.animation = 'pop-in-and-fade 2.5s ease-out forwards';
}

async function lanzarDado() {
    if (!gameState.canRoll || gameState.isPaused) return;
    playSound('diceRoll');
    document.getElementById('dice-text-prompt').style.visibility = 'hidden';
    gameState.canRoll = false;
    diceContainer.classList.remove('clickable');
    diceMessageEl.textContent = '';
    diceMessageEl.onclick = null;
    diceMessageEl.style.cursor = 'default';

    const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
    let finalRoll = Math.floor(Math.random() * 6) + 1;
    const playerAbility = gameState.playerAbilities[currentPlayerColor];

    if (finalRoll === 6) {
        gameState.consecutiveSixes[currentPlayerColor]++;
    }

    if (gameState.consecutiveSixes[currentPlayerColor] === 3) {
        const randomX = (Math.floor(Math.random() * 8) + 4) * 90;
        const randomY = (Math.floor(Math.random() * 8) + 4) * 90;

        await new Promise(resolve => {
            let timeline = gsap.timeline({ onComplete: resolve });
            timeline.fromTo('.cube', { z: 0 }, { duration: 0.6, z: 80, ease: 'power2.out', yoyo: true, repeat: 1 }, 0);
            timeline.to('.cube', { duration: 1.2, rotationX: randomX, rotationY: randomY, ease: 'back.out(1.2)' }, 0);
        });

        diceEl.dataset.value = 6;

        playSound('penalty');
        diceMessageEl.textContent = t('diceTriple6');
        showGlobalMessage(t('msgToobMany6'), t('msgTooMany6Desc'), 'penalty');
        gameState.consecutiveSixes[currentPlayerColor] = 0;

        if (gameState.lastMovedPawnId) {
            const pawnToReturn = gameState.pawns.find(p => p.id === gameState.lastMovedPawnId);
            if (pawnToReturn && pawnToReturn.state !== 'base') {
                pawnToReturn.state = 'base';
                pawnToReturn.finished = false;
                await updatePawnPosition(pawnToReturn);
                updateBaseLayout(pawnToReturn.color);
                updateAllPawnStacks();
                updateFinishedCounters();
            }
        }
        setTimeout(() => {
            document.getElementById('dice-text-prompt').style.visibility = 'visible';
            diceMessageEl.textContent = t('diceRollAgain');
            gameState.canRoll = true;
            diceContainer.classList.add('clickable');
        }, 1500);
        return;
    }

    if (finalRoll !== 6) {
        gameState.consecutiveSixes[currentPlayerColor] = 0;
    }

    // --- Animación del dado ---
    const rotaciones = [
        { rx: 0, ry: 0 }, { rx: 0, ry: 90 }, { rx: 0, ry: 180 }, { rx: 0, ry: -90 }, { rx: -90, ry: 0 }, { rx: 90, ry: 0 }
    ];
    let rot = rotaciones[finalRoll - 1];

    await new Promise(resolve => {
        let timeline = gsap.timeline({ onComplete: resolve });
        timeline.fromTo('.cube', { z: 0 }, { duration: 0.75, z: 80, ease: 'power2.out', yoyo: true, repeat: 1 }, 0);
        timeline.to('.cube', { duration: 1.5, rotationX: rot.rx + 1080, rotationY: rot.ry + 1080, ease: 'back.out(1.2)' }, 0);
    });

    diceEl.dataset.value = finalRoll;

    let moveAmount = finalRoll;
    if (gameState.modes.epic && playerAbility.id === 'abSpeed') {
        moveAmount++;
        diceMessageEl.textContent = `${finalRoll} + 1 = ${moveAmount}!`;
    }

    gameState.diceRoll = moveAmount;
    gameState.grantExtraTurn = (finalRoll === 6);

    updateTurnIndicatorWithRoll(moveAmount, finalRoll);

    // --- LÓGICA DE JUGADOR HUMANO VS. NPC ---
    if (!gameState.playerIsNpc[currentPlayerColor]) {
        const activePawns = gameState.pawns.filter(p => p.color === currentPlayerColor && (p.state === 'general' || p.state === 'final' || p.state === 'portal-nexus')).length;
        const canUseStrategicMaster = gameState.modes.epic &&
            playerAbility?.id === 'abStratMaster' &&
            activePawns >= 2 &&
            finalRoll % 2 === 0;

        if (canUseStrategicMaster) {
            showStrategicMasterDecision(moveAmount, finalRoll);
            // Hacemos el mensaje del dado 'clicable' para reabrir
            // diceMessageEl.textContent = "¡Decisión! (clic para ver)";
            diceMessageEl.textContent = t('decisionStrategicTitle') + "!";
            diceMessageEl.onclick = () => showStrategicMasterDecision(moveAmount, finalRoll);
            diceMessageEl.style.cursor = 'pointer';
        } else {
            mostrarMovimientos(moveAmount, finalRoll);
        }
    } else {
        // Es el turno del NPC, llama a su cerebro
        await new Promise(res => setTimeout(res, 500)); // Pausa para ver el resultado del dado
        runNpcDecision(moveAmount, finalRoll);
    }
}

function mostrarMovimientos(numeroDado, originalRoll, isSplit = false) {
    // La lógica de decisión ya se hizo en lanzarDado,
    // esta función solo llama a executeNormalMove.
    executeNormalMove(numeroDado, originalRoll, isSplit);
}

function executeNormalMove(numeroDado, originalRoll, isSplit = false) {
    const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
    let movablePawns = findMovablePawns(numeroDado, currentPlayerColor, gameState.pawns, originalRoll);

    if (isSplit) {
        // Si es un movimiento dividido, no puedes sacar de base
        // Y no puedes mover la ficha que acabas de mover
        movablePawns = movablePawns.filter(p => p.state !== 'base' && p.id !== gameState.firstPawnMovedInSplit);
    }

    if (movablePawns.length === 0) {
        diceMessageEl.textContent = t('diceNoMoves');
        setTimeout(() => {
            // Si era un split y no hay 2do mov, limpiar estado y terminar turno
            if (isSplit) {
                gameState.isSplittingMove = false;
                gameState.firstPawnMovedInSplit = null;
            }
            siguienteTurno(gameState.grantExtraTurn);
        }, 1500);
        return;
    }

    setTimeout(() => {
        // No ocultar el HUD aquí, se oculta con temporizador
        setTimeout(() => {
            const movablePawnsExist = document.querySelectorAll('.pawn.movable').length > 0;
            if (movablePawnsExist) {
                failsafeBtn.style.visibility = 'visible';
                failsafeBtn.style.opacity = '1';
            }
        }, 1500);

    }, 1500);

    movablePawns.forEach(pawn => {
        const pawnEl = document.getElementById(pawn.id);
        pawnEl.classList.add('movable');
        pawnEl.onclick = () => handlePawnClick(pawn, numeroDado);
    });
}

function showStrategicMasterDecision(numeroDado, originalRoll) {
    const decisionEl = document.getElementById('strategic-master-decision');
    const move1 = Math.floor(originalRoll / 2);
    const move2 = originalRoll - move1;

    decisionEl.innerHTML = `
        <p>${t('decisionStrategicTitle')}</p>
        <button id="strategic-move-normal">${t('decisionStrategicNormal', { steps: numeroDado })}</button>
        <button id="strategic-split">${t('decisionStrategicSplit', { s1: move1, s2: move2 })}</button>
        <button id="strategic-close" style="background: #555; margin-top: 10px;">${t('decisionClose')}</button>
    `;

    decisionEl.style.display = 'flex';
    decisionEl.style.top = `50%`;
    decisionEl.style.left = `50%`;
    decisionEl.style.transform = 'translate(-50%, -50%)';

    document.getElementById('strategic-move-normal').onclick = () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        diceMessageEl.onclick = null;
        diceMessageEl.style.cursor = 'default';
        mostrarMovimientos(numeroDado, originalRoll);
    };
    document.getElementById('strategic-split').onclick = () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        diceMessageEl.onclick = null;
        diceMessageEl.style.cursor = 'default';
        gameState.isSplittingMove = true;
        gameState.splitMoves = [move1, move2];
        diceMessageEl.textContent = t('msgMoveSteps', { steps: move1 });
        mostrarMovimientos(move1, originalRoll, true);
    };
    document.getElementById('strategic-close').onclick = () => {
        playSound('closeWindow');
        decisionEl.style.display = 'none';
    };
}

// Helper function to calculate a pawn's new state without side effects
function calculateNewPawnPosition(pawnToMove, numeroDado) {
    const newPawn = JSON.parse(JSON.stringify(pawnToMove));
    if (newPawn.state === 'base') {
        newPawn.state = 'general';
        newPawn.pathIndex = gameState.startPoints[newPawn.color];
    } else if (newPawn.state === 'general') {
        const entryPoint = gameState.entryPoints[newPawn.color];
        const currentIdx = newPawn.pathIndex;
        const pathLength = boardMap.generalPath.length;
        let stepsToEntry = (entryPoint >= currentIdx) ? entryPoint - currentIdx : (pathLength - currentIdx) + entryPoint;

        if (numeroDado > stepsToEntry) {
            newPawn.state = 'final';
            newPawn.pathIndex = numeroDado - stepsToEntry - 1;
        } else {
            newPawn.pathIndex = (currentIdx + numeroDado) % pathLength;
        }
    } else if (newPawn.state === 'final') {
        const finalPathLength = boardMap.finalPaths[newPawn.color].length;
        const goalIndex = finalPathLength - 1;
        const newRawIndex = newPawn.pathIndex + numeroDado;

        if (newRawIndex === goalIndex) {
            newPawn.state = 'finished';
            newPawn.finished = true;
            newPawn.pathIndex = goalIndex;
        } else if (newRawIndex > goalIndex) {
            // MODIFICACIÓN PROGRESO: Nivel 3 sin rebote
            const level = gameState.playerLevels[newPawn.color] || 0;
            if (gameState.modes.progreso && level >= 3) {
                newPawn.state = 'finished';
                newPawn.finished = true;
                newPawn.pathIndex = goalIndex;
            } else {
                // Rebote normal
                const overshoot = newRawIndex - goalIndex;
                newPawn.pathIndex = goalIndex - overshoot;
            }
        } else {
            newPawn.pathIndex = newRawIndex;
        }
    }

    return newPawn;
}

// Helper function to find all legally movable pawns
function findMovablePawns(numeroDado, playerColor, pawnsState, originalRoll) {
    const movablePawns = [];
    const playerAbility = gameState.playerAbilities[playerColor] || {};
    let pawnsToConsider = pawnsState.filter(p => p.color === playerColor && !p.finished);

    pawnsToConsider.forEach(pawn => {
        const canSummonWithAbility = gameState.modes.epic && playerAbility.id === 'abMasterSumm' && originalRoll === 3 && playerAbility.uses > 0 && gameState.playerState[playerColor].firstSummoned;

        // MODIFICACIÓN PROGRESO: Nivel 1 permite sacar con 5
        const level = gameState.playerLevels[playerColor] || 0;
        const canSummonWithProgress = gameState.modes.progreso && level >= 1 && originalRoll === 5;

        if (pawn.state === 'base') {
            if (originalRoll === 1 || originalRoll === 6 || canSummonWithAbility || canSummonWithProgress) {
                const startSquareIndex = gameState.startPoints[playerColor];
                const pawnsOnStartSquare = pawnsState.filter(p => p.state === 'general' && p.pathIndex === startSquareIndex);
                if (pawnsOnStartSquare.length < 3) {
                    movablePawns.push(pawn);
                }
            }
        } else if (pawn.state === 'portal-nexus') {
            if (originalRoll === 1 || originalRoll === 6) {
                movablePawns.push(pawn);
            }
        } else if (pawn.state !== 'portal') { // 'portal' es un estado temporal
            let isPathBlocked = false;
            if (pawn.state === 'general') {
                for (let i = 1; i < numeroDado; i++) {
                    const checkIndex = (pawn.pathIndex + i) % boardMap.generalPath.length;
                    const pawnsOnSquare = pawnsState.filter(p => p.state === 'general' && p.pathIndex === checkIndex);
                    if (pawnsOnSquare.length >= 3) {
                        isPathBlocked = true;
                        break;
                    }
                }
            }

            if (!isPathBlocked) {
                const newPos = calculateNewPawnPosition(pawn, numeroDado);
                if (newPos.state !== 'finished') {
                    let pawnsOnDestination = [];
                    if (newPos.state === 'general') {
                        pawnsOnDestination = pawnsState.filter(p => p.state === 'general' && p.pathIndex === newPos.pathIndex);
                    } else if (newPos.state === 'final') {
                        pawnsOnDestination = pawnsState.filter(p => p.state === 'final' && p.color === newPos.color && p.pathIndex === newPos.pathIndex);
                    }

                    if (pawnsOnDestination.length < 3) {
                        movablePawns.push(pawn);
                    }
                } else {
                    movablePawns.push(pawn);
                }
            }
        }
    });
    return movablePawns;
}

async function handlePawnClick(pawn, numeroDado) {
    if (gameState.isShieldPlacingMode) {
        activateShieldOnPawn(pawn);
        return;
    }

    failsafeBtn.style.visibility = 'hidden';
    failsafeBtn.style.opacity = '0';
    showHudBtn.style.visibility = 'hidden';
    showHudBtn.style.opacity = '0';
    clearTimeout(hudTimeout); // Cancelar el auto-cierre si el jugador actúa
    hud.style.display = 'none';

    // Hide Shield Button during animation
    shieldBtn.style.display = 'none';

    const originalRoll = parseInt(diceEl.dataset.value);
    const playerAbility = gameState.playerAbilities[pawn.color];

    if (pawn.state === 'portal-nexus') {
        exitPortalNexus(pawn);
        return;
    }

    const canUsePortalAbility = gameState.modes.epic && playerAbility.id === 'abPortalMad' && playerAbility.uses > 0;
    if (pawn.state === 'general') {
        const currentCasilla = boardMap.generalPath[pawn.pathIndex];
        if (currentCasilla.isPortal && (originalRoll === 1 || originalRoll === 6 || canUsePortalAbility)) {
            showPortalDecision(pawn, numeroDado, canUsePortalAbility && !(originalRoll === 1 || originalRoll === 6));
            return;
        }
    }
    await movePawn(pawn, numeroDado);
}

function showPortalDecision(pawn, numeroDado, useAbility) {
    cleanMovableHighlights();
    const decisionEl = document.getElementById('portal-decision');

    decisionEl.innerHTML = `
            <p>${t('decisionPortalTitle')}</p>
            <button id="portal-move-normal">${t('decisionPortalMove')}</button>
            <button id="portal-use-portal">${t('decisionPortalUse')} ${useAbility ? t('decisionPortalAbility') : ''}</button>
        `;

    decisionEl.style.display = 'flex';
    decisionEl.style.top = '50%';
    decisionEl.style.left = '50%';
    decisionEl.style.transform = 'translate(-50%, -50%)';

    document.getElementById('portal-move-normal').onclick = async () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        await movePawn(pawn, numeroDado);
    };
    document.getElementById('portal-use-portal').onclick = () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        const playerAbility = gameState.playerAbilities[pawn.color];
        if (useAbility) {
            playerAbility.uses--;
            showGlobalMessage(t('abilUsedStr'), `${playerAbility.name}: ${playerAbility.uses} ${t('remainingStr')}`);
            updateAbilityUI(pawn.color);
        }
        travelThroughPortal(pawn);
    };
}

async function travelThroughPortal(pawn) {
    const pawnsInNexus = gameState.pawns.filter(p => p.state === 'portal' || p.state === 'portal-nexus');
    const dict = translations[currentLang];
    if (pawnsInNexus.length >= 3) {
        showGlobalMessage(dict.msgPortalPRej, dict.msgPortalPRejDesc, "penalty");
        playSound('penalty');
        cleanMovableHighlights();

        const originalRoll = parseInt(diceEl.dataset.value);
        mostrarMovimientos(gameState.diceRoll, originalRoll);
        return;
    }

    cleanMovableHighlights();
    showGlobalMessage(dict.msgPortalUse, dict.msgPortalUseDesc, "portal");
    const startCasilla = boardMap.generalPath[pawn.pathIndex];
    const pawnEl = document.getElementById(pawn.id);

    playSound('portal');
    pawnEl.classList.add('portal-enter');

    await new Promise(res => setTimeout(res, 500));

    pawn.state = 'portal-nexus';
    pawn.pathIndex = -1;
    pawn.originPortalId = startCasilla.isPortal;
    await updatePawnPosition(pawn);
    updateAllPawnStacks();
    pawnEl.classList.remove('portal-enter');

    await checkCaptureInNexus(pawn);

    siguienteTurno(gameState.grantExtraTurn);
}

async function exitPortalNexus(pawn) {
    cleanMovableHighlights();
    const dict = translations[currentLang];
    showGlobalMessage(t('msgPortalExit'), "", "portal");

    const endPortalId = boardMap.portalLinks[pawn.originPortalId];
    const endCasillaIndex = boardMap.generalPath.findIndex(c => c.isPortal === endPortalId);
    const pawnEl = document.getElementById(pawn.id);

    pawn.originPortalId = null;

    playSound('portal');

    const endCasilla = boardMap.generalPath[endCasillaIndex];
    pawnEl.style.top = endCasilla.top;
    pawnEl.style.left = endCasilla.left;

    pawn.state = 'general';
    pawn.pathIndex = endCasillaIndex;

    pawnEl.classList.add('portal-exit');
    await new Promise(res => setTimeout(res, 600));
    pawnEl.classList.remove('portal-exit');

    updateAllPawnStacks();

    const wasAttackedOnExit = await applyReactiveAbilities(pawn);
    if (!wasAttackedOnExit) await checkCapture(pawn);

    // MODO PROGRESO UPDATE
    updatePlayerProgressLevel(pawn.color);

    siguienteTurno(gameState.grantExtraTurn);
}

function showEntryDecision(pawn, remainingSteps) {
    const decisionEl = document.getElementById('entry-decision');
    const pawnEl = document.getElementById(pawn.id);

    let html = `<p>${t('decisionMetaTitle')}</p>`;
    html += `
        <p>${t('decisionMetaDesc', { steps: remainingSteps })}</p>
        <button id="entry-enter-meta">${t('decisionMetaEnter')}</button>
        <button id="entry-continue-lap">${t('decisionMetaContinue')}</button>
    `;
    decisionEl.innerHTML = html;

    // Centra el popup
    decisionEl.style.top = '50%';
    decisionEl.style.left = '50%';
    decisionEl.style.transform = 'translate(-50%, -50%)';
    decisionEl.style.display = 'flex';

    document.getElementById('entry-enter-meta').onclick = () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        pawn.state = 'final'; // Asigna el estado
        resumeMoveInFinalPath(pawn, remainingSteps); // Llama a la función de mover
    };

    document.getElementById('entry-continue-lap').onclick = () => {
        playSound('buttonClick');
        decisionEl.style.display = 'none';
        // El estado sigue 'general'
        resumeMoveInGeneralPath(pawn, remainingSteps); // Llama a la función de mover
    };
}

async function resumeMoveInFinalPath(pawn, remainingSteps) {
    const pawnEl = document.getElementById(pawn.id);
    const finalPath = boardMap.finalPaths[pawn.color];
    const goalIndex = finalPath.length - 1;

    const targetIndex = remainingSteps - 1;
    let pathCoords = [];

    // MODIFICACIÓN PROGRESO: Nivel 3 sin rebote
    const level = gameState.playerLevels[pawn.color] || 0;
    const noRebound = gameState.modes.progreso && level >= 3;

    if (targetIndex > goalIndex && !noRebound) {
        // --- Rebotar ---
        const overshoot = targetIndex - goalIndex;
        const finalPosIndex = goalIndex - overshoot; // Puede ser negativo

        // 1. Animar hasta la meta
        for (let i = 0; i <= goalIndex; i++) pathCoords.push(finalPath[i]);

        if (finalPosIndex < 0) {
            // --- EXPULSADO del camino ---
            pawn.state = 'general';
            const entryPointIndex = gameState.entryPoints[pawn.color];

            // 2. Animar de regreso a la casilla 0
            for (let i = goalIndex - 1; i >= 0; i--) pathCoords.push(finalPath[i]);

            // 3. Animar a la casilla de entrada
            pathCoords.push(boardMap.generalPath[entryPointIndex]);

            // 4. Calcular y animar hacia atrás en el camino general
            // finalPosIndex = -1 -> stepsBack = 0 (aterriza en entryPoint)
            // finalPosIndex = -2 -> stepsBack = 1 (aterriza 1 antes de entryPoint)
            const stepsBack = Math.abs(finalPosIndex) - 1;
            let currentGeneralIndex = entryPointIndex;

            for (let i = 0; i <= stepsBack; i++) {
                currentGeneralIndex = (entryPointIndex - (i + 1) + boardMap.generalPath.length) % boardMap.generalPath.length;
                pathCoords.push(boardMap.generalPath[currentGeneralIndex]);
            }
            pawn.pathIndex = currentGeneralIndex;

        } else {
            // --- Rebote normal, se queda en la meta ---
            for (let i = goalIndex - 1; i >= finalPosIndex; i--) pathCoords.push(finalPath[i]);
            pawn.pathIndex = finalPosIndex;
        }

    } else {
        // Movimiento normal sin rebote O con nivel 3
        const realSteps = noRebound ? Math.min(targetIndex, goalIndex) : targetIndex;
        for (let i = 0; i <= realSteps; i++) pathCoords.push(finalPath[i]);
        pawn.pathIndex = realSteps;
    }

    playSound('move');
    for (const coord of pathCoords) {
        pawnEl.style.top = coord.top;
        pawnEl.style.left = coord.left;
        await new Promise(res => setTimeout(res, 180));
    }

    // Asignar estado final
    if (pawn.state === 'general') {
        // Fue expulsado, comprobar captura
        updateAllPawnStacks();
        const wasAttacked = await applyReactiveAbilities(pawn);
        if (!wasAttacked) {
            await checkCapture(pawn);
        }
    } else if (pawn.pathIndex === goalIndex) {
        // Aterrizó en la meta
        pawn.finished = true;
        pawnEl.classList.add('arrived');
        showGlobalMessage(t('msgGoalReach'), "", "goal");
        updateFinishedCounters();
        setTimeout(() => pawnEl.style.display = 'none', 1000);
    }

    updateAllPawnStacks();
    // MODO PROGRESO UPDATE
    updatePlayerProgressLevel(pawn.color);

    if (!gameState.winner) checkWinCondition();
    if (!gameState.winner) siguienteTurno(gameState.grantExtraTurn);
}

async function resumeMoveInGeneralPath(pawn, remainingSteps) {
    const pawnEl = document.getElementById(pawn.id);
    const pathLength = boardMap.generalPath.length;

    // La ficha ya está en la casilla de entrada (pawn.pathIndex)
    // Animar el movimiento paso a paso
    playSound('move');
    for (let i = 1; i <= remainingSteps; i++) {
        const nextIndex = (pawn.pathIndex + 1) % pathLength;
        const coord = boardMap.generalPath[nextIndex];

        pawnEl.style.top = coord.top;
        pawnEl.style.left = coord.left;
        pawn.pathIndex = nextIndex;
        await new Promise(res => setTimeout(res, 180));
    }

    updateAllPawnStacks();
    const wasAttacked = await applyReactiveAbilities(pawn);
    if (!wasAttacked && !pawn.finished) {
        await checkCapture(pawn);
    }

    // MODO PROGRESO UPDATE
    updatePlayerProgressLevel(pawn.color);

    if (!gameState.winner) checkWinCondition();
    if (!gameState.winner) siguienteTurno(gameState.grantExtraTurn);
}

async function movePawn(pawn, numeroDado) {
    failsafeBtn.style.visibility = 'hidden';
    failsafeBtn.style.opacity = '0';
    showHudBtn.style.visibility = 'hidden';
    showHudBtn.style.opacity = '0';
    cleanMovableHighlights();
    gameState.lastMovedPawnId = pawn.id;
    const originalRoll = parseInt(diceEl.dataset.value);
    const playerAbility = gameState.playerAbilities[pawn.color];

    const originalState = pawn.state;
    const originalIndex = pawn.pathIndex;
    const wasFinished = pawn.finished;

    const pawnEl = document.getElementById(pawn.id);

    if (originalState === 'base') {
        playSound('summon');
        const canSummonWithAbility = gameState.modes.epic && playerAbility.name === 'Invocador Maestro' && originalRoll === 3 && playerAbility.uses > 0 && gameState.playerState[pawn.color].firstSummoned;
        if (canSummonWithAbility) {
            playerAbility.uses--;
            showGlobalMessage(t('abilUsedStr'), `${playerAbility.name}: ${playerAbility.uses} ${t('remainingStr')}`);
        }

        pawn.state = 'general';
        pawn.pathIndex = gameState.startPoints[pawn.color];

        const startPos = boardMap.generalPath[pawn.pathIndex];
        pawnEl.style.top = startPos.top;
        pawnEl.style.left = startPos.left;
        pawnEl.classList.add('spawn-rotate');
        await new Promise(res => setTimeout(res, 600));
        pawnEl.classList.remove('spawn-rotate');

        updateBaseLayout(pawn.color);
        gameState.playerState[pawn.color].firstSummoned = true;

        const pawnsOnStartSquare = gameState.pawns.filter(p => p.id !== pawn.id && p.state === 'general' && p.pathIndex === pawn.pathIndex);
        const enemiesOnStart = pawnsOnStartSquare.filter(p => p.color !== pawn.color);
        if (enemiesOnStart.length === 1 && pawnsOnStartSquare.length === 1) {
            await executeCapture(pawn, enemiesOnStart[0]);
        }

        updateAllPawnStacks();

    } else if (originalState === 'final') {
        const pathCoords = [];
        const finalPath = boardMap.finalPaths[pawn.color];
        const finalPathLen = finalPath.length;
        const goalIndex = finalPathLen - 1;
        let currentAnimationIndex = originalIndex;
        let direction = 1;

        let newPawnFinalState = 'final'; // Asumimos que nos quedamos en la meta
        let newPawnFinalIndex = -1;

        // MODIFICACIÓN PROGRESO: Nivel 3 sin rebote
        const level = gameState.playerLevels[pawn.color] || 0;
        const noRebound = gameState.modes.progreso && level >= 3;

        playSound('move');

        for (let i = 1; i <= numeroDado; i++) {
            let nextIndex = currentAnimationIndex + direction;

            if (nextIndex > goalIndex) {
                if (noRebound) {
                    // Si tiene nivel 3, se detiene en la meta
                    nextIndex = goalIndex;
                    pathCoords.push(finalPath[nextIndex]);
                    // No consume más movimientos
                    break;
                } else {
                    // --- Llegó al final, anima y revierte ---
                    direction = -1;
                    nextIndex = goalIndex - 1; // Primer paso del rebote
                    pathCoords.push(finalPath[goalIndex]); // Añade la casilla de meta
                    pathCoords.push(finalPath[nextIndex]); // Añade el primer paso de rebote
                }
            } else if (nextIndex < 0) {
                // --- *** EXPULSADO DEL CAMINO FINAL *** ---
                newPawnFinalState = 'general';
                const entryPointIndex = gameState.entryPoints[pawn.color];

                // 1. Animar a la casilla '0' y a la casilla de entrada
                pathCoords.push(finalPath[0]);
                pathCoords.push(boardMap.generalPath[entryPointIndex]);

                // 2. Calcular dónde aterriza en el camino general
                const stepsLeftToMove = numeroDado - i; // Pasos restantes del dado
                let currentGeneralIndex = entryPointIndex;

                // 3. Animar los pasos restantes hacia atrás
                for (let j = 0; j <= stepsLeftToMove; j++) {
                    // El primer paso (j=0) es 1 paso atrás de la entrada
                    currentGeneralIndex = (entryPointIndex - (j + 1) + boardMap.generalPath.length) % boardMap.generalPath.length;
                    pathCoords.push(boardMap.generalPath[currentGeneralIndex]);
                }

                newPawnFinalIndex = currentGeneralIndex;
                break; // Salir del bucle de animación principal

            } else {
                // --- Movimiento normal dentro de la meta ---
                pathCoords.push(finalPath[nextIndex]);
            }

            currentAnimationIndex = nextIndex;
        }

        // --- Ahora, animar la ruta calculada ---
        for (const coord of pathCoords) {
            pawnEl.style.top = coord.top;
            pawnEl.style.left = coord.left;
            await new Promise(res => setTimeout(res, 180));
        }

        // --- Establecer el estado final de la ficha ---
        if (newPawnFinalState === 'general') {
            pawn.state = 'general';
            pawn.pathIndex = newPawnFinalIndex;
        } else {
            // Se quedó en el camino final
            pawn.pathIndex = currentAnimationIndex;
            if (pawn.pathIndex === goalIndex && !wasFinished) {
                // Aterrizó exactamente en la meta
                pawn.finished = true;
                playSound('goal');
                pawnEl.classList.add('arrived');
                showGlobalMessage(t('msgGoalReach'), "", "goal");
                updateFinishedCounters();
                setTimeout(() => pawnEl.style.display = 'none', 1000);
            }
        }

        updateAllPawnStacks();

        // Comprobar captura SÓLO si aterrizamos de nuevo en el camino general
        if (pawn.state === 'general' && !pawn.finished) {
            const wasAttacked = await applyReactiveAbilities(pawn);
            if (!wasAttacked) {
                await checkCapture(pawn);
            }
        }

        // --- CASO 3: MOVER EN CAMINO GENERAL (CON LÓGICA DE DECISIÓN CORREGIDA) ---
    } else if (originalState === 'general') {
        const pathLength = boardMap.generalPath.length;
        const entryPoint = gameState.entryPoints[pawn.color];
        let currentIdx = originalIndex;
        const isNpc = gameState.playerIsNpc[pawn.color];

        playSound('move');
        for (let i = 1; i <= numeroDado; i++) {
            // 1. Calcular el siguiente paso
            const nextIndex = (currentIdx + 1) % pathLength;
            const coord = boardMap.generalPath[nextIndex];

            // 2. Animar el movimiento
            pawnEl.style.top = coord.top;
            pawnEl.style.left = coord.left;
            await new Promise(res => setTimeout(res, 180));

            // 3. Actualizar el estado interno AHORA
            currentIdx = nextIndex;
            pawn.pathIndex = currentIdx;

            // 4. *** ¡LA COMPROBACIÓN VA AQUÍ! ***
            // Comprobar DESPUÉS de moverse. El peón está visualmente en la casilla de entrada.
            if (currentIdx === entryPoint && !gameState.isSplittingMove) {
                // 'i' es el número de pasos que acabamos de dar
                const remainingSteps = numeroDado - i; // <--- Matemática corregida

                // Si no quedan más pasos, no preguntes, solo termina.
                if (remainingSteps === 0) {
                    break; // Sale del bucle for, el turno terminará
                }

                if (isNpc) {
                    pawn.state = 'final';
                    await resumeMoveInFinalPath(pawn, remainingSteps);
                    return; // SALIR DE movePawn
                } else {
                    showEntryDecision(pawn, remainingSteps);
                    return; // SALIR DE movePawn (el popup toma el control)
                }
            }
            // --- FIN DE LA CORRECCIÓN ---
        }

        // Si el loop termina (nunca pasó por la entrada O es un movimiento estratégico)
        updateAllPawnStacks();
        const wasAttacked = await applyReactiveAbilities(pawn);
        if (!wasAttacked && !pawn.finished) {
            await checkCapture(pawn);
        }
    }

    // MODO PROGRESO UPDATE
    updatePlayerProgressLevel(pawn.color);

    if (gameState.isSplittingMove) {
        gameState.firstPawnMovedInSplit = pawn.id;
        gameState.splitMoves.shift();

        if (gameState.splitMoves.length > 0) {
            diceMessageEl.textContent = `Mueve ${gameState.splitMoves[0]} casillas`;
            const originalRoll = parseInt(diceEl.dataset.value);
            mostrarMovimientos(gameState.splitMoves[0], originalRoll, true);
            return;
        } else {
            gameState.isSplittingMove = false;
            gameState.firstPawnMovedInSplit = null;
        }
    }

    if (!gameState.winner) checkWinCondition();
    if (!gameState.winner) siguienteTurno(gameState.grantExtraTurn);
}

async function applyReactiveAbilities(movedPawn) {
    if (movedPawn.state !== 'general') return false;
    const landingSquare = boardMap.generalPath[movedPawn.pathIndex];
    const ownerOfSquareColor = landingSquare.isStart;

    if (ownerOfSquareColor && ownerOfSquareColor !== movedPawn.color) {
        const ownerAbility = gameState.playerAbilities[ownerOfSquareColor];
        const dictAbils = getEpicAbilities();
        const dict = translations[currentLang];

        if (gameState.modes.epic && ownerAbility && ownerAbility.name === dict.abAttacker && ownerAbility.uses > 0) {
            // MODIFICACIÓN PROGRESO: Chequeo de Escudo
            if (gameState.shieldedPawnId === movedPawn.id) {
                showGlobalMessage(t('msgBlocked'), `${t('team' + movedPawn.color.charAt(0).toUpperCase() + movedPawn.color.slice(1))} ${t('msgShieldUsed')}`, 'ability');
                playSound('buttonClick');
                removeShield(movedPawn.id);
                return true; // Se salvó, pero cuenta como "atacado" para detener el flujo
            }

            ownerAbility.uses--;
            showGlobalMessage(dict.abAteStr, `${ownerOfSquareColor} - ${dict.abAttacker}`, 'penalty');
            updateAbilityUI(ownerOfSquareColor);
            playSound('capture');

            const capturerColor = ownerOfSquareColor;
            const victimColor = movedPawn.color;
            gameState.grantExtraTurn = true;

            if (gameState.modes.codicia) {
                gameState.captureLog[capturerColor][victimColor]++;
                gameState.debts[victimColor][capturerColor] += gameState.pawnValue;
                gameState.earnings[capturerColor] += gameState.pawnValue;
                updateCaptureLogDisplays();
                updateEarningsDisplay(capturerColor);
                updateEarningsDisplay(victimColor);
            }
            if (gameState.modes.dominacion) {
                gameState.scores.dominacion[capturerColor]++;
                if (gameState.scores.dominacion[capturerColor] >= 11) {
                    gameState.winner = capturerColor;
                    showWinnerScreen(capturerColor);
                    return true;
                }
            }

            // --- INICIO DE ANIMACIÓN DE CAPTURA POR HABILIDAD ---
            const victimEl = document.getElementById(movedPawn.id);
            if (victimEl) victimEl.classList.add('captured'); // Aplica la animación de 2.1s

            await new Promise(resolve => setTimeout(resolve, 2100)); // Espera 2.1s
            // --- FIN DE ANIMACIÓN ---

            movedPawn.state = 'base';
            movedPawn.finished = false;
            await updatePawnPosition(movedPawn);
            if (victimEl) victimEl.classList.remove('captured'); // Limpia la clase
            updateBaseLayout(movedPawn.color);
            updateAllPawnStacks();
            updateFinishedCounters();
            return true;
        }
    }
    return false;
}


async function checkCapture(movedPawn) {
    if (movedPawn.state !== 'general' || movedPawn.pathIndex === gameState.startPoints[movedPawn.color]) {
        return;
    }

    const pawnsOnSquare = gameState.pawns.filter(p =>
        p.id !== movedPawn.id &&
        p.state === 'general' &&
        p.pathIndex === movedPawn.pathIndex
    );

    if (pawnsOnSquare.length !== 1) {
        return;
    }

    const victimPawn = pawnsOnSquare[0];

    if (victimPawn.color === movedPawn.color) {
        return;
    }

    const isVictimOnStart = victimPawn.pathIndex === gameState.startPoints[victimPawn.color];
    const isVictimOnEntry = victimPawn.pathIndex === gameState.entryPoints[victimPawn.color];

    if (isVictimOnStart || isVictimOnEntry) {
        return;
    }

    await executeCapture(movedPawn, victimPawn);
}

async function checkCaptureInNexus(movedPawn) {
    const pawnsInNexus = gameState.pawns.filter(p => p.id !== movedPawn.id && (p.state === 'portal' || p.state === 'portal-nexus'));
    if (pawnsInNexus.length >= 2 || pawnsInNexus.some(p => p.color === movedPawn.color)) {
        return;
    }

    if (pawnsInNexus.length === 1 && pawnsInNexus[0].color !== movedPawn.color) {
        await executeCapture(movedPawn, pawnsInNexus[0]);
    }
}

async function executeCapture(capturerPawn, victimPawn) {
    // MODIFICACIÓN PROGRESO: Chequeo de Escudo (Nivel 2)
    if (gameState.shieldedPawnId === victimPawn.id) {
        showGlobalMessage(t('msgBlocked'), `${t('team' + victimPawn.color.charAt(0).toUpperCase() + victimPawn.color.slice(1))} ${t('msgShieldUsed')}`, 'ability');
        playSound('buttonClick');
        removeShield(victimPawn.id);
        return; // Cancela la captura
    }

    const victimAbility = gameState.playerAbilities[victimPawn.color];
    if (gameState.modes.epic && victimAbility && victimAbility.name === 'Escudo de Energía' && victimAbility.uses > 0) {
        victimAbility.uses--;
        showGlobalMessage(t('msgBlocked') + '!', `${t('team' + victimPawn.color.charAt(0).toUpperCase() + victimPawn.color.slice(1))} ${t('msgShieldUsed')}`, 'ability');
        updateAbilityUI(victimPawn.color);
        return;
    }

    const dict = translations[currentLang];
    showGlobalMessage(dict.msgAteYou, '', 'capture');
    playSound('capture');
    const victimEl = document.getElementById(victimPawn.id);
    victimEl.classList.add('captured');
    gameState.grantExtraTurn = true;

    await new Promise(resolve => setTimeout(resolve, 2100)); // CAMBIADO A 2.1s

    victimPawn.state = 'base';
    victimPawn.finished = false;
    await updatePawnPosition(victimPawn);
    updateBaseLayout(victimPawn.color);
    updateAllPawnStacks();
    updateFinishedCounters();
    victimEl.classList.remove('captured');

    // MODO PROGRESO UPDATE
    updatePlayerProgressLevel(victimPawn.color);

    if (gameState.modes.codicia) {
        gameState.captureLog[capturerPawn.color][victimPawn.color]++;
        gameState.debts[victimPawn.color][capturerPawn.color] += gameState.pawnValue;
        gameState.earnings[capturerPawn.color] += gameState.pawnValue;
        updateCaptureLogDisplays();
        updateEarningsDisplay(capturerPawn.color);
        updateEarningsDisplay(victimPawn.color);
    }
    if (gameState.modes.dominacion) {
        gameState.scores.dominacion[capturerPawn.color]++;
        if (gameState.scores.dominacion[capturerPawn.color] >= 11) {
            gameState.winner = capturerPawn.color;
            showWinnerScreen(capturerPawn.color);
        }
    }
    updateModeDisplays();
}


function checkWinCondition() {
    const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
    const finishedPawns = gameState.pawns.filter(p => p.color === currentPlayerColor && p.finished).length;

    if (finishedPawns === gameState.numPawnsPerPlayer) {
        gameState.winner = currentPlayerColor; // Declare winner FIRST

        // --- START OF NEW RULE: WINNER'S FEAST ---
        if (gameState.modes.codicia || gameState.modes.dominacion) {
            const otherPawnsOnBoard = gameState.pawns.filter(p =>
                p.color !== currentPlayerColor && // Enemy pawns
                p.state !== 'base' &&             // Not in base
                p.state !== 'finished'            // Not finished
            );

            for (const victimPawn of otherPawnsOnBoard) {
                // Register capture without moving pawn (for scoring)
                if (gameState.modes.codicia) {
                    gameState.captureLog[currentPlayerColor][victimPawn.color]++;
                    gameState.debts[victimPawn.color][currentPlayerColor] += gameState.pawnValue;
                    gameState.earnings[currentPlayerColor] += gameState.pawnValue;
                }
                if (gameState.modes.dominacion) {
                    gameState.scores.dominacion[currentPlayerColor]++;
                }

                // Visual effect: make "captured" pawns disappear
                const victimEl = document.getElementById(victimPawn.id);
                if (victimEl) victimEl.classList.add('captured');
            }

            // Update displays BEFORE showing final screen
            if (gameState.modes.codicia) {
                updateCaptureLogDisplays();
                gameState.playerColors.forEach(p => updateEarningsDisplay(p));
            }
        }
        // --- END OF NEW RULE ---

        // Now, show the winner screen with updated scores
        showWinnerScreen(currentPlayerColor);
    }
}

function showWinnerScreen(winnerColor) {
    stopBackgroundMusic();
    playSound('win');
    setTimeout(startVictoryMusic, 500);
    const screen = document.getElementById('winner-screen');
    const textEl = document.getElementById('winner-text');
    const subtitleEl = document.getElementById('winner-subtitle');
    const summaryEl = document.getElementById('winner-summary');

    let reason = t('victorySubtitle');
    if (gameState.modes.dominacion && gameState.scores.dominacion[winnerColor] >= 11) {
        reason = "¡Victoria por Dominación Total!"; // This one might need a key too but objective is complete
    }

    textEl.textContent = `Invocador ${t('team' + winnerColor.charAt(0).toUpperCase() + winnerColor.slice(1))}`;
    subtitleEl.textContent = reason;
    textEl.style.color = `var(--color-${winnerColor}-light)`;

    if (gameState.modes.codicia) {
        let summaryHTML = '<h3>Ajuste de Cuentas (Codicia)</h3>';

        gameState.playerColors.forEach(p1 => {
            summaryHTML += `<div class="summary-player-item"><strong style="color: var(--color-${p1}-light)">${t('team' + p1.charAt(0).toUpperCase() + p1.slice(1))}</strong>:`;
            let hasTransactions = false;

            gameState.playerColors.forEach(p2 => {
                if (p1 === p2) return;

                const p1_owes_p2 = gameState.debts[p1][p2] || 0;
                const p2_owes_p1 = gameState.debts[p2][p1] || 0;
                const net = p2_owes_p1 - p1_owes_p2;

                if (net > 0 && p1 < p2) { // p1 receives from p2
                    summaryHTML += `<div class="summary-transaction recibe">Recibe ${net.toLocaleString()} de ${p2}</div>`;
                    hasTransactions = true;
                } else if (net < 0 && p1 < p2) { // p1 pays to p2
                    summaryHTML += `<div class="summary-transaction paga">Paga ${Math.abs(net).toLocaleString()} a ${p2}</div>`;
                    hasTransactions = true;
                } else if (net !== 0 && p1 > p2) {
                    const reversed_net = p1_owes_p2 - p2_owes_p1;
                    if (reversed_net > 0) { // p2 receives from p1
                        summaryHTML += `<div class="summary-transaction paga">Paga ${reversed_net.toLocaleString()} a ${p2}</div>`;
                        hasTransactions = true;
                    } else { // p2 pays to p1
                        summaryHTML += `<div class="summary-transaction recibe">Recibe ${Math.abs(reversed_net).toLocaleString()} de ${p2}</div>`;
                        hasTransactions = true;
                    }
                }
            });

            if (!hasTransactions) {
                summaryHTML += `<span> Sin deudas pendientes.</span>`;
            }

            summaryHTML += `</div>`;
        });

        summaryEl.innerHTML = summaryHTML;
        summaryEl.style.display = 'block';
    } else {
        summaryEl.style.display = 'none';
    }

    screen.style.display = 'flex';
}

async function updatePawnPosition(pawn) {
    const pawnEl = document.getElementById(pawn.id);
    if (!pawnEl) return;

    let targetPos;

    if (pawn.state === 'base') {
        updateBaseLayout(pawn.color);
        return;
    } else if (pawn.state === 'general') {
        targetPos = boardMap.generalPath[pawn.pathIndex];
    } else if (pawn.state === 'final' || pawn.state === 'finished') {
        const finalIndex = Math.min(pawn.pathIndex, boardMap.finalPaths[pawn.color].length - 1);
        targetPos = boardMap.finalPaths[pawn.color][finalIndex];
    } else if (pawn.state === 'portal' || pawn.state === 'portal-nexus') {
        targetPos = boardMap.portalGeneral;
    }

    if (targetPos) {
        pawnEl.style.top = targetPos.top;
        pawnEl.style.left = targetPos.left;
        pawnEl.style.display = 'block';
    }
}

function updateAllPawnStacks() {
    document.querySelectorAll('.board-pawn-counter').forEach(el => el.remove());
    const pawnPositions = {};

    // --- AÑADE ESTA LÍNEA ---
    document.querySelectorAll('.casilla-meta.glow').forEach(el => el.classList.remove('glow'));

    gameState.pawns.filter(p => p.state !== 'base' && p.state !== 'finished').forEach(pawn => {
        let key;
        if (pawn.state === 'general') key = `general-${pawn.pathIndex}`;
        else if (pawn.state === 'final') key = `final-${pawn.color}-${pawn.pathIndex}`;
        else if (pawn.state === 'portal' || pawn.state === 'portal-nexus') key = 'portal-nexus';

        if (key) {
            if (!pawnPositions[key]) pawnPositions[key] = [];
            pawnPositions[key].push(pawn);
        }
    });

    for (const key in pawnPositions) {
        const group = pawnPositions[key];
        group.forEach((pawn, index) => {
            const pawnEl = document.getElementById(pawn.id);
            if (pawnEl) {
                pawnEl.style.transform = `translate(calc(-50% + ${index * 4}px), calc(-50% + ${index * 4}px))`;
                pawnEl.style.zIndex = 10 + index;
            }
        });

        // --- AÑADE ESTE BLOQUE ---
        const firstPawn = group[0];
        if (firstPawn.state === 'final') {
            // Busca la casilla en el DOM
            const casillaEl = document.querySelector(`.casilla-meta[data-color="${firstPawn.color}"][data-index="${firstPawn.pathIndex}"]`);
            if (casillaEl) {
                casillaEl.classList.add('glow'); // Añade la clase de brillo
            }
        }
        // --- FIN DEL BLOQUE ---

        if (group.length > 1) {
            let targetPos;
            const firstPawn = group[0];
            if (firstPawn.state === 'general') targetPos = boardMap.generalPath[firstPawn.pathIndex];
            else if (firstPawn.state === 'final') targetPos = boardMap.finalPaths[firstPawn.color][firstPawn.pathIndex];
            else if (firstPawn.state === 'portal' || firstPawn.state === 'portal-nexus') targetPos = boardMap.portalGeneral;

            if (targetPos) {
                const counter = document.createElement('div');
                counter.className = 'board-pawn-counter';
                counter.textContent = group.length;
                counter.style.top = targetPos.top;
                counter.style.left = targetPos.left;

                const topPawnIndex = group.length - 1;
                const offset = topPawnIndex * 4;
                counter.style.transform = `translate(calc(-50% + ${offset}px), calc(-50% + ${offset}px - 15px))`;

                boardContainer.appendChild(counter);
            }
        }
    }
}

function updateFinishedCounters() {
    gameState.playerColors.forEach(color => {
        const finishedCount = gameState.pawns.filter(p => p.color === color && p.finished).length;
        const counterEl = document.getElementById(`finished-counter-${color}`);
        if (counterEl) {
            if (finishedCount > 0) {
                counterEl.textContent = finishedCount;
                counterEl.style.display = 'flex';
            } else {
                counterEl.style.display = 'none';
            }
        }
    });
}

function siguienteTurno(extraTurn = false, isInitialTurn = false) {
    failsafeBtn.style.visibility = 'hidden';
    failsafeBtn.style.opacity = '0';
    showHudBtn.style.visibility = 'hidden';
    showHudBtn.style.opacity = '0';
    clearTimeout(hudTimeout);

    // MODO PROGRESO: Desactivar modo de colocación de escudo
    if (gameState.modes.progreso) {
        gameState.isShieldPlacingMode = false;
        shieldBtn.classList.remove('active');
        shieldBtn.style.display = 'none';
    }

    const executeTurnChange = () => {
        const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
        if (!isInitialTurn) {
            gameState.playerTurnCounts[currentPlayerColor]++;
        }

        if (!extraTurn) {
            gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.numPlayers;
        } else {
            diceMessageEl.textContent = '¡' + t('diceRollAgain') + '!';
        }

        const newPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];

        updateTurnUI();
        updatePersistentTurnIndicator();
        if (gameState.modes.epic) {
            hud.style.display = 'flex';
            hudTimeout = setTimeout(() => {
                if (hud.style.display === 'flex') { // Only hide if it's still visible
                    hud.style.display = 'none';
                    showHudBtn.style.visibility = 'visible';
                    showHudBtn.style.opacity = '1';
                }
            }, 3000);
        }

        if (gameState.playerIsNpc[newPlayerColor]) {
            // Turno del NPC
            gameState.canRoll = false;
            diceContainer.classList.remove('clickable');
            diceMessageEl.textContent = t('npcStr').trim();
            const dicePromptEl = document.getElementById('dice-text-prompt');
            if (dicePromptEl) dicePromptEl.style.visibility = 'hidden';
            runNpcTurn();
        } else {
            // Turno del Humano
            gameState.canRoll = true;
            diceContainer.classList.add('clickable');
            if (!extraTurn) {
                gsap.set('.cube', { rotationX: 0, rotationY: 0, z: 0 });
                diceEl.dataset.value = '1';
                diceMessageEl.textContent = t('diceMsg');
                const dicePromptEl = document.getElementById('dice-text-prompt');
                if (dicePromptEl) dicePromptEl.style.visibility = 'visible';
            }
        }
    };

    if (isInitialTurn) {
        executeTurnChange();
    } else {
        setTimeout(executeTurnChange, 1000);
    }
}

function updateTurnUI() {
    const color = gameState.playerColors[gameState.currentPlayerIndex];
    const isNpc = gameState.playerIsNpc[color];

    diceEl.classList.remove('dice-morado', 'dice-amarillo', 'dice-verde', 'dice-azul');
    diceEl.classList.add(`dice-${color}`);

    if (gameState.modes.epic) {
        updateAbilityUI(color);
    }

    // MODO PROGRESO: Mostrar botón de escudo si Nivel >= 2
    if (gameState.modes.progreso) {
        const level = gameState.playerLevels[color];
        // Solo si es humano y tiene nivel >= 2
        if (level >= 2 && !isNpc) {
            shieldBtn.style.display = 'flex';
            shieldBtn.onclick = () => {
                playSound('buttonClick');
                toggleShieldMode();
            };
        } else {
            shieldBtn.style.display = 'none';
            shieldBtn.onclick = null;
        }
    }
}

function updatePersistentTurnIndicator() {
    const color = gameState.playerColors[gameState.currentPlayerIndex];
    const isNpc = gameState.playerIsNpc[color];
    const colorCapitalized = t('team' + color.charAt(0).toUpperCase() + color.slice(1));
    let playerLabel = isNpc ? `${colorCapitalized} ${t('npcStr')}` : `${colorCapitalized}`;

    // MODO PROGRESO
    if (gameState.modes.progreso) {
        const level = gameState.playerLevels[color] || 0;
        if (level > 0) playerLabel += ` (NV ${level})`;
    }

    const turnText = t('vasStr');
    const text = `${playerLabel} ${turnText}`;

    if (window.innerWidth <= 920 && window.innerHeight < window.innerWidth) {
        persistentTurnIndicator.innerHTML = text.split('').join('<br>');
    } else {
        persistentTurnIndicator.innerHTML = `<span class="turn-indicator-line1">${playerLabel}</span><span class="turn-indicator-line2">${turnText}</span>`;
    }

    persistentTurnIndicator.style.backgroundColor = `var(--color-${color}-glass)`;
    persistentTurnIndicator.style.borderColor = `var(--color-${color}-light)`;
    boardContainer.style.boxShadow = `inset 0 0 25px 5px var(--color-${color})`;
    document.documentElement.style.setProperty('--current-team-shade', `var(--color-${color}-glass)`);
}

function updateTurnIndicatorWithRoll(moveAmount, originalRoll) {
    const color = gameState.playerColors[gameState.currentPlayerIndex];
    const isNpc = gameState.playerIsNpc[color];
    const colorCapitalized = t('team' + color.charAt(0).toUpperCase() + color.slice(1));
    let playerLabel = isNpc ? `${colorCapitalized} ${t('npcStr')}` : `${colorCapitalized}`;

    // MODO PROGRESO
    if (gameState.modes.progreso) {
        const level = gameState.playerLevels[color] || 0;
        if (level > 0) playerLabel += ` (NV ${level})`;
    }

    const text = `${playerLabel} ${t('vasStr')} ${moveAmount}`;

    if (window.innerWidth <= 920 && window.innerHeight < window.innerWidth) {
        persistentTurnIndicator.innerHTML = text.split('').join('<br>');
    } else {
        persistentTurnIndicator.innerHTML = `<span class="turn-indicator-line1">${playerLabel}</span><span class="turn-indicator-line2">${t('vasStr')} ${moveAmount}</span>`;
    }
}


function updateAbilityUI(color) {
    const ability = gameState.playerAbilities[color];
    const dict = translations[currentLang];

    if (!ability) return;
    const colorCapitalized = color.charAt(0).toUpperCase() + color.slice(1);
    const playerLabel = gameState.playerIsNpc[color] ? `${colorCapitalized}${dict.npcStr}` : `${colorCapitalized}`;

    const turnIndicatorEl = document.getElementById('ability-turn-indicator');
    turnIndicatorEl.textContent = `${dict.turnOf}${playerLabel}`;
    turnIndicatorEl.style.color = `var(--color-${color}-light)`;

    document.getElementById('ability-name').textContent = ability.name;
    document.getElementById('ability-desc').textContent = ability.desc;

    // Updated translation bindings for uses
    const usesText = ability.uses === Infinity ? dict.infUsesStr : `${ability.uses}${dict.remainingStr}`;
    document.getElementById('ability-uses').textContent = `${dict.usesStr}${usesText}`;
}


function cleanMovableHighlights() {
    document.querySelectorAll('.pawn.movable').forEach(el => {
        el.classList.remove('movable');
        el.onclick = null;
    });
    document.querySelectorAll('.decision-popup').forEach(el => el.style.display = 'none');
}

function exitToMenu() {
    stopVictoryMusic();
    stopBackgroundMusic();
    gameScreen.style.display = 'none';
    pauseMenu.style.display = 'none';
    pauseBtn.checked = false; // Reset pause button state
    document.getElementById('confirmation-overlay').style.display = 'none';
    document.getElementById('winner-screen').style.display = 'none';

    menuScreen.style.display = 'flex';
    document.getElementById('init-screen').style.display = 'block';
    document.getElementById('game-config-wrapper').style.display = 'none';
    menuScreen.style.opacity = '1';

    boardContainer.querySelectorAll('.pawn, .board-pawn-counter, .finished-counter, .progress-marker').forEach(el => el.remove()); // Clean markers
    document.getElementById('capture-log-container').innerHTML = '';
    document.getElementById('earnings-container').innerHTML = '';
    document.getElementById('game-modes-display').innerHTML = '';

    gameState = {};
    hud.style.display = 'none';
    showHudBtn.style.visibility = 'hidden';
    showHudBtn.style.opacity = '0';
    failsafeBtn.style.visibility = 'hidden';
    failsafeBtn.style.opacity = '0';
    shieldBtn.style.display = 'none';
    startBackgroundMusic();
}

// --- LÓGICA DEL NPC (IA) ---

function runNpcTurn() {
    setTimeout(() => checkAndRollForNpc(), 2000); // Start the check after a delay
}

function checkAndRollForNpc() {
    if (gameState.isPaused) {
        // If paused, wait and check again.
        setTimeout(checkAndRollForNpc, 500);
        return;
    }
    // Not paused, proceed to roll.
    gameState.canRoll = true;
    diceContainer.click();
}

async function runNpcDecision(moveAmount, finalRoll) {
    const globalMsgVisible = window.getComputedStyle(globalMessageDisplay).display !== 'none';
    if (globalMsgVisible) {
        await new Promise(res => setTimeout(res, 2600));
    }

    const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
    const movablePawns = findMovablePawns(moveAmount, currentPlayerColor, gameState.pawns, finalRoll);

    if (movablePawns.length === 0) {
        siguienteTurno(gameState.grantExtraTurn);
        return;
    }

    let chosenAction = null;

    const winAction = movablePawns.find(p => p.state === 'final' && calculateNewPawnPosition(p, moveAmount).state === 'finished');
    if (winAction) {
        chosenAction = { type: 'move', pawn: winAction, moveAmount: moveAmount };
    }

    if (!chosenAction) chosenAction = findNpcExitNexusAction(movablePawns, moveAmount);
    if (!chosenAction) chosenAction = findNpcCaptureAction(movablePawns, moveAmount, currentPlayerColor);
    if (!chosenAction) chosenAction = findNpcExitBaseAction(movablePawns, moveAmount);
    if (!chosenAction) chosenAction = findNpcStackAction(movablePawns, moveAmount, currentPlayerColor);
    if (!chosenAction) chosenAction = findNpcPortalAction(movablePawns, finalRoll);

    const generalPathPawns = movablePawns.filter(p => p.state === 'general');
    if (!chosenAction && generalPathPawns.length > 0) {
        chosenAction = findNpcFurthestAction(generalPathPawns, moveAmount);
    }

    const finalPathPawns = movablePawns.filter(p => p.state === 'final');
    if (!chosenAction && finalPathPawns.length > 0) {
        chosenAction = findNpcFurthestAction(finalPathPawns, moveAmount);
    }

    if (!chosenAction) {
        chosenAction = { type: 'move', pawn: movablePawns[0], moveAmount: moveAmount };
    }

    await new Promise(res => setTimeout(res, 250));

    if (chosenAction.type === 'move') {
        if (chosenAction.pawn.state === 'portal-nexus') {
            await exitPortalNexus(chosenAction.pawn);
        } else {
            await movePawn(chosenAction.pawn, chosenAction.moveAmount);
        }
    } else if (chosenAction.type === 'enter_portal') {
        await travelThroughPortal(chosenAction.pawn);
    }
}

function findNpcCaptureAction(movablePawns, moveAmount, playerColor) {
    for (const pawn of movablePawns) {
        const newPos = calculateNewPawnPosition(pawn, moveAmount);
        if (newPos.state === 'general') {
            const pawnsOnDestination = gameState.pawns.filter(p => p.state === 'general' && p.pathIndex === newPos.pathIndex);
            if (pawnsOnDestination.length === 1 && pawnsOnDestination[0].color !== playerColor) {
                return { type: 'move', pawn: pawn, moveAmount: moveAmount };
            }
        }
    }
    return null;
}

function findNpcStackAction(movablePawns, moveAmount, playerColor) {
    for (const pawn of movablePawns) {
        const newPos = calculateNewPawnPosition(pawn, moveAmount);
        if (newPos.state === 'general') {
            const pawnsOnDestination = gameState.pawns.filter(p => p.state === 'general' && p.pathIndex === newPos.pathIndex);
            if (pawnsOnDestination.length > 0 && pawnsOnDestination.every(p => p.color === playerColor)) {
                return { type: 'move', pawn: pawn, moveAmount: moveAmount };
            }
        }
    }
    return null;
}

function findNpcExitBaseAction(movablePawns, moveAmount) {
    const pawnToExit = movablePawns.find(p => p.state === 'base');
    if (pawnToExit) {
        return { type: 'move', pawn: pawnToExit, moveAmount: moveAmount };
    }
    return null;
}

function findNpcExitNexusAction(movablePawns, moveAmount) {
    const pawnToExit = movablePawns.find(p => p.state === 'portal-nexus');
    if (pawnToExit) {
        return { type: 'move', pawn: pawnToExit, moveAmount: moveAmount };
    }
    return null;
}

function findNpcPortalAction(movablePawns, finalRoll) {
    const pawnOnPortal = movablePawns.find(pawn => {
        if (pawn.state !== 'general') return false;
        const playerAbility = gameState.playerAbilities[pawn.color];
        const canUsePortalAbility = gameState.modes.epic && playerAbility.id === 'abPortalMad' && playerAbility.uses > 0;
        const currentCasilla = boardMap.generalPath[pawn.pathIndex];
        return currentCasilla.isPortal && (finalRoll === 1 || finalRoll === 6 || canUsePortalAbility);
    });

    if (pawnOnPortal) {
        return { type: 'enter_portal', pawn: pawnOnPortal };
    }
    return null;
}

function findNpcFurthestAction(movablePawns, moveAmount) {
    let bestPawn = null;
    let bestScore = -1;

    const getPawnProgressScore = (pawn) => {
        if (pawn.state === 'base') return -1;
        if (pawn.state === 'final') return 100 + pawn.pathIndex;
        const start = gameState.startPoints[pawn.color];
        const pathLength = boardMap.generalPath.length;
        if (pawn.pathIndex >= start) {
            return pawn.pathIndex - start;
        } else {
            return (pathLength - start) + pawn.pathIndex;
        }
    };

    const pawnsToConsider = movablePawns.filter(p => p.state !== 'base' && p.state !== 'portal-nexus');
    if (pawnsToConsider.length === 0) return null;

    bestPawn = pawnsToConsider.reduce((best, current) => {
        return getPawnProgressScore(current) > getPawnProgressScore(best) ? current : best;
    });

    return { type: 'move', pawn: bestPawn, moveAmount: moveAmount };
}


// --- INICIALIZACIÓN ---
window.onload = () => {
    renderBoard();

    document.getElementById('init-game-btn').addEventListener('click', () => {
        initAudioContext();
        startBackgroundMusic();
        playSound('buttonClick');
        document.getElementById('init-screen').style.display = 'none';
        document.getElementById('game-config-wrapper').style.display = 'flex';
        updateAbilitySelectors();
    });

    document.getElementById('start-game-btn').addEventListener('click', () => {
        playSound('goal');
        iniciarJuego();
    });

    diceContainer.addEventListener('click', lanzarDado);

    document.getElementById('close-hud-btn').addEventListener('click', () => {
        playSound('closeWindow');
        hud.style.display = 'none';
        showHudBtn.style.visibility = 'visible';
        showHudBtn.style.opacity = '1';
        cleanMovableHighlights();
        if (document.querySelectorAll('.pawn.movable').length > 0 || gameState.canRoll === false) {
            failsafeBtn.style.visibility = 'visible';
            failsafeBtn.style.opacity = '1';
        }
    });

    showHudBtn.addEventListener('click', () => {
        playSound('buttonClick');
        hud.style.display = 'flex';
        showHudBtn.style.visibility = 'hidden';
        showHudBtn.style.opacity = '0';
    });

    failsafeBtn.addEventListener('click', () => {
        playSound('penalty');
        cleanMovableHighlights();
        siguienteTurno(false);
    });

    pauseBtn.addEventListener('change', (e) => {
        if (e.target.checked) {
            playSound('buttonClick');
            gameState.isPaused = true;
            updatePausePlayerList();
            pauseMenu.style.display = 'flex';
        } else {
            playSound('buttonClick');
            gameState.isPaused = false;
            pauseMenu.style.display = 'none';
        }
    });

    document.getElementById('resume-btn').addEventListener('click', () => {
        playSound('buttonClick');
        gameState.isPaused = false;
        pauseMenu.style.display = 'none';
    });

    document.getElementById('exit-btn').addEventListener('click', () => {
        playSound('closeWindow');
        showConfirmation(translations[currentLang].confirmExitMenu, exitToMenu);
    });

    document.getElementById('play-again-btn').addEventListener('click', () => {
        stopVictoryMusic();
        playSound('buttonClick');
        exitToMenu();
    });

    document.getElementById('btn-reglas').addEventListener('click', () => {
        playSound('buttonClick');
        document.getElementById('rules-modal-overlay').style.display = 'flex';
    });
    document.getElementById('show-rules-btn').addEventListener('click', () => {
        playSound('buttonClick');
        document.getElementById('rules-modal-overlay').style.display = 'flex';
    });
    document.getElementById('close-rules-btn').addEventListener('click', () => {
        playSound('closeWindow');
        document.getElementById('rules-modal-overlay').style.display = 'none';
    });

    document.querySelectorAll('.pawn-value-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playSound('buttonClick');
            const input = document.getElementById('pawn-value');
            const currentValue = parseInt(input.value) || 0;
            const toAdd = parseInt(btn.dataset.add);
            input.value = currentValue + toAdd;
        });
    });

    let currentRotation = 0;
    document.getElementById('btn-rotate').addEventListener('click', () => {
        currentRotation += 90;
        document.getElementById('board-container').style.transform = `rotate(${currentRotation}deg)`;

        // Counter-rotate pawns to keep them upright
        const pawns = document.querySelectorAll('.pawn');
        pawns.forEach(pawn => {
            pawn.style.transform = `translate(-50%, -50%) rotate(-${currentRotation}deg)`;
        });

        // Counter-rotate all overlay windows inside board so text stays upright
        const counterItems = document.querySelectorAll(
            '.earnings-window, .capture-log-window, .board-pawn-counter, #finished-counters-container'
        );
        counterItems.forEach(el => {
            el.style.transform = `rotate(-${currentRotation}deg)`;
        });

        playSound('buttonClick');
    });

    document.getElementById('btn-audio').addEventListener('change', (e) => {
        initAudioContext();
        isMuted = !e.target.checked;
        const muteIcon = document.querySelector('.mute-icon');
        const unmuteIcon = document.querySelector('.unmute-icon');
        if (muteIcon && unmuteIcon) {
            muteIcon.style.display = isMuted ? 'inline-block' : 'none';
            unmuteIcon.style.display = isMuted ? 'none' : 'inline-block';
        }
        if (isMuted) {
            stopBackgroundMusic();
            stopVictoryMusic();
        } else {
            playSound('buttonClick');
            if (document.getElementById('menu-screen').style.display !== 'none') {
                startBackgroundMusic();
            }
        }
    });

    // --- LÓGICA DE CONFIRMACIÓN ---
    function showConfirmation(text, onConfirm) {
        document.getElementById('confirmation-text').textContent = text;
        const overlay = document.getElementById('confirmation-overlay');
        const confirmBtn = document.getElementById('confirm-action-btn');
        const cancelBtn = document.getElementById('cancel-action-btn');

        const confirmHandler = () => {
            playSound('buttonClick');
            onConfirm();
            overlay.style.display = 'none';
            confirmBtn.removeEventListener('click', confirmHandler);
            cancelBtn.removeEventListener('click', cancelHandler);
        };

        const cancelHandler = () => {
            playSound('closeWindow');
            overlay.style.display = 'none';
            confirmBtn.removeEventListener('click', confirmHandler);
            cancelBtn.removeEventListener('click', cancelHandler);
        };

        confirmBtn.addEventListener('click', confirmHandler);
        cancelBtn.addEventListener('click', cancelHandler);

        overlay.style.display = 'flex';
    }

    function updatePausePlayerList() {
        const listContainer = document.getElementById('pause-players-list');
        listContainer.innerHTML = '';

        gameState.playerColors.forEach(color => {
            const isNpc = gameState.playerIsNpc[color];
            const playerRow = document.createElement('div');
            playerRow.className = 'pause-player-row';

            const playerName = document.createElement('span');
            playerName.className = 'pause-player-name';
            playerName.textContent = color;
            playerName.style.color = `var(--color-${color}-light)`;

            const toggleBtn = document.createElement('button');
            toggleBtn.className = `bot-toggle-btn ${isNpc ? 'is-bot' : ''}`;
            toggleBtn.textContent = isNpc ? t('botStr') : t('humanStr');
            toggleBtn.dataset.color = color;

            toggleBtn.addEventListener('click', () => {
                const targetColor = toggleBtn.dataset.color;
                const wasNpc = gameState.playerIsNpc[targetColor];
                gameState.playerIsNpc[targetColor] = !wasNpc;
                playSound('buttonClick');
                updatePausePlayerList(); // Re-render the list

                // If the CURRENT player was just switched to NPC, trigger their turn logic
                const currentPlayerColor = gameState.playerColors[gameState.currentPlayerIndex];
                if (targetColor === currentPlayerColor && gameState.playerIsNpc[targetColor] && gameState.canRoll) {
                    runNpcTurn();
                }
            });

            playerRow.appendChild(playerName);
            playerRow.appendChild(toggleBtn);
            listContainer.appendChild(playerRow);
        });
    }

};
