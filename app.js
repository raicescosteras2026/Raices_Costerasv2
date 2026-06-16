// Raíces Costeras - Application Logic & Interactive Features

const staticTranslations = {
  es: {
    inicio: "Inicio",
    datos: "Datos del Barrio",
    mapas: "Mapas de Riesgo",
    guia: "Guía de Preparación",
    sobre: "Sobre Nosotros",
    fotografia: "Fotografía",
    refugios: "Refugios",
    orgTop: "Un Nuevo Amanecer, Inc.<br/>Comité de Asesores Comunitarios",
    orgBottom: "Comité de Asesores Comunitarios (CAC)",
    footer: "Un Nuevo Amanecer, Inc. | Comité de Asesores Comunitarios (CAC)",
    title: "Raíces Costeras"
  },
  en: {
    inicio: "Home",
    datos: "Neighborhood Data",
    mapas: "Risk Maps",
    guia: "Preparedness Guide",
    sobre: "About Us",
    fotografia: "Photography",
    refugios: "Shelters",
    orgTop: "Un Nuevo Amanecer, Inc.<br/>Community Advisory Committee",
    orgBottom: "Community Advisory Committee (CAC)",
    footer: "Un Nuevo Amanecer, Inc. | Community Advisory Committee (CAC)",
    title: "Coastal Roots"
  }
};

window.currentLang = localStorage.getItem("app_lang") || "es";

function updateStaticDOM() {
  const t = staticTranslations[window.currentLang];
  document.querySelectorAll('a[data-route]').forEach(link => {
    const route = link.getAttribute('data-route');
    if (t[route]) {
      const span = link.querySelector('span:not(.ti)');
      if (span) span.innerHTML = t[route];
    }
  });
  
  document.querySelectorAll('h1').forEach(h => {
    if(h.innerHTML.includes('Raíces Costeras') || h.innerHTML.includes('Coastal Roots')) h.innerHTML = t.title;
  });
  document.querySelectorAll('div').forEach(d => {
    if(d.classList.contains('md:hidden') && (d.innerHTML.includes('Raíces Costeras') || d.innerHTML.includes('Coastal Roots'))) d.innerHTML = t.title;
  });

  document.querySelectorAll('.font-label-caps').forEach(el => {
    if(el.innerHTML.includes('Un Nuevo Amanecer') || el.innerHTML.includes('Comité') || el.innerHTML.includes('Committee')) {
      if(el.innerHTML.includes('<br')) {
        el.innerHTML = t.orgTop;
      } else if (el.innerHTML.includes('|')) {
        el.innerHTML = t.footer;
      } else {
        el.innerHTML = t.orgBottom;
      }
    }
  });

  const langBtnText = document.getElementById('lang-toggle-text');
  if (langBtnText) {
    langBtnText.innerText = window.currentLang === 'es' ? 'EN' : 'ES';
  }
}

function initLanguage() {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      window.currentLang = window.currentLang === 'es' ? 'en' : 'es';
      localStorage.setItem('app_lang', window.currentLang);
      updateStaticDOM();
      navigateTo(window.currentRoute, false);
    });
  }
  updateStaticDOM();
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initRouter();
  initDrawer();
});



// ==========================================
// 2. Navigation Drawer (Mobile)
// ==========================================
function initDrawer() {
  const menuBtn = document.getElementById("menu-btn");
  const navDrawer = document.getElementById("nav-drawer");
  const drawerOverlay = document.getElementById("drawer-overlay");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");

  if (!menuBtn || !navDrawer || !drawerOverlay) return;

  function toggleDrawer() {
    const isClosed = navDrawer.classList.contains("-translate-x-full");
    if (isClosed) {
      navDrawer.classList.remove("-translate-x-full");
      drawerOverlay.classList.remove("hidden");
      setTimeout(() => drawerOverlay.classList.remove("opacity-0"), 10);
    } else {
      navDrawer.classList.add("-translate-x-full");
      drawerOverlay.classList.add("opacity-0");
      setTimeout(() => drawerOverlay.classList.add("hidden"), 300);
    }
  }

  menuBtn.addEventListener("click", toggleDrawer);
  drawerOverlay.addEventListener("click", toggleDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", toggleDrawer);

  // Close drawer when clicking navigation links
  const drawerLinks = navDrawer.querySelectorAll("a[data-route]");
  drawerLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleDrawer();
    });
  });
}

// ==========================================
// 3. Client-Side Router
// ==========================================

const estrategiasData = [
  { text: "Reuniones con Líderes Municipales", doc: "DOC-06", icon: "users-group" },
  { text: "Control de Desbordamiento de Infraestructura Pluvial", doc: "DOC-07", icon: "home-down" },
  { text: "Mantenimiento del Sistema de Alcantarillado y Prevención de Desbordamientos", doc: "DOC-07", icon: "tool" },
  { text: "Oportunidades Económicas del Puerto", doc: "DOC-02", icon: "boat" },
  { text: "Barreras Naturales (Manglares, Arrecifes)", doc: "DOC-06", icon: "tree" },
  { text: "Mejora de la Red Eléctrica y Alumbrado Nocturno", doc: "DOC-09", icon: "bulb" },
  { text: "Desarrollo de Capacidades Comunitarias para la Preparación ante Desastres", doc: "DOC-07", icon: "certificate" },
  { text: "Portal de Datos Abiertos", doc: "DOC-07", icon: "database" },
  { text: "Educación Ambiental (Reciclaje y Limpiezas)", doc: "DOC-05", icon: "recycle" },
  { text: "Reforestación Urbana para Reducir el Calor", doc: "DOC-05", icon: "tree" },
  { text: "Mejora de Infraestructura en Centros Comunitarios para mayor Resiliencia", doc: "DOC-07", icon: "building-arch" },
  { text: "Microrredes de Energía", doc: "DOC-09", icon: "solar-panel" },
  { text: "Actualización de la Infraestructura de Aguas Pluviales", doc: "DOC-07", icon: "engine" },
  { text: "Protección de Viviendas contra Inundaciones", doc: "DOC-01", icon: "home" },
  { text: "Ejecución del Plan de Mitigación", doc: "DOC-07", icon: "circle-check" },
  { text: "Capacitación General sobre Riesgos", doc: "DOC-07", icon: "school" },
  { text: "Drenaje de Aguas Pluviales en Puerto Viejo", doc: "DOC-07", icon: "wave-sine" },
  { text: "Parques de Bolsillo en Lotes Baldíos", doc: "DOC-03", icon: "trees" },
  { text: "Ayuda a Familias de Bajos Ingresos para Mejorar sus Hogares", doc: "DOC-11", icon: "heart-handshake" },
  { text: "Mantenimiento, Actualización y Señalización de Rutas de Evacuación", doc: "DOC-06", icon: "route-alt" },
  { text: "Capacidad de Difundir Planes de Evacuación en Caso de Desastre", doc: "DOC-06", icon: "megaphone" },
  { text: "Identificar Edificios como Centros de Resiliencia", doc: "DOC-09", icon: "building-skyscraper" },
  { text: "Establecer Rutas Viales Primarias y Alternativas Seguras para Emergencias", doc: "DOC-06", icon: "road" },
  { text: "Establecer Alianzas Gubernamentales y Privadas para Servicios Básicos en Emergencias", doc: "DOC-06", icon: "handshake" },
  { text: "Validar Planes Operativos de Emergencia mediante Simulacros Multigubernamentales", doc: "DOC-06", icon: "list-check" },
  { text: "Simulacros de Preparación", doc: "DOC-06", icon: "ambulance" },
  { text: "Rescate de la Escuela Eugenio María de Hostos para Refugio", doc: "DOC-11", icon: "tent" },
  { text: "Rehabilitar Estaciones de Bombeo y Mejorar Drenajes", doc: "DOC-01", icon: "droplet" },
  { text: "Habilitar Lugares Seguros y Accesibles como Refugios Equipados", doc: "DOC-06", icon: "shield-check" },
  { text: "Organizar Comunidades para Respuesta ante Desastres Naturales a Gran Escala", doc: "DOC-06", icon: "users" },
  { text: "Fomentar Botiquines de Primeros Auxilios Accesibles por Familia", doc: "DOC-06", icon: "first-aid-kit" },
  { text: "Establecer Alianzas con Entidades Locales para Planes de Emergencia Inclusivos", doc: "DOC-06", icon: "users-group" },
  { text: "Desarrollar Plan de Emergencia para Evacuación de Adultos Mayores y Poblaciones Vulnerables", doc: "DOC-12", icon: "accessible" },
  { text: "Alianzas Intersectoriales para Garantizar Servicios Básicos durante Emergencias", doc: "DOC-06", icon: "lifebuoy" },
  { text: "Establecer Rutas Viales Seguras y Efectivas para Respuesta Rápida", doc: "DOC-06", icon: "map" },
  { text: "Mantener, Actualizar y Señalizar Rutas de Evacuación", doc: "DOC-10", icon: "sign-right" },
  { text: "Realizar Simulacros para Garantizar la Preparación", doc: "DOC-06", icon: "alert-triangle" },
  { text: "Educar a Ciudadanos sobre su Rol Activo en Planificación y Respuesta ante Desastres", doc: "DOC-06", icon: "device-tv" },
  { text: "Calidad del Agua y Señalización", doc: "DOC-05", icon: "wash-hands" },
  { text: "Suministro de Medicamentos durante Emergencias (Alianzas)", doc: "DOC-07", icon: "vaccine" },
  { text: "Mapa Interactivo de Salud y Cultura", doc: "DOC-07", icon: "box" },
  { text: "Iniciativas de Educación sobre Emociones y Estrés", doc: "DOC-07", icon: "brain" },
  { text: "Capacitación Municipal sobre Contaminación del Sistema de Agua", doc: "DOC-04", icon: "droplet" },
  { text: "Ordenanza de Regulación de Aguas Residuales", doc: "DOC-04", icon: "file-certificate" },
  { text: "Alianzas de Servicios de Emergencia", doc: "DOC-06", icon: "badge" },
  { text: "Reparación de Infraestructura Sanitaria", doc: "DOC-07", icon: "tools" },
  { text: "Plan de Adaptación de Infraestructura (Salud, Educación)", doc: "DOC-02", icon: "building" },
  { text: "Crear una red de apoyo vecinal para promover la comunicación y monitorear población vulnerable antes, durante y después de emergencias. La red tendrá un doble propósito: establecer un sistema efectivo de comunicación y organizar el acompañamiento y monitoreo de las personas más vulnerables", doc: "DOC-10", icon: "heart-handshake" },
  { text: "Establecer un Plan de Respuesta Comunitaria ante emergencias, con puntos de encuentro, contactos clave, capacitación de primeros auxilios y protocolos incluyendo ciclos de simulacros de emergencia tomando en consideración a personas mayores y con movilidad reducida", doc: "DOC-10", icon: "list-check" },
  { text: "Establecer un mecanismo organizacional para darle seguimiento a las nuevas iniciativas de resiliencia comunitaria y atender nuevas. La comunidad enfrenta riesgos severos como inundaciones, tsunamis, terremotos y el deterioro de infraestructura esencial, lo cual requiere una respuesta planificada y continua.", doc: "DOC-10", icon: "clipboard-data" },
  { text: "Realizar un registro voluntario para identificar los recursos disponibles entre los vecinos, así como las vulnerabilidades en las viviendas y las necesidades particulares en la población. Permitirá conocer fortalezas como habilidades especializadas y equipos disponibles.", doc: "DOC-10", icon: "clipboard-list" },
  { text: "Revisar y abogar por la actualización de las rutas de desalojo, la señalización de la ruta y el sistema de alarma oficial en caso de eventos de emergencias. Permitirá identificar y corregir deficiencias, mejorar la visibilidad de las rutas y asegurar su accesibilidad.", doc: "DOC-10", icon: "sign-right" }
];

