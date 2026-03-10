// Application state
let state = {
    currentTheme: 'daily-life', // current selected theme
    studyType: 'tenses', // 'tenses' or 'pronunciation'
    currentTenseIndex: 0,
    currentLevel: 'all',
    currentSentenceIndex: 0,
    sentences: [],
    language: 'en' // 'en' or 'pt'
};

// UI Translations
const translations = {
    en: {
        // Labels
        'label-theme': 'Theme:',
        'label-study-type': 'Study Type:',
        'label-level': 'Level:',
        'label-select-tense': 'Select Tense:',
        'label-select-technique': 'Select Technique:',
        'label-current-tense': 'Current Tense:',
        'label-current-technique': 'Current Technique:',
        'label-total-sentences': 'Total Sentences:',
        
        // Study Type Options
        'grammar-tenses': 'Grammar Tenses',
        'pronunciation': 'Pronunciation',
        
        // Level Options
        'all-levels': 'All Levels',
        'easy': 'Easy',
        'medium': 'Medium',
        'hard': 'Hard',
        
        // Buttons
        'btn-prev': '← Previous',
        'btn-next': 'Next →',
        'btn-random': 'Random',
        'btn-start': 'Start Practice',
        'btn-back': '← Back to Menu',

        // Summary labels
        'summary-theme': 'Theme',
        'summary-study-type': 'Study Type',
        'summary-topic': 'Topic',
        'summary-level': 'Level',
        'no-sentences': 'No sentences available for this selection.',
        
        // Subtitle
        'subtitle-fixed': 'Talk now, fix grammar later. Repetition is your superpower.',

        // Purpose disclaimer
        'purpose-title': 'Why This App Exists',
        'purpose-text': 'This app was designed for massive speaking practice in English. It is not a test, does not assign grades, and is not meant to judge performance. The goal is personal, high-volume repetition using frequent phrases and vocabulary from real social contexts.',
        'stat-themes': 'themes',
        'stat-sentences': 'sentences',
        'stat-words': 'words',
        'stat-unique-words': 'unique words',

        // Quick guide
        'guide-title': 'What You Have Here',
        'guide-intro': 'A practical training app focused on speaking volume and consistency.',
        'guide-usage-title': '🎮 How to Use This Screen',
        'guide-usage-1': 'Choose Theme, Study Type, Topic and Level.',
        'guide-usage-2': 'Click Start Practice to open the sentence cards.',
        'guide-usage-3': 'Use Previous and Next to move through phrases.',
        'guide-usage-7': 'Repeat the same sentence several times before moving to the next one. Over time, you will feel more comfortable speaking.',
        'guide-usage-4': 'Use Random to jump to a surprise phrase.',
        'guide-usage-5': 'Use EN/PT to switch the instructions language.',
        'guide-usage-6': 'Use Back to Menu to return to this screen.',
        'guide-themes-title': '🧭 Themes Available',
        'guide-themes-note': 'Themes cover real social contexts for speaking practice. Content volume may vary by theme.',
        'guide-theme-1': 'Daily Life - routines, meals, chores, family, shopping',
        'guide-theme-2': 'Travel - airport, hotel, transport, tourism, restaurants',
        'guide-theme-3': 'Technology - computers, internet, apps, coding, remote work',
        'guide-theme-4': 'Work and Career - office, meetings, projects, interviews, networking',
        'guide-theme-5': 'Arts and Entertainment - music, movies, theater, museums, festivals',
        'guide-theme-6': 'Education and Science - school, university, research, labs, library',
        'guide-theme-7': 'Sports - football, basketball, swimming, gym, competitions',
        'guide-theme-8': 'Environment and Nature - climate, recycling, conservation, wildlife',
        'guide-theme-9': 'Society and Behavior - relationships, hobbies, communication, social media',
        'guide-resources-title': '🧰 Resources',
        'guide-grammar-title': 'Grammar Tenses',
        'guide-grammar-intro': '12 full tenses with 3 difficulty levels:',
        'guide-tense-1': 'Present Simple',
        'guide-tense-2': 'Present Continuous',
        'guide-tense-3': 'Present Perfect',
        'guide-tense-4': 'Present Perfect Continuous',
        'guide-tense-5': 'Past Simple',
        'guide-tense-6': 'Past Continuous',
        'guide-tense-7': 'Past Perfect',
        'guide-tense-8': 'Past Perfect Continuous',
        'guide-tense-9': 'Future Simple',
        'guide-tense-10': 'Future Continuous',
        'guide-tense-11': 'Future Perfect',
        'guide-tense-12': 'Future Perfect Continuous',
        'guide-grammar-base': 'Base structure: Easy / Medium / Hard',
        'guide-grammar-focus': 'Focused on oral repetition and fluency building.',
        'guide-pron-title': '🗣️ Pronunciation Practice',
        'guide-pron-intro': '11 pronunciation techniques with 3 difficulty levels:',
        'guide-pron-1': 'Word Stress Patterns - emphasis practice (BREAKfast, toMOrrow)',
        'guide-pron-2': 'Linking Sounds - connected speech (check_in, wake_up)',
        'guide-pron-3': 'Contractions Practice - contractions with IPA (I\'m -> /aɪm/)',
        'guide-pron-4': 'Silent Letters - highlighted silent letters (k(nife), w(rite))',
        'guide-pron-5': 'Over-Articulation - exaggerated articulation for muscle training',
        'guide-pron-6': 'Tongue Twisters - fluency drills',
        'guide-pron-7': 'Minimal Pairs Training - similar sounds (ship/sheep) with IPA',
        'guide-pron-8': 'Chunking (Natural Blocks) - natural speech blocks',
        'guide-pron-9': 'Stress and Intonation - key word emphasis (bold markers)',
        'guide-pron-10': 'Thought Groups - idea groups with pauses (/)',
        'guide-pron-11': 'Reading Practice - reading flow with pause marks',
        'guide-pron-base': 'Base structure: Easy / Medium / Hard',
        'guide-pron-focus': 'Focused on massive speaking practice, rhythm and clarity.',
        'guide-bilingual-title': '🌐 Bilingual Interface EN/PT',
        'guide-bilingual-1': 'EN/PT button switches language instantly.',
        'guide-bilingual-2': 'Translates labels, buttons, themes, tenses and techniques.',
        'guide-bilingual-3': 'Keeps your current selections after switching.',
        'guide-bilingual-4': 'Interface adapted for Brazilian context.',
        
        // Theme Names
        'daily-life': 'Daily Life',
        'travel': 'Travel',
        'technology': 'Technology',
        'work-career': 'Work and Career',
        'arts-entertainment': 'Arts and Entertainment',
        'education-science': 'Education and Science',
        'sports': 'Sports',
        'environment-nature': 'Environment and Nature',
        'society-behavior': 'Society and Behavior',
        
        // Tense Names
        'Present Simple': 'Present Simple',
        'Present Continuous': 'Present Continuous',
        'Present Perfect': 'Present Perfect',
        'Present Perfect Continuous': 'Present Perfect Continuous',
        'Past Simple': 'Past Simple',
        'Past Continuous': 'Past Continuous',
        'Past Perfect': 'Past Perfect',
        'Past Perfect Continuous': 'Past Perfect Continuous',
        'Future Simple': 'Future Simple',
        'Future Continuous': 'Future Continuous',
        'Future Perfect': 'Future Perfect',
        'Future Perfect Continuous': 'Future Perfect Continuous',
        
        // Technique Names
        'Word Stress Patterns': 'Word Stress Patterns',
        'Linking Sounds': 'Linking Sounds',
        'Contractions Practice': 'Contractions Practice',
        'Silent Letters': 'Silent Letters',
        'Over-Articulation': 'Over-Articulation',
        'Tongue Twisters': 'Tongue Twisters',
        'Minimal Pairs Training': 'Minimal Pairs Training',
        'Chunking (Natural Blocks)': 'Chunking (Natural Blocks)',
        'Stress and Intonation': 'Stress and Intonation',
        'Thought Groups': 'Thought Groups',
        'Reading Practice': 'Reading Practice'
    },
    pt: {
        // Labels
        'label-theme': 'Tema:',
        'label-study-type': 'Tipo de Estudo:',
        'label-level': 'Nível:',
        'label-select-tense': 'Selecione o Tempo Verbal:',
        'label-select-technique': 'Selecione a Técnica:',
        'label-current-tense': 'Tempo Verbal Atual:',
        'label-current-technique': 'Técnica Atual:',
        'label-total-sentences': 'Total de Frases:',
        
        // Study Type Options
        'grammar-tenses': 'Tempos Verbais',
        'pronunciation': 'Pronúncia',
        
        // Level Options
        'all-levels': 'Todos os Níveis',
        'easy': 'Fácil',
        'medium': 'Médio',
        'hard': 'Difícil',
        
        // Buttons
        'btn-prev': '← Anterior',
        'btn-next': 'Próximo →',
        'btn-random': 'Aleatório',
        'btn-start': 'Iniciar Prática',
        'btn-back': '← Voltar ao Menu',

        // Summary labels
        'summary-theme': 'Tema',
        'summary-study-type': 'Tipo',
        'summary-topic': 'Tópico',
        'summary-level': 'Nível',
        'no-sentences': 'Nao ha frases disponiveis para essa selecao.',
        
        // Subtitle
        'subtitle-fixed': 'Fala agora, corrige depois. Repeticao e seu superpoder.',

        // Purpose disclaimer
        'purpose-title': 'Motivacao do App',
        'purpose-text': 'Este app foi criado para pratica massiva de fala (speaking) em ingles. Nao é prova, nao gera nota e nao serve para julgar desempenho. O objetivo é treino pessoal, com repeticao em alto volume, usando frases e vocabulario frequentes em diferentes contextos de socializacao.',
        'stat-themes': 'temas',
        'stat-sentences': 'frases',
        'stat-words': 'palavras',
        'stat-unique-words': 'palavras unicas',

        // Quick guide
        'guide-title': 'O que voce encontra aqui',
        'guide-intro': 'Pratica nao é opcional, é essencial: aqui voce encontra repeticao em alto volume para construir consistencia e destravar sua fala em ingles.',
        'guide-usage-title': '🎮 Como Usar Esta Tela',
        'guide-usage-1': 'Escolha Tema, Tipo de Estudo, Topico e Nivel.',
        'guide-usage-2': 'Clique em Iniciar Pratica para abrir os cards de frases.',
        'guide-usage-3': 'Use Anterior e Proximo para navegar pelas frases.',
        'guide-usage-7': 'Repita a mesma frase varias vezes antes de passar para a proxima. Com o tempo, voce vai se sentir mais confortavel para falar.',
        'guide-usage-4': 'Use Aleatorio para pular para uma frase surpresa.',
        'guide-usage-5': 'Use EN/PT para trocar o idioma das instruções.',
        'guide-usage-6': 'Use Voltar ao Menu para retornar a esta tela.',
        'guide-themes-title': '🧭 Temas Disponiveis',
        'guide-themes-note': 'Os temas cobrem contextos reais de socializacao e pratica oral. O volume pode variar por tema.',
        'guide-theme-1': 'Dia a Dia - rotina matinal, refeicoes, tarefas domesticas, familia, compras',
        'guide-theme-2': 'Viagens - aeroporto, hotel, transporte, turismo, restaurantes',
        'guide-theme-3': 'Tecnologia - computadores, internet, apps, programacao, trabalho remoto',
        'guide-theme-4': 'Trabalho e Carreira - escritorio, reunioes, projetos, entrevistas, networking',
        'guide-theme-5': 'Artes e Entretenimento - musica, cinema, teatro, museus, festivais',
        'guide-theme-6': 'Educacao e Ciencia - escola, universidade, pesquisa, laboratorio, biblioteca',
        'guide-theme-7': 'Esportes - futebol, basquete, natacao, academia, competicoes',
        'guide-theme-8': 'Meio Ambiente e Natureza - clima, reciclage, conservacao, vida selvagem',
        'guide-theme-9': 'Sociedade e Comportamento - relacionamentos, hobbies, comunicacao, redes sociais',
        'guide-resources-title': '🧰 Recursos',
        'guide-grammar-title': 'Grammar Tenses',
        'guide-grammar-intro': '12 tempos verbais completos com 3 niveis de dificuldade:',
        'guide-tense-1': 'Present Simple',
        'guide-tense-2': 'Present Continuous',
        'guide-tense-3': 'Present Perfect',
        'guide-tense-4': 'Present Perfect Continuous',
        'guide-tense-5': 'Past Simple',
        'guide-tense-6': 'Past Continuous',
        'guide-tense-7': 'Past Perfect',
        'guide-tense-8': 'Past Perfect Continuous',
        'guide-tense-9': 'Future Simple',
        'guide-tense-10': 'Future Continuous',
        'guide-tense-11': 'Future Perfect',
        'guide-tense-12': 'Future Perfect Continuous',
        'guide-grammar-base': 'Estrutura base: Easy / Medium / Hard',
        'guide-grammar-focus': 'Conteudo voltado para repeticao oral e construcao de fluencia.',
        'guide-pron-title': '🗣️ Pratica de Pronuncia',
        'guide-pron-intro': '11 tecnicas de pronuncia com 3 niveis de dificuldade:',
        'guide-pron-1': 'Word Stress Patterns - padroes de enfase (BREAKfast, toMOrrow)',
        'guide-pron-2': 'Linking Sounds - sons conectados (check_in, wake_up)',
        'guide-pron-3': 'Contractions Practice - contracoes com IPA (I\'m -> /aɪm/)',
        'guide-pron-4': 'Silent Letters - letras mudas destacadas (k(nife), w(rite))',
        'guide-pron-5': 'Over-Articulation - articulacao exagerada para treino muscular',
        'guide-pron-6': 'Tongue Twisters - trava-linguas para fluencia',
        'guide-pron-7': 'Minimal Pairs Training - distincao de sons similares (ship/sheep) com IPA',
        'guide-pron-8': 'Chunking (Natural Blocks) - divisao em blocos naturais de fala',
        'guide-pron-9': 'Stress and Intonation - enfase em palavras-chave (negrito)',
        'guide-pron-10': 'Thought Groups - grupos de pensamento com pausas (/)',
        'guide-pron-11': 'Reading Practice - pratica de leitura com marcacao de pausas',
        'guide-pron-base': 'Estrutura base: Easy / Medium / Hard',
        'guide-pron-focus': 'Foco em pratica massiva de fala, ritmo e clareza.',
        'guide-bilingual-title': '🌐 Interface Bilingue EN/PT',
        'guide-bilingual-1': 'Botao EN/PT alterna instantaneamente entre ingles e portugues.',
        'guide-bilingual-2': 'Traduz rotulos, botoes, temas, tempos verbais e tecnicas.',
        'guide-bilingual-3': 'Mantem suas selecoes ao trocar idioma.',
        'guide-bilingual-4': 'Interface adaptada ao contexto brasileiro.',
        
        // Theme Names
        'daily-life': 'Dia a Dia',
        'travel': 'Viagens',
        'technology': 'Tecnologia',
        'work-career': 'Trabalho e Carreira',
        'arts-entertainment': 'Artes e Entretenimento',
        'education-science': 'Educação e Ciência',
        'sports': 'Esportes',
        'environment-nature': 'Meio Ambiente e Natureza',
        'society-behavior': 'Sociedade e Comportamento',
        
        // Tense Names
        'Present Simple': 'Presente Simples',
        'Present Continuous': 'Presente Contínuo',
        'Present Perfect': 'Presente Perfeito',
        'Present Perfect Continuous': 'Presente Perfeito Contínuo',
        'Past Simple': 'Passado Simples',
        'Past Continuous': 'Passado Contínuo',
        'Past Perfect': 'Passado Perfeito',
        'Past Perfect Continuous': 'Passado Perfeito Contínuo',
        'Future Simple': 'Futuro Simples',
        'Future Continuous': 'Futuro Contínuo',
        'Future Perfect': 'Futuro Perfeito',
        'Future Perfect Continuous': 'Futuro Perfeito Contínuo',
        
        // Technique Names
        'Word Stress Patterns': 'Padrões de Acentuação',
        'Linking Sounds': 'Ligação de Sons',
        'Contractions Practice': 'Prática de Contrações',
        'Silent Letters': 'Letras Mudas',
        'Over-Articulation': 'Super Articulação',
        'Tongue Twisters': 'Trava-Línguas',
        'Minimal Pairs Training': 'Treino de Pares Mínimos',
        'Chunking (Natural Blocks)': 'Divisão em Blocos Naturais',
        'Stress and Intonation': 'Ênfase e Entonação',
        'Thought Groups': 'Grupos de Pensamento',
        'Reading Practice': 'Prática de Leitura'
    }
};

