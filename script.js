/**
 * MAIMOLAB V3 - SCRIPT.JS (v1.3)
 * Portail Navigation with Protocol-specific UI
 */

// --- DATA: CHAPTERS ---
const chapters = [
    { id: "c-mol-1", title: "La Mole & Quantités de Matière", subject: "chimie", level: "1ere" },
    { id: "c-redox-1", title: "Oxydoréduction & Tableau d'avancement", subject: "chimie", level: "1ere" },
    { id: "c-dosage-1", title: "Dosages & Titrages", subject: "chimie", level: "1ere" },
    { id: "c-lewis-1", title: "Schéma de Lewis & Polarité", subject: "chimie", level: "1ere", src: "assets/vsepr_table_colored.png" },
    { id: "c-nom-1", title: "Nomenclature", subject: "chimie", level: "1ere", src: "assets/nomenclature_recap_v2.png" },
    { id: "c-struct-1", title: "Structure des Espèces Chimiques", subject: "chimie", level: "1ere" },
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },
    { id: "p-mouv-1", title: "Mouvement et Forces", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-ec-1", title: "Énergie Cinétique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "proto-chimie-1", title: "Protocoles de Chimie", subject: "protocoles", level: "1ere" },

    // Terminale Physique
    { id: "p-mouv-term", title: "Cinématique & Vecteurs", subject: "physique", level: "term" },
    { id: "p-newton-term", title: "Lois de Newton & Projectiles", subject: "physique", level: "term" },
    { id: "p-kepler-term", title: "Lois de Kepler & Satellites", subject: "physique", level: "term" },
    { id: "p-fluide-term", title: "Mécanique des Fluides & Bernoulli", subject: "physique", level: "term" },
    { id: "p-thermo-term", title: "Thermodynamique & Bilan Thermique", subject: "physique", level: "term" },
    { id: "p-ondes-term", title: "Diffraction, Interférences & Doppler", subject: "physique", level: "term" },
    { id: "p-optique-term", title: "Lunette Astronomique", subject: "physique", level: "term" },
    { id: "p-quantique-term", title: "Physique Quantique & Photons", subject: "physique", level: "term" },
    { id: "p-rc-term", title: "Circuit RC & Condensateur", subject: "physique", level: "term" },

    // Terminale Chimie
    { id: "c-acide-term", title: "Acides, Bases & pH", subject: "chimie", level: "term" },
    { id: "c-cinetique-term", title: "Cinétique Chimique & Ordre 1", subject: "chimie", level: "term" },
    { id: "c-equilibre-term", title: "Équilibre Chimique & Quotient Qr", subject: "chimie", level: "term" },
    { id: "c-titrage-term", title: "Titrages pH-métriques & Conductimétriques", subject: "chimie", level: "term" },
    { id: "c-piles-term", title: "Piles & Énergie Électrochimique", subject: "chimie", level: "term" },
    { id: "c-electrolyse-term", title: "Électrolyse & Transformations Forcées", subject: "chimie", level: "term" },
    { id: "c-synthèse-term", title: "Synthèse Organique & Mécanismes", subject: "chimie", level: "term" },
    { id: "c-spectro-term", title: "Spectroscopies IR & RMN", subject: "chimie", level: "term" },

    // Terminale Protocoles
    { id: "proto-term", title: "🚨 Protocoles de Terminale", subject: "protocoles", level: "term" }
];