const planesData = [
  { id: "DOC-01", title: "Conceptos de Planificación de Recuperación para La Playa de Ponce", org: "Community Planning Assistance Team", date: "Sept. 2021", link: "https://www.planning.org/publications/document/9222622/", icon: "building-community" },
  { id: "DOC-02", title: "Estrategia Integral de Desarrollo Económico (SPREDD-CEDS 2021)", org: "Titín Foundation", date: "Julio 2021", link: "https://titinpr.org/", icon: "chart-bar" },
  { id: "DOC-03", title: "Proyecto de Asistencia Técnica Playa de Ponce", org: "ICF & Van Meter Williams Pollack", date: "Marzo 2023", link: null, icon: "clipboard-text" },
  { id: "DOC-04", title: "NPDES Annual Report/ Phase II MS4 Permit", org: "Autonomous Municipality of Ponce", date: "2023", link: "https://storymaps.arcgis.com/stories/28793a459d42469689c65d889c94dedb", icon: "droplet" },
  { id: "DOC-05", title: "Plan Resiliencia Costera, Proyecto VIDA Costera", org: "Un Nuevo Amanecer, Inc.", date: "Enero 2025", link: "https://www.canva.com/design/DAGewe4UPnU/uAXw0yVDGlFubO7rTMu6ig/view?", icon: "leaf" },
  { id: "DOC-06", title: "Plan de Mitigación contra Peligros Naturales", org: "Junta de Planificación de Puerto Rico", date: "Julio 2021", link: "https://www.jp.pr.gov/planificacion-fisica?tab=mitigacion#tab-section1", icon: "shield-check" },
  { id: "DOC-07", title: "Ponce Restart: Plan de recuperación municipal", org: "Municipio Autónomo de Ponce", date: "Diciembre 2023", link: "https://poncerestart.com/", icon: "reload" },
  { id: "DOC-08", title: "Ruta Borinquen: Playa de Ponce", org: "Plusurbia Design", date: "2023", link: "https://www.rutaborinquen.org/", icon: "map-2" },
  { id: "DOC-09", title: "Strategic Energy Plan: Playa de Ponce", org: "National Laboratory of the Rockies", date: "Febrero 2026", link: "https://www.nlr.gov/docs/fy26osti/96824.pdf", icon: "bolt" },
  { id: "DOC-10", title: "Whole Communities Resilient Planning Project Draft", org: "WCRP", date: "Borrador", link: "https://drive.google.com/file/d/1l_RAxZwpxpDDzoMtctShqitrmlpDruL3/view?usp=drive_link", icon: "users" },
  { id: "DOC-12", title: "Whole Communities Resilient Planning Project (El Tuque)", org: "WCRP", date: "Borrador", link: "https://recuperacion.pr.gov/wcrp/assets/planes/2025-03-13_PLN_WCRP_CRP_El_Tuque_vfinal.pdf", icon: "home-ribbon" }
];

function getCategoryColor(doc) {
  if (["DOC-03", "DOC-04", "DOC-05"].includes(doc)) return "bg-primary-container text-on-primary-container"; 
  if (["DOC-01", "DOC-07", "DOC-09"].includes(doc)) return "bg-secondary-container text-on-secondary-container"; 
  if (["DOC-02", "DOC-06", "DOC-10", "DOC-11", "DOC-12"].includes(doc)) return "bg-tertiary-container text-on-tertiary-container"; 
  return "bg-surface-variant text-on-surface-variant";
}

function openPlanModal(docId) {
  const plan = planesData.find(p => p.id === docId);
  if (!plan) return;

  const strategies = estrategiasData.filter(e => e.doc === docId);
  let strategiesHtml = '';
  if (strategies.length > 0) {
    strategiesHtml = strategies.map(s => {
      const color = getCategoryColor(s.doc);
      return `
        <div class="flex items-start gap-4 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
          <div class="w-12 h-12 shrink-0 rounded-lg ${color} flex items-center justify-center">
            <i class="ti ti-${s.icon} text-[24px]"></i>
          </div>
          <p class="font-body-md text-on-surface font-medium">${s.text}</p>
        </div>
      `;
    }).join('');
  } else {
    strategiesHtml = '<p class="text-on-surface-variant italic p-4">No hay estrategias extraídas de este plan específicas para Raíces Costeras.</p>';
  }

  let buttonHtml = '';
  if (plan.link) {
    buttonHtml = `
      <a href="${plan.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-md uppercase tracking-wider hover:bg-primary-fixed-dim transition-colors shadow-md mt-6">
        <i class="ti ti-download"></i>
        Descargar Plan
      </a>
    `;
  }

  const modalHtml = `
    <div id="plan-modal" class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-8">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" onclick="closePlanModal()"></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-3xl max-h-full bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="p-6 md:p-8 border-b border-outline-variant/30 flex justify-between items-start gap-4 bg-surface-container-low">
          <div class="flex-grow pr-4">
            <span class="inline-block px-3 py-1 mb-3 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm uppercase tracking-wider">
              ${plan.id} &bull; ${plan.date}
            </span>
            <h2 class="font-pt-serif text-2xl md:text-3xl text-primary font-bold leading-tight">${plan.title}</h2>
            <p class="text-on-surface-variant mt-2 font-body-md">${plan.org}</p>
            ${buttonHtml}
          </div>
          <button onclick="closePlanModal()" class="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-colors text-on-surface-variant">
            <i class="ti ti-x text-[24px]"></i>
          </button>
        </div>
        
        <!-- Body -->
        <div class="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-grow bg-surface-container-lowest">
          <h3 class="font-headline-sm text-xl text-on-surface font-bold mb-4 border-b border-outline-variant/30 pb-2">
            Estrategias Obtenidas
          </h3>
          <div class="flex flex-col gap-3">
            ${strategiesHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  const existingModal = document.getElementById('plan-modal');
  if (existingModal) existingModal.remove();

  document.body.insertAdjacentHTML('beforeend', modalHtml);
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

window.closePlanModal = function() {
  const modal = document.getElementById('plan-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

const pages = {};

window.currentRoute = "inicio";

function initRouter() {
  // Bind all nav links with data-route attribute
  const navLinks = document.querySelectorAll("a[data-route], button[data-route]");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      navigateTo(route);
    });
  });

  // Handle back/forward buttons
  window.addEventListener("popstate", (e) => {
    const route = e.state?.route || "inicio";
    navigateTo(route, false);
  });

  // Initial load
  const hash = window.location.hash.replace("#", "") || "inicio";
  navigateTo(hash, false);
}

function navigateTo(route, pushState = true) {
  window.currentRoute = route;
  window.location.hash = route;
  
  if (pushState) {
    history.pushState({ route }, "", `#${route}`);
  }

  // Update active states on sidebar/header links
  const navLinks = document.querySelectorAll("a[data-route]");
  navLinks.forEach(link => {
    const linkRoute = link.getAttribute("data-route");
    if (linkRoute === route) {
      link.classList.add("nav-link-active");
    } else {
      link.classList.remove("nav-link-active");
    }
  });

  // Render Page Content
  const container = document.getElementById("main-content-container");
  if (!container) return;

  // Render template
  const targetPages = window.currentLang === 'en' ? (window.pagesEN || pages) : pages;
  if (typeof targetPages[route] === "function") {
    container.innerHTML = targetPages[route]();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Initialize page-specific scripts
    initPageScripts(route);
  } else {
    // Fallback to home
    navigateTo("inicio");
  }
}

function initPageScripts(route) {
  if (route === "datos") {
    initDatosPage();
  } else if (route === "mapas") {
    initMapasPage();
  } else if (route === "guia") {
    initGuiaPage();
  } else if (route === "inicio") {
    initInicioPage();
  }
}

// ==========================================
// 4. Page View Templates
// ==========================================


// --- SOBRE-PROYECTO PAGE ---
pages['sobre-proyecto'] = () => {
  return `
<header class="mb-12">
  <h1 class="font-headline-md text-headline-md text-primary mb-4">Sobre el Proyecto Raíces Costeras</h1>
  <p class="text-on-surface-variant max-w-prose text-lg leading-relaxed">
    Raíces Costeras es una iniciativa comunitaria que une a residentes, planificadores urbanos e historiadores culturales para construir resiliencia climática en el barrio La Playa de Ponce.
  </p>
</header>

<section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
  <div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-4 shadow-sm">
    <div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-primary-fixed/30 rounded-full text-primary">
        <i class="ti ti-mountain"></i>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-primary">Nuestra Visión</h3>
    </div>
    <p class="text-on-surface-variant">
      Crear una comunidad costera que combine la preservación del patrimonio histórico con estrategias innovadoras de adaptación climática, donde cada residente sea agente de cambio para un futuro más seguro y sostenible.
    </p>
  </div>

  <div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-4 shadow-sm">
    <div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-secondary-fixed/30 rounded-full text-secondary">
        <i class="ti ti-users-group"></i>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-primary">Nuestra Misión</h3>
    </div>
    <p class="text-on-surface-variant">
      Empoderar a los residentes del barrio La Playa de Ponce con herramientas, conocimiento y recursos para enfrentar los retos del cambio climático, las emergencias costeras y la preservación de su identidad cultural.
    </p>
  </div>
</section>

<section class="mb-16">
  <h2 class="font-headline-sm text-headline-sm text-primary mb-6">Ejes de Trabajo</h2>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div class="bg-primary-fixed/20 border border-outline-variant/20 rounded-xl p-5 text-center flex flex-col items-center gap-3">
      <i class="ti text-3xl text-primary ti-activity"></i>
      <h4 class="font-body-md text-body-md font-semibold text-primary">Resiliencia y Datos</h4>
      <p class="text-on-surface-variant text-sm">Mapeo de riesgos, datos comunitarios y visualización geoespacial.</p>
    </div>
    <div class="bg-secondary-fixed/20 border border-outline-variant/20 rounded-xl p-5 text-center flex flex-col items-center gap-3">
      <i class="ti text-3xl text-secondary ti-tools"></i>
      <h4 class="font-body-md text-body-md font-semibold text-primary">Planificación</h4>
      <p class="text-on-surface-variant text-sm">Planes existentes, herramientas, estrategias de adaptación y criterios de priorización.</p>
    </div>
    <div class="bg-tertiary-fixed/20 border border-outline-variant/20 rounded-xl p-5 text-center flex flex-col items-center gap-3">
      <i class="ti text-3xl text-tertiary ti-ambulance"></i>
      <h4 class="font-body-md text-body-md font-semibold text-primary">Preparación y Respuesta</h4>
      <p class="text-on-surface-variant text-sm">Guías de preparación, rutas de evacuación, puntos de encuentro y contactos de emergencia.</p>
    </div>
  </div>
</section>

<section class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 mb-8">
  <h2 class="font-headline-sm text-headline-sm text-primary mb-3">Organizaciones Involucradas</h2>
  <p class="text-on-surface-variant mb-4">
    Este proyecto es posible gracias a la colaboración entre organizaciones comunitarias, académicas y gubernamentales comprometidas con la resiliencia costera.
  </p>
  <div class="flex flex-wrap gap-3">
    <span class="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-sm font-semibold">Un Nuevo Amanecer, Inc.</span>
    <span class="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-semibold">Comité de Asesores Comunitarios</span>
    <span class="px-4 py-2 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-semibold">CAC La Playa</span>
  </div>
</section>
  `;
};