// DOM elements
const themeSelect = document.getElementById('theme-select');
const studyTypeSelect = document.getElementById('study-type');
const tenseSelect = document.getElementById('tense-select');
const topicLabel = document.getElementById('topic-label');
const levelSelect = document.getElementById('level-select');
const selectionScreen = document.getElementById('selection-screen');
const practiceScreen = document.getElementById('practice-screen');
const startSessionBtn = document.getElementById('start-session-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const cardMode = document.getElementById('card-mode');
const currentSentence = document.getElementById('current-sentence');
const currentLevel = document.getElementById('current-level');
const sentenceCounter = document.getElementById('sentence-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const randomBtn = document.getElementById('random-btn');
const totalSentences = document.getElementById('total-sentences');
const currentTenseName = document.getElementById('current-tense-name');
const currentTopicLabel = document.getElementById('current-topic-label');
const subtitle = document.getElementById('subtitle');
const selectionSummary = document.getElementById('selection-summary');
const techniqueExplanation = document.getElementById('technique-explanation');
const explanationTitle = document.getElementById('explanation-title');
const explanationText = document.getElementById('explanation-text');
const langToggleBtn = document.getElementById('lang-toggle-btn');
const langFlag = document.getElementById('lang-flag');
const langCode = document.getElementById('lang-code');
const purposeTitle = document.getElementById('purpose-title');
const purposeText = document.getElementById('purpose-text');
const statThemesLabel = document.getElementById('stat-themes-label');
const statSentencesLabel = document.getElementById('stat-sentences-label');
const statWordsLabel = document.getElementById('stat-words-label');
const statUniqueWordsLabel = document.getElementById('stat-unique-words-label');

// Initialize app
function init() {
    themeSelect.value = state.currentTheme;
    studyTypeSelect.value = state.studyType;
    levelSelect.value = state.currentLevel;
    populateThemeSelect(false);
    populateTopicSelect(false);
    loadSentences();
    updateDisplay();
    if (state.studyType === 'pronunciation') {
        updateTechniqueExplanation();
    } else {
        updateTenseExplanation();
    }
    showSelectionScreen();
    attachEventListeners();
}

function showSelectionScreen() {
    selectionScreen.style.display = 'block';
    practiceScreen.style.display = 'none';
}

function showPracticeScreen() {
    selectionScreen.style.display = 'none';
    practiceScreen.style.display = 'block';
}

function startPracticeSession() {
    loadSentences();
    updateDisplay();
    if (state.studyType === 'pronunciation') {
        updateTechniqueExplanation();
    } else {
        updateTenseExplanation();
    }
    updateSelectionSummary();
    showPracticeScreen();
}

function backToMenu() {
    showSelectionScreen();
}

// Toggle language
function toggleLanguage() {
    state.language = state.language === 'en' ? 'pt' : 'en';
    langFlag.textContent = state.language === 'en' ? '🇺🇸' : '🇧🇷';
    langCode.textContent = state.language === 'en' ? 'EN' : 'PT';
    
    // Update all UI texts
    updateUILanguage();
    
    // Update explanation
    if (state.studyType === 'pronunciation') {
        updateTechniqueExplanation();
    } else {
        updateTenseExplanation();
    }
}

// Update all UI texts based on current language
function updateUILanguage() {
    const t = translations[state.language];
    
    // Update labels
    document.getElementById('label-theme').textContent = t['label-theme'];
    document.getElementById('label-study-type').textContent = t['label-study-type'];
    document.getElementById('label-level').textContent = t['label-level'];
    document.getElementById('label-total-sentences').textContent = t['label-total-sentences'];
    
    // Update topic label based on study type
    if (state.studyType === 'tenses') {
        topicLabel.textContent = t['label-select-tense'];
        currentTopicLabel.textContent = t['label-current-tense'];
    } else {
        topicLabel.textContent = t['label-select-technique'];
        currentTopicLabel.textContent = t['label-current-technique'];
    }
    
    // Update buttons
    document.getElementById('btn-prev-text').textContent = t['btn-prev'];
    document.getElementById('btn-next-text').textContent = t['btn-next'];
    document.getElementById('btn-random-text').textContent = t['btn-random'];
    document.getElementById('btn-start-text').textContent = t['btn-start'];
    document.getElementById('btn-back-text').textContent = t['btn-back'];
    
    // Update subtitle (fixed text)
    subtitle.textContent = t['subtitle-fixed'];

    // Update purpose disclaimer
    purposeTitle.textContent = t['purpose-title'];
    purposeText.textContent = t['purpose-text'];
    statThemesLabel.textContent = t['stat-themes'];
    statSentencesLabel.textContent = t['stat-sentences'];
    statWordsLabel.textContent = t['stat-words'];
    statUniqueWordsLabel.textContent = t['stat-unique-words'];

    // Update quick guide
    const quickGuideIds = [
        'guide-title', 'guide-intro',
        'guide-usage-title', 'guide-usage-1', 'guide-usage-2', 'guide-usage-3', 'guide-usage-7', 'guide-usage-4', 'guide-usage-5', 'guide-usage-6',
        'guide-themes-title', 'guide-themes-note',
        'guide-theme-1', 'guide-theme-2', 'guide-theme-3', 'guide-theme-4', 'guide-theme-5',
        'guide-theme-6', 'guide-theme-7', 'guide-theme-8', 'guide-theme-9',
        'guide-resources-title',
        'guide-grammar-title', 'guide-grammar-intro',
        'guide-tense-1', 'guide-tense-2', 'guide-tense-3', 'guide-tense-4',
        'guide-tense-5', 'guide-tense-6', 'guide-tense-7', 'guide-tense-8',
        'guide-tense-9', 'guide-tense-10', 'guide-tense-11', 'guide-tense-12',
        'guide-grammar-base', 'guide-grammar-focus',
        'guide-pron-title', 'guide-pron-intro',
        'guide-pron-1', 'guide-pron-2', 'guide-pron-3', 'guide-pron-4', 'guide-pron-5',
        'guide-pron-6', 'guide-pron-7', 'guide-pron-8', 'guide-pron-9', 'guide-pron-10', 'guide-pron-11',
        'guide-pron-base', 'guide-pron-focus',
        'guide-bilingual-title', 'guide-bilingual-1', 'guide-bilingual-2', 'guide-bilingual-3', 'guide-bilingual-4'
    ];
    quickGuideIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element && t[id]) {
            element.textContent = t[id];
        }
    });
    
    // Update study type options
    const studyTypeOptions = studyTypeSelect.querySelectorAll('option');
    studyTypeOptions.forEach(option => {
        const key = option.getAttribute('data-text-key');
        if (key) option.textContent = t[key];
    });
    
    // Update level options
    const levelOptions = levelSelect.querySelectorAll('option');
    levelOptions.forEach(option => {
        const key = option.getAttribute('data-text-key');
        if (key) option.textContent = t[key];
    });
    
    // Update theme options
    populateThemeSelect(true);
    
    // Update topic options (tenses or techniques)
    populateTopicSelect(true);

    // Keep practice summary in sync when language changes
    updateSelectionSummary();
}

