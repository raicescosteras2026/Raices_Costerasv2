window.pagesEN = {};

// --- INICIO PAGE ---
pagesEN.inicio = () => {
  return `
    <section class="px-margin-mobile pt-8 pb-10 flex flex-col gap-6 relative overflow-hidden">
      <!-- Subtle background blob for editorial feel -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-tertiary-fixed-dim/30 rounded-full blur-3xl -z-10"></div>
      <div class="space-y-4 relative z-10">
        <h1 class="font-display-lg text-display-lg text-primary text-balance leading-tight">
          Welcome to Coastal Roots Project... Building climate and community resilience in Playa de Ponce.
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          We work hand in hand with residents to transform our vulnerability into action, equipping the community with tools, knowledge, and resources to face climate change and coastal emergencies.
        </p>
      </div>
    </section>

    <!-- Bento Grid Section -->
    <section class="px-margin-mobile pb-8">
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-gutter">
        <!-- Card 1: Puntos de Encuentro -->
        <div class="sm:col-span-4 bg-surface-container-highest rounded-xl p-card-padding shadow-lg flex flex-col gap-4 relative overflow-hidden group border border-outline-variant/30">
          <div class="flex justify-between items-start z-10">
            <div>
              <span class="font-label-caps text-label-caps text-primary uppercase block mb-1">Risk Mapping and Identification</span>
              <h2 class="font-headline-sm text-headline-sm text-primary">Planning and Safe Routes</h2>
            </div>
            <span class="material-symbols-outlined text-secondary bg-surface rounded-full p-2 shadow-sm">map</span>
          </div>
          
          <div class="w-full h-40 rounded-lg bg-surface-container-low overflow-hidden relative border border-outline-variant/30 cursor-pointer" data-route="mapas">
            <img alt="Map snippet showing coastal area" class="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-102 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIB5IHuRUt-_tHXlgoNoaj-cYt9Fyu5UO6JB8Mm9VREeGWaUsXF3zoXqKibqkAgUVqvxSw3DTZA3tpoRLUP-ID5kcJMuRykcM6W95WrIXLdUTBBKNMjAvoV7EQH8_ucnOglUaReoR6on2d8xw3Q1hCgVXmqW58mGlQ4ecf_Y70p9NU55GBFXNcOT1IdbOZYmUFl5Gbh65ijiklrzkW9y84rZRei-ed7eBDS5ESLp7kC2UhJbEjtweCt1WAGZN7IJRp5K19s7Xe4z4"/>
            <!-- EVACUATION PATH OVERLAY DECORATION -->
            <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path class="opacity-80" d="M10,80 Q40,65 50,45 T90,25" fill="none" stroke="#22c55e" stroke-dasharray="4 2" stroke-width="2.5"></path>
              <circle cx="90" cy="25" fill="#22c55e" r="4.5" class="animate-pulse"></circle>
            </svg>
            <div class="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors"></div>
            <div class="absolute bottom-2 right-2 bg-surface/90 text-primary font-label-caps text-[10px] px-2 py-1 rounded shadow-sm">
              View Maps
            </div>
          </div>
        </div>

        <!-- Card 2: Datos de la Comunidad (Half Width) -->
        <div class="sm:col-span-2 bg-tertiary-fixed rounded-xl p-card-padding shadow-lg flex flex-col gap-3 justify-between cursor-pointer border border-outline-variant/10 hover:translate-y-[-2px] transition-transform duration-300" data-route="guia">
          <div>
            <span class="font-label-caps text-label-caps text-tertiary uppercase block mb-1">Simulations and Guides</span>
            <h2 class="font-headline-sm text-body-lg text-on-tertiary-fixed font-bold leading-tight">Education and Family Preparedness</h2>
          </div>
          <div class="flex items-end justify-between mt-2">
            <p class="font-body-md text-xs text-on-tertiary-fixed/80">Interactive guide to pack your emergency bag.</p>
            <span class="material-symbols-outlined text-tertiary opacity-80 text-[32px]">school</span>
          </div>
        </div>

        <!-- Card 3: Protegiendo Nuestra Costa (Half Width) -->
        <div class="sm:col-span-2 bg-primary-fixed rounded-xl p-card-padding shadow-lg flex flex-col gap-3 justify-between cursor-pointer border border-outline-variant/10 hover:translate-y-[-2px] transition-transform duration-300" data-route="sobre">
          <div>
            <span class="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase block mb-1">Nature-Based Solutions</span>
            <h2 class="font-headline-sm text-body-lg text-on-primary-fixed font-bold leading-tight">Protecting Our Coasts</h2>
          </div>
          <div class="flex items-end justify-between mt-2">
            <p class="font-body-md text-xs text-on-primary-fixed-variant/80">Learn the 3 pillars of ecological resilience.</p>
            <span class="material-symbols-outlined text-primary text-[32px]">forest</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAs Section -->
    <section class="px-margin-mobile pb-10 flex flex-col gap-4">
      <button data-route="mapas" class="bg-primary text-on-primary font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary-container active:scale-[0.98] transition-all w-full">
        <span class="material-symbols-outlined">map</span>
        View Risk and Evacuation Maps
      </button>
      <button data-route="guia" class="bg-primary-container text-on-primary-container font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all w-full">
        <span class="material-symbols-outlined">download</span>
        Complete Preparedness Guide
      </button>
      <button data-route="datos" class="bg-secondary-container text-on-secondary-container font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all w-full">
        <span class="material-symbols-outlined">analytics</span>
        View Community Data
      </button>
    </section>
  `;
};

function initInicioPage() {
  // Bind routes inside dynamically generated page
  const routeElements = document.querySelectorAll("#main-content-container [data-route]");
  routeElements.forEach(el => {
    el.addEventListener("click", () => {
      const route = el.getAttribute("data-route");
      navigateTo(route);
    });
  });
}