// --- ENCUESTA PAGE ---
pages['encuesta'] = () => {
  return `
<header class="mb-12">
  <h1 class="font-headline-md text-headline-md text-primary mb-4">Llena la Encuesta</h1>
  <p class="text-on-surface-variant max-w-prose text-lg leading-relaxed">
    Tu opinión es vital para el desarrollo de este proyecto. Ayúdanos a comprender las necesidades de la comunidad completando esta breve encuesta sobre resiliencia costera.
  </p>
</header>

<section class="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 mb-8 text-center flex flex-col items-center gap-6">
  <div class="w-20 h-20 rounded-full bg-secondary-fixed/30 flex items-center justify-center">
    <i class="ti text-5xl text-secondary ti-clipboard-list"></i>
  </div>
  <h2 class="font-headline-sm text-headline-sm text-primary">Encuesta Comunitaria 2026</h2>
  <p class="text-on-surface-variant max-w-md">
    La encuesta toma aproximadamente 10 minutos. Tus respuestas son confidenciales y nos ayudan a priorizar las acciones del proyecto.
  </p>
  <div class="flex flex-wrap gap-3 justify-center">
    <span class="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-semibold uppercase tracking-wider">~10 minutos</span>
    <span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-semibold uppercase tracking-wider">Confidencial</span>
    <span class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-semibold uppercase tracking-wider">Español</span>
  </div>
  <a href="#" class="mt-4 inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-headline-sm text-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-lg">
    <i class="ti ti-external-link"></i>
    Comenzar Encuesta
  </a>
</section>

<section class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
  <h3 class="font-body-md font-semibold text-primary mb-2">¿Por qué es importante tu participación?</h3>
  <p class="text-on-surface-variant text-sm">
    Los datos recopilados se utilizan para identificar prioridades, diseñar estrategias de adaptación y gestionar recursos de manera efectiva. Cada respuesta cuenta para construir un barrio más resiliente.
  </p>
</section>
  `;
};

// --- CONTACTOS PAGE ---
pages['contactos'] = () => {
  return `
<header class="mb-12">
  <h1 class="font-headline-md text-headline-md text-primary mb-4">Contactos de Emergencia</h1>
  <p class="text-on-surface-variant max-w-prose text-lg leading-relaxed">
    Mantén esta información a la mano. Estos son los contactos esenciales para antes, durante y después de una emergencia en La Playa de Ponce.
  </p>
</header>

<section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div class="relative overflow-hidden rounded-xl bg-error-container/20 border border-error-container p-6 flex flex-col gap-3">
    <div class="absolute top-0 left-0 w-full h-1 bg-error"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-error-container rounded-full">
        <i class="ti text-error ti-ambulance"></i>
      </div>
      <div>
        <h3 class="font-body-md font-bold text-on-surface">Sistema de Emergencias 9-1-1</h3>
        <p class="text-error font-semibold text-lg">9-1-1</p>
      </div>
    </div>
    <p class="text-on-surface-variant text-sm">Policía, Bomberos, Ambulancia — Línea principal para cualquier emergencia inmediata.</p>
  </div>

  <div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-3">
    <div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-secondary-fixed/30 rounded-full">
        <i class="ti text-secondary ti-flame"></i>
      </div>
      <div>
        <h3 class="font-body-md font-bold text-on-surface">Manejo de Emergencias Municipal</h3>
        <p class="text-secondary font-semibold">(787) 284-4141</p>
      </div>
    </div>
    <p class="text-on-surface-variant text-sm">Oficina de Manejo de Emergencias del Municipio de Ponce.</p>
  </div>

  <div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-3">
    <div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-primary-fixed/30 rounded-full">
        <i class="ti text-primary ti-shield"></i>
      </div>
      <div>
        <h3 class="font-body-md font-bold text-on-surface">Defensa Civil</h3>
        <p class="text-primary font-semibold">(787) 724-0124</p>
      </div>
    </div>
    <p class="text-on-surface-variant text-sm">Agencia Estatal para el Manejo de Emergencias y Administración de Desastres (AEMEAD).</p>
  </div>

  <div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-3">
    <div class="absolute top-0 left-0 w-full h-1 bg-tertiary-fixed-dim"></div>
    <div class="flex items-center gap-3">
      <div class="p-3 bg-tertiary-fixed/30 rounded-full">
        <i class="ti text-tertiary ti-droplet"></i>
      </div>
      <div>
        <h3 class="font-body-md font-bold text-on-surface">Cruz Roja Americana</h3>
        <p class="text-tertiary font-semibold">(787) 758-8150</p>
      </div>
    </div>
    <p class="text-on-surface-variant text-sm">Capítulo de Puerto Rico — Asistencia en refugios, primeros auxilios y recuperación.</p>
  </div>
</section>

<section class="bg-surface-container-low rounded-xl p-6 border border-outline-variant/20">
  <h3 class="font-body-md font-semibold text-primary mb-3 flex items-center gap-2">
    <i class="ti ti-heart-handshake"></i>
    Contacto del Proyecto
  </h3>
  <p class="text-on-surface-variant text-sm mb-2">
    Para información sobre el proyecto Raíces Costeras y las actividades del Comité de Asesores Comunitarios (CAC):
  </p>
  <p class="text-primary font-semibold">Un Nuevo Amanecer, Inc.</p>
  <p class="text-on-surface-variant text-sm">Barrio La Playa, Ponce, Puerto Rico</p>
</section>
  `;
};

// --- CRITERIOS PAGE ---
pages['criterios'] = () => {
  return `
<header class="mb-12">
<h1 class="font-headline-xl text-headline-xl text-primary pt-serif-text mb-4">Criterios de Priorización</h1>
<p class="text-on-surface-variant max-w-prose text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
</header>
<section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
<!-- Glassmorphism Card 1: Vulnerabilidad Socioeconómica -->
<div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-4 shadow-[0_24px_60px_-15px_rgba(22,40,57,0.04)]">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
<div class="flex items-center gap-3">
<div class="p-3 bg-secondary-container/20 rounded-full text-secondary">
<i class="ti ti-users-group" data-icon="ti-users-group" data-weight="fill"></i>
</div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary pt-serif-text">Vulnerabilidad Socioeconómica</h3>
</div>
<p class="text-on-surface-variant">
                    Evaluamos la capacidad de respuesta de las comunidades ante eventos climáticos, considerando factores como el acceso a servicios básicos, niveles de ingresos y densidad poblacional. Las áreas con menor resiliencia económica reciben mayor prioridad de intervención.
                </p>
<div class="mt-auto flex flex-wrap gap-2 pt-4">
<span class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Ingresos</span>
<span class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Infraestructura</span>
<span class="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Demografía</span>
</div>
</div>
<!-- Glassmorphism Card 2: Exposición Física -->
<div class="relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-6 flex flex-col gap-4 shadow-[0_24px_60px_-15px_rgba(22,40,57,0.04)]">
<div class="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
<div class="flex items-center gap-3">
<div class="p-3 bg-tertiary-container/10 rounded-full text-tertiary-container">
<i class="ti ti-ripple" data-icon="ti-ripple" data-weight="fill"></i>
</div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary pt-serif-text">Exposición Física</h3>
</div>
<p class="text-on-surface-variant">
                    Análisis topográfico y geoespacial para determinar el nivel de riesgo directo por inundaciones, erosión costera y aumento del nivel del mar. Se priorizan las zonas con mayor probabilidad de impacto físico a corto y mediano plazo.
                </p>
<div class="mt-auto flex flex-wrap gap-2 pt-4">
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Topografía</span>
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Erosión</span>
<span class="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-label-sm uppercase tracking-wider">Nivel del Mar</span>
</div>
</div>
</section>
<!-- Data Visualization Placeholder Area -->
<section class="mb-16 bg-surface-container-low rounded-xl p-6 border border-outline-variant/20 flex flex-col items-center justify-center text-center h-64">
<i class="ti text-4xl text-outline mb-2 ti-activity" data-icon="ti-activity"></i>
<p class="text-on-surface-variant font-label-sm uppercase tracking-widest">Visualización de Matriz de Riesgo</p>
</section>
  `;
};