// --- DATA: DEFINITIONS (Centralized) ---
const allDefinitions = {
    "c-redox-1": [
        { t: "Oxydant", d: "Espèce chimique capable de capter un ou plusieurs électrons." },
        { t: "Réducteur", d: "Espèce chimique capable de céder un ou plusieurs électrons." },
        { t: "Oxydation", d: "Réaction au cours de laquelle une espèce chimique perd des électrons (le réducteur est oxydé)." },
        { t: "Réduction", d: "Réaction au cours de laquelle une espèce chimique gagne des électrons (l'oxydant est réduit)." },
        { t: "Couple Oxydant / Réducteur", d: "Ensemble formé par l'oxydant et le réducteur qui passent de l'un à l'autre par gain ou perte d'électrons. On le note Ox / Red." },
        { t: "Équation d'oxydo-réduction", d: "Une équation d'oxydo-réduction est une réaction au cours de laquelle le réducteur d'un couple cède des électrons à un oxydant d'un autre couple." }
    ],
    "c-mol-1": [
        { t: "La Mole", d: "Unité de quantité de matière (symbole : mol) contenant 6,022 x 10^23 entités." },
        { t: "Concentration Molaire (C)", d: "Quantité de soluté par litre de solution (mol/L)." },
        { t: "Dilution", d: "Action d'ajouter du solvant pour diminuer la concentration." },
        { t: "Concentration Massique (Cm)", d: "Masse de soluté dissous par litre de solution (g/L)." },
        { t: "Soluté", d: "Espèce minoritaire qui est dissoute dans un solvant." },
        { t: "Solvant", d: "Milieu liquide majoritaire dans lequel on dissout le soluté." }
    ],
    "p-optique-1": [
        { t: "Lentille Convergente", d: "Système optique qui dévie les rayons lumineux parallèles vers un point unique appelé foyer image." },
        { t: "Distance Focale (f')", d: "Distance entre le centre optique O de la lentille et le foyer image F'. Elle s'exprime en mètres." },
        { t: "Vergence", d: "Grandeur notée δ qui caractérise la capacité d'une lentille à faire converger la lumière. Elle est l'inverse de la distance focale." },
        { t: "Grandissement (γ)", d: "Rapport entre la taille de l'image et la taille de l'objet." }
    ],
    "p-ondes-1": [
        { t: "Onde Mécanique Progressive", d: "Une onde mécanique progressive est le phénomène de propagation d’une perturbation dans un milieu matériel sans transport de matière et avec transfert d’énergie." },
        { t: "Onde Sonore Périodique", d: "Une onde sonore périodique est le phénomène de propagation d’une succession de zones de compression-dilatation du milieu de propagation, créées par la vibration d’une source (haut-parleur, émetteur d’ultrasons) à la fréquence f." },
        { t: "Période (T)", d: "La période temporelle correspond au plus petit intervalle de temps au cours duquel le phénomène se répète identique à lui-même." },
        { t: "Fréquence (f)", d: "La fréquence est le nombre de fois que le phénomène se répète en une seconde." },
        { t: "Longueur d'onde (λ)", d: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase" },
        { t: "Retard (τ)", d: "Durée mise par une onde pour aller d'un point M à un point M'." }
    ],
    "p-energie-1": [
        { t: "Énergie Cinétique (Ec)", d: "Énergie que possède un corps en raison de sa vitesse." },
        { t: "Énergie Potentielle (Ep)", d: "Énergie que possède un corps en fonction de sa position (ici son altitude)." },
        { t: "Énergie Mécanique (Em)", d: "Somme de l'énergie cinétique et de toutes les énergies potentielles du système." },
        { t: "Théorème de l'énergie mécanique", d: "La variation de l'énergie mécanique d'un système entre deux instants A et B est égale à la somme des travaux des forces non conservatrices s'exerçant sur ce système entre ces deux instants." },
        { t: "Force Conservatrice", d: "Force dont le travail ne dépend pas du chemin suivi (ex: le poids)." },
        { t: "Force Non Conservatrice", d: "Force dont le travail dépend du chemin suivi (ex: force de frottement)." }
    ],
    "p-ec-1": [
        { t: "Énergie Cinétique (Ec)", d: "Énergie que possède un corps en raison de sa vitesse (dépend de sa masse et du carré de sa vitesse)." },
        { t: "Théorème de l'énergie cinétique", d: "La variation de l'énergie cinétique d'un système entre deux instants A et B est égale à la somme des travaux des forces extérieures appliquées au système entre ces deux instants." },
        { t: "Travail d'une force (W)", d: "Énergie transférée par une force lors du déplacement de son point d'application." },
        { t: "Travail Moteur", d: "Travail d'une force dont le point d'application se déplace dans le sens favorisant le mouvement (W > 0)." },
        { t: "Travail Résistant", d: "Travail d'une force qui s'oppose au mouvement du système (W < 0)." }
    ],
    "p-elec-1": [
        { t: "Intensité (I)", d: "Débit de charges électriques dans un circuit. Elle s'exprime en Ampères (A)." },
        { t: "Tension (U)", d: "Différence de potentiel entre deux points d'un circuit. Elle s'exprime en Volts (V)." },
        { t: "Effet Joule", d: "Dégagement de chaleur lors du passage d'un courant électrique dans un conducteur." },
        { t: "Loi d'Ohm", d: "La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité qui le traverse (U = R.I)." },
        { t: "Conducteur Ohmique", d: "Composant dont la caractéristique tension-courant est une droite passant par l'origine." }
    ],
    "c-dosage-1": [
        { t: "Dosage", d: "Action de déterminer la quantité de matière ou la concentration d'une espèce chimique dans une solution." },
        { t: "Titrage", d: "Dosage par une réaction chimique totale et rapide entre une espèce titrée et une espèce titrante." },
        { t: "Équivalence", d: "L'équivalence est le moment où les réactifs ont été introduits dans les proportions stœchiométriques." },
        { t: "Loi de Beer-Lambert", d: "L'absorbance A d'une solution est proportionnelle à sa concentration C. A = k x C." },
        { t: "Validité de Beer-Lambert", d: "La solution doit être diluée car la loi de Beer-Lambert n'est vérifiée que pour des concentrations inférieures à 1,0 x 10^-2 mol.L^-1." },
        { t: "Vérification de Beer-Lambert", d: "En observant la courbe obtenue, on constate que l'absorbance A est une fonction linéaire de C et il existe donc une relation de proportionnalité entre A et C, ce qui confirme que la loi de Beer-Lambert est vérifiée." },
        { t: "Choix de λ_max", d: "On choisit la longueur d'onde correspondant au maximum d'absorption car c'est celle où l'espèce absorbe le plus. D'après la loi de Beer-Lambert, cela maximise la différence d'absorbance entre deux solutions de concentrations différentes et rend la mesure plus sensible et plus précise." },
        { t: "Indicateur Coloré", d: "Espèce chimique dont la couleur change selon le milieu, utilisée pour repérer l'équivalence." }
    ],
    "c-lewis-1": [
        { t: "Règle du duet", d: "Pour les atomes avec Z ≤ 4, ils cherchent à avoir 2 électrons sur leur première couche." },
        { t: "Règle de l'octet", d: "Pour les atomes avec Z ≥ 5, ils cherchent à avoir 8 électrons sur leur couche externe." },
        { t: "Doublet liant", d: "Paire d'électrons partagée entre deux atomes pour former une liaison covalente." },
        { t: "Doublet non-liant", d: "Paire d'électrons de la couche externe d'un atome qui ne participe pas aux liaisons." },
        { t: "Électronégativité", d: "Grandeur traduisant la capacité d'un atome à attirer les électrons d'une liaison vers lui." },
        { t: "Liaison polarisée", d: "Liaison entre deux atomes d'électronégativités différentes (différence > 0,4)." },
        { t: "Molécule Polaire", d: "Molécule possédant des liaisons polarisées et dont les centres de charges + et - ne sont pas confondus." }
    ],
    "p-fluide-1": [
        { t: "Pression (P)", d: "Force pressante exercée par unité de surface (P = F/S, en Pascals)." },
        { t: "Loi de Mariotte", d: "À température constante, le produit P.V d'une masse de gaz est constant." },
        { t: "Masse Volumique (ρ)", d: "Masse d'un corps par unité de volume (kg/m3)." }
    ],
    "c-struct-1": [
        {
            t: "Dissolution d'un solide ionique",
            d: "Lorsqu'on plonge un cristal dans l'eau, trois grandes étapes ont lieu :<br><br><strong>1. Dissociation</strong> des ions du solide : les molécules d'eau cassent les liaisons entre les ions du cristal (molécule polaire).<br><br><strong>2. Solvatation</strong> (ou <strong>hydratation</strong>) des ions : les ions sont entourés par les atomes portant la charge opposée.<br><br><strong>3. Dispersion</strong> des ions dans la solution : on obtient une <strong>solution ionique</strong>."
        },
        {
            t: "Miscibilité des liquides",
            d: "Deux liquides sont dits <strong>miscibles</strong> s'ils peuvent se mélanger pour former un mélange homogène.<br><br><strong>Condition principale :</strong> Deux liquides sont miscibles s'ils ont la <strong>même polarité</strong>."
        },
        {
            t: "Extraction par solvant",
            d: "<strong>Objectif :</strong> Extraire une espèce dissoute dans un solvant A en la transférant dans un solvant B.<br><br><strong>Conditions pour le choix du solvant B d'extraction :</strong><br><br>• Le solvant A et le solvant B ne doivent pas être miscibles entre eux (ex : eau et huile) ;<br><br>• L'espèce à extraire doit être plus soluble dans B que dans A ;<br><br>• On préfère toujours utiliser le solvant <strong>le moins toxique</strong> possible."
        },
        {
            t: "Justifier la solubilité d'une espèce A dans une espèce B",
            d: "<strong>1.</strong> Déterminer le schéma de Lewis des deux espèces.<br><br><strong>2.</strong> En déduire leur polarité.<br><br><strong>3.</strong> S'ils ont la même polarité, alors l'espèce A est très soluble dans l'espèce B."
        },
        {
            t: "Molécule amphiphile",
            d: "Une <strong>molécule amphiphile</strong> est une molécule qui possède :<br><br>• La <strong>chaîne carbonée</strong>, apolaire (ne se mélange pas avec l'eau) et <strong>lipophile</strong> (qui aime la graisse) ;<br><br>• La <strong>tête ionique</strong> (le groupe carboxylate), polaire, chargée négativement et <strong>hydrophile</strong>."
        },
        {
            t: "Tensioactif",
            d: "Un <strong>tensioactif</strong> est une molécule <strong>amphiphile</strong>. Ils permettent de réaliser des <strong>émulsions</strong> entre des espèces <strong>non miscibles</strong>."
        }
    ],
    "p-mouv-1": [
        {
            t: "Référentiel",
            d: "Objet solide de référence (associé à un repère d'espace et une horloge) par rapport auquel on étudie le mouvement d'un système."
        },
        {
            t: "Référentiel Galiléen",
            d: "Référentiel dans lequel le principe d'inertie est rigoureusement vérifié. À l'échelle humaine, le référentiel terrestre peut être considéré comme galiléen pour des expériences de courte durée."
        },
        {
            t: "Système",
            d: "Objet ou ensemble d'objets matériel dont on étudie le mouvement. Il est souvent modélisé par un point matériel unique concentrant toute sa masse."
        },
        {
            t: "Trajectoire",
            d: "Ensemble des positions successives occupées par le système au cours du temps (ex: rectiligne, circulaire ou curviligne)."
        },
        {
            t: "Vecteur vitesse instantanée",
            d: "Vecteur caractérisant la vitesse d'un système à un instant précis t. Il est toujours tangent à la trajectoire au point considéré et orienté dans le sens du mouvement."
        },
        {
            t: "Principe d'inertie",
            d: "Dans un référentiel galiléen, si un système est soumis à des forces extérieures qui se compensent, alors il est soit immobile, soit en mouvement rectiligne uniforme (et réciproquement)."
        },
        {
            t: "Forces qui se compensent",
            d: "Forces s'exerçant sur un système dont la somme vectorielle est égale au vecteur nul (\\(\\sum \\vec{F}_{ext} = \\vec{0}\\))."
        }
    ],

    // --- TERMINALE PHYSIQUE ---
    "p-mouv-term": [
        { t: "Vecteur position", d: "Vecteur \\(\\vec{OM}\\) reliant l'origine du repère au point M, exprimé par ses coordonnées (x, y)." },
        { t: "Vecteur vitesse", d: "Dérivée du vecteur position par rapport au temps : \\(\\vec{v} = \\frac{d\\vec{OM}}{dt}\\). Tangent à la trajectoire, en m/s." },
        { t: "Vecteur accélération", d: "Dérivée du vecteur vitesse par rapport au temps : \\(\\vec{a} = \\frac{d\\vec{v}}{dt}\\), en m/s²." },
        { t: "Vecteur accélération centripète", d: "Pour un mouvement circulaire uniforme, l'accélération est dirigée vers le centre du cercle : \\(a = \\frac{v^2}{R}\\)." },
        { t: "Mouvement circulaire uniforme", d: "Mouvement dont la trajectoire est un cercle et dont la valeur de la vitesse est constante. L'accélération est centripète (vers le centre)." }
    ],
    "p-newton-term": [
        { t: "1ère loi de Newton (Inertie)", d: "Dans un référentiel galiléen, si la somme vectorielle des forces est nulle, le système est en mouvement rectiligne uniforme ou immobile." },
        { t: "2ème loi de Newton (Dynamique)", d: "La somme des forces extérieures est égale au produit masse × accélération : \\(\\sum \\vec{F}_{ext} = m \\vec{a}\\)." },
        { t: "3ème loi de Newton (Réciprocité)", d: "Si un corps A exerce une force sur un corps B, alors B exerce sur A une force de même direction, même valeur, mais de sens opposé." },
        { t: "Portée (tir parabolique)", d: "Distance horizontale parcourue par un projectile jusqu'à sa chute. Elle dépend de la vitesse initiale et de l'angle de tir." },
        { t: "Chute libre", d: "Mouvement d'un corps soumis uniquement à la pesanteur. La trajectoire est parabolique si la vitesse initiale est horizontale." }
    ],
    "p-kepler-term": [
        { t: "1ère loi de Kepler (Orbites)", d: "Chaque planète décrit une ellipse dont le Soleil occupe l'un des deux foyers." },
        { t: "2ème loi de Kepler (Aires)", d: "Le segment joignant le Soleil à une planète balaie des aires égales en des temps égaux. La planète va plus vite près du Soleil." },
        { t: "3ème loi de Kepler (Périodes)", d: "Le rapport du carré de la période T sur le cube du demi grand axe a est constant pour tous les corps orbitant autour du même astre : T²/a³ = constante." },
        { t: "Gravitation universelle (Newton)", d: "Deux corps s'attirent avec une force proportionnelle à leurs masses et inversement proportionnelle au carré de leur distance : F = G·m₁·m₂/r²." },
        { t: "Satellite géostationnaire", d: "Satellite dont la période de révolution est égale à la période de rotation de la Terre (24h). Il reste fixe par rapport à un point sur Terre." }
    ],
    "p-fluide-term": [
        { t: "Écoulement laminaire", d: "Écoulement régulier et organisé dans lequel les filets fluides sont parallèles et ne se mélangent pas." },
        { t: "Débit volumique", d: "Volume de fluide qui traverse une section S en une seconde : Q = S × v (en m³/s)." },
        { t: "Équation de continuité", d: "Pour un fluide incompressible, le débit volumique est constant : S₁v₁ = S₂v₂. Plus une section est étroite, plus le fluide va vite." },
        { t: "Théorème de Bernoulli", d: "Pour un fluide incompressible en écoulement laminaire, la somme P + ½ρv² + ρgh est constante le long d'une ligne de courant." },
        { t: "Poussée d'Archimède", d: "Tout corps plongé dans un fluide subit une poussée verticale ascendante égale au poids du fluide déplacé : Π = ρ_fluide × V_immergé × g." }
    ],
    "p-thermo-term": [
        { t: "Énergie interne (U)", d: "Somme de toutes les énergies microscopiques d'un système (agitation thermique, interactions entre particules). Elle augmente avec la température." },
        { t: "Premier principe de la thermodynamique", d: "La variation d'énergie interne d'un système est égale à la somme du travail W et du transfert thermique Q reçus : ΔU = W + Q." },
        { t: "Transfert thermique (Q)", d: "Énergie échangée par conduction, convection ou rayonnement entre deux corps à des températures différentes. Q > 0 si le système reçoit de la chaleur." },
        { t: "Capacité thermique (C)", d: "Quantité d'énergie nécessaire pour élever d'un kelvin la température d'un système : Q = C × ΔT (en J/K)." },
        { t: "Bilan énergétique", d: "Méthode permettant d'analyser les échanges d'énergie d'un système avec son environnement pour trouver la variation de température." }
    ],
    "p-ondes-term": [
        { t: "Diffraction", d: "Phénomène par lequel une onde se propage en contournant un obstacle ou en s'élargissant après un passage par une fente. Visible si λ ≈ taille de la fente." },
        { t: "Interférences constructives", d: "Superposition de deux ondes en phase, donnant une amplitude maximale. Condition : différence de marche δ = k × λ (k entier)." },
        { t: "Interférences destructives", d: "Superposition de deux ondes en opposition de phase, donnant une amplitude nulle. Condition : δ = (2k+1) × λ/2." },
        { t: "Effet Doppler", d: "Modification de la fréquence perçue d'une onde due au mouvement relatif de la source et du récepteur. Fréquence augmente à l'approche, diminue à l'éloignement." },
        { t: "Déphasage", d: "Différence de phase φ entre deux signaux de même fréquence. Lié à la différence de marche : φ = 2πδ/λ." }
    ],
    "p-optique-term": [
        { t: "Lunette astronomique", d: "Instrument optique composé d'un objectif (lentille convergente de grande focale) et d'un oculaire (lentille convergente de petite focale), permettant d'observer des objets éloignés." },
        { t: "Grossissement (G)", d: "Rapport de l'angle sous lequel on voit l'image à travers la lunette sur l'angle sous lequel on voit l'objet à l'œil nu : G = f'_obj / f'_oc." },
        { t: "Réglage afocal", d: "Réglage d'une lunette pour lequel les rayons ressortent parallèles (objet à l'infini donne une image à l'infini). Utilisé pour l'observation de l'infini." },
        { t: "Foyer image (F')", d: "Point où convergent les rayons lumineux parallèles à l'axe optique après avoir traversé la lentille convergente." },
        { t: "Conjugaison", d: "Relation entre la position d'un objet et la position de son image à travers une lentille, donnée par la relation de conjugaison : 1/OA' - 1/OA = 1/f'." }
    ],
    "p-quantique-term": [
        { t: "Photon", d: "Quantum d'énergie lumineuse. Le photon est une particule de lumière sans masse, d'énergie E = h × f (h = constante de Planck)." },
        { t: "Constante de Planck (h)", d: "Constante fondamentale de la physique quantique, h ≈ 6,626 × 10⁻³⁴ J·s. Relie l'énergie d'un photon à sa fréquence." },
        { t: "Dualité onde-corpuscule", d: "Propriété fondamentale de la matière et de la lumière : elles peuvent se comporter comme des ondes ou des corpuscules selon l'expérience réalisée." },
        { t: "Ionisation", d: "Arrachement d'un électron d'un atome. L'énergie du photon absorbé doit être supérieure ou égale à l'énergie d'ionisation de l'atome." },
        { t: "Spectre d'émission", d: "Ensemble des rayonnements électromagnétiques émis par un atome lors de transitions d'électrons vers des niveaux d'énergie inférieurs." }
    ],
    "p-rc-term": [
        { t: "Condensateur", d: "Composant électronique capable de stocker de l'énergie sous forme de champ électrique. Constitué de deux armatures conductrices séparées par un isolant." },
        { t: "Charge d'un condensateur", d: "La tension aux bornes d'un condensateur croît exponentiellement lors de la charge. La durée caractéristique est τ = RC (constante de temps)." },
        { t: "Constante de temps (τ)", d: "Temps caractéristique du circuit RC, τ = RC. Après 5τ, le condensateur est considéré comme complètement chargé/déchargé." },
        { t: "Tension aux bornes d'un condensateur", d: "u_C(t) = E(1 − e^(−t/τ)) lors de la charge, et u_C(t) = E·e^(−t/τ) lors de la décharge." },
        { t: "Énergie stockée dans un condensateur", d: "E_c = ½CU² (en Joules). C est la capacité en Farads, U est la tension en Volts." }
    ],

    // --- TERMINALE CHIMIE ---
    "c-acide-term": [
        { t: "Acide (Brønsted)", d: "Espèce chimique capable de céder un proton H⁺ à une autre espèce. Exemple : HCl, CH₃COOH." },
        { t: "Base (Brønsted)", d: "Espèce chimique capable de capter un proton H⁺. Exemple : NaOH, NH₃." },
        { t: "Couple acide-base", d: "Couple formé d'un acide et de la base conjuguée (ou vice-versa), liés par l'échange d'un proton : AH / A⁻." },
        { t: "pH", d: "Mesure de l'acidité d'une solution. pH = −log([H₃O⁺]). Un pH < 7 est acide, = 7 neutre, > 7 basique." },
        { t: "pKa", d: "Logarithme de la constante d'acidité Ka d'un couple acide-base : pKa = −log(Ka). Caractérise la force d'un acide." },
        { t: "Solution tampon", d: "Solution résistant aux variations de pH lors de l'ajout d'acide ou de base, grâce à la présence d'un couple acide/base conjugué en solution." }
    ],
    "c-cinetique-term": [
        { t: "Vitesse de réaction", d: "Variation de la concentration d'un réactif ou d'un produit par unité de temps : v = −d[A]/dt (en mol·L⁻¹·s⁻¹)." },
        { t: "Réaction d'ordre 1", d: "Réaction dont la vitesse est proportionnelle à la concentration d'un seul réactif : v = k[A]. La concentration décroît exponentiellement." },
        { t: "Demi-vie (t½)", d: "Temps au bout duquel la concentration d'un réactif a diminué de moitié. Pour une réaction d'ordre 1 : t½ = ln(2)/k." },
        { t: "Facteurs cinétiques", d: "Paramètres qui influencent la vitesse d'une réaction : température, concentration des réactifs, présence d'un catalyseur, surface de contact." },
        { t: "Catalyseur", d: "Espèce chimique qui accélère une réaction chimique sans être consommée. Il abaisse l'énergie d'activation de la réaction." }
    ],
    "c-equilibre-term": [
        { t: "Équilibre chimique", d: "État dans lequel les vitesses des réactions directe et inverse sont égales, et où les concentrations des réactifs et produits n'évoluent plus macroscopiquement." },
        { t: "Quotient de réaction (Qr)", d: "Grandeur calculée à partir des concentrations instantanées des espèces en solution, à la manière de la constante d'équilibre K." },
        { t: "Constante d'équilibre (K)", d: "Valeur du quotient Qr à l'état d'équilibre. Ne dépend que de la température. Si K >> 1, l'équilibre est déplacé dans le sens direct." },
        { t: "Loi de modération (Le Chatelier)", d: "Si on perturbe un système à l'équilibre (ajout d'un réactif/produit, variation de pression/température), il évolue dans le sens qui minimise la perturbation." },
        { t: "Réaction totale", d: "Réaction pour laquelle K est très grand (K >> 1). Les réactifs sont quasi-totalement consommés à l'état final." }
    ],
    "c-titrage-term": [
        { t: "Titrage pH-métrique", d: "Titrage suivi par mesure du pH de la solution en fonction du volume de solution titrante versée. L'équivalence correspond au point d'inflexion de la courbe pH = f(V)." },
        { t: "Titrage conductimétrique", d: "Titrage suivi par mesure de la conductivité σ de la solution. Le changement de pente de la courbe σ = f(V) indique l'équivalence." },
        { t: "Point d'équivalence", d: "Moment où les réactifs ont été introduits dans les proportions stœchiométriques. Il se repère sur la courbe de titrage par une rupture de pente ou un point d'inflexion." },
        { t: "pKa et demi-équivalence", d: "Au demi-équivalence d'un titrage acide-base, pH = pKa du couple. Cela permet de déterminer le pKa expérimentalement." },
        { t: "Méthode des tangentes", d: "Méthode graphique utilisée pour déterminer précisément le point d'équivalence sur une courbe de titrage pH-métrique." }
    ],
    "c-piles-term": [
        { t: "Pile électrochimique", d: "Dispositif convertissant l'énergie chimique d'une réaction d'oxydoréduction spontanée en énergie électrique." },
        { t: "Anode", d: "Électrode où a lieu l'oxydation (perte d'électrons). Dans une pile, c'est le pôle négatif (−)." },
        { t: "Cathode", d: "Électrode où a lieu la réduction (gain d'électrons). Dans une pile, c'est le pôle positif (+)." },
        { t: "Force électromotrice (f.e.m.)", d: "Différence de potentiel à vide entre les deux électrodes d'une pile. Elle caractérise la capacité de la pile à faire circuler un courant." },
        { t: "Capacité d'une pile (Q)", d: "Charge totale que peut fournir une pile : Q = n(e⁻) × F (F = constante de Faraday = 96 500 C/mol)." }
    ],
    "c-electrolyse-term": [
        { t: "Électrolyse", d: "Transformation chimique forcée (non spontanée) réalisée grâce à un courant électrique imposé par un générateur externe." },
        { t: "Électrolyseur", d: "Dispositif dans lequel se déroule l'électrolyse. Il est branché sur un générateur qui impose le courant." },
        { t: "Anode (électrolyse)", d: "Électrode reliée au pôle positif (+) du générateur. C'est le siège de l'oxydation lors de l'électrolyse." },
        { t: "Cathode (électrolyse)", d: "Électrode reliée au pôle négatif (−) du générateur. C'est le siège de la réduction lors de l'électrolyse." },
        { t: "Loi de Faraday", d: "La masse de substance déposée ou dissoute lors d'une électrolyse est proportionnelle à la charge électrique Q transférée : m = M × Q / (n × F)." }
    ],
    "c-synthèse-term": [
        { t: "Substitution nucléophile", d: "Mécanisme réactionnel dans lequel un nucléophile (porteur d'un doublet) attaque un carbone portant un bon groupe partant, le remplaçant." },
        { t: "Addition électrophile", d: "Mécanisme réactionnel caractéristique des alcènes : un électrophile s'additionne sur la double liaison C=C." },
        { t: "Groupe partant", d: "Atome ou groupe d'atomes qui quitte la molécule en emportant le doublet de liaison lors d'une réaction de substitution." },
        { t: "Nucléophile", d: "Espèce chimique riche en électrons (doublet non liant ou charge négative) capable d'attaquer un site électrophile (appauvri en électrons)." },
        { t: "Rendement de synthèse", d: "Rapport de la masse obtenue expérimentalement sur la masse théorique calculée par la stœchiométrie (en %). Toujours inférieur à 100%." }
    ],
    "c-spectro-term": [
        { t: "Spectroscopie IR (Infra-Rouge)", d: "Technique d'analyse basée sur l'absorption du rayonnement infrarouge par les liaisons d'une molécule. Permet d'identifier les groupes fonctionnels." },
        { t: "Nombre d'onde (σ)", d: "Grandeur utilisée en IR, exprimée en cm⁻¹. Chaque liaison vibre à une fréquence caractéristique repérable sur le spectre." },
        { t: "Spectroscopie RMN (¹H)", d: "Technique d'analyse qui repère les protons (H) dans une molécule selon leur environnement chimique. Permet de déterminer la structure de la molécule." },
        { t: "Déplacement chimique (δ)", d: "Grandeur adimensionnelle (en ppm) qui caractérise la position d'un signal sur un spectre RMN. Dépend de l'environnement électronique du proton." },
        { t: "Multiplicité (couplage)", d: "En RMN, un signal est multiplié en n+1 pics si le proton a n voisins. Ex : un doublet = 1 voisin, un triplet = 2 voisins." }
    ]
};

// --- DATA: FORMULAS & PROTOCOLS ---
const formulas = [
    // --- MOLE & QTÉ DE MATIÈRE ---
    {
        id: "n-m-m", chapterId: "c-mol-1", title: "1. Quantité de matière (Masse)",
        formula: "n = \\frac{m}{M}",
        definition: "Relation entre la mole, la masse de l'échantillon et la masse molaire.",
        properties: "n en mol, m en g, M en g/mol.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)"
    },
    {
        id: "d-rho-rho", chapterId: "c-mol-1", title: "2. Densité (d)",
        formula: "d = \\frac{\\rho}{\\rho_{eau}}",
        definition: "Rapport de la masse volumique du corps par celle de l'eau.",
        properties: "Grandeur sans unité. Pour l'eau, rho_eau = 1000 g/L.",
        units: "d [Densité], ρ [Masse vol.] (kg/L)"
    },
    {
        id: "rho-m-v", chapterId: "c-mol-1", title: "3. Masse volumique (ρ)",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Masse de l'unité de volume d'un corps donné.",
        properties: "Relie masse et volume d'un corps pur.",
        units: "ρ [Masse vol.] (g/L), m [Masse] (g), V [Volume] (L)"
    },
    {
        id: "c-cm-m", chapterId: "c-mol-1", title: "4. Lien C et Cm",
        formula: "C = \\frac{C_m}{M}",
        definition: "Relation permettant de convertir une concentration massique en concentration molaire.",
        properties: "M est la masse molaire du soluté.",
        units: "C (mol/L), Cm (g/L), M (g/mol)"
    },
    {
        id: "c-nv", chapterId: "c-mol-1", title: "5. Concentration molaire",
        formula: "C = \\frac{n}{V}",
        definition: "Relation permettant de calculer la concentration molaire d'une solution.",
        properties: "Valable pour les solutés dissous.",
        units: "C [Conc. molaire] (mol/L), n [Qté matière] (mol), V [Volume] (L)"
    },
    {
        id: "cm-m-v", chapterId: "c-mol-1", title: "6. Concentration en masse (Cm)",
        formula: "C_m = \\frac{m}{V}",
        definition: "Rapport de la masse du soluté par le volume total de la solution.",
        properties: "Relation: Cm = C x M.",
        units: "Cm [Conc. masse] (g/L), m [Masse sol.] (g), V [Volume] (L)"
    },
    {
        id: "v-n-vm", chapterId: "c-mol-1", title: "7. Volume molaire (Gaz)",
        formula: "n = \\frac{V}{V_m}",
        definition: "⚠️ VALABLE UNIQUEMENT POUR LES GAZ !",
        properties: "Vm ≈ 24 L/mol.",
        units: "n [Qté matière] (mol), V [Volume] (L), Vm [Vol. mol] (L/mol)"
    },
    {
        id: "fact-dilut", chapterId: "c-mol-1", title: "8. Facteur de dilution (F)",
        formula: "F = \\frac{C_{mère}}{C_{fille}} = \\frac{V_{fille}}{V_{mère}}",
        definition: "Nombre de fois qu'une solution a été diluée.",
        properties: "F est toujours supérieur à 1 (sans unité).",
        units: "Cm [Mère] (mol/L), Cf [Fille] (mol/L), Vf [Fille] (L), Vm [Mère] (L)"
    },

    // --- OPTIQUE & COULEURS ---
    {
        id: "opt-schema-lentille", chapterId: "p-optique-1", title: "Construction de l'image (Lentille)",
        formula: `<svg viewBox="0 0 600 300" style="width:100%; height:auto; max-height:250px;">
            <defs>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" />
                </marker>
                <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#65a30d" />
                </marker>
                <marker id="arrow-pink" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#db2777" />
                </marker>
            </defs>

            <!-- Axe optique -->
            <line x1="20" y1="150" x2="580" y2="150" stroke="#64748b" stroke-width="1.2" />
            <polygon points="590,150 580,146 580,154" fill="#64748b" />
            <text x="585" y="140" fill="#475569" font-size="11" text-anchor="end" font-weight="700">Axe optique Δ</text>

            <!-- Lentille convergente -->
            <line x1="300" y1="30" x2="300" y2="270" stroke="#7e22ce" stroke-width="1.5" />
            <path d="M 294 40 L 300 30 L 306 40" fill="none" stroke="#7e22ce" stroke-width="1.5" />
            <path d="M 294 260 L 300 270 L 306 260" fill="none" stroke="#7e22ce" stroke-width="1.5" />
            <text x="290" y="240" fill="#7e22ce" font-size="10" text-anchor="end" font-weight="700">Lentille<tspan x="290" dy="12">convergente</tspan></text>

            <!-- Points O, F, F' -->
            <text x="290" y="165" fill="#1e293b" font-size="13" font-weight="800">O</text>
            <line x1="200" y1="145" x2="200" y2="155" stroke="#475569" stroke-width="1" />
            <text x="200" y="175" fill="#475569" font-size="13" text-anchor="middle" font-weight="700">F</text>
            <line x1="400" y1="145" x2="400" y2="155" stroke="#475569" stroke-width="1" />
            <text x="400" y="175" fill="#475569" font-size="13" text-anchor="middle" font-weight="700">F'</text>

            <!-- Rayons lumineux -->
            <!-- Bleu: Parallèle puis F' -->
            <path d="M 60 70 L 180 70 L 300 70" stroke="#2563eb" stroke-width="1.5" marker-mid="url(#arrow-blue)" fill="none" />
            <path d="M 300 70 L 400 150 L 520 246" stroke="#2563eb" stroke-width="1.5" marker-mid="url(#arrow-blue)" fill="none" />

            <!-- Vert: Passe par F puis Parallèle -->
            <path d="M 60 70 L 200 150 L 300 210" stroke="#65a30d" stroke-width="1.5" marker-mid="url(#arrow-green)" fill="none" />
            <path d="M 300 210 L 410 210 L 540 210" stroke="#65a30d" stroke-width="1.5" marker-mid="url(#arrow-green)" fill="none" />

            <!-- Orange: Passe par O -->
            <path d="M 60 70 L 300 150 L 540 230" stroke="#ea580c" stroke-width="1.5" marker-mid="url(#arrow-orange)" fill="none" />

            <!-- Objet AB (Rose) -->
            <line x1="60" y1="150" x2="60" y2="75" stroke="#db2777" stroke-width="2.5" marker-end="url(#arrow-pink)" />
            <text x="60" y="170" fill="#db2777" font-size="13" text-anchor="middle" font-weight="800">A</text>
            <text x="60" y="60" fill="#db2777" font-size="13" text-anchor="middle" font-weight="800">B</text>
            <text x="30" y="130" fill="#db2777" font-size="11" text-anchor="middle" font-weight="700">Objet</text>

            <!-- Image A'B' (Rose) -->
            <line x1="475" y1="150" x2="475" y2="202" stroke="#db2777" stroke-width="2.5" marker-end="url(#arrow-pink)" />
            <text x="475" y="140" fill="#db2777" font-size="13" text-anchor="middle" font-weight="800">A'</text>
            <text x="475" y="225" fill="#db2777" font-size="13" text-anchor="middle" font-weight="800">B'</text>
            <text x="475" y="120" fill="#db2777" font-size="11" text-anchor="middle" font-weight="700">Image</text>
        </svg>`,
        definition: "Schéma illustrant la formation d'une image A'B' à travers une lentille convergente.",
        properties: "<strong>3 rayons remarquables :</strong><br><br>• Le rayon passant par O n'est pas dévié.<br><br>• Le rayon parallèle à l'axe optique émerge en passant par le foyer image F'.<br><br>• Le rayon passant par le foyer objet F émerge parallèle à l'axe optique.",
        units: "O [Centre optique], F [Foyer objet], F' [Foyer image], Δ [Axe optique]"
    },
    {
        id: "opt-conj", chapterId: "p-optique-1", title: "Relation de conjugaison",
        formula: "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}",
        definition: "Lien entre la position de l'objet A, de l'image A' et du foyer image F'.",
        properties: "Utiliser des valeurs algébriques (signes).",
        units: "OA [Pos. objet] (m), OA' [Pos. image] (m), OF' [Distance focale] (m)"
    },
    {
        id: "opt-verg", chapterId: "p-optique-1", title: "Vergence de la lentille",
        formula: "\\delta = \\frac{1}{\\overline{OF'}}",
        definition: "Capacité d'une lentille à faire converger ou diverger la lumière.",
        properties: "OF' doit être en mètres obligatoirement.",
        units: "δ [Vergence] (δ/dioptries), OF' [Distance focale] (m)"
    },
    {
        id: "opt-gamma", chapterId: "p-optique-1", title: "Gamma (Grandissement)",
        formula: "\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}",
        definition: "Le grandissement γ quantifie le rapport de taille et le sens de l'image par rapport à l'objet.",
        properties: "Gamma est sans unité. Il définit si l'image est droite ou renversée.",
        units: "A'B', AB [Tailles], OA', OA [Positions]"
    },
    {
        id: "opt-caract", chapterId: "p-optique-1", title: "Caractéristiques de l'image",
        formula: "\\begin{cases} \\gamma < 0 : \\text{Image renversée} \\\\ \\gamma > 0 : \\text{Image droite} \\\\ |\\gamma| > 1 : \\text{Image agrandie} \\\\ |\\gamma| < 1 : \\text{Image rétrécie} \\end{cases}",
        definition: "Critères de conclusion sur la nature de l'image par rapport à l'objet.",
        properties: "Analyse basée sur le signe et la valeur absolue de γ.",
        units: "γ [Grandissement]"
    },

    // --- DOSAGES & TITRAGES ---
    {
        id: "beer-lamb", chapterId: "c-dosage-1", title: "Loi de Beer-Lambert",
        formula: "A = \\epsilon \\cdot l \\cdot C",
        definition: "Lien entre l'absorbance d'une solution colorée et sa concentration.",
        properties: "A est sans unité, ε est le coef. d'extinction.",
        units: "A [Absorbance], C [Concentration] (mol/L)"
    },
    {
        id: "titrage-equiv", chapterId: "c-dosage-1", title: "Relation à l'Équivalence",
        formula: "\\frac{C_A \\cdot V_A}{a} = \\frac{C_B \\cdot V_{eq}}{b}",
        definition: "L'équivalence est le moment où les réactifs ont été introduits dans les proportions stœchiométriques.",
        properties: "a et b sont les coefficients stoechiométriques.",
        units: "Ca, Cb [Conc.] (mol/L), Va, Veq [Volume] (L)"
    },

    // --- OXYDORÉDUCTION ---
    {
        id: "redox-gen", chapterId: "c-redox-1", title: "Équation d'oxydoréduction",
        formula: "Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2",
        definition: "Transfert d'électrons entre deux couples redox.",
        properties: "Ox capte e-, Red cède e-.",
        units: "Ox [Oxydant], Red [Réducteur]"
    },

    // --- SCHÉMA DE LEWIS ---
    {
        id: "lewis-polar-1", chapterId: "c-lewis-1", title: "Liaison Polarisée",
        formula: `<div style="display:flex; flex-direction:column; gap:0.8rem; padding: 0.5rem 0; width:100%;">
            <div style="display:flex; flex-direction:column; align-items:center; background:#f0fdf4; border: 1px solid #bbf7d0; padding: 0.8rem; border-radius: 12px; text-align:center;">
                <span style="font-size:1.2rem; font-weight:700; font-family:serif; color:#166534; margin-bottom:0.3rem;">|χ<sub>A</sub> - χ<sub>B</sub>| ≥ 0,4</span>
                <span style="color:#15803d; font-weight:800; font-size:0.8rem;">POLARISÉE ✓</span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; background:#fef2f2; border: 1px solid #fecaca; padding: 0.8rem; border-radius: 12px; text-align:center;">
                <span style="font-size:1.2rem; font-weight:700; font-family:serif; color:#991b1b; margin-bottom:0.3rem;">|χ<sub>A</sub> - χ<sub>B</sub>| &lt; 0,4</span>
                <span style="color:#dc2626; font-weight:800; font-size:0.8rem;">APOLAIRE ✗</span>
            </div>
        </div>`,
        definition: "Une liaison covalente est polarisée si la différence d'électronégativité entre les deux atomes liés est supérieure ou égale à 0,4.",
        properties: "|χA − χB| < 0,4 → liaison apolaire | |χA − χB| ≥ 0,4 → liaison polarisée | |χA − χB| ≥ 1,7 → liaison ionique",
        units: "χA [Électronégativité de A], χB [Électronégativité de B]"
    },

    // --- ÉNERGIE MÉCANIQUE ---

    {
        id: "ep-1-v3", chapterId: "p-energie-1", title: "Énergie Potentielle (Pesanteur)",
        formula: "E_p = m \\cdot g \\cdot z",
        definition: "Énergie liée à l'altitude z d'un système de masse m.",
        properties: "g = 9.81 N/kg sur Terre.",
        units: "Ep [Joules] (J), z [Altitude] (m)"
    },
    {
        id: "em-1-v3", chapterId: "p-energie-1", title: "Énergie Mécanique",
        formula: "E_m = E_c + E_p",
        definition: "Somme de l'énergie cinétique et de l'énergie potentielle.",
        properties: "Se conserve si les frottements sont négligés.",
        units: "Em [Joules] (J)"
    },

    {
        id: "travail-poids-em", chapterId: "p-energie-1", title: "Travail du poids",
        formula: "W_{AB}(\\vec{P}) = m \\cdot g \\cdot (z_A - z_B)",
        definition: "Travail d'une force conservative constante (le poids) lors d'un déplacement de A vers B.",
        properties: "Indépendant du chemin suivi, seule l'altitude compte. zA > zB (descente, travail moteur) ; zA < zB (montée, travail résistant).",
        units: "WAB(P) [Travail] (J), m [Masse] (kg), g [Gravité] (N/kg), zA; zB [Altitude init; fin] (m)"
    },
    {
        id: "travail-support-em", chapterId: "p-energie-1", title: "Travail de la réaction du support",
        formula: "W_{AB}(\\vec{R}_n) = 0",
        definition: "Travail de la réaction normale du support lors d'un déplacement sur une surface.",
        properties: "La réaction normale Rn est orthogonale au déplacement, donc son travail est toujours nul (cos(90°) = 0).",
        units: "WAB(Rn) [Travail] (J)"
    },
    {
        id: "travail-frottement-em", chapterId: "p-energie-1", title: "Travail de la force de frottement",
        formula: "W_{AB}(\\vec{f}) = -f \\cdot AB",
        definition: "Travail de la force de frottement constante opposée au déplacement rectiligne de A vers B.",
        properties: "Le travail est toujours résistant (négatif) car la force s'oppose au mouvement (cos(180°) = -1).",
        units: "WAB(f) [Travail] (J), f [Force frott.] (N), AB [Distance] (m)"
    },
    {
        id: "tem-1-v3", chapterId: "p-energie-1", title: "Théorème de l'énergie mécanique",
        formula: "\\Delta E_m = E_m(B) - E_m(A) = \\sum W_{AB}(\\vec{F}_{non\\,cons})",
        definition: "La variation de l'énergie mécanique d'un système entre deux positions A et B est égale à la somme des travaux des forces non conservatrices appliquées au système entre ces deux positions.",
        properties: "Les forces non conservatrices incluent les frottements et les forces motrices. Si seules des forces conservatrices travaillent, l'énergie mécanique se conserve (\\Delta E_m = 0).",
        units: "\\Delta Em [Variation d'énergie mécanique] (J), Em(B); Em(A) [Éner. fin.; init.] (J), \\Sigma W_{AB}(\\vec{F}) [Somme travaux forces non cons.] (J)"
    },
    {
        id: "forces-non-conservatives-em", chapterId: "p-energie-1", title: "Forces Conservatives & Non Conservatives",
        formula: `<div style="width:100%; margin:0.5rem 0;">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; background:#fff; border-radius:12px; overflow:hidden; border:1px solid var(--border);">
                <thead>
                    <tr style="background:#f8fafc; border-bottom:2px solid var(--border);">
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Type</th>
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Force</th>
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Symbole</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td colspan="3" style="padding:8px 12px; font-weight:800; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; background:#f0fdf4; color:#16a34a;">✅ Forces Conservatives</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Poids</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{P}\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Réaction normale du support</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{R}_n\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Tension d'un fil / câble</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{T}\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td colspan="3" style="padding:8px 12px; font-weight:800; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; background:#fef2f2; color:#dc2626;">❌ Forces Non Conservatives</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#dc2626; font-weight:700; font-size:0.8rem;">Non conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Frottement</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{f}\\)</td>
                    </tr>
                    <tr style="border-bottom:none;">
                        <td style="padding:8px 12px; color:#dc2626; font-weight:700; font-size:0.8rem;">Non conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Force motrice / traction</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{F}_m\\)</td>
                    </tr>
                </tbody>
            </table>
        </div>`,
        definition: "Les forces conservatives ont un travail qui ne dépend pas du chemin suivi (ex: le poids). Les forces non conservatives ont un travail qui dépend du chemin suivi (ex: frottements).",
        properties: "Seules les forces non conservatives modifient l'énergie mécanique du système.",
        units: ""
    },

    // --- ÉNERGIE CINÉTIQUE ---
    {
        id: "ec-1-v3", chapterId: "p-ec-1", title: "Énergie Cinétique",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie que possède un système du fait de son mouvement.",
        properties: "L'énergie cinétique est toujours positive ou nulle et dépend du référentiel d'étude. m en kg, v en m/s.",
        units: "Ec [Énergie cinétique] (J), m [Masse] (kg), v [Vitesse] (m/s)"
    },
    {
        id: "tec-1-v3", chapterId: "p-ec-1", title: "Théorème de l'énergie cinétique",
        formula: "\\Delta E_c = E_c(B) - E_c(A) = \\sum W_{AB}(\\vec{F}_{ext})",
        definition: "La variation d'énergie cinétique entre deux positions A et B est égale à la somme des travaux des forces extérieures appliquées au système entre A et B.",
        properties: "Valable uniquement dans un référentiel galiléen. La variation d'énergie cinétique s'exprime en Joules.",
        units: "\\Delta Ec [Variation d'énergie cinétique] (J), Ec(B); Ec(A) [Éner. fin.; init.] (J), \\Sigma W_{AB}(\\vec{F}) [Somme travaux forces ext.] (J)"
    },

    {
        id: "travail-poids-ec", chapterId: "p-ec-1", title: "Travail du poids",
        formula: "W_{AB}(\\vec{P}) = m \\cdot g \\cdot (z_A - z_B)",
        definition: "Travail d'une force conservative constante (le poids) lors d'un déplacement de A vers B.",
        properties: "Indépendant du chemin suivi, seule l'altitude compte. zA > zB (descente, travail moteur) ; zA < zB (montée, travail résistant).",
        units: "WAB(P) [Travail] (J), m [Masse] (kg), g [Gravité] (N/kg), zA; zB [Altitude init; fin] (m)"
    },
    {
        id: "travail-support-ec", chapterId: "p-ec-1", title: "Travail de la réaction du support",
        formula: "W_{AB}(\\vec{R}_n) = 0",
        definition: "Travail de la réaction normale du support lors d'un déplacement sur une surface.",
        properties: "La réaction normale Rn est orthogonale au déplacement, donc son travail est toujours nul (cos(90°) = 0).",
        units: "WAB(Rn) [Travail] (J)"
    },
    {
        id: "travail-frottement-ec", chapterId: "p-ec-1", title: "Travail de la force de frottement",
        formula: "W_{AB}(\\vec{f}) = -f \\cdot AB",
        definition: "Travail de la force de frottement constante opposée au déplacement rectiligne de A vers B.",
        properties: "Le travail est toujours résistant (négatif) car la force s'oppose au mouvement (cos(180°) = -1).",
        units: "WAB(f) [Travail] (J), f [Force frott.] (N), AB [Distance] (m)"
    },
    {
        id: "forces-non-conservatives-ec", chapterId: "p-ec-1", title: "Forces Conservatives & Non Conservatives",
        formula: `<div style="width:100%; margin:0.5rem 0;">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem; background:#fff; border-radius:12px; overflow:hidden; border:1px solid var(--border);">
                <thead>
                    <tr style="background:#f8fafc; border-bottom:2px solid var(--border);">
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Type</th>
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Force</th>
                        <th style="padding:10px 12px; text-align:left; font-weight:800; color:var(--text); font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em;">Symbole</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td colspan="3" style="padding:8px 12px; font-weight:800; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; background:#f0fdf4; color:#16a34a;">✅ Forces Conservatives</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Poids</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{P}\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Réaction normale du support</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{R}_n\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #f1f5f9;">
                        <td style="padding:8px 12px; color:#16a34a; font-weight:700; font-size:0.8rem;">Conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Tension d'un fil / câble</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{T}\\)</td>
                    </tr>
                    <tr style="border-bottom:1px solid #e2e8f0;">
                        <td colspan="3" style="padding:8px 12px; font-weight:800; font-size:0.8rem; text-transform:uppercase; letter-spacing:0.05em; background:#fef2f2; color:#dc2626;">❌ Forces Non Conservatives</td>
                    </tr>
                    <tr style="border-bottom:none;">
                        <td style="padding:8px 12px; color:#dc2626; font-weight:700; font-size:0.8rem;">Non conservative</td>
                        <td style="padding:8px 12px; font-weight:600;">Frottement</td>
                        <td style="padding:8px 12px; font-weight:800; color:var(--physique); font-family:'Outfit',sans-serif; font-size:1rem;">\\(\\vec{f}\\)</td>
                    </tr>
                </tbody>
            </table>
        </div>`,
        definition: "Les forces conservatives ont un travail qui ne dépend pas du chemin suivi (ex: le poids). Les forces non conservatives ont un travail qui dépend du chemin suivi (ex: frottements).",
        properties: "Seules les forces non conservatives modifient l'énergie mécanique du système.",
        units: ""
    },

    // --- FLUIDES ---
    {
        id: "fluide-pression", chapterId: "p-fluide-1", title: "Pression et Force Pressante",
        formula: "P = \\frac{F}{S}",
        definition: "La pression P exercée par un fluide sur une surface S est le rapport de la norme de la force pressante F sur la surface S.",
        properties: "La force pressante est toujours perpendiculaire (orthogonale) à la paroi. 1 Pa = 1 N/m² ; 1 bar = 10⁵ Pa.",
        units: "P [Pression] (Pa), F [Force pressante] (N), S [Surface] (m²)"
    },
    {
        id: "fluide-mariotte", chapterId: "p-fluide-1", title: "Loi de Mariotte (Gaz parfait)",
        formula: "P \\cdot V = \\text{constante}",
        definition: "À température constante et pour une quantité de matière donnée de gaz, le produit de la pression P par le volume V est constant (P₁ · V₁ = P₂ · V₂).",
        properties: "Une diminution de volume (compression) entraîne une augmentation proportionnelle de la pression.",
        units: "P [Pression] (Pa ou bar), V [Volume] (m³ ou L)"
    },
    {
        id: "fluide-rho", chapterId: "p-fluide-1", title: "Masse Volumique",
        formula: "\\rho = \\frac{m}{V}",
        definition: "Masse m d'un échantillon de fluide par unité de volume V.",
        properties: "Pour l'eau douce : ρ_eau = 1000 kg/m³ = 1,0 kg/L. Pour l'air à 20°C : ρ_air ≈ 1,2 kg/m³.",
        units: "\\rho [Masse volumique] (kg/m³), m [Masse] (kg), V [Volume] (m³)"
    },
    {
        id: "fluide-statique", chapterId: "p-fluide-1", title: "Loi fondamentale de la statique des fluides",
        formula: "P_B - P_A = \\rho \\cdot g \\cdot (z_A - z_B)",
        definition: "Dans un fluide incompressible et au repos, la différence de pression entre deux points A et B dépend uniquement de la différence d'altitude (ou profondeur h = z_A - z_B).",
        properties: "La pression augmente de façon linéaire avec la profondeur dans un liquide au repos : P(h) = P_{atm} + \\rho \\cdot g \\cdot h.",
        units: "PA, PB [Pressions] (Pa), \\rho [Masse volumique] (kg/m³), g [Gravité] (N/kg), zA, zB [Altitudes] (m)"
    },

    // --- ÉLECTRICITÉ ---
    {
        id: "elec-ohm", chapterId: "p-elec-1", title: "Loi d'Ohm",
        formula: "U = R \\cdot I",
        definition: "La tension U aux bornes d'un conducteur ohmique est égale au produit de sa résistance R par l'intensité I du courant qui le traverse.",
        properties: "Valable uniquement pour un récepteur ohmique (conducteur ohmique). U en Volts (V), R en Ohms (Ω), I en Ampères (A).",
        units: "U [Tension] (V), R [Résistance] (Ω), I [Intensité] (A)"
    },
    {
        id: "elec-puissance", chapterId: "p-elec-1", title: "Puissance Électrique",
        formula: "P = U \\cdot I",
        definition: "La puissance électrique consommée ou fournie par un appareil est le produit de la tension U à ses bornes par l'intensité I du courant.",
        properties: "Pour un conducteur ohmique (U = R·I), la puissance dissipée par effet Joule s'écrit P = R · I² = U² / R.",
        units: "P [Puissance] (W), U [Tension] (V), I [Intensité] (A)"
    },
    {
        id: "elec-energie", chapterId: "p-elec-1", title: "Énergie Électrique",
        formula: "E = P \\cdot \\Delta t = U \\cdot I \\cdot \\Delta t",
        definition: "Énergie électrique transférée ou consommée par un dipôle électrique pendant une durée de fonctionnement Δt.",
        properties: "Si P est en Watts (W) et Δt en secondes (s), E est en Joules (J). 1 kWh = 3,6 × 10⁶ J.",
        units: "E [Énergie] (J ou kWh), P [Puissance] (W), \\Delta t [Durée] (s)"
    },
    {
        id: "elec-noeuds", chapterId: "p-elec-1", title: "Loi des Nœuds",
        formula: "\\sum I_{\\text{entrants}} = \\sum I_{\\text{sortants}}",
        definition: "La somme des intensités des courants entrant dans un nœud d'un circuit électrique est égale à la somme des intensités des courants qui en sortent.",
        properties: "Traduit la conservation de la charge électrique dans les circuits en dérivation.",
        units: "I [Intensités] (A)"
    },
    {
        id: "elec-mailles", chapterId: "p-elec-1", title: "Loi des Mailles",
        formula: "\\sum U_k = 0",
        definition: "Dans une maille orientée d'un circuit électrique, la somme algébrique des tensions le long de la maille est nulle.",
        properties: "Traduit l'unicité du potentiel électrique en tout point du circuit.",
        units: "U [Tensions] (V)"
    },

    // --- ONDES MÉCANIQUES ---
    {
        id: "onde-freq", chapterId: "p-ondes-1", title: "Fréquence (f)",
        formula: "f = \\frac{1}{T}",
        definition: "La fréquence est le nombre de fois que le phénomène se répète en une seconde.",
        properties: "La fréquence correspond à l'inverse de la période.",
        units: "f [Fréquence] (Hz), T [Période] (s)"
    },
    {
        id: "onde-per", chapterId: "p-ondes-1", title: "Période (T)",
        formula: "T = \\frac{1}{f}",
        definition: "La période temporelle correspond au plus petit intervalle de temps au cours duquel le phénomène se répète identique à lui-même.",
        properties: "C'est la durée d'un motif élémentaire. Elle s'exprime en secondes dans le système international.",
        units: "T [Période] (s), f [Fréquence] (Hz)"
    },
    {
        id: "onde-lambda-t", chapterId: "p-ondes-1", title: "Longueur d'onde avec Période (λ)",
        formula: "\\lambda = v \\cdot T",
        definition: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase",
        properties: "Relation utilisant la période T. v (ou c) est la célérité de l'onde.",
        units: "λ [Longueur d'onde] (m), v [Célérité] (m/s), T [Période] (s)"
    },
    {
        id: "onde-lambda-f", chapterId: "p-ondes-1", title: "Longueur d'onde avec Fréquence (λ)",
        formula: "\\lambda = \\frac{v}{f}",
        definition: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase",
        properties: "Relation utilisant la fréquence f. v (ou c) est la célérité de l'onde.",
        units: "λ [Longueur d'onde] (m), v [Célérité] (m/s), f [Fréquence] (Hz)"
    },
    {
        id: "onde-retard", chapterId: "p-ondes-1", title: "Retard de l'onde (\\(\\tau\\))",
        formula: "\\tau = \\frac{MM'}{v}",
        definition: "Le retard (noté avec la lettre grecque tau « τ », à ne pas confondre avec la période T) est la durée que met une onde pour parcourir la distance séparant deux points M et M'.",
        properties: "L'onde au point M' reproduit le mouvement du point M avec un décalage temporel égal au retard τ.",
        units: "\\tau [Retard] (s), MM' [Distance M à M'] (m), v [Célérité] (m/s)"
    },
    // --- MOUVEMENT ET FORCES ---
    {
        id: "mouv-schema-vecteurs", chapterId: "p-mouv-1", title: "Construction des vecteurs Vitesse & Force",
        formula: `<svg viewBox="0 0 600 300" style="width:100%; height:auto; max-height:250px;">
            <defs>
                <marker id="arrow-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" />
                </marker>
                <marker id="arrow-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                </marker>
            </defs>

            <!-- Trajectoire curviligne -->
            <path d="M 80,240 Q 250,40 520,180" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="8,6" />
            
            <!-- Points M1, M2, M3 -->
            <circle cx="154" cy="149" r="5" fill="#1e293b" />
            <text x="154" y="169" fill="#475569" font-size="12" font-weight="700" text-anchor="middle">M₁</text>
            
            <circle cx="275" cy="110" r="5" fill="#1e293b" />
            <text x="275" y="92" fill="#1e293b" font-size="13" font-weight="800" text-anchor="middle">M₂</text>
            
            <circle cx="434" cy="134" r="5" fill="#1e293b" />
            <text x="434" y="154" fill="#475569" font-size="12" font-weight="700" text-anchor="middle">M₃</text>

            <!-- Vecteur v2 au point M2 -->
            <line x1="275" y1="110" x2="350" y2="101" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrow-orange)" />
            <text x="345" y="90" fill="#ea580c" font-size="12" font-weight="700">\\(\\vec{v}_2\\)</text>

            <!-- Vecteur v3 au point M3 -->
            <line x1="434" y1="134" x2="509" y2="148" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrow-orange)" />
            <text x="509" y="163" fill="#ea580c" font-size="12" font-weight="700">\\(\\vec{v}_3\\)</text>
            
            <!-- Translation de v3 au point M2 pour la construction de delta v -->
            <line x1="275" y1="110" x2="350" y2="124" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
            <text x="355" y="132" fill="#94a3b8" font-size="10" font-weight="600">\\(\\vec{v}_3\\) (translaté)</text>

            <!-- Vecteur variation de vitesse delta v2 au point M2 -->
            <line x1="350" y1="101" x2="350" y2="124" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="2,2" />
            
            <!-- Vecteur delta v2 tracé depuis M2 -->
            <line x1="275" y1="110" x2="275" y2="155" stroke="#8b5cf6" stroke-width="2.5" marker-end="url(#arrow-purple)" />
            <text x="250" y="140" fill="#8b5cf6" font-size="12" font-weight="800">\\(\\Delta\\vec{v}_2\\)</text>

            <!-- Vecteur Force résultante résultant des forces extérieures colinéaire à delta v2 -->
            <line x1="290" y1="110" x2="290" y2="170" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)" />
            <text x="300" y="145" fill="#10b981" font-size="13" font-weight="800">\\(\\sum \\vec{F}_{ext}\\)</text>
        </svg>`,
        definition: "Méthode graphique de tracé du vecteur variation de vitesse \\(\\Delta\\vec{v}_2 = \\vec{v}_3 - \\vec{v}_2\\) et lien avec la somme des forces extérieures \\(\\sum \\vec{F}_{ext}\\).",
        properties: "<strong>Propriétés clés :</strong><br><br>• \\(\\Delta\\vec{v}_2\\) est construit au point \\(M_2\\) en reportant la vitesse suivante \\(\\vec{v}_3\\) et en lui soustrayant \\(\\vec{v}_2\\).<br><br>• D'après la 2ème loi de Newton, la force résultante \\(\\sum \\vec{F}_{ext}\\) est <strong>colinéaire et de même sens</strong> que \\(\\Delta\\vec{v}_2\\).",
        units: "M [Positions successives], v [Vitesse instantanée] (m/s), \\Delta v [Variation vitesse] (m/s), \\Sigma F [Forces] (N)"
    },
    {
        id: "mouv-vit-moy", chapterId: "p-mouv-1", title: "1. Vitesse moyenne entre le point d'avant et le point d'après",
        formula: "\\vec{v}(t) = \\frac{\\overrightarrow{M(t-\\Delta t)M(t+\\Delta t)}}{2\\Delta t}",
        definition: "Approximation du vecteur vitesse à l'instant t en calculant la vitesse moyenne entre la position précédente (à t - \\Delta t) et la position suivante (à t + \\Delta t).",
        properties: "Cette méthode est l'approximation standard la plus précise pour tracer des vecteurs vitesse lors de l'étude de chronophotographies.",
        units: "v(t) [Vitesse] (m/s), M(t-Δt)M(t+Δt) [Déplacement] (m), Δt [Intervalle temps] (s)"
    },
    {
        id: "mouv-vit-inst", chapterId: "p-mouv-1", title: "2. Vitesse moyenne entre le point actuel et le point d'après",
        formula: "\\vec{v}(t) = \\frac{\\overrightarrow{M(t)M(t+\\Delta t)}}{\\Delta t}",
        definition: "Approximation du vecteur vitesse au temps t en calculant la vitesse moyenne entre la position actuelle (à t) et la position suivante (à t + \\Delta t).",
        properties: "C'est l'approximation classique du premier ordre utilisée pour simplifier les calculs de vecteurs vitesse.",
        units: "v(t) [Vitesse] (m/s), M(t)M(t+Δt) [Déplacement] (m), Δt [Intervalle temps] (s)"
    },
    {
        id: "mouv-vit-norme", chapterId: "p-mouv-1", title: "3. Norme de la vitesse",
        formula: "v(t) = \\frac{M(t)M(t+\\Delta t)}{\\Delta t}",
        definition: "Valeur numérique de la vitesse (grandeur scalaire) à l'instant t, correspondant à la distance parcourue divisée par la durée du parcours.",
        properties: "La norme de la vitesse est toujours positive ou nulle. Contrairement au vecteur vitesse, elle ne possède pas de direction, de sens, ni de flèche vectorielle.",
        units: "v(t) [Vitesse] (m/s), M(t)M(t+Δt) [Distance] (m), Δt [Intervalle temps] (s)"
    },
    {
        id: "mouv-var-vit", chapterId: "p-mouv-1", title: "4. Vecteur variation de vitesse",
        formula: "\\Delta\\vec{v}_i = \\vec{v}_{i+1} - \\vec{v}_i",
        definition: "Le vecteur variation de vitesse \\(\\Delta\\vec{v}_i\\) caractérise le changement de vitesse (valeur et/ou direction) entre les instants ti et ti+1.",
        properties: "Il est nul si le mouvement est rectiligne et uniforme. Il est dirigé vers le centre de la trajectoire si le mouvement est circulaire.",
        units: "\\Delta v_i [Var. vitesse] (m/s), v_i [Vitesse actuelle] (m/s), v_i+1 [Vitesse suiv.] (m/s)"
    },
    {
        id: "mouv-newton-2", chapterId: "p-mouv-1", title: "5. Deuxième loi de Newton (Approchée)",
        formula: "\\sum \\vec{F}_{ext} \\approx m \\cdot \\frac{\\Delta\\vec{v}}{\\Delta t}",
        definition: "Relation fondamentale liant les forces extérieures appliquées à un système de masse m constante et la variation de son vecteur vitesse.",
        properties: "La force résultante \\(\\sum \\vec{F}_{ext}\\) et la variation du vecteur vitesse \\(\\Delta\\vec{v}\\) ont toujours la <strong>même direction et le même sens</strong>.",
        units: "\\Sigma F_ext [Somme des forces] (N), m [Masse] (kg), \\Delta v/\\Delta t [Taux de var. vitesse] (m/s²)"
    },
    // --- STRUCTURE DES ESPÈCES CHIMIQUES ---
    {
        id: "solubility", chapterId: "c-struct-1", title: "Solubilité d'une espèce chimique",
        formula: "s = \\frac{m_{max}}{V}",
        definition: "La solubilité est la masse maximale d'un soluté que l'on peut dissoudre dans un litre de solvant à une température donnée.",
        properties: "Une solution est dite saturée lorsque la masse de soluté introduite est supérieure à la solubilité.",
        units: "s [Solubilité] (g/L), m_max [Masse max] (g), V [Volume] (L)"
    },
    {
        id: "electrostatic-force", chapterId: "c-struct-1", title: "Intensité de la force électrostatique",
        formula: "F_{A/B} = \\frac{1}{4\\pi\\epsilon_0} \\cdot \\frac{|q_A \\cdot q_B|}{r^2}",
        definition: "Force d'interaction entre deux corps A et B portant des charges électriques qA et qB.",
        units: `<ul style="list-style: disc; margin-left: 1.5rem; line-height: 1.8;">
            <li>\\(q_A\\) et \\(q_B\\) sont les charges respectives (en coulombs),</li>
            <li>\\(r\\) est la distance entre les deux charges (en mètres),</li>
            <li>\\(\\epsilon_0\\) est la permittivité du vide,</li>
            <li style="list-style:none; margin-left:-1.5rem; margin-top:0.8rem; margin-bottom:0.8rem;">
                \\[ \\frac{1}{4\\pi\\epsilon_0} = 9,0 \\times 10^9 \\text{ N} \\cdot \\text{m}^2 \\cdot \\text{C}^{-2} \\]
            </li>
        </ul>
        <p style="margin-top:0.5rem; font-weight:700; color:var(--text);">\\(F_{A/B}\\) se lit force exercée par \\(B\\) sur \\(A\\).</p>`,
        properties: `<ul style="list-style: disc; margin-left: 1.5rem; line-height: 1.8;">
            <li>\\(q_A\\) et \\(q_B\\) sont les charges respectives (en coulombs),</li>
            <li>\\(r\\) est la distance entre les deux charges (en mètres),</li>
            <li>\\(\\epsilon_0\\) est la permittivité du vide,</li>
            <li style="list-style:none; margin-left:-1.5rem; margin-top:0.8rem; margin-bottom:0.8rem;">
                \\[ \\frac{1}{4\\pi\\epsilon_0} = 9,0 \\times 10^9 \\text{ N} \\cdot \\text{m}^2 \\cdot \\text{C}^{-2} \\]
            </li>
        </ul>
        <p style="margin-top:0.5rem; font-weight:700; color:var(--text);">\\(F_{A/B}\\) se lit force exercée par \\(B\\) sur \\(A\\).</p>`,
        cardUnits: "F [Force] (Newton), qA; qB [Charges] (Coulomb), r [Dist.] (mètre), 1/4πε0 (=9.10⁹ N.m².C⁻²)"
    },

    {
        id: "ions-list", chapterId: "c-struct-1", title: "Ions à connaître par cœur",
        formula: `<div class="ions-table-container">
            <table class="ions-table">
                <thead>
                    <tr>
                        <th>Cation</th>
                        <th>Formule</th>
                        <th class="sep"></th>
                        <th>Anion</th>
                        <th>Formule</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Aluminium</td><td>Al³⁺</td><td class="sep"></td><td>Bromure</td><td>Br⁻</td></tr>
                    <tr><td>Ammonium</td><td>NH₄⁺</td><td class="sep"></td><td>Chlorure</td><td>Cl⁻</td></tr>
                    <tr><td>Hydronium</td><td>H₃O⁺</td><td class="sep"></td><td>Fluorure</td><td>F⁻</td></tr>
                    <tr><td>Calcium</td><td>Ca²⁺</td><td class="sep"></td><td>Iodure</td><td>I⁻</td></tr>
                    <tr><td>Cuivre (II)</td><td>Cu²⁺</td><td class="sep"></td><td>Nitrate</td><td>NO₃⁻</td></tr>
                    <tr><td>Fer (II)</td><td>Fe²⁺</td><td class="sep"></td><td>Phosphate</td><td>PO₄³⁻</td></tr>
                    <tr><td>Fer (III)</td><td>Fe³⁺</td><td class="sep"></td><td>Sulfate</td><td>SO₄²⁻</td></tr>
                    <tr><td>Sodium</td><td>Na⁺</td><td class="sep"></td><td>Hydroxyde</td><td>HO⁻</td></tr>
                </tbody>
            </table>
        </div>`,
        definition: "Liste des ions monoatomiques et polyatomiques fréquents en chimie de Première.",
        properties: "Un cation est chargé positivement, un anion est chargé négativement.",
        units: ""
    },

    {
        id: "pe-etalon-1", chapterId: "proto-chimie-1", title: "Protocole : Dosage par étalonnage",
        formula: `<img src="assets/proto_etalonnage.png?v=2" style="max-width:100%; border-radius:12px;">`,
        definition: "BUT : Déterminer la concentration d'une espèce colorée en comparant son absorbance à celle de solutions étalons.\n\n1. Réglage du spectrophotomètre (Faire le Blanc).\n2. Déterminer la longueur d'onde de travail λmax.\n3. Préparer une gamme de solutions étalons.\n4. Mesurer l'absorbance et tracer A = f(C).",
        properties: "Loi de Beer-Lambert : A = ε × l × C", units: ""
    },
    {
        id: "proto-dissol", chapterId: "proto-chimie-1", title: "Protocole : Dissolution",
        formula: `<img src="assets/proto_dissolution_v3.png?v=3" style="max-width:100%; border-radius:12px;">`,
        definition: "BUT : Préparer une solution de concentration précise à partir d'un solide.\n\n1. Peser exactement la masse m de solide dans la coupelle.\n2. Introduire le solide dans la fiole jaugée via un entonnoir.\n3. Remplir la fiole aux 2/3 avec de l'eau distillée et agiter.\n4. Compléter jusqu'au trait de jauge, boucher et homogénéiser.",
        properties: "Relation massique : m = C × V × M", units: ""
    },
    {
        id: "proto-dilut", chapterId: "proto-chimie-1", title: "Protocole : Dilution",
        formula: `<img src="assets/proto_dilution_v3.png?v=4" style="max-width:100%; border-radius:12px;">`,
        definition: "BUT : Préparer une solution moins concentrée à partir d'une solution mère.\n\n1. Prélever le volume V_mère de solution mère avec une pipette jaugée.\n2. Introduire le prélèvement dans la fiole jaugée de volume V_fille.\n3. Remplir aux 2/3 avec de l'eau distillée et agiter pour mélanger.\n4. Ajuster au trait de jauge avec de l'eau distillée et homogénéiser.",
        properties: "Facteur de dilution : F = V_fille / V_mère", units: ""
    },
    {
        id: "proto-titrage", chapterId: "proto-chimie-1", title: "Protocole : Titrage colorimétrique",
        formula: `<img src="assets/proto_titrage.png?v=2" style="max-width:100%; border-radius:12px;">`,
        definition: "BUT : Déterminer la concentration d'une espèce en solution par une réaction chimique totale et rapide.\n\n1. On ajoute petit à petit la solution titrante (dans la burette graduée) dans la solution titrée (dans l'Erlenmeyer).\n2. Dès la première goutte versée, la réaction chimique se produit immédiatement.\n3. Tant que l'équivalence n'est pas atteinte, le réactif titrant est consommé immédiatement.\n4. À l'équivalence, le réactif titré est lui aussi totalement consommé.",
        properties: "Volume à l'équivalence : Veq", units: ""
    },
    {
        id: "proto-extraction", chapterId: "proto-chimie-1", title: "Protocole : Extraction liquide-liquide",
        formula: `<img src="assets/proto_extraction.png?v=2" style="max-width:100%; border-radius:12px;">`,
        definition: "BUT : Extraire une espèce chimique d'un mélange à l'aide d'un solvant dans lequel elle est plus soluble.\n\n1. On ajoute le solvant B au mélange initial ;\n2. On agite puis on laisse décanter : les deux phases se séparent ;\n3. L’espèce passe dans la phase où elle est plus soluble ;\n4. On récupère la phase contenant l’espèce d’intérêt",
        properties: "On utilise une ampoule à décanter.", units: ""
    },

    // =============================================
    // --- TERMINALE PHYSIQUE ---
    // =============================================

    // Cinématique & Vecteurs
    { id: "term-vit-inst", chapterId: "p-mouv-term", title: "Vecteur vitesse instantanée",
      formula: "\\vec{v}(t) = \\frac{d\\vec{OM}}{dt}",
      definition: "Dérivée du vecteur position par rapport au temps.", properties: "Tangent à la trajectoire, orienté dans le sens du mouvement.",
      units: "v [Vitesse] (m/s), t [Temps] (s)" },
    { id: "term-acc", chapterId: "p-mouv-term", title: "Vecteur accélération",
      formula: "\\vec{a}(t) = \\frac{d\\vec{v}}{dt}",
      definition: "Dérivée du vecteur vitesse par rapport au temps.", properties: "Pour un MCU, a = v²/R, dirigée vers le centre.",
      units: "a [Accélération] (m/s²), v [Vitesse] (m/s), t [Temps] (s)" },
    { id: "term-mcu-a", chapterId: "p-mouv-term", title: "Accélération centripète (MCU)",
      formula: "a = \\frac{v^2}{R}",
      definition: "Pour un mouvement circulaire uniforme, l'accélération est centripète.", properties: "Dirigée vers le centre du cercle.",
      units: "a [Accélération] (m/s²), v [Vitesse] (m/s), R [Rayon] (m)" },

    // Lois de Newton & Projectiles
    { id: "term-newton2", chapterId: "p-newton-term", title: "2ème loi de Newton",
      formula: "\\sum \\vec{F}_{ext} = m \\cdot \\vec{a}",
      definition: "La résultante des forces extérieures est égale au produit de la masse par l'accélération.", properties: "Valable dans un référentiel galiléen.",
      units: "F [Force] (N), m [Masse] (kg), a [Accélération] (m/s²)" },

    // Kepler & Gravitation
    { id: "term-kepler3", chapterId: "p-kepler-term", title: "3ème loi de Kepler",
      formula: "\\frac{T^2}{a^3} = \\text{cste}",
      definition: "Le rapport T²/a³ est identique pour tous les corps orbitant autour du même astre.", properties: "T = période, a = demi grand-axe.",
      units: "T [Période] (s), a [Demi grand-axe] (m)" },
    { id: "term-gravit", chapterId: "p-kepler-term", title: "Loi de gravitation universelle",
      formula: "F = G \\frac{m_1 m_2}{r^2}",
      definition: "Force d'attraction gravitationnelle entre deux masses.", properties: "G = 6,674 × 10⁻¹¹ N·m²·kg⁻². Toujours attractive.",
      units: "F [Force] (N), G [Constante grav.] (N·m²·kg⁻²), m [Masse] (kg), r [Distance] (m)" },
    { id: "term-sat-vel", chapterId: "p-kepler-term", title: "Vitesse d'un satellite (orbite circulaire)",
      formula: "v = \\sqrt{\\frac{GM}{r}}",
      definition: "Vitesse d'un satellite en orbite circulaire à distance r du centre de l'astre.", properties: "Obtenue en égalisant force de gravitation et force centripète.",
      units: "v [Vitesse] (m/s), G [Cste grav.], M [Masse astre] (kg), r [Rayon orbite] (m)" },

    // Fluides & Bernoulli
    { id: "term-bernoulli", chapterId: "p-fluide-term", title: "Théorème de Bernoulli",
      formula: "P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{cste}",
      definition: "Conservation de l'énergie pour un fluide parfait incompressible en écoulement laminaire.", properties: "Quand la section rétrécit, la vitesse augmente et la pression diminue.",
      units: "P [Pression] (Pa), ρ [Masse vol.] (kg/m³), v [Vitesse] (m/s), h [Altitude] (m)" },
    { id: "term-debit", chapterId: "p-fluide-term", title: "Débit volumique & Équation de continuité",
      formula: "Q_V = S_1 v_1 = S_2 v_2",
      definition: "Le débit volumique est constant pour un fluide incompressible en écoulement laminaire.", properties: "Q_V en m³/s.",
      units: "Q [Débit] (m³/s), S [Section] (m²), v [Vitesse] (m/s)" },
    { id: "term-archimede", chapterId: "p-fluide-term", title: "Poussée d'Archimède",
      formula: "\\Pi = \\rho_{fluide} \\cdot V_{immergé} \\cdot g",
      definition: "Force verticale ascendante exercée par un fluide sur un corps immergé.", properties: "Π > Poids → flotte ; Π < Poids → coule.",
      units: "Π [Poussée] (N), ρ [Masse vol.] (kg/m³), V [Volume immergé] (m³), g (m/s²)" },

    // Thermodynamique
    { id: "term-1er-principe", chapterId: "p-thermo-term", title: "1er principe de la thermodynamique",
      formula: "\\Delta U = W + Q",
      definition: "La variation d'énergie interne est égale à la somme du travail et de la chaleur reçus.", properties: "W > 0 si reçu, Q > 0 si chaleur reçue.",
      units: "ΔU [Énergie interne] (J), W [Travail] (J), Q [Chaleur] (J)" },
    { id: "term-capa-thermo", chapterId: "p-thermo-term", title: "Capacité thermique massique",
      formula: "Q = m \\cdot c \\cdot \\Delta T",
      definition: "Énergie thermique échangée lors d'une variation de température.", properties: "c = capacité thermique massique (J·kg⁻¹·K⁻¹).",
      units: "Q [Chaleur] (J), m [Masse] (kg), c [Cap. massique] (J·kg⁻¹·K⁻¹), ΔT [Variation T] (K)" },

    // Ondes – Diffraction, Interférences & Doppler
    { id: "term-diffrac", chapterId: "p-ondes-term", title: "Largeur tache centrale (Diffraction)",
      formula: "L = \\frac{2\\lambda D}{a}",
      definition: "Largeur de la tache centrale de diffraction par une fente de largeur a.", properties: "Plus la fente est fine, plus la tache est large.",
      units: "L [Largeur] (m), λ [Long. d'onde] (m), D [Distance écran] (m), a [Largeur fente] (m)" },
    { id: "term-interf", chapterId: "p-ondes-term", title: "Interfranges – Double fente de Young",
      formula: "i = \\frac{\\lambda D}{d}",
      definition: "Distance entre deux franges consécutives dans l'expérience des fentes de Young.", properties: "d = écart entre les deux fentes.",
      units: "i [Interfrange] (m), λ [Long. d'onde] (m), D [Distance écran] (m), d [Écart fentes] (m)" },
    { id: "term-doppler", chapterId: "p-ondes-term", title: "Effet Doppler",
      formula: "\\frac{\\Delta f}{f_S} \\approx \\frac{v_{source}}{c}",
      definition: "Décalage en fréquence dû au mouvement relatif de la source et du récepteur.", properties: "Δf > 0 à l'approche, Δf < 0 à l'éloignement.",
      units: "Δf [Décalage fréq.] (Hz), f_S [Fréq. source] (Hz), v [Vitesse source] (m/s), c [Célérité] (m/s)" },

    // Lunette Astronomique
    { id: "term-lunette-gross", chapterId: "p-optique-term", title: "Grossissement d'une lunette (réglage afocal)",
      formula: "G = \\frac{f'_{obj}}{f'_{oc}}",
      definition: "Rapport de la focale de l'objectif sur la focale de l'oculaire.", properties: "G sans unité. Toujours > 1 pour une lunette astronomique.",
      units: "G [Grossissement], f'_obj [Focale objectif] (m), f'_oc [Focale oculaire] (m)" },

    // Physique Quantique
    { id: "term-photon-e", chapterId: "p-quantique-term", title: "Énergie d'un photon",
      formula: "E = h \\cdot f = \\frac{h \\cdot c}{\\lambda}",
      definition: "Énergie transportée par un photon, liée à sa fréquence ou longueur d'onde.", properties: "h = 6,626 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s.",
      units: "E [Énergie] (J ou eV), h [Planck] (J·s), f [Fréquence] (Hz), λ [Long. d'onde] (m)" },

    // Circuit RC
    { id: "term-rc-tau", chapterId: "p-rc-term", title: "Constante de temps RC",
      formula: "\\tau = R \\cdot C",
      definition: "Temps caractéristique de charge/décharge d'un condensateur dans un circuit RC.", properties: "Après 5τ, régime permanent atteint.",
      units: "τ [Constante de temps] (s), R [Résistance] (Ω), C [Capacité] (F)" },
    { id: "term-rc-uc", chapterId: "p-rc-term", title: "Tension condensateur – Charge",
      formula: "u_C(t) = E \\left(1 - e^{-t/\\tau}\\right)",
      definition: "Évolution de la tension aux bornes du condensateur lors de la charge.", properties: "u_C → E quand t → ∞.",
      units: "u_C [Tension] (V), E [Tension alim.] (V), t [Temps] (s), τ (s)" },
    { id: "term-rc-energie", chapterId: "p-rc-term", title: "Énergie stockée (Condensateur)",
      formula: "E_c = \\frac{1}{2} C U^2",
      definition: "Énergie électrostatique stockée par le condensateur chargé à la tension U.", properties: "Exprimée en Joules.",
      units: "E_c [Énergie] (J), C [Capacité] (F), U [Tension] (V)" },

    // =============================================
    // --- TERMINALE CHIMIE ---
    // =============================================

    // Acides-Bases
    { id: "term-ph", chapterId: "c-acide-term", title: "Calcul du pH",
      formula: "pH = -\\log([H_3O^+])",
      definition: "Mesure de l'acidité d'une solution aqueuse.", properties: "pH < 7 acide, = 7 neutre, > 7 basique.",
      units: "pH [Acidité], [H₃O⁺] [Concentration] (mol/L)" },
    { id: "term-hh", chapterId: "c-acide-term", title: "Équation de Henderson-Hasselbalch",
      formula: "pH = pK_a + \\log\\frac{[A^-]}{[AH]}",
      definition: "Relation entre le pH et la proportion de la forme acide/base d'un couple.", properties: "À demi-équivalence : pH = pKa.",
      units: "pH [Acidité], pKa [Constante acidité], [AH] et [A⁻] (mol/L)" },

    // Cinétique
    { id: "term-demi-vie", chapterId: "c-cinetique-term", title: "Demi-vie (ordre 1)",
      formula: "t_{1/2} = \\frac{\\ln 2}{k}",
      definition: "Temps au bout duquel la concentration d'un réactif d'ordre 1 est divisée par deux.", properties: "Indépendant de la concentration initiale.",
      units: "t½ [Demi-vie] (s), k [Constante de vitesse] (s⁻¹)" },
    { id: "term-conc-ordre1", chapterId: "c-cinetique-term", title: "Concentration – Ordre 1",
      formula: "[A](t) = [A]_0 \\cdot e^{-kt}",
      definition: "Loi de décroissance exponentielle de la concentration pour une réaction d'ordre 1.", properties: "Linéarisable en traçant ln[A] = f(t).",
      units: "[A] (mol/L), [A]₀ (mol/L), k (s⁻¹), t (s)" },

    // Équilibre
    { id: "term-qr", chapterId: "c-equilibre-term", title: "Quotient de réaction (Qr)",
      formula: "Q_r = \\frac{[C]^c [D]^d}{[A]^a [B]^b}",
      definition: "Grandeur calculée à partir des concentrations instantanées. À l'équilibre, Qr = K.", properties: "Si Qr < K : réaction dans le sens direct.",
      units: "Qr [Quotient], K [Constante d'équilibre], [ ] [Concentrations] (mol/L)" },

    // Titrages
    { id: "term-titrage-eq", chapterId: "c-titrage-term", title: "Relation à l'équivalence",
      formula: "C_a V_a = C_b V_{éq}",
      definition: "À l'équivalence d'un titrage acide-base, les quantités de matière sont en proportion stœchiométrique.", properties: "Valable pour un monoacide et une monobase.",
      units: "C [Concentration] (mol/L), V [Volume] (L)" },

    // Piles
    { id: "term-faraday", chapterId: "c-piles-term", title: "Charge transférée (Faraday)",
      formula: "Q = n(e^-) \\cdot F",
      definition: "Charge électrique totale transférée lors d'une réaction électrochimique.", properties: "F = 96 500 C/mol (constante de Faraday).",
      units: "Q [Charge] (C), n(e⁻) [Qté e⁻] (mol), F [Faraday] (C/mol)" },

    // Électrolyse
    { id: "term-electrolyse-m", chapterId: "c-electrolyse-term", title: "Masse déposée (Électrolyse)",
      formula: "m = \\frac{M \\cdot I \\cdot \\Delta t}{n \\cdot F}",
      definition: "Masse de substance déposée ou dissoute lors d'une électrolyse.", properties: "n = nombre d'électrons échangés par ion ou atome.",
      units: "m [Masse] (g), M [Masse molaire] (g/mol), I [Intensité] (A), Δt [Durée] (s), n [nb e⁻], F [Faraday] (C/mol)" },

    // Spectroscopies
    { id: "term-ir-sigma", chapterId: "c-spectro-term", title: "Nombre d'onde IR",
      formula: "\\sigma = \\frac{1}{\\lambda} \\quad (\\text{en cm}^{-1})",
      definition: "Inverse de la longueur d'onde, utilisé en spectroscopie IR.", properties: "Chaque liaison absorbe à un σ caractéristique (ex: O-H ≈ 3200–3600 cm⁻¹).",
      units: "σ [Nombre d'onde] (cm⁻¹), λ [Long. d'onde] (cm)" },

    // Protocoles Terminale – Placeholder
    { id: "proto-term-siren", chapterId: "proto-term", title: "🚨 Protocoles Terminale – À venir",
      formula: `<div style="text-align:center; padding:2rem; font-size:4rem;">🚨</div>`,
      definition: "Les protocoles de Terminale seront ajoutés prochainement. Reviens bientôt !",
      properties: "", units: ""
    }
];

// --- APP LOGIC (Navigation, Search, Modals) ---

let currentLevel = '1ere';
let currentSubject = 'all';
let currentChapterId = null;
let currentSearch = '';
let currentView = 'home';
let currentNav = 'formulas';
let defsGroupMode = 'chapter';
let defsSubjectFilter = 'all';

function render() {
    const homeView = document.getElementById('home-view');
    const appView = document.getElementById('app-view');
    const subjTabs = document.getElementById('subject-tabs-container');
    const chapTabs = document.getElementById('chapter-nav-tabs');
    const backBtn = document.getElementById('back-btn');
    const viewTitle = document.getElementById('view-title');
    const levelLabel = document.getElementById('level-label');

    homeView.classList.add('hidden');
    appView.classList.add('hidden');
    subjTabs.classList.add('hidden');
    chapTabs.classList.add('hidden');
    backBtn.classList.add('hidden');
    document.getElementById('no-results').classList.add('hidden');

    if (currentSearch.length > 0 && currentSubject !== 'definitions') {
        appView.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Résultats";
        renderSearch();
    } else if (currentView === 'home') {
        homeView.classList.remove('hidden');
    } else if (currentSubject === 'definitions') {
        appView.classList.remove('hidden');
        subjTabs.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Répertoire des Définitions";
        levelLabel.textContent = currentLevel === '1ere' ? 'Première' : (currentLevel === 'term' ? 'Terminale' : 'Seconde');
        renderAllDefinitions();
    } else if (currentView === 'chapters') {
        appView.classList.remove('hidden');
        subjTabs.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Chapitres";
        levelLabel.textContent = currentLevel === '1ere' ? 'Première' : (currentLevel === 'term' ? 'Terminale' : 'Seconde');
        renderChapters();
    } else if (currentView === 'formulas') {
        appView.classList.remove('hidden');
        const chapter = chapters.find(c => c.id === currentChapterId);
        const isProtoChapter = chapter && chapter.subject === 'protocoles';
        if (!isProtoChapter && currentChapterId !== 'c-nom-1') {
            chapTabs.classList.remove('hidden');
        }
        backBtn.classList.remove('hidden');
        viewTitle.textContent = chapter ? chapter.title : "Détails";
        if (currentNav === 'formulas' || isProtoChapter) renderFormulas();
        else renderDefinitions();
    }
    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
    setTimeout(updateNavIndicator, 0);
}


function renderChapters() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    let filtered = chapters.filter(c => c.level === currentLevel);
    if (currentSubject !== 'all') filtered = filtered.filter(c => c.subject === currentSubject);
    filtered.forEach((c, i) => {
        const div = document.createElement('div');
        div.className = `chapter-card ${c.subject}`;
        div.style.opacity = '0';
        div.innerHTML = `<div class="subj-dot ${c.subject}"></div><div class="card-info">${c.subject.toUpperCase()}</div><h3>${c.title}</h3>`;
        div.onclick = () => {
            currentChapterId = c.id;
            currentView = 'formulas';
            currentNav = 'formulas';
            updateNavTabs();
            render();
        };
        grid.appendChild(div);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                div.style.opacity = '1';
            });
        });
    });
}