// --- DATOS PAGE ---
pagesEN.datos = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-5xl mx-auto w-full">
      <header class="mb-section-gap">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Impact and Indicators</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-2">Facts and Data</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">A deep look into the reality and resilience of our coastal community.</p>
      </header>

      <!-- Filter Chips -->
      <div class="flex gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-outline-variant/30">
        <button id="filter-all" class="filter-chip active-chip whitespace-nowrap px-4 py-2 rounded-full border border-secondary text-secondary bg-secondary-container bg-opacity-20 font-body-md text-sm font-semibold">All</button>
        <button id="filter-demo" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Demographics</button>
        <button id="filter-env" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Environment</button>
        <button id="filter-econ" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Economy</button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="stats-cards-container">
        <!-- Card 1: Demographics -->
        <article data-cat="demo" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Demographics</span>
            <span class="material-symbols-outlined text-secondary" style="font-size: 28px; font-variation-settings: 'FILL' 1;">groups</span>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">12,450</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Inhabitants in the southern coastal zone, reflecting a 5% growth in the last decade.</p>
          </div>
        </article>

        <!-- Card 2: Environment -->
        <article data-cat="env" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-tertiary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">Environment</span>
            <span class="material-symbols-outlined text-tertiary" style="font-size: 28px; font-variation-settings: 'FILL' 1;">forest</span>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">850</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Hectares of preserved mangroves, acting as a natural barrier against storm surges.</p>
          </div>
        </article>

        <!-- Card 3: Economy -->
        <article data-cat="econ" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-primary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-primary tracking-widest uppercase">Economy</span>
            <span class="material-symbols-outlined text-primary" style="font-size: 28px; font-variation-settings: 'FILL' 1;">account_balance_wallet</span>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">45%</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Of local businesses depend directly on ecotourism and sustainable fishing.</p>
          </div>
        </article>

        <!-- Card 4: Demographics -->
        <article data-cat="demo" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Demographics</span>
            <span class="material-symbols-outlined text-secondary" style="font-size: 28px; font-variation-settings: 'FILL' 1;">elderly</span>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">32%</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Of the population is over 60 years old, highlighting the need for accessible infrastructure.</p>
          </div>
        </article>

        <!-- Card 5: Environment -->
        <article data-cat="env" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-tertiary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">Environment</span>
            <span class="material-symbols-outlined text-tertiary" style="font-size: 28px; font-variation-settings: 'FILL' 1;">water_drop</span>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">2.5<span class="text-2xl ml-1">mm</span></h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Average annual sea level rise recorded on local coasts.</p>
          </div>
        </article>
      </div>

      <section class="mt-12 bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
        <h3 class="font-headline-sm text-primary mb-6 flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">analytics</span>
          Interactive Data Visualizations
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Chart 1: Sea level Rise -->
          <div class="bg-surface rounded-xl p-4 border border-outline-variant/20 shadow-sm flex flex-col">
            <h4 class="font-body-lg text-on-surface font-semibold mb-2">Historical Sea Level Rise (Playa de Ponce)</h4>
            <div class="flex-grow flex items-center justify-center h-64" id="sea-level-chart-container">
              <!-- SVG generated via JS -->
            </div>
            <p class="font-body-md text-xs text-on-surface-variant mt-2 text-center">Recorded in millimeters of cumulative deviation since 2010.</p>
          </div>
          
          <!-- Chart 2: Mangrove Coverage -->
          <div class="bg-surface rounded-xl p-4 border border-outline-variant/20 shadow-sm flex flex-col">
            <h4 class="font-body-lg text-on-surface font-semibold mb-2">Mangrove Preservation vs Land Loss</h4>
            <div class="flex-grow flex items-center justify-center h-64" id="mangrove-chart-container">
              <!-- SVG generated via JS -->
            </div>
            <p class="font-body-md text-xs text-on-surface-variant mt-2 text-center">Hectares reforested and protected by Un Nuevo Amanecer, Inc.</p>
          </div>
        </div>
      </section>
    </div>
  `;
};

function initDatosPage() {
  const chips = document.querySelectorAll(".filter-chip");
  const cards = document.querySelectorAll("#stats-cards-container article");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      // Remove active states
      chips.forEach(c => {
        c.classList.remove("active-chip", "border-secondary", "text-secondary", "bg-secondary-container", "bg-opacity-20");
        c.classList.add("border-outline", "text-on-surface-variant");
      });
      // Add active state to clicked
      chip.classList.add("active-chip", "border-secondary", "text-secondary", "bg-secondary-container", "bg-opacity-20");
      chip.classList.remove("border-outline", "text-on-surface-variant");

      const filter = chip.id.split("-")[1];
      cards.forEach(card => {
        const cat = card.getAttribute("data-cat");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  renderCharts();
}

function renderCharts() {
  const primaryColor = "#003629";
  const secondaryColor = "#006a64";
  const accentColor = "#e3a38c";

  // Render Sea Level Chart
  const seaContainer = document.getElementById("sea-level-chart-container");
  if (seaContainer) {
    seaContainer.innerHTML = `
      <svg viewBox="0 0 400 240" class="w-full h-full">
        <!-- Gridlines -->
        <line x1="40" y1="20" x2="380" y2="20" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="40" y1="70" x2="380" y2="70" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="40" y1="120" x2="380" y2="120" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="40" y1="170" x2="380" y2="170" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="40" y1="210" x2="380" y2="210" stroke="#a0a0a0" stroke-width="1" />
        
        <!-- Y-Axis Labels -->
        <text x="30" y="24" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">40mm</text>
        <text x="30" y="74" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">30mm</text>
        <text x="30" y="124" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">20mm</text>
        <text x="30" y="174" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">10mm</text>
        <text x="30" y="214" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">0mm</text>

        <!-- X-Axis Labels -->
        <text x="40" y="230" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2010</text>
        <text x="125" y="230" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2014</text>
        <text x="210" y="230" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2018</text>
        <text x="295" y="230" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2022</text>
        <text x="380" y="230" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2026</text>

        <!-- Line Gradient -->
        <defs>
          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${secondaryColor}" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="${secondaryColor}" stop-opacity="0.0"/>
          </linearGradient>
        </defs>

        <!-- Chart Area Path -->
        <path d="M40,210 L40,195 Q125,185 125,170 T210,130 T295,90 T380,40 L380,210 Z" fill="url(#chart-grad)" />

        <!-- Line Path -->
        <path d="M40,195 Q125,185 125,170 T210,130 T295,90 T380,40" fill="none" stroke="${secondaryColor}" stroke-width="3.5" stroke-linecap="round" />

        <!-- Data Dots -->
        <circle cx="40" cy="195" r="4.5" fill="${primaryColor}" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="125" cy="170" r="4.5" fill="${primaryColor}" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="210" cy="130" r="4.5" fill="${primaryColor}" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="295" cy="90" r="4.5" fill="${primaryColor}" stroke="#ffffff" stroke-width="1.5" />
        <circle cx="380" cy="40" r="5" fill="${primaryColor}" stroke="#ffffff" stroke-width="1.5" />
      </svg>
    `;
  }

  // Render Mangrove Chart
  const mangroveContainer = document.getElementById("mangrove-chart-container");
  if (mangroveContainer) {
    mangroveContainer.innerHTML = `
      <svg viewBox="0 0 400 240" class="w-full h-full">
        <!-- Bars Grid -->
        <line x1="50" y1="20" x2="370" y2="20" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="50" y1="80" x2="370" y2="80" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="50" y1="140" x2="370" y2="140" stroke="#e3e2df" stroke-width="0.5" stroke-dasharray="2 2" />
        <line x1="50" y1="200" x2="370" y2="200" stroke="#a0a0a0" stroke-width="1" />

        <!-- Y Axis Labels -->
        <text x="40" y="24" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">1000ha</text>
        <text x="40" y="84" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">750ha</text>
        <text x="40" y="144" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">500ha</text>
        <text x="40" y="204" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="end">250ha</text>

        <!-- Bar 1 (2018) -->
        <rect x="90" y="120" width="30" height="80" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="122" y="160" width="15" height="40" rx="2" fill="${accentColor}" />
        <text x="113" y="218" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2018</text>

        <!-- Bar 2 (2020) -->
        <rect x="170" y="90" width="30" height="110" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="202" y="130" width="15" height="70" rx="2" fill="${accentColor}" />
        <text x="193" y="218" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2020</text>

        <!-- Bar 3 (2022) -->
        <rect x="250" y="60" width="30" height="140" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="282" y="110" width="15" height="90" rx="2" fill="${accentColor}" />
        <text x="273" y="218" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2022</text>

        <!-- Bar 4 (2024) -->
        <rect x="330" y="30" width="30" height="170" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="362" y="80" width="15" height="120" rx="2" fill="${accentColor}" />
        <text x="353" y="218" font-size="10" font-family="Vollkorn" fill="#707974" text-anchor="middle">2024</text>

        <!-- Legend -->
        <circle cx="100" cy="-5" r="5" fill="${primaryColor}" />
        <text x="110" y="-1" font-size="10" font-family="Vollkorn" fill="#707974">Manglar Protegido</text>
        <circle cx="230" cy="-5" r="5" fill="${accentColor}" />
        <text x="240" y="-1" font-size="10" font-family="Vollkorn" fill="#707974">Nuevas Siembras</text>
      </svg>
    `;
  }
}

// --- MAPAS PAGE ---
pagesEN.mapas = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-7xl mx-auto w-full">
      <header class="mb-section-gap max-w-3xl">
        <div class="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-secondary-container bg-surface-container-low">
          <span class="w-2 h-2 rounded-full bg-secondary"></span>
          <span class="font-label-caps text-label-caps text-on-surface-variant">Data Catalog</span>
        </div>
        <h2 class="font-display-lg text-display-lg text-on-surface mb-4">Risk Maps</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Explore the cartographic archive of Ponce Playa. These maps detail vulnerable zones and community resilience strategies for climate events.
        </p>
      </header>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Map Card 1 -->
        <article class="glass-card rounded-xl group flex flex-col h-full border border-outline-variant/20 overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
          <div class="relative w-full aspect-[1.49] bg-surface-variant overflow-hidden rounded-t-xl">
            <img alt="Mapa de Zonas de Inundación" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2t5nIIeb_hotxwQsgLjDb_NwAzT3MLlN5NSphMOWEqGSiwGpq08FYJHUwIUTWXKXC_ZyylnxsCdFo1gsRaleKurh_GqmrI-ssg48s4sMGrGWDR7ymercjHE424M7irq_gAikOlyGSFysZfOOI_KNApfqNtQOH0b1lObV7kCp-HVmYReRHVrUAzKNh2kMDD91hK3J0JNoGBEkqUPCr8g_UDrRP_1JSO0yCG7K3qjca0jpr-KXA-DprJDw4Ug120bo6NSOKhaG2NrM"/>
            <div class="absolute top-4 left-4">
              <span class="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-label-caps text-primary border border-outline-variant/30 flex items-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-[14px]">waves</span>
                Sea Level
              </span>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Coastal Flood Zones</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                Topographical analysis of Ponce's coastal areas with the highest vulnerability to storm surges and sea level rise.
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-surface-variant">
              <span class="text-xs text-on-surface-variant font-label-caps">Capas: Elevación, Marea</span>
              <button id="btn-open-flood-modal" class="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:text-secondary transition-colors font-bold">
                Ver Mapa Interactivo <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </article>

        <!-- Map Card 2 -->
        <article class="glass-card rounded-xl group flex flex-col h-full border border-outline-variant/20 overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
          <div class="relative w-full aspect-[1.49] bg-surface-variant overflow-hidden rounded-t-xl">
            <img alt="Mapa de Rutas de Desalojo" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8GoemdRBe5tsfPAasBYNptd3tPePK29Azg81dgRZrKzxn9SIUBAPBFVr_7yAeSlCDrJ3uECfwC8a8QL_EPJpC8FC-HEogAulJOcaJX4E46Bzxlvbbx4q1fAI9yQfjeAZBviAXk-bLt9MU_lsP-DzaZxupIkvB1U7S2Kx7seDe_7zZUzuFXsvIu7fbnmVx1e9YmbjoR1O9O5-Gt6NRnPTSOekw_3fAli00-BnpXNi0E4liN-gEhDyM4lu8qqyq768htkCoiJa08jk"/>
            <div class="absolute top-4 left-4">
              <span class="bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-label-caps text-primary border border-outline-variant/30 flex items-center gap-1 shadow-sm">
                <span class="material-symbols-outlined text-[14px]">directions_run</span>
                Evacuation
              </span>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Safe Evacuation Routes</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                Safe paths identified by the community and experts for rapid evacuation to higher ground during emergencies.
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-surface-variant">
              <span class="text-xs text-on-surface-variant font-label-caps">Actualizado: Oct 2024</span>
              <button id="btn-open-routes-modal" class="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:text-secondary transition-colors font-bold">
                Ver Mapa Interactivo <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </article>

        <div class="glass-card p-8 bg-surface-container-low flex flex-col justify-center items-center text-center border border-outline-variant/50 rounded-xl md:col-span-2 lg:col-span-1 min-h-[220px]">
          <div class="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
            <span class="material-symbols-outlined text-2xl">download</span>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Download Complete Package</h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 max-w-sm">
            Get all high-resolution maps for educational use or offline community planning.
          </p>
          <a href="#" class="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-xs hover:bg-primary-container hover:shadow-md transition-all active:scale-95 flex items-center gap-2">
            <span class="material-symbols-outlined text-[18px]">folder_zip</span>
            Download ZIP (45 MB)
          </a>
        </div>

        <!-- Info Card -->
        <div class="glass-card p-6 bg-tertiary-container text-on-tertiary-container md:col-span-2 lg:col-span-1 min-h-[220px] flex flex-col justify-center relative overflow-hidden rounded-xl">
          <!-- Pattern overlay -->
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 20px 20px;"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="material-symbols-outlined text-tertiary-fixed">info</span>
              <span class="font-label-caps text-label-caps text-tertiary-fixed font-bold uppercase">Methodology</span>
            </div>
            <p class="font-body-lg text-body-lg mb-4 text-on-tertiary-fixed">
              These maps are the result of a collaborative effort between cartographers, the Community Advisory Committee, and local residents of Ponce Playa.
            </p>
            <a class="inline-flex items-center gap-1 font-label-caps text-xs text-tertiary-fixed font-bold underline underline-offset-4 hover:opacity-80 transition-opacity" href="#">
              Read about the process <span class="material-symbols-outlined text-[16px]">east</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- ==========================================
    <!-- Interactive Map Drawer Modal
    <!-- ========================================== -->
    <div id="map-modal" class="fixed inset-0 bg-surface-variant/80 backdrop-blur-sm z-[999] hidden flex items-center justify-center p-4">
      <div class="bg-surface border border-outline-variant/30 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col shadow-2xl overflow-hidden relative">
        <header class="p-4 border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-low">
          <div>
            <h3 id="modal-map-title" class="font-headline-sm text-primary">Mapa Interactivo de Riesgo</h3>
            <p id="modal-map-subtitle" class="font-body-md text-xs text-on-surface-variant">Visualizador de inundaciones costeras</p>
          </div>
          <button id="modal-close-btn" class="p-2 rounded-full hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined text-primary">close</span>
          </button>
        </header>

        <div class="flex-grow flex flex-col lg:flex-row overflow-hidden relative">
          <!-- Control Panel -->
          <div class="w-full lg:w-80 bg-surface-container-low border-r border-outline-variant/30 p-6 flex flex-col gap-6 overflow-y-auto shrink-0 z-10 shadow-md">
            <!-- Slider (Only shown for flood view) -->
            <div id="flood-slider-panel" class="space-y-4">
              <h4 class="font-body-lg font-bold text-primary">Nivel de Aumento del Mar</h4>
              <div class="flex justify-between font-label-caps text-xs text-on-surface-variant">
                <span>Actual</span>
                <span>+1.5m (Marea alta)</span>
                <span>+3.0m (Huracán)</span>
              </div>
              <input type="range" id="water-level-slider" min="0" max="30" value="0" class="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-primary" />
              <div class="p-3 bg-error-container/30 border border-error-container/60 rounded-lg flex gap-2">
                <span class="material-symbols-outlined text-error text-[20px]">warning</span>
                <p id="slider-alert-text" class="font-body-md text-xs text-on-error-container font-semibold">Nivel base. Costa segura.</p>
              </div>
            </div>

            <!-- Layer toggles -->
            <div class="space-y-3">
              <h4 class="font-body-lg font-bold text-primary">Capas Disponibles</h4>
              <label class="flex items-center gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 cursor-pointer">
                <input type="checkbox" id="layer-flood" checked class="rounded emerald-checkbox text-primary" />
                <span class="font-body-md text-sm text-on-surface select-none">Zonas de Inundación</span>
              </label>
              <label class="flex items-center gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 cursor-pointer">
                <input type="checkbox" id="layer-evac" checked class="rounded emerald-checkbox text-primary" />
                <span class="font-body-md text-sm text-on-surface select-none">Rutas de Evacuación</span>
              </label>
              <label class="flex items-center gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 cursor-pointer">
                <input type="checkbox" id="layer-points" checked class="rounded emerald-checkbox text-primary" />
                <span class="font-body-md text-sm text-on-surface select-none">Puntos de Encuentro</span>
              </label>
            </div>

            <!-- Ponce Playa stats summary -->
            <div class="mt-auto p-4 bg-primary-fixed rounded-xl border border-primary-fixed-dim">
              <div class="flex items-center gap-2 mb-1">
                <span class="material-symbols-outlined text-primary text-[20px]">security</span>
                <span class="font-label-caps text-xs text-on-primary-fixed font-bold uppercase">Estado de Ruta</span>
              </div>
              <p class="font-body-md text-xs text-on-primary-fixed-variant leading-relaxed">
                El Comité de Asesores Comunitarios monitorea 3 rutas seguras que conectan Ponce Playa con la Carr. 52.
              </p>
            </div>
          </div>

          <!-- Interactive SVG Map Canvas -->
          <div class="flex-grow bg-[#faf9f5] relative flex items-center justify-center p-4 overflow-hidden">
            <svg id="interactive-svg-map" viewBox="0 0 500 400" class="w-full h-full max-h-[500px]">
              <!-- Water Body (Sea) -->
              <path class="map-water" d="M 0 320 Q 150 300 250 310 T 500 300 L 500 400 L 0 400 Z" />
              
              <!-- Dynamic Water Rise Shading (controlled by slider) -->
              <path id="water-rise-path" fill="#006a64" fill-opacity="0.2" stroke="none" d="M 0 320 Q 150 300 250 310 T 500 300 L 500 400 L 0 400 Z" />

              <!-- Shore Sand Line -->
              <path fill="none" stroke="#e3dbcb" stroke-width="6" d="M 0 320 Q 150 300 250 310 T 500 300" />
              
              <!-- Mangrove Forest Icons (decorations) -->
              <g class="mangrove-group opacity-60">
                <path d="M 30 280 L 35 270 L 40 280 M 35 270 L 35 290" stroke="#003629" stroke-width="1.5" />
                <circle cx="35" cy="268" r="4" fill="#006a64" />
                
                <path d="M 60 290 L 65 280 L 70 290 M 65 280 L 65 300" stroke="#003629" stroke-width="1.5" />
                <circle cx="65" cy="278" r="4" fill="#006a64" />

                <path d="M 450 280 L 455 270 L 460 280 M 455 270 L 455 290" stroke="#003629" stroke-width="1.5" />
                <circle cx="455" cy="268" r="4" fill="#006a64" />
              </g>

              <!-- Flood Risk Shaded Polygon Area (controlled via opacity checkbox) -->
              <polygon id="map-flood-polygon" class="map-flood-zone" points="0,320 120,220 220,240 380,210 500,300 500,350 0,350" />

              <!-- Ponce Playa Streets (Standard white roads) -->
              <path class="map-road" d="M 50 100 L 450 100" />
              <path class="map-road" d="M 120 100 L 120 250" />
              <path class="map-road" d="M 250 100 L 250 280" />
              <path class="map-road" d="M 380 100 L 380 230" />
              <path class="map-road" d="M 120 200 Q 250 220 380 200" />

              <!-- Evacuation Paths (Green dashes) -->
              <g id="map-evac-paths">
                <!-- Route 1 (West) -->
                <path class="map-evac-route" d="M 120 250 L 120 100" />
                <!-- Route 2 (Center) -->
                <path class="map-evac-route" d="M 250 280 L 250 100" />
                <!-- Route 3 (East) -->
                <path class="map-evac-route" d="M 380 230 L 380 100" />
              </g>

              <!-- Safe Meeting Points Pins -->
              <g id="map-safe-pins">
                <!-- Safe Zone: Ponce Playa Community Center (Top) -->
                <g class="safe-pin-marker cursor-pointer" data-info="Refugio A: Centro Comunitario Playa. Capacidad 250 personas. Kit médico y generador de emergencia disponible.">
                  <circle cx="250" cy="100" r="10" fill="#22c55e" fill-opacity="0.3" class="animate-ping" />
                  <circle cx="250" cy="100" r="7" fill="#22c55e" stroke="#ffffff" stroke-width="1.5" />
                  <span class="material-symbols-outlined hidden">home</span>
                </g>

                <!-- Safe Zone: Ponce High School (Top West) -->
                <g class="safe-pin-marker cursor-pointer" data-info="Refugio B: Escuela Superior Vocacional. Capacidad 500 personas. Centro de acopio principal.">
                  <circle cx="120" cy="100" r="10" fill="#22c55e" fill-opacity="0.3" class="animate-ping" />
                  <circle cx="120" cy="100" r="7" fill="#22c55e" stroke="#ffffff" stroke-width="1.5" />
                </g>

                <!-- Safe Zone: Ponce Plaza Mall (Top East) -->
                <g class="safe-pin-marker cursor-pointer" data-info="Refugio C: Parque Industrial. Zona elevada libre de marejada. Área de estacionamiento seguro.">
                  <circle cx="380" cy="100" r="10" fill="#22c55e" fill-opacity="0.3" class="animate-ping" />
                  <circle cx="380" cy="100" r="7" fill="#22c55e" stroke="#ffffff" stroke-width="1.5" />
                </g>
              </g>

              <!-- Map Labels -->
              <text x="250" y="85" font-size="10" font-weight="bold" fill="#003629" text-anchor="middle" font-family="Vollkorn">Refugio Central</text>
              <text x="120" y="85" font-size="10" font-weight="bold" fill="#003629" text-anchor="middle" font-family="Vollkorn">Refugio Oeste</text>
              <text x="380" y="85" font-size="10" font-weight="bold" fill="#003629" text-anchor="middle" font-family="Vollkorn">Refugio Este</text>
              
              <text x="145" y="215" font-size="8" fill="#707974" font-family="Vollkorn">Sec. Lirios</text>
              <text x="340" y="215" font-size="8" fill="#707974" font-family="Vollkorn">Sec. Vistas</text>
              <text x="250" y="360" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="Vollkorn">Mar Caribe</text>
            </svg>

            <!-- Map Point Information Toast -->
            <div id="map-toast" class="absolute bottom-4 left-4 right-4 bg-primary/95 text-on-primary p-3 rounded-lg border border-primary-container shadow-lg backdrop-blur-md hidden text-xs transition-opacity duration-300">
              <div class="flex items-start gap-2">
                <span class="material-symbols-outlined text-[16px] text-secondary">info</span>
                <p id="map-toast-content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

function initMapasPage() {
  const modal = document.getElementById("map-modal");
  const openFloodBtn = document.getElementById("btn-open-flood-modal");
  const openRoutesBtn = document.getElementById("btn-open-routes-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  const openModal = (type) => {
    if (!modal) return;
    modal.classList.remove("hidden");
    
    const title = document.getElementById("modal-map-title");
    const subtitle = document.getElementById("modal-map-subtitle");
    const sliderPanel = document.getElementById("flood-slider-panel");
    const floodPolygon = document.getElementById("map-flood-polygon");
    const slider = document.getElementById("water-level-slider");

    if (type === "flood") {
      title.innerText = "Zonas de Riesgo de Inundación";
      subtitle.innerText = "Simulador de inundación por marejada y aumento del nivel del mar";
      sliderPanel.classList.remove("hidden");
      if (floodPolygon) floodPolygon.style.display = "block";
      if (slider) slider.value = 0;
      updateWaterRise(0);
    } else {
      title.innerText = "Rutas de Desalojo Seguro";
      subtitle.innerText = "Caminos planificados para evacuar a la comunidad hacia refugios seguros";
      sliderPanel.classList.add("hidden");
      if (floodPolygon) floodPolygon.style.display = "none";
      updateWaterRise(0);
    }
  };

  if (openFloodBtn) openFloodBtn.addEventListener("click", () => openModal("flood"));
  if (openRoutesBtn) openRoutesBtn.addEventListener("click", () => openModal("routes"));
  if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.add("hidden"));

  // Checkbox layer toggle logic
  const layerFlood = document.getElementById("layer-flood");
  const layerEvac = document.getElementById("layer-evac");
  const layerPoints = document.getElementById("layer-points");

  if (layerFlood) {
    layerFlood.addEventListener("change", (e) => {
      const polygon = document.getElementById("map-flood-polygon");
      if (polygon) polygon.style.opacity = e.target.checked ? "1" : "0";
    });
  }
  if (layerEvac) {
    layerEvac.addEventListener("change", (e) => {
      const paths = document.getElementById("map-evac-paths");
      if (paths) paths.style.opacity = e.target.checked ? "1" : "0";
    });
  }
  if (layerPoints) {
    layerPoints.addEventListener("change", (e) => {
      const pins = document.getElementById("map-safe-pins");
      if (pins) pins.style.opacity = e.target.checked ? "1" : "0";
    });
  }

  // Water level rise simulator slider
  const slider = document.getElementById("water-level-slider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      updateWaterRise(parseInt(e.target.value));
    });
  }

  // Safe point click toast popup
  const markers = document.querySelectorAll(".safe-pin-marker");
  const toast = document.getElementById("map-toast");
  const toastContent = document.getElementById("map-toast-content");

  markers.forEach(marker => {
    marker.addEventListener("click", () => {
      const info = marker.getAttribute("data-info");
      if (toast && toastContent) {
        toastContent.innerText = info;
        toast.classList.remove("hidden");
        // Hide toast after 8 seconds
        setTimeout(() => toast.classList.add("hidden"), 8000);
      }
    });
  });
}

function updateWaterRise(val) {
  const path = document.getElementById("water-rise-path");
  const alertText = document.getElementById("slider-alert-text");
  
  if (!path) return;
  
  // Calculate dynamic path based on height
  // base sea is y = 320 to 400
  const yOffset = 320 - (val * 4); // Rise up to 120px
  
  path.setAttribute("d", `M 0 ${yOffset} Q 150 ${yOffset - 10} 250 ${yOffset} T 500 ${yOffset - 15} L 500 400 L 0 400 Z`);
  
  if (val === 0) {
    alertText.innerText = "Nivel base. Costa segura.";
    alertText.parentElement.className = "p-3 bg-primary-fixed text-on-primary-fixed border border-primary-fixed-dim rounded-lg flex gap-2";
  } else if (val < 15) {
    alertText.innerText = `Nivel del mar +${(val/10).toFixed(1)}m. Inundación leve en la costa y humedales.`;
    alertText.parentElement.className = "p-3 bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim rounded-lg flex gap-2";
  } else {
    alertText.innerText = `Nivel del mar +${(val/10).toFixed(1)}m. INUNDACIÓN CRÍTICA. Evacuar Playa inmediatamente por rutas verdes!`;
    alertText.parentElement.className = "p-3 bg-error-container/40 text-on-error-container border border-error-container/60 rounded-lg flex gap-2";
  }
}

// --- GUIA PAGE ---
pagesEN.guia = () => {
  return `
    <div class="w-full max-w-7xl mx-auto px-margin-mobile md:px-section-gap py-8">
      <!-- Header Section -->
      <header class="mb-section-gap text-center md:text-left">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Preparedness Guide</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-gutter">Guide to be prepared</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Vital instructions and interactive checklist for the Ponce community facing coastal and climate emergencies.</p>
      </header>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
        <!-- 1. Mochila de Emergencia (Spans 2 cols on md) -->
        <section class="texture-overlay bg-surface-container-low rounded-xl p-card-padding shadow-lg md:col-span-2 flex flex-col relative overflow-hidden border border-outline-variant/30">
          <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <span class="material-symbols-outlined text-[150px] text-primary">backpack</span>
          </div>
          <header class="flex items-center justify-between mb-4 relative z-20">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined icon-fill">medical_services</span>
              </div>
              <div>
                <span class="font-label-caps text-label-caps text-secondary block">Vital Inventory</span>
                <h3 class="font-headline-sm text-headline-sm text-primary">Emergency Kit</h3>
              </div>
            </div>
            <!-- Progress Circle -->
            <div class="flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-outline-variant/30">
              <span id="backpack-progress-text" class="font-label-caps text-xs text-primary font-bold">0%</span>
            </div>
          </header>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 relative z-20">
            Prepare basic supplies for at least 72 hours for each family member.
          </p>

          <ul class="flex flex-col gap-3 flex-grow relative z-20">
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-water" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-water">Bottled water (1 gallon per person/day)</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-food" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-food">Non-perishable food and manual can opener</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-firstaid" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-firstaid">First aid kit and prescription medications</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-docs" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-docs">Copy of important documents (waterproof bag)</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-radio" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-radio">Battery/crank radio and flashlight with extra batteries</label>
            </li>
          </ul>
        </section>

        <!-- 2. Plan Familiar (Spans 2 cols on md) -->
        <section class="texture-overlay bg-surface-container-high rounded-xl p-card-padding shadow-lg md:col-span-2 flex flex-col border border-outline-variant/30">
          <header class="flex items-center gap-gutter mb-gutter">
            <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined icon-fill">family_home</span>
            </div>
            <div>
              <span class="font-label-caps text-label-caps text-secondary block">Estrategia</span>
              <h3 class="font-headline-sm text-headline-sm text-primary">Plan Familiar</h3>
            </div>
          </header>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6">Defina rutas de evacuación y puntos de encuentro seguros antes de que ocurra la emergencia.</p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
            <!-- Step 1 -->
            <div class="bg-surface p-4 rounded-lg border-t-2 border-primary-fixed-dim">
              <div class="flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-secondary text-[20px]">meeting_room</span>
                <h4 class="font-body-lg text-on-surface font-semibold">Zonas Seguras</h4>
              </div>
              <p class="font-body-md text-xs text-on-surface-variant">Identifique los cuartos interiores más resistentes en su casa, lejos de ventanas.</p>
            </div>
            <!-- Step 2 -->
            <div class="bg-surface p-4 rounded-lg border-t-2 border-secondary">
              <div class="flex items-center gap-2 mb-2">
                <span class="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
                <h4 class="font-body-lg text-on-surface font-semibold">Puntos de Reunión</h4>
              </div>
              <p class="font-body-md text-xs text-on-surface-variant">Acuerden un punto de encuentro en el barrio y otro fuera en caso de inundación.</p>
            </div>
            
            <!-- Step 3 (Interactive Out-of-Area Contact) -->
            <div class="bg-surface p-4 rounded-lg border-t-2 border-tertiary-fixed-dim sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div class="flex-grow">
                <div class="flex items-center gap-2 mb-1">
                  <span class="material-symbols-outlined text-secondary text-[20px]">contact_phone</span>
                  <h4 class="font-body-lg text-on-surface font-semibold">Contacto Foráneo</h4>
                </div>
                <div id="contact-display" class="font-body-md text-xs text-on-surface-variant">
                  Ningún contacto añadido. Agregue un contacto fuera del área de riesgo para avisar en emergencias.
                </div>
              </div>
              <button id="btn-add-contact" class="shrink-0 bg-primary hover:bg-primary-container text-on-primary font-label-caps text-[10px] px-4 py-2 rounded-full transition-colors active:scale-95">
                Añadir Contacto
              </button>
            </div>
          </div>
        </section>

        <!-- 3. Antes, Durante y Después (Spans all 4 cols) -->
        <section class="md:col-span-4 mt-8">
          <header class="mb-gutter border-b border-outline-variant/30 pb-base">
            <span class="font-label-caps text-label-caps text-secondary block">Cronograma de Acción</span>
            <h3 class="font-headline-sm text-headline-md text-primary">Inundaciones y Huracanes</h3>
          </header>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Antes -->
            <article class="glass-card rounded-xl p-card-padding flex flex-col border border-outline-variant/20 relative overflow-hidden group">
              <div class="absolute inset-0 bg-tertiary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div class="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed mb-4 flex items-center justify-center relative z-10">
                <span class="material-symbols-outlined icon-fill">weather_mix</span>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Antes</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Asegure puertas, ventanas y objetos sueltos en el patio.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Llene los tanques de gasolina de sus vehículos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Verifique su mochila de emergencia y plan familiar.</span>
                </li>
              </ul>
            </article>
            
            <!-- Durante -->
            <article class="glass-card rounded-xl p-card-padding flex flex-col border border-primary-fixed/50 relative overflow-hidden group">
              <div class="absolute inset-0 bg-primary-fixed opacity-10 group-hover:opacity-15 transition-opacity"></div>
              <div class="w-12 h-12 rounded-full bg-primary text-on-primary mb-4 flex items-center justify-center relative z-10">
                <span class="material-symbols-outlined icon-fill">warning</span>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Durante</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-secondary text-sm mt-0.5">stop_circle</span>
                  <span>Manténgase alejado de ventanas y puertas de cristal.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-secondary text-sm mt-0.5">stop_circle</span>
                  <span>Escuche boletines oficiales en la radio portátil.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-secondary text-sm mt-0.5">stop_circle</span>
                  <span>Desconecte la electricidad si sube el nivel del agua.</span>
                </li>
              </ul>
            </article>
            
            <!-- Después -->
            <article class="glass-card rounded-xl p-card-padding flex flex-col border border-outline-variant/20 relative overflow-hidden group">
              <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container mb-4 flex items-center justify-center relative z-10">
                <span class="material-symbols-outlined icon-fill">check_circle</span>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Después</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Espere la confirmación de cese de peligro por autoridades.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Evite caminar o transitar por calles inundadas.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-primary text-sm mt-0.5">stop_circle</span>
                  <span>Beba agua embotellada hasta saber que el grifo es seguro.</span>
                </li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>

    <!-- Contact Details Input Modal -->
    <div id="contact-modal" class="fixed inset-0 bg-surface-variant/80 backdrop-blur-sm z-[999] hidden flex items-center justify-center p-4">
      <div class="bg-surface border border-outline-variant/30 rounded-2xl w-full max-w-md p-6 shadow-2xl flex flex-col gap-4">
        <h3 class="font-headline-sm text-primary flex items-center gap-2">
          <span class="material-symbols-outlined text-secondary">contact_phone</span>
          Añadir Contacto de Emergencia
        </h3>
        <p class="font-body-md text-xs text-on-surface-variant">Establezca un contacto fuera del sur de Puerto Rico para reportar estado durante huracanes.</p>
        
        <div class="space-y-3">
          <div>
            <label class="block font-label-caps text-xs text-on-surface-variant mb-1" for="contact-name">Nombre</label>
            <input type="text" id="contact-name" class="w-full rounded-lg border-outline-variant bg-surface text-on-surface focus:border-primary focus:ring-primary-fixed" placeholder="e.g. María Colón" />
          </div>
          <div>
            <label class="block font-label-caps text-xs text-on-surface-variant mb-1" for="contact-phone">Teléfono</label>
            <input type="tel" id="contact-phone" class="w-full rounded-lg border-outline-variant bg-surface text-on-surface focus:border-primary focus:ring-primary-fixed" placeholder="e.g. 787-555-1234" />
          </div>
          <div>
            <label class="block font-label-caps text-xs text-on-surface-variant mb-1" for="contact-city">Ubicación (Fuera de Ponce)</label>
            <input type="text" id="contact-city" class="w-full rounded-lg border-outline-variant bg-surface text-on-surface focus:border-primary focus:ring-primary-fixed" placeholder="e.g. Orlando, FL" />
          </div>
        </div>

        <div class="flex gap-3 justify-end pt-2">
          <button id="contact-cancel-btn" class="px-4 py-2 border border-outline text-on-surface-variant rounded-full text-xs font-semibold hover:bg-surface-container-high active:scale-95 transition-all">Cancelar</button>
          <button id="contact-save-btn" class="px-4 py-2 bg-primary text-on-primary rounded-full text-xs font-semibold hover:bg-primary-container active:scale-95 transition-all">Guardar</button>
        </div>
      </div>
    </div>
  `;
};

function initGuiaPage() {
  const items = document.querySelectorAll(".backpack-item");
  const progressText = document.getElementById("backpack-progress-text");
  const contactDisplay = document.getElementById("contact-display");
  const addContactBtn = document.getElementById("btn-add-contact");
  const contactModal = document.getElementById("contact-modal");
  const saveContactBtn = document.getElementById("contact-save-btn");
  const cancelContactBtn = document.getElementById("contact-cancel-btn");

  // Load backpack states from localStorage
  items.forEach(item => {
    const saved = localStorage.getItem(`rc-backpack-${item.id}`);
    if (saved === "true") {
      item.checked = true;
    }
    item.addEventListener("change", () => {
      localStorage.setItem(`rc-backpack-${item.id}`, item.checked);
      updateBackpackProgress();
    });
  });

  const updateBackpackProgress = () => {
    const total = items.length;
    if (total === 0) return;
    const checked = document.querySelectorAll(".backpack-item:checked").length;
    const pct = Math.round((checked / total) * 100);
    if (progressText) progressText.innerText = `${pct}% Preparada`;
  };

  updateBackpackProgress();

  // Load contact from localStorage
  const loadContact = () => {
    const contact = JSON.parse(localStorage.getItem("rc-emergency-contact"));
    if (contact && contactDisplay) {
      contactDisplay.innerHTML = `
        <div class="font-semibold text-primary">${contact.name}</div>
        <div>Tlf: ${contact.phone}</div>
        <div>Ubicación: ${contact.city}</div>
      `;
      if (addContactBtn) addContactBtn.innerText = "Editar";
    }
  };

  loadContact();

  // Add Contact logic
  if (addContactBtn && contactModal) {
    addContactBtn.addEventListener("click", () => {
      contactModal.classList.remove("hidden");
      // Populate fields if edit
      const contact = JSON.parse(localStorage.getItem("rc-emergency-contact"));
      if (contact) {
        document.getElementById("contact-name").value = contact.name || "";
        document.getElementById("contact-phone").value = contact.phone || "";
        document.getElementById("contact-city").value = contact.city || "";
      }
    });
  }

  if (cancelContactBtn && contactModal) {
    cancelContactBtn.addEventListener("click", () => {
      contactModal.classList.add("hidden");
    });
  }

  if (saveContactBtn && contactModal) {
    saveContactBtn.addEventListener("click", () => {
      const name = document.getElementById("contact-name").value.trim();
      const phone = document.getElementById("contact-phone").value.trim();
      const city = document.getElementById("contact-city").value.trim();

      if (!name || !phone) {
        alert("Por favor, introduzca al menos un nombre y teléfono.");
        return;
      }

      localStorage.setItem("rc-emergency-contact", JSON.stringify({ name, phone, city }));
      loadContact();
      contactModal.classList.add("hidden");
    });
  }
}

// --- SOBRE NOSOTROS PAGE ---
pagesEN.sobre = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-5xl mx-auto w-full flex flex-col gap-8">
      <section class="flex flex-col items-center text-center max-w-4xl mx-auto gap-4 mb-4">
        <div class="font-label-caps text-label-caps text-secondary bg-secondary-container px-3 py-1 rounded-full inline-block uppercase tracking-widest border border-outline/20">La Iniciativa</div>
        <h2 class="font-headline-md text-primary-container leading-tight text-center">Una alianza comunitaria por la resiliencia climática y la seguridad en la Playa de Ponce.</h2>
      </section>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Left Column: Context -->
        <div class="md:col-span-7 bg-surface-container-lowest rounded-xl p-card-padding md:p-8 shadow-lg border border-surface-variant relative overflow-hidden">
          <div class="absolute -right-10 -top-10 text-primary-container/5 pointer-events-none">
            <span class="material-symbols-outlined" style="font-size: 200px;">waves</span>
          </div>
          <h3 class="font-headline-sm text-on-surface mb-4">Un Esfuerzo de Raíz</h3>
          <p class="font-body-lg text-on-surface-variant mb-4">
            Proyecto Raíces Costeras surge como una iniciativa vital impulsada por <strong>Un Nuevo Amanecer, Inc. (UNA)</strong> en estrecha colaboración con el <strong>Comité de Asesores Comunitarios (CAC)</strong>. 
          </p>
          <p class="font-body-md text-on-surface-variant mb-6">
            Nuestra misión es empoderar a los residentes de sectores históricos como Lirios del Sur y Vistas del Mar, dotándolos de herramientas científicas y organizativas para enfrentar los retos del cambio climático y proteger la herencia cultural de nuestra franja costera.
          </p>
          <img alt="Comunidad unida en Ponce" class="w-full h-52 object-cover rounded-lg shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9LW7ioUxdSPOEe8GVnbcxJ4iq1AV1E_dftwMeqVaz4KUKeTByW2bTcs5BNsrEP4zS4Ytoh9PJ8eXu5yEjwq9x8vUqXfAijID8pAOk7Q-6vPc--JLRhvlcQACAS_nWM8mlAfGsLbX9qpGnDnJ4zQkUv-AXl4mPmZFdHBlDkSd4eoucrxQgVVLolY3W3vEM3UG15p2CYnRQtBCRwmyuWghbtrXPUuKMlb_k8ACNMBjDdBY8PZr88kB_Ld4Sj7tze4Dc2mrRnJWuSsI"/>
        </div>

        <!-- Right Column: Organizations -->
        <div class="md:col-span-5 flex flex-col gap-6">
          <!-- Org 1 -->
          <div class="bg-surface-container-low rounded-xl p-card-padding shadow-lg flex flex-col gap-2 h-full justify-center border border-outline-variant/30">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                <span class="material-symbols-outlined">wb_sunny</span>
              </div>
              <h4 class="font-headline-sm text-base text-on-surface font-semibold">Un Nuevo Amanecer, Inc.</h4>
            </div>
            <p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Organización comunitaria sin fines de lucro dedicada al desarrollo comunitario sostenible y la defensa ambiental en la región sur de Puerto Rico.
            </p>
          </div>
          
          <!-- Org 2 -->
          <div class="bg-tertiary-container/10 rounded-xl p-card-padding shadow-lg flex flex-col gap-2 h-full justify-center border border-tertiary-container/20">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-on-tertiary shrink-0">
                <span class="material-symbols-outlined">diversity_3</span>
              </div>
              <h4 class="font-headline-sm text-base text-on-surface font-semibold">Comité de Asesores Comunitarios</h4>
            </div>
            <p class="font-body-md text-xs text-on-surface-variant leading-relaxed">
              Líderes locales de La Playa de Ponce que guían el proyecto asegurando que las soluciones respondan a las realidades y saberes colectivos del barrio.
            </p>
          </div>
        </div>
      </div>

      <!-- The Three Pillars Bento Grid -->
      <section class="mt-8">
        <h3 class="font-headline-sm text-primary text-center mb-8">Los Tres Pilares del Proyecto</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Pillar 1 -->
          <div class="bg-surface-container-lowest rounded-xl p-card-padding shadow-lg flex flex-col relative overflow-hidden group border border-outline-variant/30">
            <div class="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <div class="flex justify-between items-start mb-4">
              <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Pilar 01</span>
              <span class="material-symbols-outlined text-secondary text-3xl opacity-80">satellite_alt</span>
            </div>
            <h4 class="font-headline-sm text-body-lg font-bold text-on-surface mb-3">Datos e Inteligencia Territorial</h4>
            <p class="font-body-md text-sm text-on-surface-variant flex-grow leading-relaxed">
              Levantamiento de información geoespacial precisa sobre vulnerabilidades costeras. Democratizamos los datos para que la comunidad tome decisiones informadas sobre mitigación de riesgos.
            </p>
          </div>
          
          <!-- Pillar 2 -->
          <div class="bg-primary-container/5 rounded-xl p-card-padding shadow-lg flex flex-col relative overflow-hidden group border border-primary-container/10">
            <div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <div class="flex justify-between items-start mb-4">
              <span class="font-label-caps text-label-caps text-primary uppercase tracking-widest">Pilar 02</span>
              <span class="material-symbols-outlined text-primary text-3xl opacity-80">nature</span>
            </div>
            <h4 class="font-headline-sm text-body-lg font-bold text-on-surface mb-3">Infraestructura Ecológica</h4>
            <p class="font-body-md text-sm text-on-surface-variant flex-grow leading-relaxed">
              Diseño e implementación de soluciones basadas en la naturaleza, como la restauración de bosques de manglar y dunas, para proteger la costa utilizando los propios mecanismos de defensa del ecosistema.
            </p>
          </div>
          
          <!-- Pillar 3 -->
          <div class="bg-tertiary-fixed/30 rounded-xl p-card-padding shadow-lg flex flex-col relative overflow-hidden group border border-tertiary-fixed/50">
            <div class="absolute top-0 left-0 w-full h-1 bg-tertiary"></div>
            <div class="flex justify-between items-start mb-4">
              <span class="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">Pilar 03</span>
              <span class="material-symbols-outlined text-tertiary text-3xl opacity-80">support_agent</span>
            </div>
            <h4 class="font-headline-sm text-body-lg font-bold text-on-surface mb-3">Capacidad Adaptativa</h4>
            <p class="font-body-md text-sm text-on-surface-variant flex-grow leading-relaxed">
              Fortalecimiento de las redes de apoyo local y protocolos de emergencia comunitarios. Capacitamos a los vecinos para responder eficazmente ante eventos climáticos extremos.
            </p>
          </div>
        </div>
      </section>
    </div>
  `;
};