function updateSelectionSummary() {
    const t = translations[state.language];
    const currentThemeData = themesData[state.currentTheme];
    const data = state.studyType === 'tenses' ? currentThemeData.tensesData : currentThemeData.pronunciationData;
    const topic = data[state.currentTenseIndex];
    const translatedTheme = t[state.currentTheme] || currentThemeData.displayName;
    const translatedStudyType = state.studyType === 'tenses' ? t['grammar-tenses'] : t['pronunciation'];
    const translatedTopic = t[topic.name] || topic.name;

    let translatedLevel = t['all-levels'];
    if (state.currentLevel === 'easy') translatedLevel = t['easy'];
    if (state.currentLevel === 'medium') translatedLevel = t['medium'];
    if (state.currentLevel === 'hard') translatedLevel = t['hard'];

    selectionSummary.textContent = `${t['summary-theme']}: ${translatedTheme} | ${t['summary-study-type']}: ${translatedStudyType} | ${t['summary-topic']}: ${translatedTopic} | ${t['summary-level']}: ${translatedLevel}`;
}

// Populate theme select
function populateThemeSelect(preserveSelection = true) {
    const t = translations[state.language];
    const currentValue = themeSelect.value; // Save current selection
    themeSelect.innerHTML = '';
    Object.keys(themesData).forEach(themeKey => {
        const option = document.createElement('option');
        option.value = themeKey;
        option.textContent = t[themeKey] || themesData[themeKey].displayName;
        themeSelect.appendChild(option);
    });
    if (preserveSelection && currentValue && themesData[currentValue]) {
        themeSelect.value = currentValue; // Restore selection
    } else {
        themeSelect.value = state.currentTheme;
    }
}