// --- ESCENARIOS PAGE ---
pages['escenarios'] = () => {
  return `
<!-- Header Section -->
<section class="flex flex-col gap-4">
<div class="inline-flex items-center gap-2 bg-error-container text-on-error-container font-label-sm text-label-sm px-3 py-1 rounded-full w-max">
<i class="ti text-[16px] ti-alert-triangle-filled" data-icon="ti-alert-triangle-filled" data-weight="fill"></i>
                ALERTA &amp; PREPARACIÓN
            </div>
<h1 class="font-headline-xl text-headline-xl text-primary leading-tight">
                Escenarios y Rutas de Evacuación
            </h1>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Conoce las rutas seguras y los puntos de encuentro comunitarios en caso de inundaciones o marejadas ciclónicas para proteger a tu familia y comunidad.
            </p>
</section>
<!-- Routes Grid (Bento/Card Layout) -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<!-- Primary Evacuation Route Card -->
<article class="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden relative shadow-[0_24px_48px_-12px_rgba(22,40,57,0.04)] flex flex-col">
<!-- Top Accent Strip -->
<div class="h-1 w-full bg-secondary-container"></div>
<!-- Map Snippet -->
<div class="w-full aspect-[1.49] bg-surface-variant relative overflow-hidden group">
<img alt="Map snippet showing safe evacuation routes in Ponce Playa" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/AP1WRLsi4XGpYirkFqHuGGDvd9GKDabxAXwCOB2uxauv57H380y0Jg7Vv-IhS8t1lWGfhFAo1WPhKjdmgCut9WL3CFOxLgmqVDd6088z_6mmhnFSV18N8S1C5EjSfHlwZi7Rms5ZVch79_yJC5oOVAtDufz7YFEOSRHWulX6z5pgyvn_6whGRwFnZBTx4DQ6Y4-PPOaASJFo9a5Pi1cNaIHyfHWwk4HQrFYimZiPzPMUo7-fyJ1Q7SFwIDwtfw"/>
<div class="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-outline-variant/20 shadow-sm flex items-center gap-2">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary-container"></span>
<span class="font-label-sm text-label-sm text-primary">Ruta Principal Activa</span>
</div>
</div>
<div class="p-6 flex flex-col gap-4 flex-1">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Zona A: Costera Baja</h3>
<p class="font-body-md text-body-md text-on-surface-variant flex-1">
                        Esta ruta conecta directamente con el refugio primario en terreno elevado. Utilice esta vía si se encuentra al sur de la Avenida Central. Siga la señalización verde instalada a lo largo del trayecto.
                    </p>
<div class="flex items-center gap-4 pt-2 border-t border-outline-variant/20">
<div class="flex items-center gap-2 text-on-surface">
<i class="ti text-outline ti-walk" data-icon="ti-walk"></i>
<span class="font-label-sm text-label-sm">15 min</span>
</div>
<div class="flex items-center gap-2 text-on-surface">
<i class="ti text-outline ti-users" data-icon="ti-users"></i>
<span class="font-label-sm text-label-sm">Capacidad: 250</span>
</div>
</div>
<button class="mt-2 w-full bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary font-label-sm text-label-sm py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                        Ver Detalles de Ruta
                        <i class="ti text-[18px] ti-arrow-right" data-icon="ti-arrow-right"></i>
</button>
</div>
</article>
<!-- Secondary Info Cards -->
<div class="flex flex-col gap-gutter">
<article class="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 flex flex-col gap-3">
<div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-2">
<i class="ti ti-droplet-filled" data-icon="ti-droplet-filled" data-weight="fill"></i>
</div>
<h4 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Niveles de Inundación</h4>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Conozca la diferencia entre alertas amarillas y rojas. Los mapas de riesgo detallan hasta dónde podría llegar el agua en diferentes escenarios climáticos severos.
                    </p>
</article>
<article class="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 flex flex-col gap-3">
<div class="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-2">
<i class="ti ti-home-2" data-icon="ti-home-2" data-weight="fill"></i>
</div>
<h4 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Puntos de Encuentro</h4>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Lugares preestablecidos por el Comité de Asesores Comunitarios (CAC) con suministros de emergencia y comunicación satelital directa.
                    </p>
</article>
</div>
</section>
  `;
};


// --- ESTRATEGIAS PAGE ---





pages['estrategias'] = () => {
  const cardsHtml = estrategiasData.map(item => {
    const categoryColor = getCategoryColor(item.doc);
    return `
      <article class="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-lg transition-all p-8 md:p-10 flex flex-col gap-6 items-start min-h-[300px] justify-center" data-doc="${item.doc}">
        <div class="w-20 h-20 shrink-0 rounded-2xl ${categoryColor} flex items-center justify-center">
          <i class="ti ti-${item.icon} text-[48px]"></i>
        </div>
        <h3 class="font-pt-serif text-2xl md:text-3xl text-on-surface font-bold leading-snug">${item.text}</h3>
      </article>
    `;
  }).join('');

  return `
    <div class="w-full max-w-7xl mx-auto px-margin-mobile md:px-section-gap py-8 md:py-12">
      <header class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full mb-4">
          <i class="ti ti-route-alt text-sm"></i>
          <span class="font-label-sm text-label-sm uppercase tracking-wider">Planificación Activa</span>
        </div>
        <h2 class="font-headline-xl text-4xl md:text-5xl text-primary font-bold leading-tight mb-4 font-pt-serif">Estrategias de Adaptación</h2>
        <p class="font-body-md text-on-surface-variant leading-relaxed text-lg md:text-xl max-w-3xl">
          Explora las diversas estrategias y proyectos propuestos para mejorar la resiliencia y seguridad de nuestra comunidad.
        </p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        ${cardsHtml}
      </div>
    </div>
  `;
};


// --- HERRAMIENTAS PAGE ---
pages['herramientas'] = () => {
  return `
<!-- Header Section -->
<section class="space-y-4">
<div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full mb-2">
<i class="ti text-sm ti-barrier-block"></i>
<span class="font-label-sm text-label-sm uppercase tracking-wider">Planificación Activa</span>
</div>
<h2 class="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-primary font-bold leading-tight">
                Herramientas de Planificación
            </h2>
<p class="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
</section>
<!-- Bento Grid: Interactive Tools -->
<section class="grid grid-cols-1 md:grid-cols-12 gap-6">
<!-- Tool 1: Risk Calculator (Featured) -->
<div class="col-span-1 md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden relative group hover:shadow-2xl transition-all duration-300 ease-in-out">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
<div class="p-6 md:p-8 flex flex-col md:flex-row gap-6 h-full">
<div class="flex-1 space-y-4">
<div class="h-12 w-12 bg-secondary-container/20 text-secondary-container rounded-lg flex items-center justify-center mb-2">
<i class="ti text-3xl ti-calculator"></i>
</div>
<h3 class="font-headline-lg text-headline-lg-mobile text-on-surface font-semibold">Calculadora de Riesgo Inmobiliario</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                            Evalúe la vulnerabilidad estructural de su propiedad frente a marejadas y erosión costera basándose en datos históricos.
                        </p>
<div class="pt-4 mt-auto">
<button class="bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim font-label-sm text-label-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-full md:w-auto justify-center font-semibold">
                                Iniciar Evaluación
                                <i class="ti text-sm ti-arrow-right"></i>
</button>
</div>
</div>
<div class="w-full md:w-1/3 bg-surface-container-low rounded-lg p-4 flex flex-col justify-center items-center border border-outline-variant/20 relative overflow-hidden">
<!-- Decorative graphic placeholder for calculator -->
<div class="w-24 h-24 rounded-full border-4 border-secondary-container/30 border-t-secondary-container animate-[spin_10s_linear_infinite] absolute -right-4 -top-4 opacity-50"></div>
<i class="ti text-6xl text-outline-variant mb-2 z-10 ti-chart-bar"></i>
<span class="font-label-sm text-label-sm text-outline z-10 text-center">Datos actualizados: Oct 2023</span>
</div>
</div>
</div>
<!-- Tool 2: Resource Checklist -->
<div class="col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 relative hover:shadow-xl transition-all duration-300 flex flex-col">
<div class="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
<div class="flex justify-between items-start mb-4">
<div class="h-10 w-10 bg-tertiary-container/10 text-tertiary-container rounded-lg flex items-center justify-center">
<i class="ti ti-list-check"></i>
</div>
<span class="px-2 py-1 bg-tertiary-container/10 text-tertiary-container font-label-sm text-[10px] rounded uppercase">Descargable</span>
</div>
<h3 class="font-headline-lg text-xl text-on-surface font-semibold mb-2">Lista de Verificación</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-6 flex-1 text-sm">
                    Materiales y documentos esenciales para asegurar su hogar antes de la temporada de huracanes.
                </p>
<div class="space-y-3">
<div class="flex items-center gap-3 p-2 bg-surface-container-low rounded border border-outline-variant/10">
<i class="ti text-primary text-sm ti-checkbox"></i>
<span class="font-label-sm text-label-sm text-on-surface">Suministros Básicos</span>
</div>
<div class="flex items-center gap-3 p-2 bg-surface-container-low rounded border border-outline-variant/10">
<i class="ti text-outline text-sm ti-square"></i>
<span class="font-label-sm text-label-sm text-on-surface-variant">Documentos Críticos</span>
</div>
</div>
<button class="mt-6 border border-tertiary-container text-tertiary-container hover:bg-tertiary-container/5 font-label-sm text-label-sm px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors w-full">
<i class="ti text-sm ti-download"></i>
                    Descargar PDF
                </button>
</div>
<!-- Tool 3: Community Mapping Form -->
<div class="col-span-1 md:col-span-6 bg-primary border border-outline-variant/20 rounded-xl p-6 md:p-8 text-on-primary relative overflow-hidden group">
<!-- Abstract background pattern -->
<div class="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div class="relative z-10 flex flex-col h-full">
<div class="h-12 w-12 bg-on-primary/10 rounded-lg flex items-center justify-center mb-4 border border-on-primary/20">
<i class="ti text-on-primary ti-map-pin-edit"></i>
</div>
<h3 class="font-headline-lg text-headline-lg-mobile text-on-primary font-semibold mb-3">Mapeo Participativo</h3>
<p class="font-body-md text-body-md text-primary-fixed-dim mb-8 flex-1">
                        Reporte áreas de inundación recurrente, infraestructura dañada o puntos de encuentro no oficiales en su vecindario para actualizar el mapa maestro.
                    </p>
<button class="bg-on-primary text-primary hover:bg-primary-fixed font-label-sm text-label-sm px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-fit font-semibold">
                        Abrir Formulario
                        <i class="ti text-sm ti-external-link"></i>
</button>
</div>
</div>
<!-- Tool 4: Structural Guidance (Glassmorphism inspired) -->
<div class="col-span-1 md:col-span-6 rounded-xl p-6 relative flex flex-col justify-end min-h-[250px] border border-outline-variant/30 overflow-hidden">
<!-- Image Background -->
<div class="absolute inset-0 z-0">
<img alt="Blueprint over wood table" class="w-full h-full object-cover opacity-20 filter grayscale" data-alt="A close-up view of architectural blueprints spread out on a warm, weathered wooden table. The scene is illuminated by bright, natural sunlight evoking a coastal morning, reflecting a modern light-mode aesthetic. A brass compass and a yellow pencil rest on the plans, emphasizing planning and structural integrity. The color palette focuses on crisp whites, heritage navy lines of the blueprint, and natural wood tones, conveying professional heritage preservation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvpN0-SpgEl1RvTNVy_TC3Whnw7cO49XBEE-8v0Y7LD5zDYFFsznWyzZ3MsLZ8qRChz1M5zwnXcZbfsEX7N83EsLiOVANr4GBQXlL7GxR3fbfsdTcQpr1RiDQH-xqA15Mf0NHWTCcXqfA5b8IwhBDHPVqZgW7lKoGvMr920m2qAfJDS0nOgPZvtoq8C9cyUGPBh_vMpIKbTuzKtOw9YMsTVKZ9d5MDhHOXEzO4znutxcJr8Vh9W6Ux2P3mhHVMMWq9g1guZiqDhNM"/>
</div>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-0"></div>
<div class="relative z-10 space-y-3">
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-highest/80 backdrop-blur-sm text-on-surface rounded-md border border-outline-variant/30 w-fit">
<i class="ti text-[14px] ti-tools"></i>
<span class="font-label-sm text-[10px] uppercase font-bold tracking-widest">Guía Constructiva</span>
</div>
<h3 class="font-headline-lg text-xl text-on-surface font-bold">Refuerzo Estructural Vernáculo</h3>
<p class="font-body-md text-sm text-on-surface-variant max-w-sm">
                        Catálogo interactivo de técnicas de carpintería tradicional adaptadas para resistencia a vientos huracanados.
                    </p>
<a class="inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-sm text-label-sm pt-2 transition-colors underline underline-offset-4" href="#">
                        Explorar Catálogo <i class="ti text-[16px] ti-arrow-narrow-right"></i>
</a>
</div>
</div>
</section>
  `;
};