function renderFormulas() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    const chapter = chapters.find(c => c.id === currentChapterId);

    if (chapter && chapter.src) {
        const tableCard = document.createElement('div');
        tableCard.className = 'formula-card chimie';
        // Mode GÉANT pour la Nomenclature
        if (chapter.id === 'c-nom-1') {
            tableCard.style.gridColumn = '1 / -1';
            tableCard.style.padding = '0';
            tableCard.style.border = 'none';
            tableCard.style.background = 'transparent';
            tableCard.style.boxShadow = 'none';
        } else {
            tableCard.style.gridColumn = 'span 2';
        }

        const tableTitle = chapter.id === 'c-nom-1' ? 'Récapitulatif Complet : Nomenclature' : 'Géométrie des Molécules (VSEPR)';
        tableCard.innerHTML = `
            ${chapter.id === 'c-nom-1' ? '' : '<span class="card-tag chimie">TABLEAU RECAPITULATIF</span>'}
            <h3 style="margin-bottom: 1.5rem; font-size:1.8rem; text-align:center;">${tableTitle}</h3>
            <div style="max-width: 80%; margin: 0 auto;">
                <div style="background:#fff; border-radius:16px; padding:0; border:1px solid var(--border); overflow:hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <img src="${chapter.src}?v=2" style="width:100%; height:auto; display:block; cursor:zoom-in;" onclick="openModal({title:'${tableTitle}', img:'${chapter.src}?v=2', chapterId:'${chapter.id}'})">
                </div>
            </div>
            <p style="margin-top:1rem; font-size:1rem; color:var(--text-muted); font-weight:700; text-align:center;">Cliquez sur l'image pour voir en plein écran</p>
        `;
        grid.appendChild(tableCard);
    }

    const noResults = document.getElementById('no-results');
    noResults.classList.add('hidden');

    const filteredFormulas = formulas.filter(f => f.chapterId === currentChapterId);
    if (filteredFormulas.length === 0 && !chapter.src) {
        noResults.classList.remove('hidden');
        return;
    }
    filteredFormulas.forEach(f => {
        const card = createCard(f);
        const wideCards = ['lewis-polar-1', 'ions-list', 'mouv-schema-vecteurs', 'tec-1-v3', 'tem-1-v3', 'travail-poids-em', 'travail-poids-ec', 'fluide-statique', 'elec-energie', 'term-bernoulli', 'term-conc-ordre1', 'term-electrolyse-m', 'term-hh'];
        if (wideCards.includes(f.id) || f.id.startsWith('forces-non-conservatives-')) card.style.gridColumn = "span 2";
        grid.appendChild(card);
    });
}