// --- FOTOGRAFIA PAGE ---
pagesEN.fotografia = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-7xl mx-auto w-full">
      <header class="mb-section-gap">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Visual Gallery</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-2">Project Photography</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Explore the moments, efforts, and beauty of Playa de Ponce captured by our community.</p>
      </header>

      <!-- Masonry Photo Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 space-y-6">
        
        <!-- Photo 1 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/mangrove_restoration_1781124377365.png" alt="Restauración de Manglares" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Mangrove Restoration</h4>
            <p class="font-body-md text-xs text-on-primary/80">Community volunteers planting hope.</p>
          </figcaption>
        </figure>

        <!-- Photo 2 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/coastal_community_1781124389221.png" alt="Comunidad Costera" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Coastal Community</h4>
            <p class="font-body-md text-xs text-on-primary/80">The vitality and color of our neighborhood.</p>
          </figcaption>
        </figure>

        <!-- Photo 3 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/community_planning_1781124400939.png" alt="Planificación Comunitaria" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Charting the Future</h4>
            <p class="font-body-md text-xs text-on-primary/80">Planning meeting and risk mapping.</p>
          </figcaption>
        </figure>

        <!-- Photo 4 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/ocean_sunset_1781124413556.png" alt="Atardecer en la Costa" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Coastal Sunset</h4>
            <p class="font-body-md text-xs text-on-primary/80">The natural beauty we protect.</p>
          </figcaption>
        </figure>

      </div>
    </div>
  `;
};

// --- REFUGIOS PAGE ---
pagesEN.refugios = () => {
  const refugios = [
    { name: "Esc. Vocacional Bernardino Cordero", phone: "(787) 842-7091", type: "Escuela" },
    { name: "Esc. José Celso Barbosa", phone: "(787) 842-8671", type: "Escuela" },
    { name: "Esc. Josefina Boya León", phone: "(787) 812-3879", type: "Escuela" },
    { name: "Esc. Lila Mayoral Wirshing", phone: "(787) 843-8245", type: "Escuela" },
    { name: "Esc. Llanos del Sur", phone: "(787) 848-1105", type: "Escuela" },
    { name: "Esc. Santa Teresita", phone: "(787) 841-4949", type: "Escuela" },
    { name: "Res. Arístides Chavier", phone: "(787) 844-5541", type: "Residencial" },
    { name: "Res. Ernesto Ramos Antonini", phone: "(787) 658-4412", type: "Residencial" },
    { name: "Res. Dr. Pila", phone: "(939) 418-3059", type: "Residencial" }
  ];

  const renderRefugioCard = (r) => `
    <div class="bg-surface-container-low border border-outline-variant/50 rounded-xl p-5 flex flex-col gap-3 hover:bg-surface-container-high transition-colors shadow-sm">
      <div class="flex items-start justify-between gap-2">
        <h3 class="font-headline-sm text-on-surface font-semibold text-base leading-tight">${r.name}</h3>
        <span class="material-symbols-outlined text-primary text-xl bg-primary-container/30 rounded-full p-1.5 shrink-0">
          ${r.type === 'Escuela' ? 'school' : 'domain'}
        </span>
      </div>
      <div class="mt-auto pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
        <span class="material-symbols-outlined text-[18px]">call</span>
        <a href="tel:${r.phone.replace(/[^0-9]/g, '')}" class="font-body-md font-medium hover:text-primary transition-colors">${r.phone}</a>
      </div>
    </div>
  `;

  return `
    <div class="px-margin-mobile py-8 max-w-5xl mx-auto w-full">
      
      <div class="bg-error-container text-on-error-container p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-6 items-center shadow-md relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
          <span class="material-symbols-outlined" style="font-size: 150px;">health_and_safety</span>
        </div>
        
        <div class="bg-error text-on-error w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm z-10">
          <span class="material-symbols-outlined text-3xl">warning</span>
        </div>
        
        <div class="flex-grow text-center md:text-left z-10">
          <span class="font-label-caps text-xs uppercase tracking-widest opacity-80 block mb-1">We are ready</span>
          <h2 class="font-display-sm font-bold mb-2 leading-tight">Approved Shelters</h2>
          <p class="font-body-md opacity-90 max-w-2xl">
            Official list of shelters approved by the Department of Housing for the Autonomous Municipality of Ponce. In case of emergency, contact the nearest shelter.
          </p>
        </div>
        
        <div class="shrink-0 text-center flex flex-col items-center gap-1 opacity-90 z-10 bg-error-container/50 p-2 rounded-lg">
          <span class="material-symbols-outlined text-3xl">admin_panel_settings</span>
          <span class="font-label-caps text-[10px] uppercase tracking-wider font-bold">OMME Ponce</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        ${refugios.map(renderRefugioCard).join('')}
      </div>

    </div>
  `;
};
