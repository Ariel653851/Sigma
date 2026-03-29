/**
 * MAIMOLAB V3 - SCRIPT.JS
 * Chapter-based Navigation Architecture
 */

// --- DATA: CHAPTERS ---
const chapters = [
    // --- PREMIERE CHIMIE ---
    { id: "c-mol-1", title: "La Mole & Quantités de Matière", subject: "chimie", level: "1ere" },
    { id: "c-redox-1", title: "Oxydoréduction & Tableau d'avancement", subject: "chimie", level: "1ere" },
    { id: "c-dosage-1", title: "Dosages & Titrages", subject: "chimie", level: "1ere" },
    { id: "c-lewis-1", title: "Schéma de Lewis, Polarité & Nomenclature", subject: "chimie", level: "1ere" },
    
    // --- PREMIERE PHYSIQUE ---
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-inter-1", title: "Interactions Fondamentales", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },

    // --- SECONDE (Placeholders) ---
    { id: "c-milieu-2", title: "Constitution de la matière", subject: "chimie", level: "2nde" },
    { id: "p-mouv-2", title: "Mouvement & Interactions", subject: "physique", level: "2nde" }
];

// --- DATA: FORMULAS ---
const formulas = [
    // PREMIERE CHIMIE: MOLE
    { 
        id: "n-m-m", chapterId: "c-mol-1", title: "Quantité de matière (Masse)", 
        formula: "n = \\frac{m}{M}", 
        definition: "Relation entre la mole, la masse de l'échantillon et la masse molaire.",
        properties: "n en mol, m en g, M en g/mol.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)"
    },
    { 
        id: "n-cv", chapterId: "c-mol-1", title: "Quantité de matière (Solution)", 
        formula: "n = C \\times V", 
        definition: "Calcul des moles dans un volume V de solution de concentration molaire C.",
        properties: "Valable pour les solutés dissous.",
        units: "n [Qté matière] (mol), C [Conc. molaire] (mol/L), V [Volume] (L)"
    },
    // PREMIERE CHIMIE: REDOX
    { 
        id: "redox-gen", chapterId: "c-redox-1", title: "Équation d'oxydoréduction", 
        formula: "Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2", 
        definition: "Transfert d'électrons entre deux couples redox.",
        properties: "L'oxydant capte des électrons, le réducteur en cède.",
        units: "Ox [Oxydant], Red [Réducteur], e- [Électrons]"
    },
    // PREMIERE CHIMIE: DOSAGES
    { 
        id: "beer-lamb", chapterId: "c-dosage-1", title: "Loi de Beer-Lambert", 
        formula: "A = \\epsilon \\cdot l \\cdot C", 
        definition: "Lien entre l'absorbance d'une solution colorée et sa concentration.",
        properties: "Valable pour des solutions diluées. A est sans unité.",
        units: "A [Absorbance], ε [Coef. extinction] (L/mol/cm), l [Largeur] (cm), C [Conc.] (mol/L)"
    },
    { 
        id: "titrage-eq", chapterId: "c-dosage-1", title: "Relation à l'équivalence", 
        formula: "\\frac{n_A}{a} = \\frac{n_B}{b}", 
        definition: "À l'équivalence d'un titrage, les réactifs ont été introduits dans les proportions stoechiométriques.",
        properties: "Permet de déterminer la concentration inconnue.",
        units: "n [Moles] (mol), a/b [Coef. stoechio]"
    },
    // PREMIERE PHYSIQUE: ENERGIE
    { 
        id: "ec-1-v3", chapterId: "p-energie-1", title: "Énergie Cinétique", 
        formula: "E_c = \\frac{1}{2} m v^2", 
        definition: "Énergie liée au mouvement d'un système de masse m et de vitesse v.",
        properties: "Ec toujours positive. Doubler la vitesse quadruple l'énergie.",
        units: "Ec [Énergie Cin.] (J), m [Masse] (kg), v [Vitesse] (m/s)"
    },
    { 
        id: "epp-1-v3", chapterId: "p-energie-1", title: "Énergie Potentielle de pesanteur", 
        formula: "E_{pp} = m \\cdot g \\cdot z", 
        definition: "Énergie liée à l'altitude z d'un système dans le champ de pesanteur g.",
        properties: "Dépend de l'origine choisie pour l'altitude z.",
        units: "Epp [Énergie Pot.] (J), m [Masse] (kg), z [Altitude] (m)"
    },
    { 
        id: "em-1-v3", chapterId: "p-energie-1", title: "Énergie Mécanique", 
        formula: "E_m = E_c + E_{pp}", 
        definition: "Somme de l'énergie cinétique et de l'énergie potentielle.",
        properties: "Se conserve s'il n'y a pas de frottements.",
        units: "Em [Énergie Méc.] (J)"
    },
    // PREMIERE PHYSIQUE: ELEC
    { 
        id: "p-ui", chapterId: "p-elec-1", title: "Puissance Électrique", 
        formula: "P = U \\cdot I", 
        definition: "Puissance reçue par un récepteur ou fournie par un générateur.",
        properties: "Relation valable en courant continu.",
        units: "P [Puissance] (W), U [Tension] (V), I [Intensité] (A)"
    },
    { 
        id: "e-pt", chapterId: "p-elec-1", title: "Énergie Électrique", 
        formula: "E = P \\cdot \\Delta t", 
        definition: "Énergie consommée pendant une durée Δt.",
        properties: "Généralement convertie en chaleur ou mouvement.",
        units: "E [Énergie] (J ou kWh), P [Puissance] (W), Δt [Temps] (s)"
    },
    // PREMIERE PHYSIQUE: FLUIDES
    { 
        id: "p-fluide", chapterId: "p-fluide-1", title: "Loi de la Statique des Fluides", 
        formula: "P_B - P_A = \\rho \\cdot g \\cdot (z_A - z_B)", 
        definition: "Différence de pression entre deux points d'un fluide au repos.",
        properties: "La pression augmente avec la profondeur.",
        units: "P [Pression] (Pa), ρ [Masse Vol.] (kg/m³), g [Gravité] (N/kg), z [Altitude] (m)"
    },
    // SECONDE: EXAMPLES
    { 
        id: "poids-2-v3", chapterId: "p-mouv-2", title: "Poids d'un corps", 
        formula: "P = m \\cdot g", 
        definition: "Force d'attraction exercée par la Terre sur un objet.",
        properties: "g ≈ 9,81 N/kg sur Terre.",
        units: "P [Poids] (N), m [Masse] (kg), g [Gravité] (N/kg)"
    }
];