// --- PARTICIPACION PAGE ---
pages['participacion'] = () => {
  return `
<!-- Header Section -->
<section class="flex flex-col gap-4">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Participación Ciudadana</h2>
<p class="text-on-surface-variant">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</section>
<!-- Survey Card (Primary CTA) -->
<section class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 soft-shadow overflow-hidden relative">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
<div class="p-6 flex flex-col gap-4 relative z-10">
<div class="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-on-secondary-container mb-2">
<i class="ti text-2xl ti-clipboard-list"></i>
</div>
<div>
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary text-[24px] mb-2">Llena la Encuesta</h3>
<p class="text-on-surface-variant mb-6">Tu opinión es vital para el desarrollo de nuestro proyecto costero. Ayúdanos a entender las necesidades de la comunidad.</p>
</div>
<button class="w-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm py-4 rounded-lg hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2 uppercase tracking-widest shadow-sm">
                    Comenzar Encuesta
                    <i class="ti text-sm ti-arrow-right"></i>
</button>
</div>
<!-- Decorative background element -->
<div class="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-container/10 rounded-full blur-2xl pointer-events-none"></div>
</section>
<!-- Events/Participa Section -->
<section class="flex flex-col gap-6">
<div class="flex items-center justify-between">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary text-[24px]">Participa</h3>
<span class="bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm px-3 py-1 rounded-full uppercase">Talleres</span>
</div>
<div class="flex flex-col gap-4">
<!-- Event Card 1 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 soft-shadow p-4 flex gap-4 items-start relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-fixed"></div>
<div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-16 rounded-lg text-primary flex-shrink-0">
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant">Oct</span>
<span class="font-headline-lg-mobile text-headline-lg-mobile text-[24px] leading-none">12</span>
</div>
<div class="flex flex-col flex-grow">
<h4 class="font-body-md text-body-md font-semibold text-primary">Taller de Diseño Participativo</h4>
<div class="flex items-center gap-1 text-on-surface-variant mt-1 text-sm">
<i class="ti text-[16px] ti-clock"></i>
<span>10:00 AM - 12:00 PM</span>
</div>
<div class="flex items-center gap-1 text-on-surface-variant mt-1 text-sm">
<i class="ti text-[16px] ti-map-pin"></i>
<span>Centro Comunitario</span>
</div>
</div>
</div>
<!-- Event Card 2 -->
<div class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 soft-shadow p-4 flex gap-4 items-start relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-fixed"></div>
<div class="flex flex-col items-center justify-center bg-surface-container-low w-16 h-16 rounded-lg text-primary flex-shrink-0">
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant">Oct</span>
<span class="font-headline-lg-mobile text-headline-lg-mobile text-[24px] leading-none">26</span>
</div>
<div class="flex flex-col flex-grow">
<h4 class="font-body-md text-body-md font-semibold text-primary">Reunión de Avances del Proyecto</h4>
<div class="flex items-center gap-1 text-on-surface-variant mt-1 text-sm">
<i class="ti text-[16px] ti-clock"></i>
<span>6:00 PM - 8:00 PM</span>
</div>
<div class="flex items-center gap-1 text-on-surface-variant mt-1 text-sm">
<i class="ti text-[16px] ti-map-pin"></i>
<span>Plaza Principal</span>
</div>
</div>
</div>
</div>
<button class="w-full border-2 border-primary text-primary font-label-sm text-label-sm py-4 rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center justify-center gap-2 uppercase tracking-widest mt-2">
                Ver Calendario Completo
                <i class="ti text-sm ti-calendar"></i>
</button>
</section>
  `;
};


// --- PLANES PAGE ---