// Populate topic select based on study type
function populateTopicSelect(preserveSelection = true) {
    const t = translations[state.language];
    const currentValue = tenseSelect.value; // Save current selection
    tenseSelect.innerHTML = '';
    const currentThemeData = themesData[state.currentTheme];
    const data = state.studyType === 'tenses' ? currentThemeData.tensesData : currentThemeData.pronunciationData;
    
    data.forEach((item, index) => {
        const option = document.createElement('option');
        option.value = index;
        const translatedName = t[item.name] || item.name;
        option.textContent = state.studyType === 'tenses' ? `${index + 1}. ${translatedName}` : translatedName;
        tenseSelect.appendChild(option);
    });
    if (preserveSelection && currentValue && parseInt(currentValue) < data.length) {
        tenseSelect.value = currentValue; // Restore selection
        state.currentTenseIndex = parseInt(currentValue);
    } else {
        tenseSelect.value = String(state.currentTenseIndex);
    }
    
    // Update labels with translation
    const t2 = translations[state.language];
    if (state.studyType === 'tenses') {
        topicLabel.textContent = t2['label-select-tense'];
        currentTopicLabel.textContent = t2['label-current-tense'];
        subtitle.textContent = t2['subtitle-fixed'];
        updateTenseExplanation();
    } else {
        topicLabel.textContent = t2['label-select-technique'];
        currentTopicLabel.textContent = t2['label-current-technique'];
        subtitle.textContent = t2['subtitle-fixed'];
        updateTechniqueExplanation();
    }
}