// --- STATE MANAGEMENT ---
let currentLevel = '1ere';
let currentChapterId = null; // null means we are in the Chapter Grid view
let currentSearch = '';

// --- DOM ELEMENTS ---
const gridContainer = document.getElementById('grid-container');
const levelTabs = document.querySelectorAll('.level-tab');
const mainSearch = document.getElementById('main-search');
const backBtn = document.getElementById('back-btn');
const viewTitle = document.getElementById('view-title');
const noResults = document.getElementById('no-results');

const modalOverlay = document.getElementById('modal-overlay');
const mathBox = document.getElementById('math-box');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalUnits = document.getElementById('modal-units');
const modalDef = document.getElementById('modal-def');
const modalProp = document.getElementById('modal-prop');

// --- RENDERING LOGIC ---

function updateCounter() {
    const countNum = document.getElementById('count-num');
    if (countNum) countNum.textContent = formulas.length;
}

function render() {
    gridContainer.innerHTML = '';
    noResults.classList.add('hidden');

    if (currentSearch.length > 0) {
        renderSearchResults();
    } else if (currentChapterId === null) {
        renderChapters();
    } else {
        renderFormulas(currentChapterId);
    }

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
    updateCounter();
}

function renderChapters() {
    backBtn.classList.add('hidden');
    viewTitle.textContent = `Chapitres de ${currentLevel}`;
    
    const filteredChapters = chapters.filter(c => c.level === currentLevel);
    
    if (filteredChapters.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    filteredChapters.forEach(c => {
        const formulaCount = formulas.filter(f => f.chapterId === c.id).length;
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="subj-dot ${c.subject}"></div>
            <div class="card-info">${c.subject.toUpperCase()}</div>
            <h3>${c.title}</h3>
            <div class="card-info">${formulaCount} formule(s)</div>
        `;
        card.onclick = () => {
            currentChapterId = c.id;
            render();
        };
        gridContainer.appendChild(card);
    });
}

function renderFormulas(chapterId) {
    const chapter = chapters.find(c => c.id === chapterId);
    viewTitle.textContent = chapter ? chapter.title : "Formules";
    backBtn.classList.remove('hidden');

    const filteredFormulas = formulas.filter(f => f.chapterId === chapterId);

    if (filteredFormulas.length === 0) {
        gridContainer.innerHTML = `
            <div class="empty-state">
                <i data-lucide="layers" style="width:48px;height:48px;opacity:0.3"></i>
                <p>Pas encore de formules pour ce chapitre.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredFormulas.forEach(f => {
        const card = generateFormulaCard(f);
        gridContainer.appendChild(card);
    });
}

function renderSearchResults() {
    viewTitle.textContent = "Résultats de recherche";
    backBtn.classList.remove('hidden');
    
    const results = formulas.filter(f => 
        f.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
        f.definition.toLowerCase().includes(currentSearch.toLowerCase())
    );

    if (results.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    results.forEach(f => {
        const card = generateFormulaCard(f);
        gridContainer.appendChild(card);
    });
}

function generateFormulaCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const card = document.createElement('div');
    card.className = `formula-card ${chapter ? chapter.subject : ""}`;
    
    // Legend Pills
    const pillsHtml = f.units ? f.units.split(',').map(u => {
        const parts = u.trim().split('(');
        const desc = parts[0].trim();
        const unit = parts[1] ? parts[1].replace(')', '') : '';
        return `
            <div class="unit-pill">
                <span class="pill-sym">${desc}</span>
                <span class="pill-arrow">↑</span>
                <span class="pill-unit">${unit}</span>
            </div>
        `;
    }).join('') : "";

    card.innerHTML = `
        <span class="card-tag ${chapter ? chapter.subject : ""}">${chapter ? chapter.subject.toUpperCase() : ""} • ${chapter ? chapter.level : ""}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">\\[ ${f.formula} \\]</div>
        <div class="bottom-legend-area">${pillsHtml}</div>
        <div class="card-footer">
            <span>Voir définitions et propriétés</span>
            <i data-lucide="arrow-right" style="width:16px"></i>
        </div>
    `;
    card.onclick = () => openModal(f);
    return card;
}

// --- MODAL LOGIC ---

function openModal(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const modalWindow = document.querySelector('.modal-window');
    modalWindow.className = `modal-window glass ${chapter ? chapter.subject : ""}`;

    modalTitle.textContent = f.title;
    modalTag.textContent = `${chapter ? chapter.subject.toUpperCase() : ""} • ${chapter ? chapter.level : ""}`;
    modalTag.className = `modal-badge ${chapter ? chapter.subject : ""}`;
    modalUnits.textContent = f.units;
    modalDef.textContent = f.definition;
    modalProp.textContent = f.properties;
    mathBox.innerHTML = `\\[ ${f.formula} \\]`;
    
    switchTab('eqn');
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-trigger').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.id === `tab-${tabId}`));
}

// --- EVENT LISTENERS ---

levelTabs.forEach(tab => {
    tab.onclick = () => {
        levelTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentLevel = tab.dataset.level;
        currentChapterId = null; // Return to chapter grid
        currentSearch = '';
        mainSearch.value = '';
        render();
    };
});

mainSearch.oninput = (e) => {
    currentSearch = e.target.value;
    if (currentSearch.length > 0) {
        currentChapterId = null;
    }
    render();
};

backBtn.onclick = () => {
    currentChapterId = null;
    currentSearch = '';
    mainSearch.value = '';
    render();
};

document.querySelector('.modal-close').onclick = () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
};

document.querySelectorAll('.tab-trigger').forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
});

// Init
render();
