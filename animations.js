// animations.js - Datos del tablero, motor de audio y renderizado
// Requiere: GSAP cargado antes en el HTML

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
        azul:   { top: '76.24%', left: '24.36%' },
        verde:  { top: '75.09%', left: '76.28%' },
        amarillo: { top: '21.58%', left: '75.94%' }
    };
    // --- ¡FIN DE MAPA DE TABLERO! ---

    // --- MIDI SOUND ENGINE (FINAL FANTASY INSPIRED) ---
    let audioCtx;
    let isMuted = false;
    let musicLoopTimeout;
    let isMusicPlaying = false;

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
    
    const musicNotes = [
        { freq: 220.00, duration: 0.2, delay: 0.0, vol: 0.2, type: 'triangle' }, // A3 bass
        { freq: 440.00, duration: 0.15, delay: 0.0, vol: 0.15, type: 'square' }, // A4
        { freq: 523.25, duration: 0.15, delay: 0.2, vol: 0.15, type: 'square' }, // C5
        { freq: 659.25, duration: 0.15, delay: 0.4, vol: 0.15, type: 'square' }, // E5
        { freq: 880.00, duration: 0.15, delay: 0.6, vol: 0.15, type: 'square' }, // A5
        { freq: 196.00, duration: 0.2, delay: 0.8, vol: 0.2, type: 'triangle' }, // G3 bass
        { freq: 392.00, duration: 0.15, delay: 0.8, vol: 0.15, type: 'square' }, // G4
        { freq: 493.88, duration: 0.15, delay: 1.0, vol: 0.15, type: 'square' }, // B4
        { freq: 587.33, duration: 0.15, delay: 1.2, vol: 0.15, type: 'square' }, // D5
        { freq: 783.99, duration: 0.15, delay: 1.4, vol: 0.15, type: 'square' }, // G5
        { freq: 174.61, duration: 0.2, delay: 1.6, vol: 0.2, type: 'triangle' }, // F3 bass
        { freq: 349.23, duration: 0.15, delay: 1.6, vol: 0.15, type: 'square' }, // F4
        { freq: 440.00, duration: 0.15, delay: 1.8, vol: 0.15, type: 'square' }, // A4
        { freq: 523.25, duration: 0.15, delay: 2.0, vol: 0.15, type: 'square' }, // C5
        { freq: 698.46, duration: 0.15, delay: 2.2, vol: 0.15, type: 'square' }, // F5
        { freq: 164.81, duration: 0.2, delay: 2.4, vol: 0.2, type: 'triangle' }, // E3 bass
        { freq: 329.63, duration: 0.15, delay: 2.4, vol: 0.15, type: 'square' }, // E4
        { freq: 415.30, duration: 0.15, delay: 2.6, vol: 0.15, type: 'square' }, // G#4
        { freq: 493.88, duration: 0.15, delay: 2.8, vol: 0.15, type: 'square' }, // B4
        { freq: 659.25, duration: 0.15, delay: 3.0, vol: 0.15, type: 'square' }, // E5
    ];
    const musicLoopDuration = 3200; // ms

    let victoryMusicLoopTimeout;
    let isVictoryMusicPlaying = false;
    const victoryMusicNotes = [
        { freq: 261.63, duration: 0.15, delay: 0.0, vol: 0.3, type: 'triangle' }, // C4
        { freq: 329.63, duration: 0.15, delay: 0.2, vol: 0.3, type: 'triangle' }, // E4
        { freq: 392.00, duration: 0.15, delay: 0.4, vol: 0.3, type: 'triangle' }, // G4
        { freq: 523.25, duration: 0.4, delay: 0.6, vol: 0.4, type: 'triangle' }, // C5
        { freq: 493.88, duration: 0.15, delay: 1.0, vol: 0.3, type: 'triangle' }, // B4
        { freq: 523.25, duration: 0.4, delay: 1.2, vol: 0.4, type: 'triangle' }, // C5
    ];
    const victoryLoopDuration = 1600; // ms

    function playMusicSequence() {
        if (!isMusicPlaying || !audioCtx) return;
        musicNotes.forEach(note => {
            playNote(note.freq, note.duration, note.type, note.vol, note.delay);
        });
        musicLoopTimeout = setTimeout(playMusicSequence, musicLoopDuration);
    }

    function startBackgroundMusic() {
        if (isMusicPlaying || isMuted) return;
        isMusicPlaying = true;
        playMusicSequence();
    }

    function stopBackgroundMusic() {
        isMusicPlaying = false;
        clearTimeout(musicLoopTimeout);
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
        fragment.appendChild(portalEl);

        boardContainer.appendChild(fragment);
    }