function renderDefinitions() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    let defs = allDefinitions[currentChapterId] || [];

    if (defs.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }

    if (defs.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    defs.forEach(def => {
        const div = document.createElement('div');
        div.className = 'formula-card definitions-style';
        div.innerHTML = `
            <div class="def-label-badge">DÉFINITION</div>
            <div class="def-title-block">
                <div class="def-title-bar"></div>
                <h3 class="def-title-text">${def.t}</h3>
            </div>
            <p class="def-body-text">${def.d}</p>
        `;
        div.onclick = (e) => {
            e.stopPropagation();
            const isExpanded = div.classList.contains('expanded');

            // Reset all
            document.querySelectorAll('.formula-card.definitions-style').forEach(c => c.classList.remove('expanded'));
            grid.classList.remove('has-expanded');

            if (!isExpanded) {
                div.classList.add('expanded');
                grid.classList.add('has-expanded');
            }
        };
        grid.appendChild(div);
    });

    // Reset when clicking empty space
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.formula-card.definitions-style')) {
            document.querySelectorAll('.formula-card.definitions-style').forEach(c => c.classList.remove('expanded'));
            grid.classList.remove('has-expanded');
        }
    });
}

function renderAllDefinitions() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';

    let allDefsList = [];
    const availableChapters = chapters.filter(c => c.level === currentLevel);

    availableChapters.forEach(chap => {
        const chapDefs = allDefinitions[chap.id] || [];
        chapDefs.forEach(d => {
            allDefsList.push({
                ...d,
                chapterId: chap.id,
                chapterTitle: chap.title,
                chapterSubject: chap.subject
            });
        });
    });

    const searchTerm = (currentSearch || '').trim().toLowerCase();
    if (searchTerm.length > 0) {
        allDefsList = allDefsList.filter(d => 
            d.t.toLowerCase().includes(searchTerm) || 
            d.d.toLowerCase().includes(searchTerm) ||
            d.chapterTitle.toLowerCase().includes(searchTerm)
        );
    }

    if (allDefsList.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }

    const container = document.createElement('div');
    container.className = 'defs-container';

    // Group definitions by chapter
    const groupedByChap = {};
    allDefsList.forEach(d => {
        if (!groupedByChap[d.chapterId]) {
            groupedByChap[d.chapterId] = {
                title: d.chapterTitle,
                subject: d.chapterSubject,
                defs: []
            };
        }
        groupedByChap[d.chapterId].defs.push(d);
    });

    Object.values(groupedByChap).forEach(group => {
        group.defs.sort((a, b) => a.t.localeCompare(b.t, 'fr'));

        const sec = document.createElement('div');
        sec.className = 'defs-chapter-section';

        const banner = document.createElement('div');
        banner.className = `defs-chapter-banner ${group.subject}`;
        banner.innerHTML = `
            <div class="subj-dot ${group.subject}"></div>
            <h4>${group.title}</h4>
            <span class="defs-chapter-count">${group.defs.length} déf.</span>
        `;
        sec.appendChild(banner);

        const cardsGrid = document.createElement('div');
        cardsGrid.className = 'grid-container';
        cardsGrid.style.padding = '0';

        group.defs.forEach(def => {
            const card = createSingleDefCard(def, false);
            cardsGrid.appendChild(card);
        });

        sec.appendChild(cardsGrid);
        container.appendChild(sec);
    });

    grid.appendChild(container);
    lucide.createIcons();
}