// Update tense explanation
function updateTenseExplanation() {
    if (state.studyType === 'tenses') {
        const currentThemeData = themesData[state.currentTheme];
        const tense = currentThemeData.tensesData[state.currentTenseIndex];
        const explanations = state.language === 'en' ? tenseExplanations : tenseExplanationsPT;
        const explanation = explanations[tense.name];
        
        if (explanation) {
            explanationTitle.textContent = explanation.title;
            explanationText.textContent = explanation.description;
            techniqueExplanation.className = 'technique-explanation';
            techniqueExplanation.style.display = 'flex';
        }
    } else {
        techniqueExplanation.style.display = 'none';
    }
}

// Update technique explanation
function updateTechniqueExplanation() {
    if (state.studyType === 'pronunciation') {
        const currentThemeData = themesData[state.currentTheme];
        const technique = currentThemeData.pronunciationData[state.currentTenseIndex];
        const explanations = state.language === 'en' ? techniqueExplanations : techniqueExplanationsPT;
        const explanation = explanations[technique.name];
        
        if (explanation) {
            explanationTitle.textContent = explanation.title;
            explanationText.textContent = explanation.description;
            techniqueExplanation.className = 'technique-explanation pronunciation-mode';
            techniqueExplanation.style.display = 'flex';
        }
    } else {
        techniqueExplanation.style.display = 'none';
    }
}