pages['planes'] = () => {
  const planesCardsHtml = planesData.map(plan => {
    return `
      <article onclick="openPlanModal('${plan.id}')" class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col p-6 md:p-8 h-full">
        <div class="flex justify-between items-start mb-4">
          <span class="bg-surface-container-high text-on-surface-variant font-label-sm px-3 py-1 rounded-full uppercase tracking-wider">
            ${plan.id}
          </span>
          <div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
            <i class="ti ti-${plan.icon} text-[24px]"></i>
          </div>
        </div>
        <h3 class="font-pt-serif text-xl md:text-2xl text-primary font-bold leading-snug mb-3">
          ${plan.title}
        </h3>
        <p class="text-on-surface-variant flex-grow text-sm md:text-base mb-6">
          ${plan.org} &bull; ${plan.date}
        </p>
        <div class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-label-md uppercase tracking-wider group-hover:underline">
          <i class="ti ti-list-details text-lg"></i>
          Ver Detalles y Estrategias
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="w-full max-w-7xl mx-auto px-margin-mobile md:px-section-gap py-8 md:py-12">
      <header class="mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full mb-4">
          <i class="ti ti-file-description text-sm"></i>
          <span class="font-label-sm text-label-sm uppercase tracking-wider">Planificación</span>
        </div>
        <h2 class="font-headline-xl text-4xl md:text-5xl text-primary font-bold leading-tight mb-4 font-pt-serif">Planes Existentes</h2>
        <p class="font-body-md text-on-surface-variant leading-relaxed text-lg md:text-xl max-w-3xl">
          Descubre los planes e informes que han servido de base para el Proyecto Raíces Costeras. Haz clic en un plan para ver las estrategias de adaptación que se extrajeron del mismo.
        </p>
      </header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${planesCardsHtml}
      </div>
    </div>
  `;
};


// --- PUNTOS-ENCUENTRO PAGE ---
pages['puntos-encuentro'] = () => {
  return `
<!-- Intro Section -->
<section class="flex flex-col gap-4">
<h2 class="font-headline-lg-mobile text-headline-lg-mobile text-primary">Puntos de Encuentro y Refugios</h2>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nisl nec sodales mattis, enim justo auctor diam, et blandit justo neque non metus. Pellentesque id sem at sapien tristique sagittis.
            </p>
</section>
<!-- Map/Visual Area (Placeholder for actual map) -->
<section class="w-full h-64 bg-surface-container rounded-xl overflow-hidden shadow-sm relative" data-location="Ponce, Puerto Rico">
<img alt="Aerial view of a coastal city" class="w-full h-full object-cover opacity-80 mix-blend-multiply" data-alt="A stylized, high-contrast aerial map view of a coastal district with clear, modern architectural lines. The scene uses a bright light-mode aesthetic with crisp whites, deep heritage navy accents, and vibrant coastal turquoise highlights marking specific locations. The lighting is sunny and clear, evoking a sense of safety and structured planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMr2pElr6PFm0eUM0T84-BgEe_X2qfv1bDQlwG84vmjojNV5F_IOWzGbT4qgH8jhr_anPjR0daioqdVwiIb7UuHQXN_VlTf0xhom5cK6KUvdXn0pE5Cx-DnZABLXHgYxzHr_T-shzjGUoI9FrOBQlQVyqMITbvusPSgX3yMS6sk9fxOXs2nGEl5i2stRifh6g6oEU7zxir5j7BN0o3dpFTHkSUwkBlYLrJGfSnn5DdGsVfSRrmyhq6co2ki3YvjS3pVS4H4L0BEo"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent flex items-end p-4">
<span class="font-label-sm text-label-sm text-primary uppercase tracking-widest bg-surface-bright/90 px-3 py-1 rounded-full border border-primary/20 backdrop-blur-sm">Mapa de La Playa</span>
</div>
</section>
<!-- List Section -->
<section class="flex flex-col gap-6">
<h3 class="font-headline-lg-mobile text-headline-lg-mobile text-primary border-b-2 border-secondary-container pb-2 inline-block w-max">Ubicaciones Seguras</h3>
<div class="grid grid-cols-1 gap-4">
<!-- Card 1: School Shelter -->
<article class="bg-surface-bright rounded-xl border border-outline-variant p-5 shadow-sm relative overflow-hidden flex flex-col gap-3">
<div class="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
<div class="flex justify-between items-start">
<div>
<span class="inline-block bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-2 py-1 rounded-sm mb-2 uppercase tracking-wide">Refugio Escolar</span>
<h4 class="font-headline-lg-mobile text-xl font-bold text-on-surface leading-tight">Escuela Lucy Grillasca</h4>
</div>
<i class="ti text-secondary-container text-3xl ti-school"></i>
</div>
<p class="font-body-md text-on-surface-variant flex items-center gap-2"><i class="ti text-sm ti-map-pin"></i> Ave. Hostos, Esq. Calle 1</p>
<div class="mt-2 flex gap-2">
<span class="bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-2 py-1 rounded-full border border-outline/20">Capacidad: 200</span>
<span class="bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-2 py-1 rounded-full border border-outline/20">Generador</span>
</div>
</article>
<!-- Card 2: Community Center -->
<article class="bg-surface-bright rounded-xl border border-outline-variant p-5 shadow-sm relative overflow-hidden flex flex-col gap-3">
<div class="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
<div class="flex justify-between items-start">
<div>
<span class="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm px-2 py-1 rounded-sm mb-2 uppercase tracking-wide">Centro Comunal</span>
<h4 class="font-headline-lg-mobile text-xl font-bold text-on-surface leading-tight">Centro Sor Isolina Ferré</h4>
</div>
<i class="ti text-tertiary-container text-3xl ti-users-group"></i>
</div>
<p class="font-body-md text-on-surface-variant flex items-center gap-2"><i class="ti text-sm ti-map-pin"></i> Sector Puerto Viejo</p>
<div class="mt-2 flex gap-2">
<span class="bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-2 py-1 rounded-full border border-outline/20">Suministros Base</span>
</div>
</article>
<!-- Card 3: Verified Safe Area -->
<article class="bg-surface-bright rounded-xl border border-outline-variant p-5 shadow-sm relative overflow-hidden flex flex-col gap-3">
<div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<div class="flex justify-between items-start">
<div>
<span class="inline-block bg-primary text-on-primary font-label-sm text-label-sm px-2 py-1 rounded-sm mb-2 uppercase tracking-wide">Área Segura</span>
<h4 class="font-headline-lg-mobile text-xl font-bold text-on-surface leading-tight">Parque del Litoral (Zona Alta)</h4>
</div>
<i class="ti text-primary text-3xl ti-tree"></i>
</div>
<p class="font-body-md text-on-surface-variant flex items-center gap-2"><i class="ti text-sm ti-map-pin"></i> Final Ave. Hostos Sur</p>
<p class="font-body-md text-sm text-on-surface-variant mt-1 italic">Punto de encuentro temporal al aire libre.</p>
</article>
</div>
</section>
  `;
};


// --- VISUALIZADOR PAGE ---
pages['visualizador'] = () => {
  return `
<!-- Content Area -->
<div class="px-margin-mobile py-6 bg-surface z-10 relative">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-4">Visualizador de La Playa</h1>
<p class="text-on-surface-variant mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Explora los sectores de La Playa de Ponce con nuestra herramienta interactiva.
            </p>
<!-- Layer Toggles Bento -->
<div class="grid grid-cols-2 gap-4 mb-6">
<button class="bg-surface-container p-4 rounded-xl flex flex-col items-start gap-2 border border-outline-variant/30 hover:border-secondary transition-colors focus:ring-2 focus:ring-tertiary-container focus:outline-none text-left">
<i class="ti text-secondary text-2xl ti-droplet"></i>
<span class="font-label-sm text-label-sm text-on-surface font-semibold">Zonas de Inundación</span>
</button>
<button class="bg-primary-container p-4 rounded-xl flex flex-col items-start gap-2 border border-primary transition-colors focus:ring-2 focus:ring-tertiary-container focus:outline-none text-left">
<i class="ti text-on-primary-container text-2xl ti-tree"></i>
<span class="font-label-sm text-label-sm text-on-primary-container font-semibold">Manglares (Activo)</span>
</button>
<button class="bg-surface-container p-4 rounded-xl flex flex-col items-start gap-2 border border-outline-variant/30 hover:border-secondary transition-colors focus:ring-2 focus:ring-tertiary-container focus:outline-none text-left col-span-2">
<i class="ti text-secondary text-2xl ti-map-pin"></i>
<span class="font-label-sm text-label-sm text-on-surface font-semibold">Puntos de Interés / Landmarks</span>
</button>
</div>
</div>
<!-- Interactive Map Dashboard Area -->
<div class="flex-1 map-container relative min-h-[400px]" data-alt="A highly detailed aerial satellite view map of a coastal neighborhood, focusing on intersecting streets, residential structures, and coastal mangrove areas. The visual style is modern, bright, and clear, with subtle cyan overlays indicating environmental zones. The lighting is sunny and high-key, creating a vibrant, professional geographic information system aesthetic. Colors emphasize the Heritage Navy of the water and the vibrant greens of the mangroves." data-location="Ponce" style="">
<!-- Map Overlay Gradients/Shadows -->
<div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none"></div>
<!-- Floating Controls -->
<div class="absolute right-margin-mobile bottom-margin-mobile flex flex-col gap-2">
<button aria-label="Zoom In" class="bg-surface text-primary p-3 rounded-full shadow-lg border border-outline-variant/20 hover:bg-surface-container transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
<i class="ti ti-plus"></i>
</button>
<button aria-label="Zoom Out" class="bg-surface text-primary p-3 rounded-full shadow-lg border border-outline-variant/20 hover:bg-surface-container transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
<i class="ti ti-minus"></i>
</button>
<button aria-label="My Location" class="bg-tertiary-container text-on-tertiary-container p-3 rounded-full shadow-lg mt-2 focus:ring-2 focus:ring-primary focus:outline-none">
<i class="ti ti-current-location"></i>
</button>
</div>
<!-- Map Pins (Mockup) -->
<div class="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
<i class="ti text-secondary-container text-4xl drop-shadow-md ti-map-pin"></i>
</div>
<div class="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
<i class="ti text-error text-3xl drop-shadow-md ti-map-pin"></i>
</div>
</div>
<!-- Info Panel (Bottom Sheet style) -->
<div class="bg-surface rounded-t-xl shadow-[0_-8px_30px_rgb(0,0,0,0.12)] p-margin-mobile -mt-4 relative z-20">
<div class="w-12 h-1 bg-outline-variant/50 rounded-full mx-auto mb-4"></div>
<h3 class="font-headline-lg-mobile text-lg font-bold text-primary mb-1">Sector Salistral</h3>
<p class="font-label-sm text-label-sm text-on-surface-variant mb-3 flex items-center gap-1">
<i class="ti text-[16px] ti-tree"></i> Área de Conservación
            </p>
<div class="flex gap-2">
<span class="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Manglar</span>
<span class="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">Riesgo Alto</span>
</div>
</div>
  `;
};

pages.inicio = () => {
  return `
    <section class="px-margin-mobile pt-8 pb-10 flex flex-col gap-6 relative overflow-hidden">
      <!-- Subtle background blob for editorial feel -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-tertiary-fixed-dim/30 rounded-full blur-3xl -z-10"></div>
      <div class="space-y-4 relative z-10">
        <h1 class="font-display-lg text-display-lg text-primary text-balance leading-tight">
          Bienvenidos al Proyecto Raíces Costeras... Construyendo resiliencia climática y comunitaria en la Playa de Ponce.
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Trabajamos mano a mano con los residentes para transformar nuestra vulnerabilidad en acción, dotando a la comunidad de herramientas, conocimiento y recursos para enfrentar los retos del cambio climático y las emergencias costeras.
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
              <span class="font-label-caps text-label-caps text-primary uppercase block mb-1">Mapeo e Identificación de Riesgos</span>
              <h2 class="font-headline-sm text-headline-sm text-primary">Planificación y Rutas Seguras</h2>
            </div>
            <i class="ti text-secondary bg-surface rounded-full p-2 shadow-sm ti-map"></i>
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
              Ver Mapas
            </div>
          </div>
        </div>

        <!-- Card 2: Datos de la Comunidad (Half Width) -->
        <div class="sm:col-span-2 bg-tertiary-fixed rounded-xl p-card-padding shadow-lg flex flex-col gap-3 justify-between cursor-pointer border border-outline-variant/10 hover:translate-y-[-2px] transition-transform duration-300" data-route="datos">
          <div>
            <span class="font-label-caps text-label-caps text-tertiary uppercase block mb-1">Resiliencia y Datos</span>
            <h2 class="font-headline-sm text-body-lg text-on-tertiary-fixed font-bold leading-tight">Datos de la Comunidad</h2>
          </div>
          <div class="flex items-end justify-between mt-2">
            <p class="font-body-md text-xs text-on-tertiary-fixed/80">Conoce los datos demográficos y de vulnerabilidad de La Playa.</p>
            <i class="ti text-tertiary opacity-80 text-[32px] ti-chart-bar"></i>
          </div>
        </div>

        <!-- Card 3: Sobre el Proyecto (Half Width) -->
        <div class="sm:col-span-2 bg-primary-fixed rounded-xl p-card-padding shadow-lg flex flex-col gap-3 justify-between cursor-pointer border border-outline-variant/10 hover:translate-y-[-2px] transition-transform duration-300" data-route="sobre-proyecto">
          <div>
            <span class="font-label-caps text-label-caps text-on-primary-fixed-variant uppercase block mb-1">Iniciativa Comunitaria</span>
            <h2 class="font-headline-sm text-body-lg text-on-primary-fixed font-bold leading-tight">Sobre el Proyecto</h2>
          </div>
          <div class="flex items-end justify-between mt-2">
            <p class="font-body-md text-xs text-on-primary-fixed-variant/80">Conoce la alianza comunitaria por la resiliencia climática.</p>
            <i class="ti text-primary text-[32px] ti-info-circle"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- CTAs Section -->
    <section class="px-margin-mobile pb-10 flex flex-col gap-4">
      <button data-route="mapas" class="bg-primary text-on-primary font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-primary-container active:scale-[0.98] transition-all w-full">
        <i class="ti ti-map"></i>
        Ver Mapas de Riesgo y Desalojo
      </button>
      <button data-route="sobre-proyecto" class="bg-primary-container text-on-primary-container font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all w-full">
        <i class="ti ti-info-circle"></i>
        Conoce el Proyecto Raíces Costeras
      </button>
      <button data-route="datos" class="bg-secondary-container text-on-secondary-container font-headline-sm py-4 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all w-full">
        <i class="ti ti-chart-bar"></i>
        Ver Datos de la Comunidad
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
pages.datos = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-5xl mx-auto w-full">
      <header class="mb-section-gap">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Impacto e Indicadores</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-2">Datos y Hechos</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">Una mirada profunda a la realidad y resiliencia de nuestra comunidad costera.</p>
      </header>

      <!-- Filter Chips -->
      <div class="flex gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 border-b border-outline-variant/30">
        <button id="filter-all" class="filter-chip active-chip whitespace-nowrap px-4 py-2 rounded-full border border-secondary text-secondary bg-secondary-container bg-opacity-20 font-body-md text-sm font-semibold">Todos</button>
        <button id="filter-demo" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Demografía</button>
        <button id="filter-env" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Ambiente</button>
        <button id="filter-econ" class="filter-chip whitespace-nowrap px-4 py-2 rounded-full border border-outline text-on-surface-variant hover:bg-surface-container-high transition-colors font-body-md text-sm">Economía</button>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="stats-cards-container">
        <!-- Card 1: Demographics -->
        <article data-cat="demo" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Demografía</span>
            <i class="ti text-secondary ti-users-group" style="font-size: 28px; font-variation-settings: 'FILL' 1;"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">12,450</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Habitantes en la zona costera sur, reflejando un crecimiento del 5% en la última década.</p>
          </div>
        </article>

        <!-- Card 2: Environment -->
        <article data-cat="env" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-tertiary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">Ambiente</span>
            <i class="ti text-tertiary ti-tree" style="font-size: 28px; font-variation-settings: 'FILL' 1;"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">850</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Hectáreas de manglar preservadas, actuando como barrera natural contra marejadas.</p>
          </div>
        </article>

        <!-- Card 3: Economy -->
        <article data-cat="econ" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-primary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-primary tracking-widest uppercase">Economía</span>
            <i class="ti text-primary ti-wallet" style="font-size: 28px; font-variation-settings: 'FILL' 1;"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">45%</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">De los comercios locales dependen directamente del ecoturismo y pesca sustentable.</p>
          </div>
        </article>

        <!-- Card 4: Demographics -->
        <article data-cat="demo" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Demografía</span>
            <i class="ti text-secondary ti-old" style="font-size: 28px; font-variation-settings: 'FILL' 1;"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">32%</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">De la población tiene más de 60 años, resaltando la necesidad de infraestructura accesible.</p>
          </div>
        </article>

        <!-- Card 5: Environment -->
        <article data-cat="env" class="glass-card rounded-xl p-card-padding flex flex-col justify-between aspect-square relative overflow-hidden group border border-outline-variant/20">
          <div class="absolute inset-0 bg-tertiary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4 relative z-10">
            <span class="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">Ambiente</span>
            <i class="ti text-tertiary ti-droplet-filled" style="font-size: 28px; font-variation-settings: 'FILL' 1;"></i>
          </div>
          <div class="flex-1 flex flex-col justify-center relative z-10">
            <h3 class="font-display-lg text-display-lg text-primary mb-2">2.5<span class="text-2xl ml-1">mm</span></h3>
            <p class="font-body-md text-body-md text-on-surface-variant">Aumento anual promedio del nivel del mar registrado en las costas locales.</p>
          </div>
        </article>
      </div>

      <!-- Interactive Charts Panel -->
      <section class="mt-12 bg-surface-container-low rounded-2xl p-6 md:p-8 border border-outline-variant/30">
        <h3 class="font-headline-sm text-primary mb-6 flex items-center gap-2">
          <i class="ti text-secondary ti-chart-bar"></i>
          Visualizaciones Interactivas de Datos
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Chart 1: Sea level Rise -->
          <div class="bg-surface rounded-xl p-4 border border-outline-variant/20 shadow-sm flex flex-col">
            <h4 class="font-body-lg text-on-surface font-semibold mb-2">Aumento del Nivel del Mar Histórico (Playa de Ponce)</h4>
            <div class="flex-grow flex items-center justify-center h-64" id="sea-level-chart-container">
              <!-- SVG generated via JS -->
            </div>
            <p class="font-body-md text-xs text-on-surface-variant mt-2 text-center">Registrado en milímetros de desviación acumulada desde el 2010.</p>
          </div>
          
          <!-- Chart 2: Mangrove Coverage -->
          <div class="bg-surface rounded-xl p-4 border border-outline-variant/20 shadow-sm flex flex-col">
            <h4 class="font-body-lg text-on-surface font-semibold mb-2">Preservación del Manglar vs Pérdida de Terreno</h4>
            <div class="flex-grow flex items-center justify-center h-64" id="mangrove-chart-container">
              <!-- SVG generated via JS -->
            </div>
            <p class="font-body-md text-xs text-on-surface-variant mt-2 text-center">Hectáreas reforestadas y protegidas por Un Nuevo Amanecer, Inc.</p>
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
  const primaryColor = "#097C87";
  const secondaryColor = "#23CED9";
  const accentColor = "#F9D779";

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
        <text x="30" y="24" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">40mm</text>
        <text x="30" y="74" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">30mm</text>
        <text x="30" y="124" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">20mm</text>
        <text x="30" y="174" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">10mm</text>
        <text x="30" y="214" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">0mm</text>

        <!-- X-Axis Labels -->
        <text x="40" y="230" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2010</text>
        <text x="125" y="230" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2014</text>
        <text x="210" y="230" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2018</text>
        <text x="295" y="230" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2022</text>
        <text x="380" y="230" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2026</text>

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
        <text x="40" y="24" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">1000ha</text>
        <text x="40" y="84" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">750ha</text>
        <text x="40" y="144" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">500ha</text>
        <text x="40" y="204" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="end">250ha</text>

        <!-- Bar 1 (2018) -->
        <rect x="90" y="120" width="30" height="80" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="122" y="160" width="15" height="40" rx="2" fill="${accentColor}" />
        <text x="113" y="218" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2018</text>

        <!-- Bar 2 (2020) -->
        <rect x="170" y="90" width="30" height="110" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="202" y="130" width="15" height="70" rx="2" fill="${accentColor}" />
        <text x="193" y="218" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2020</text>

        <!-- Bar 3 (2022) -->
        <rect x="250" y="60" width="30" height="140" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="282" y="110" width="15" height="90" rx="2" fill="${accentColor}" />
        <text x="273" y="218" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2022</text>

        <!-- Bar 4 (2024) -->
        <rect x="330" y="30" width="30" height="170" rx="4" fill="${primaryColor}" class="hover:opacity-85 transition-opacity" />
        <rect x="362" y="80" width="15" height="120" rx="2" fill="${accentColor}" />
        <text x="353" y="218" font-size="10" font-family="PT Serif" fill="#707974" text-anchor="middle">2024</text>

        <!-- Legend -->
        <circle cx="100" cy="-5" r="5" fill="${primaryColor}" />
        <text x="110" y="-1" font-size="10" font-family="PT Serif" fill="#707974">Manglar Protegido</text>
        <circle cx="230" cy="-5" r="5" fill="${accentColor}" />
        <text x="240" y="-1" font-size="10" font-family="PT Serif" fill="#707974">Nuevas Siembras</text>
      </svg>
    `;
  }
}

// --- MAPAS PAGE ---
pages.mapas = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-7xl mx-auto w-full">
      <header class="mb-section-gap max-w-3xl">
        <div class="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-secondary-container bg-surface-container-low">
          <span class="w-2 h-2 rounded-full bg-secondary"></span>
          <span class="font-label-caps text-label-caps text-on-surface-variant">Catálogo de Datos</span>
        </div>
        <h2 class="font-display-lg text-display-lg text-on-surface mb-4">Mapas de Riesgo</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant">
          Explora el archivo cartográfico de Ponce Playa. Estos mapas detallan las zonas vulnerables y las estrategias de resiliencia comunitaria ante eventos climáticos.
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
                <i class="ti text-[14px] ti-wave-sine"></i>
                Nivel del Mar
              </span>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Zonas de Inundación Costera</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                Análisis topográfico de las áreas costeras de Ponce con mayor vulnerabilidad a marejadas ciclónicas y aumento del nivel del mar.
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-surface-variant">
              <span class="text-xs text-on-surface-variant font-label-caps">Capas: Elevación, Marea</span>
              <button id="btn-open-flood-modal" class="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:text-secondary transition-colors font-bold">
                Ver Mapa Interactivo <i class="ti text-[16px] ti-arrow-right"></i>
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
                <i class="ti text-[14px] ti-run"></i>
                Evacuación
              </span>
            </div>
          </div>
          <div class="p-6 flex-grow flex flex-col justify-between bg-surface-container-lowest">
            <div>
              <h3 class="font-headline-md text-headline-md text-on-surface mb-2">Rutas de Desalojo Seguro</h3>
              <p class="font-body-md text-body-md text-on-surface-variant mb-4">
                Caminos seguros identificados por la comunidad y expertos para evacuación rápida hacia terrenos elevados durante emergencias.
              </p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-surface-variant">
              <span class="text-xs text-on-surface-variant font-label-caps">Actualizado: Oct 2024</span>
              <button id="btn-open-routes-modal" class="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:text-secondary transition-colors font-bold">
                Ver Mapa Interactivo <i class="ti text-[16px] ti-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>

        <!-- Action Card -->
        <div class="glass-card p-8 bg-surface-container-low flex flex-col justify-center items-center text-center border border-outline-variant/50 rounded-xl md:col-span-2 lg:col-span-1 min-h-[220px]">
          <div class="w-14 h-14 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-4">
            <i class="ti text-2xl ti-download"></i>
          </div>
          <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">Descargar Paquete Completo</h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 max-w-sm">
            Obtén todos los mapas en alta resolución para uso educativo o planificación comunitaria offline.
          </p>
          <a href="#" class="bg-primary text-on-primary px-6 py-3 rounded-full font-label-caps text-xs hover:bg-primary-container hover:shadow-md transition-all active:scale-95 flex items-center gap-2">
            <i class="ti text-[18px] ti-folder-zip"></i>
            Descargar ZIP (45 MB)
          </a>
        </div>

        <!-- Info Card -->
        <div class="glass-card p-6 bg-tertiary-container text-on-tertiary-container md:col-span-2 lg:col-span-1 min-h-[220px] flex flex-col justify-center relative overflow-hidden rounded-xl">
          <!-- Pattern overlay -->
          <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0); background-size: 20px 20px;"></div>
          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <i class="ti text-tertiary-fixed ti-info-circle"></i>
              <span class="font-label-caps text-label-caps text-tertiary-fixed font-bold uppercase">Metodología</span>
            </div>
            <p class="font-body-lg text-body-lg mb-4 text-on-tertiary-fixed">
              Estos mapas son el resultado de un esfuerzo colaborativo entre cartógrafos, el Comité de Asesores Comunitarios y residentes locales de Ponce Playa.
            </p>
            <a class="inline-flex items-center gap-1 font-label-caps text-xs text-tertiary-fixed font-bold underline underline-offset-4 hover:opacity-80 transition-opacity" href="#">
              Leer sobre el proceso <i class="ti text-[16px] ti-arrow-right"></i>
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
            <i class="ti text-primary ti-x"></i>
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
                <i class="ti text-error text-[20px] ti-alert-triangle-filled"></i>
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
                <i class="ti text-primary text-[20px] ti-shield"></i>
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
              <path id="water-rise-path" fill="#23CED9" fill-opacity="0.2" stroke="none" d="M 0 320 Q 150 300 250 310 T 500 300 L 500 400 L 0 400 Z" />

              <!-- Shore Sand Line -->
              <path fill="none" stroke="#e3dbcb" stroke-width="6" d="M 0 320 Q 150 300 250 310 T 500 300" />
              
              <!-- Mangrove Forest Icons (decorations) -->
              <g class="mangrove-group opacity-60">
                <path d="M 30 280 L 35 270 L 40 280 M 35 270 L 35 290" stroke="#097C87" stroke-width="1.5" />
                <circle cx="35" cy="268" r="4" fill="#23CED9" />
                
                <path d="M 60 290 L 65 280 L 70 290 M 65 280 L 65 300" stroke="#097C87" stroke-width="1.5" />
                <circle cx="65" cy="278" r="4" fill="#23CED9" />

                <path d="M 450 280 L 455 270 L 460 280 M 455 270 L 455 290" stroke="#097C87" stroke-width="1.5" />
                <circle cx="455" cy="268" r="4" fill="#23CED9" />
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
                  <i class="ti hidden ti-home"></i>
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
              <text x="250" y="85" font-size="10" font-weight="bold" fill="#097C87" text-anchor="middle" font-family="PT Serif">Refugio Central</text>
              <text x="120" y="85" font-size="10" font-weight="bold" fill="#097C87" text-anchor="middle" font-family="PT Serif">Refugio Oeste</text>
              <text x="380" y="85" font-size="10" font-weight="bold" fill="#097C87" text-anchor="middle" font-family="PT Serif">Refugio Este</text>
              
              <text x="145" y="215" font-size="8" fill="#707974" font-family="PT Serif">Sec. Lirios</text>
              <text x="340" y="215" font-size="8" fill="#707974" font-family="PT Serif">Sec. Vistas</text>
              <text x="250" y="360" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle" font-family="PT Serif">Mar Caribe</text>
            </svg>

            <!-- Map Point Information Toast -->
            <div id="map-toast" class="absolute bottom-4 left-4 right-4 bg-primary/95 text-on-primary p-3 rounded-lg border border-primary-container shadow-lg backdrop-blur-md hidden text-xs transition-opacity duration-300">
              <div class="flex items-start gap-2">
                <i class="ti text-[16px] text-secondary ti-info-circle"></i>
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
pages.guia = () => {
  return `
    <div class="w-full max-w-7xl mx-auto px-margin-mobile md:px-section-gap py-8">
      <!-- Header Section -->
      <header class="mb-section-gap text-center md:text-left">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Guía de Preparación</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-gutter">Guía para estar preparado</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Instrucciones vitales y lista de verificación interactiva para la comunidad de Ponce ante emergencias costeras y climáticas.</p>
      </header>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
        <!-- 1. Mochila de Emergencia (Spans 2 cols on md) -->
        <section class="texture-overlay bg-surface-container-low rounded-xl p-card-padding shadow-lg md:col-span-2 flex flex-col relative overflow-hidden border border-outline-variant/30">
          <div class="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <i class="ti text-[150px] text-primary ti-backpack"></i>
          </div>
          <header class="flex items-center justify-between mb-4 relative z-20">
            <div class="flex items-center gap-2">
              <div class="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                <i class="ti icon-fill ti-first-aid-kit"></i>
              </div>
              <div>
                <span class="font-label-caps text-label-caps text-secondary block">Inventario Vital</span>
                <h3 class="font-headline-sm text-headline-sm text-primary">Mochila de Emergencia</h3>
              </div>
            </div>
            <!-- Progress Circle -->
            <div class="flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-outline-variant/30">
              <span id="backpack-progress-text" class="font-label-caps text-xs text-primary font-bold">0%</span>
            </div>
          </header>
          
          <p class="font-body-md text-body-md text-on-surface-variant mb-6 relative z-20">
            Prepare suministros básicos para al menos 72 horas para cada miembro de la familia.
          </p>

          <!-- Checkboxes -->
          <ul class="flex flex-col gap-3 flex-grow relative z-20">
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-water" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-water">Agua embotellada (1 galón por persona/día)</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-food" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-food">Alimentos no perecederos y abrelatas manual</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-firstaid" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-firstaid">Botiquín de primeros auxilios y medicamentos recetados</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-docs" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-docs">Copia de documentos importantes (bolsa impermeable)</label>
            </li>
            <li class="flex items-start gap-3 bg-surface p-3 rounded-lg border border-outline-variant/30 hover:border-primary/50 transition-colors">
              <input class="mt-1 rounded emerald-checkbox border-outline text-primary focus:ring-primary-fixed backpack-item" id="kit-radio" type="checkbox" />
              <label class="font-body-md text-sm text-on-surface cursor-pointer select-none" for="kit-radio">Radio de baterías/manivela y linterna con baterías extra</label>
            </li>
          </ul>
        </section>

        <!-- 2. Plan Familiar (Spans 2 cols on md) -->
        <section class="texture-overlay bg-surface-container-high rounded-xl p-card-padding shadow-lg md:col-span-2 flex flex-col border border-outline-variant/30">
          <header class="flex items-center gap-gutter mb-gutter">
            <div class="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
              <i class="ti icon-fill ti-home-shield"></i>
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
                <i class="ti text-secondary text-[20px] ti-door-enter"></i>
                <h4 class="font-body-lg text-on-surface font-semibold">Zonas Seguras</h4>
              </div>
              <p class="font-body-md text-xs text-on-surface-variant">Identifique los cuartos interiores más resistentes en su casa, lejos de ventanas.</p>
            </div>
            <!-- Step 2 -->
            <div class="bg-surface p-4 rounded-lg border-t-2 border-secondary">
              <div class="flex items-center gap-2 mb-2">
                <i class="ti text-secondary text-[20px] ti-map-pin"></i>
                <h4 class="font-body-lg text-on-surface font-semibold">Puntos de Reunión</h4>
              </div>
              <p class="font-body-md text-xs text-on-surface-variant">Acuerden un punto de encuentro en el barrio y otro fuera en caso de inundación.</p>
            </div>
            
            <!-- Step 3 (Interactive Out-of-Area Contact) -->
            <div class="bg-surface p-4 rounded-lg border-t-2 border-tertiary-fixed-dim sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
              <div class="flex-grow">
                <div class="flex items-center gap-2 mb-1">
                  <i class="ti text-secondary text-[20px] ti-phone-call"></i>
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
                <i class="ti icon-fill ti-cloud-storm"></i>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Antes</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Asegure puertas, ventanas y objetos sueltos en el patio.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Llene los tanques de gasolina de sus vehículos.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Verifique su mochila de emergencia y plan familiar.</span>
                </li>
              </ul>
            </article>
            
            <!-- Durante -->
            <article class="glass-card rounded-xl p-card-padding flex flex-col border border-primary-fixed/50 relative overflow-hidden group">
              <div class="absolute inset-0 bg-primary-fixed opacity-10 group-hover:opacity-15 transition-opacity"></div>
              <div class="w-12 h-12 rounded-full bg-primary text-on-primary mb-4 flex items-center justify-center relative z-10">
                <i class="ti icon-fill ti-alert-triangle-filled"></i>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Durante</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <i class="ti text-secondary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Manténgase alejado de ventanas y puertas de cristal.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-secondary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Escuche boletines oficiales en la radio portátil.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-secondary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Desconecte la electricidad si sube el nivel del agua.</span>
                </li>
              </ul>
            </article>
            
            <!-- Después -->
            <article class="glass-card rounded-xl p-card-padding flex flex-col border border-outline-variant/20 relative overflow-hidden group">
              <div class="absolute inset-0 bg-secondary-fixed opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div class="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container mb-4 flex items-center justify-center relative z-10">
                <i class="ti icon-fill ti-circle-check-filled"></i>
              </div>
              <h4 class="font-headline-sm text-headline-sm text-primary mb-2 relative z-10">Después</h4>
              <ul class="flex flex-col gap-2 font-body-md text-sm text-on-surface-variant relative z-10 flex-grow">
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Espere la confirmación de cese de peligro por autoridades.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
                  <span>Evite caminar o transitar por calles inundadas.</span>
                </li>
                <li class="flex items-start gap-2">
                  <i class="ti text-primary text-sm mt-0.5 ti-player-stop-filled"></i>
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
          <i class="ti text-secondary ti-phone-call"></i>
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
pages.sobre = () => {
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
            <i class="ti ti-wave-sine" style="font-size: 200px;"></i>
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
                <i class="ti ti-sun"></i>
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
                <i class="ti ti-users-group"></i>
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
              <i class="ti text-secondary text-3xl opacity-80 ti-satellite"></i>
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
              <i class="ti text-primary text-3xl opacity-80 ti-tree"></i>
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
              <i class="ti text-tertiary text-3xl opacity-80 ti-headset"></i>
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
pages.fotografia = () => {
  return `
    <div class="px-margin-mobile py-8 max-w-7xl mx-auto w-full">
      <header class="mb-section-gap">
        <span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-base block">Galería Visual</span>
        <h2 class="font-display-lg text-display-lg text-primary mb-2">Fotografía del Proyecto</h2>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Explora los momentos, los esfuerzos y la belleza de la Playa de Ponce capturados a través de nuestra comunidad.</p>
      </header>

      <!-- Masonry Photo Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-2 xl:columns-3 gap-6 space-y-6">
        
        <!-- Photo 1 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/mangrove_restoration_1781124377365.png" alt="Restauración de Manglares" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Restauración de Manglares</h4>
            <p class="font-body-md text-xs text-on-primary/80">Voluntarios comunitarios sembrando esperanza.</p>
          </figcaption>
        </figure>

        <!-- Photo 2 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/coastal_community_1781124389221.png" alt="Comunidad Costera" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Comunidad Costera</h4>
            <p class="font-body-md text-xs text-on-primary/80">La vitalidad y el color de nuestro barrio.</p>
          </figcaption>
        </figure>

        <!-- Photo 3 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/community_planning_1781124400939.png" alt="Planificación Comunitaria" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Trazando el Futuro</h4>
            <p class="font-body-md text-xs text-on-primary/80">Reunión de planificación y mapas de riesgo.</p>
          </figcaption>
        </figure>

        <!-- Photo 4 -->
        <figure class="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant/30">
          <img src="assets/images/ocean_sunset_1781124413556.png" alt="Atardecer en la Costa" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
          <div class="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h4 class="font-headline-sm text-on-primary text-lg">Atardecer en la Costa</h4>
            <p class="font-body-md text-xs text-on-primary/80">La belleza natural que protegemos.</p>
          </figcaption>
        </figure>

      </div>
    </div>
  `;
};

// --- REFUGIOS PAGE ---
pages.refugios = () => {
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
        <i class="ti text-primary text-xl bg-primary-container/30 rounded-full p-1.5 shrink-0 ${r.type === 'Escuela' ? 'ti-school' : 'ti-building'}"></i>
      </div>
      <div class="mt-auto pt-3 border-t border-outline-variant/30 flex items-center gap-2 text-on-surface-variant">
        <i class="ti text-[18px] ti-phone"></i>
        <a href="tel:${r.phone.replace(/[^0-9]/g, '')}" class="font-body-md font-medium hover:text-primary transition-colors">${r.phone}</a>
      </div>
    </div>
  `;

  return `
    <div class="px-margin-mobile py-8 max-w-5xl mx-auto w-full">
      
      <div class="bg-error-container text-on-error-container p-6 rounded-2xl mb-8 flex flex-col md:flex-row gap-6 items-center shadow-md relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
          <i class="ti ti-shield-check" style="font-size: 150px;"></i>
        </div>
        
        <div class="bg-error text-on-error w-16 h-16 rounded-full flex items-center justify-center shrink-0 shadow-sm z-10">
          <i class="ti text-3xl ti-alert-triangle-filled"></i>
        </div>
        
        <div class="flex-grow text-center md:text-left z-10">
          <span class="font-label-caps text-xs uppercase tracking-widest opacity-80 block mb-1">Estamos Ready</span>
          <h2 class="font-display-sm font-bold mb-2 leading-tight">Refugios Aprobados</h2>
          <p class="font-body-md opacity-90 max-w-2xl">
            Lista oficial de refugios aprobados por el Departamento de Vivienda para el Municipio Autónomo de Ponce. En caso de emergencia, comuníquese con el refugio más cercano.
          </p>
        </div>
        
        <div class="shrink-0 text-center flex flex-col items-center gap-1 opacity-90 z-10 bg-error-container/50 p-2 rounded-lg">
          <i class="ti text-3xl ti-shield-lock"></i>
          <span class="font-label-caps text-[10px] uppercase tracking-wider font-bold">OMME Ponce</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        ${refugios.map(renderRefugioCard).join('')}
      </div>

    </div>
  `;
};