function createSingleDefCard(def, showChapTag) {
    const div = document.createElement('div');
    div.className = 'formula-card definitions-style';
    div.innerHTML = `
        ${showChapTag ? `<div class="def-card-chapter-tag ${def.chapterSubject}">${def.chapterSubject.toUpperCase()} • ${def.chapterTitle}</div>` : ''}
        <div class="def-label-badge">DÉFINITION</div>
        <div class="def-title-block">
            <div class="def-title-bar"></div>
            <h3 class="def-title-text">${def.t}</h3>
        </div>
        <p class="def-body-text">${def.d}</p>
    `;
    div.onclick = (e) => {
        e.stopPropagation();
        const isExpanded = div.classList.contains('expanded');
        document.querySelectorAll('.formula-card.definitions-style').forEach(c => c.classList.remove('expanded'));
        const grid = document.getElementById('grid-container');
        grid.classList.remove('has-expanded');

        if (!isExpanded) {
            div.classList.add('expanded');
            grid.classList.add('has-expanded');
        }
    };
    return div;
}

function renderSearch() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    const results = formulas.filter(f => f.title.toLowerCase().includes(currentSearch.toLowerCase()));
    if (results.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    results.forEach(f => grid.appendChild(createCard(f)));
}

function updateNavTabs() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === currentNav);
    });
    updateNavIndicator();
}