// Load sentences based on current tense/technique and level
function loadSentences() {
    const currentThemeData = themesData[state.currentTheme];
    const data = state.studyType === 'tenses' ? currentThemeData.tensesData : currentThemeData.pronunciationData;
    const topic = data[state.currentTenseIndex];
    state.sentences = [];

    if (state.currentLevel === 'all') {
        state.sentences = [
            ...topic.easy.map(s => ({ text: s, level: 'easy' })),
            ...topic.medium.map(s => ({ text: s, level: 'medium' })),
            ...topic.hard.map(s => ({ text: s, level: 'hard' }))
        ];
    } else {
        state.sentences = topic[state.currentLevel].map(s => ({
            text: s,
            level: state.currentLevel
        }));
    }

    // Reset to first sentence when changing filters
    if (state.currentSentenceIndex >= state.sentences.length) {
        state.currentSentenceIndex = 0;
    }
}

// Update display
function updateDisplay() {
    updateCardMode();
    updateStats();
}

// Update card mode display
function updateCardMode() {
    const sentence = state.sentences[state.currentSentenceIndex];
    if (!sentence) {
        currentSentence.textContent = translations[state.language]['no-sentences'];
        currentLevel.textContent = '-';
        currentLevel.className = 'level-badge';
        sentenceCounter.textContent = '0 / 0';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    
    // Convert **text** to <strong>text</strong> for bold formatting
    const formattedText = sentence.text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Use innerHTML to support HTML formatting (like <strong> tags)
    currentSentence.innerHTML = formattedText;
    currentLevel.textContent = sentence.level;
    currentLevel.className = `level-badge ${sentence.level}`;
    sentenceCounter.textContent = `${state.currentSentenceIndex + 1} / ${state.sentences.length}`;

    // Update button states
    prevBtn.disabled = state.currentSentenceIndex === 0;
    nextBtn.disabled = state.currentSentenceIndex === state.sentences.length - 1;
}

// Update stats display
function updateStats() {
    const currentThemeData = themesData[state.currentTheme];
    const data = state.studyType === 'tenses' ? currentThemeData.tensesData : currentThemeData.pronunciationData;
    const t = translations[state.language];
    totalSentences.textContent = state.sentences.length;
    currentTenseName.textContent = t[data[state.currentTenseIndex].name] || data[state.currentTenseIndex].name;
}

// Navigation functions
function nextSentence() {
    if (state.currentSentenceIndex < state.sentences.length - 1) {
        state.currentSentenceIndex++;
        updateDisplay();
    }
}

function prevSentence() {
    if (state.currentSentenceIndex > 0) {
        state.currentSentenceIndex--;
        updateDisplay();
    }
}

function randomSentence() {
    if (!state.sentences.length) return;
    const randomIndex = Math.floor(Math.random() * state.sentences.length);
    state.currentSentenceIndex = randomIndex;
    updateDisplay();
}

// Event listeners
function attachEventListeners() {
    themeSelect.addEventListener('change', (e) => {
        state.currentTheme = e.target.value;

        state.currentTenseIndex = 0;
        state.currentSentenceIndex = 0;
        populateTopicSelect(false);
        loadSentences();
        updateDisplay();
        updateSelectionSummary();
    });

    studyTypeSelect.addEventListener('change', (e) => {
        state.studyType = e.target.value;
        state.currentTenseIndex = 0;
        state.currentSentenceIndex = 0;
        populateTopicSelect(false);
        loadSentences();
        updateDisplay();
        updateSelectionSummary();
    });

    tenseSelect.addEventListener('change', (e) => {
        state.currentTenseIndex = parseInt(e.target.value);
        state.currentSentenceIndex = 0;
        if (state.studyType === 'pronunciation') {
            updateTechniqueExplanation();
        } else if (state.studyType === 'tenses') {
            updateTenseExplanation();
        }
        loadSentences();
        updateDisplay();
        updateSelectionSummary();
    });

    levelSelect.addEventListener('change', (e) => {
        state.currentLevel = e.target.value;
        state.currentSentenceIndex = 0;
        loadSentences();
        updateDisplay();
        updateSelectionSummary();
    });

    startSessionBtn.addEventListener('click', startPracticeSession);
    backToMenuBtn.addEventListener('click', backToMenu);

    nextBtn.addEventListener('click', nextSentence);
    prevBtn.addEventListener('click', prevSentence);
    randomBtn.addEventListener('click', randomSentence);
    langToggleBtn.addEventListener('click', toggleLanguage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (practiceScreen.style.display === 'none') return;
        if (e.key === 'ArrowRight') {
            nextSentence();
        } else if (e.key === 'ArrowLeft') {
            prevSentence();
        } else if (e.key === ' ') {
            e.preventDefault();
            randomSentence();
        }
    });
}

// Start the app
init();