function updateNavIndicator() {
    const wrapper = document.querySelector('.nav-tabs-wrapper');
    const indicator = document.querySelector('.nav-tab-indicator');
    const activeTab = wrapper?.querySelector('.nav-tab.active');
    if (!indicator || !activeTab || !wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    indicator.style.left = (tabRect.left - wrapperRect.left) + 'px';
    indicator.style.width = tabRect.width + 'px';
}

function createCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';
    const div = document.createElement('div');
    div.className = `formula-card ${chapter.subject}`;
    div.dataset.id = f.id;

    const unitsToParse = f.cardUnits || f.units;
    const pillsHtml = unitsToParse && !isProto ? unitsToParse.split(',').map(u => {
        const txt = u.trim();
        const sym = txt.includes('[') ? txt.split('[')[0].trim() : (txt.includes('(') ? txt.split('(')[0].trim() : txt);
        const unit = txt.includes('(') ? txt.split('(')[1].split(')')[0] : '';
        if (!sym && !unit) return '';
        const isEq = unit.startsWith('=');
        const displayUnit = isEq ? unit.slice(1) : unit;
        const arrow = isEq ? '=' : '↑';
        return `<div class="unit-pill"><span class="pill-sym">${sym}</span><span class="pill-arrow">${arrow}</span><span class="pill-unit">${displayUnit}</span></div>`;
    }).join('') : "";

    // Icônes personnalisées pour les protocoles
    let protoIcon = "beaker";
    if (f.id === "pe-etalon-1") protoIcon = "bar-chart-3"; // Étalonnage
    else if (f.id === "proto-dissol") protoIcon = "droplets"; // Dissolution
    else if (f.id === "proto-dilut") protoIcon = "test-tubes"; // Dilution
    else if (f.id === "proto-titrage") protoIcon = "flask-conical"; // Titrage
    else if (f.id === "proto-extraction") protoIcon = "layers"; // Extraction

    div.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">
            ${isProto ? `
                <div class="proto-icon-wrapper">
                    <i data-lucide="${protoIcon}" class="proto-svg"></i>
                </div>
            ` : (f.img ? `
                <div class="proto-icon-wrapper" style="background:#fff; border-radius: 8px; overflow:hidden; border: 1px solid var(--border);">
                    <img src="${f.img}" style="width:100%; height:100%; object-fit:contain;">
                </div>
            ` : (f.formula && f.formula.includes('<table') ? `
                <div class="table-preview-container" style="zoom: 0.8;">
                    ${f.formula}
                </div>
            ` : (f.formula.startsWith('<') ? f.formula : `\\[ ${f.formula} \\]`)))}
        </div>
        <div class="bottom-legend-area">${isProto ? "" : pillsHtml}</div>
        <div class="card-footer"><span>${isProto ? 'Voir le protocole' : (f.img ? 'Agrandir le tableau' : 'Voir détails')}</span><i data-lucide="arrow-right"></i></div>
    `;
    if (isProto) {
        div.onclick = () => {
            div.classList.add('proto-click');
            setTimeout(() => {
                div.classList.remove('proto-click');
                openModal(f);
            }, 200);
        };
    } else {
        div.onclick = () => openModal(f);
    }
    return div;
}

function openModal(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';

    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-tag').textContent = `${chapter.subject.toUpperCase()} • ${chapter.level}`;
    document.getElementById('modal-tag').className = `modal-badge ${chapter.subject}`;

    const modalBody = document.getElementById('modal-body');
    const modalWin = document.querySelector('.modal-window');
    const modalTabs = document.querySelector('.modal-tabs');

    modalTabs.style.display = isProto ? 'none' : 'flex';

    if (isProto) {
        modalWin.className = "modal-window protocol-mode";
        modalWin.style.maxWidth = "1200px";
        modalWin.style.width = "98%";

        const rawLines = (f.definition || "").split('\n').filter(s => s.trim().length > 0);
        let butHtml = "";
        let stepsHtml = '<div class="protocol-steps-list">';

        let stepCount = 1;
        rawLines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.toUpperCase().startsWith("BUT")) {
                butHtml = `<div class="proto-but-banner"><span>${trimmed}</span></div>`;
            } else if (/^[0-9]+[\.\)]/.test(trimmed)) {
                const text = trimmed.replace(/^[0-9]+[\.\)]\s*/, "");
                stepsHtml += `
                    <div class="protocol-step-item">
                        <div class="step-number">${stepCount++}</div>
                        <div class="step-text">${text}</div>
                    </div>`;
            }
        });
        stepsHtml += '</div>';

        modalBody.innerHTML = `
            <div class="protocol-flex" style="display:flex; flex-direction:row; width:100%; gap:20px;">
                <div class="protocol-content-container" style="flex:1; min-width:0;">
                    ${butHtml}
                    <h4 class="proto-section-title" style="margin-top:10px; font-weight:800; font-size:0.85rem; color:var(--protocoles); letter-spacing:0.05em; text-transform:uppercase;">Étapes à suivre</h4>
                    ${stepsHtml}
                    ${f.properties ? `
                    <div class="proto-props-box" style="margin-top:10px; background:#fff7ed; padding:12px 16px; border-radius:12px; border-left:4px solid #f97316;">
                        <h5 style="color:#9a3412; font-weight:800; margin-bottom:8px; text-transform:uppercase; font-size:0.85rem; letter-spacing:0.05em;">Détails techniques</h5>
                        <p style="color:#c2410c; font-weight:700; font-size:0.9rem;">${f.properties}</p>
                    </div>` : ''}
                </div>
                <div class="protocol-image-container" style="flex:1.5; min-width:0; background:#f8fafc; border:1px solid #e2e8f0; border-radius:16px; padding:10px; display:flex; align-items:center; justify-content:center;">
                    ${f.formula || (f.img ? `<img src="${f.img}" style="max-width:100%; border-radius:8px;">` : '<p>Image manquante</p>')}
                </div>
            </div>
        `;
    } else {
        modalWin.style.maxWidth = "700px";
        modalWin.style.width = "90%";
        modalBody.innerHTML = `
            <div class="tab-panel active" id="tab-eqn">
                <div class="math-display" id="math-box"></div>
                <div class="units-legend">
                    <h4>Unités & Symboles :</h4>
                    <div id="modal-units">—</div>
                </div>
            </div>
            <div class="tab-panel" id="tab-def">
                <p id="modal-def">—</p>
            </div>
            <div class="tab-panel" id="tab-prop">
                <p id="modal-prop">—</p>
            </div>
        `;

        // Render normal content...
        let unitsHtml = "—";
        if (f.units) {
            if (f.units.startsWith('<') || f.units.includes('•')) {
                unitsHtml = `<div style="line-height:1.8; color:var(--text-muted); font-weight:600;">${f.units}</div>`;
            } else {
                unitsHtml = '<div class="modal-units-grid">';
                f.units.split(',').forEach(u => {
                    const txt = u.trim();
                    if (!txt) return;
                    let sym = txt.includes('[') ? txt.split('[')[0].trim() : (txt.includes('(') ? txt.split('(')[0].trim() : txt);
                    let name = txt.includes('[') ? txt.split('[')[1].split(']')[0].trim() : "";
                    let unit = txt.includes('(') ? txt.split('(')[1].split(')')[0].trim() : "";
                    unitsHtml += `<div class="modal-unit-item"><span class="mu-sym">${sym}</span><span class="mu-details"><span class="mu-name">${name ? ' = ' + name : ''}</span><span class="mu-unit">${unit ? '(' + unit + ')' : ''}</span></span></div>`;
                });
                unitsHtml += '</div>';
            }
        }
        document.getElementById('modal-units').innerHTML = unitsHtml;
        document.getElementById('modal-def').innerHTML = f.definition || "—";
        document.getElementById('modal-prop').innerHTML = f.properties || "—";

        const mathBox = document.getElementById('math-box');
        if (f.img) {
            mathBox.innerHTML = `<img src="${f.img}" style="max-width:100%; border-radius:8px; box-shadow: var(--shadow);">`;
        } else if (f.formula) {
            mathBox.innerHTML = f.formula.startsWith('<') ? f.formula : `\\[ ${f.formula} \\]`;
        }
        switchTab('eqn');
    }

    document.getElementById('modal-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function switchTab(id) {
    document.querySelectorAll('.tab-trigger').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    document.querySelectorAll('.tab-panel').forEach(p => {
        const isActive = p.id === `tab-${id}`;
        p.classList.toggle('active', isActive);
        p.style.display = isActive ? 'block' : 'none';
    });
}

function selectLevel(lvl) {
    currentLevel = lvl;
    currentView = 'chapters';
    render();
}

function goHome() {
    currentView = 'home';
    currentChapterId = null;
    currentSearch = '';
    currentSubject = 'all';
    document.querySelectorAll('.sub-tab').forEach(x => {
        x.classList.toggle('active', x.dataset.subject === 'all');
    });
    const searchInput = document.getElementById('main-search');
    if (searchInput) searchInput.value = '';
    render();
}

function goBack() {
    if (currentSearch) {
        currentSearch = '';
        const searchInput = document.getElementById('main-search');
        if (searchInput) searchInput.value = '';
    } else if (currentSubject === 'definitions') {
        currentSubject = 'all';
        document.querySelectorAll('.sub-tab').forEach(x => {
            x.classList.toggle('active', x.dataset.subject === 'all');
        });
        currentView = 'chapters';
    } else if (currentView === 'formulas') {
        const chapter = chapters.find(c => c.id === currentChapterId);
        if (chapter && chapter.subject === 'protocoles') {
            currentSubject = 'all';
            document.querySelectorAll('.sub-tab').forEach(x => {
                x.classList.toggle('active', x.dataset.subject === 'all');
            });
        }
        currentView = 'chapters';
    } else {
        currentView = 'home';
    }
    render();
}

// Initialisation
function updateStatus() {
    const totalFormulas = formulas.length;
    let totalDefs = 0;
    Object.values(allDefinitions).forEach(arr => totalDefs += arr.length);

    const countEl = document.getElementById('count-num');
    const defEl = document.getElementById('def-num');
    if (countEl) countEl.textContent = totalFormulas;
    if (defEl) defEl.textContent = totalDefs;
}

// Attach Events
document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');
    if (backBtn) backBtn.onclick = goBack;

    document.querySelectorAll('.sub-tab').forEach(t => {
        t.onclick = () => {
            document.querySelectorAll('.sub-tab').forEach(x => x.classList.remove('active'));
            t.classList.add('active');
            currentSubject = t.dataset.subject;
            if (currentSubject === 'protocoles') {
                currentView = 'formulas';
                currentChapterId = currentLevel === 'term' ? 'proto-term' : 'proto-chimie-1';
                currentNav = 'formulas';
            }
            render();
        };
    });

    document.querySelectorAll('.tab-trigger').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
    document.querySelectorAll('.nav-tab').forEach(t => t.onclick = () => {
        currentNav = t.dataset.nav;
        updateNavTabs();
        render();
    });

    const searchInput = document.getElementById('main-search');
    if (searchInput) searchInput.oninput = (e) => { currentSearch = e.target.value; render(); };

    const modalClose = document.querySelector('.modal-close');
    if (modalClose) modalClose.onclick = () => { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; };

    window.onclick = (e) => {
        const modal = document.getElementById('modal-overlay');
        if (e.target === modal) { modal.style.display = 'none'; document.body.style.overflow = 'auto'; }
    };

    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) homeBtn.onclick = () => goHome();

    updateStatus();
    render();
    lucide.createIcons();
});

// Backup execution if DOMContentLoaded already fired
updateStatus();
render();
lucide.createIcons();
