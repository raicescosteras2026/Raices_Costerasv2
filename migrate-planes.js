const fs = require('fs');

const appJsPath = 'app.js';
let appJs = fs.readFileSync(appJsPath, 'utf8');

const dataCode = `
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
  { text: "Mantenimiento, Actualización y Señalización de Rutas de Evacuación", doc: "DOC-06", icon: "route" },
  { text: "Capacidad de Difundir Planes de Evacuación en Caso de Desastre", doc: "DOC-06", icon: "speakerphone" },
  { text: "Identificar Edificios como Centros de Resiliencia", doc: "DOC-09", icon: "building-skyscraper" },
  { text: "Establecer Rutas Viales Primarias y Alternativas Seguras para Emergencias", doc: "DOC-06", icon: "road" },
  { text: "Establecer Alianzas Gubernamentales y Privadas para Servicios Básicos en Emergencias", doc: "DOC-06", icon: "users" },
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
  { text: "Calidad del Agua y Señalización", doc: "DOC-05", icon: "droplet" },
  { text: "Suministro de Medicamentos durante Emergencias (Alianzas)", doc: "DOC-07", icon: "vaccine" },
  { text: "Mapa Interactivo de Salud y Cultura", doc: "DOC-07", icon: "box" },
  { text: "Iniciativas de Educación sobre Emociones y Estrés", doc: "DOC-07", icon: "brain" },
  { text: "Capacitación Municipal sobre Contaminación del Sistema de Agua", doc: "DOC-04", icon: "droplet" },
  { text: "Ordenanza de Regulación de Aguas Residuales", doc: "DOC-04", icon: "file-certificate" },
  { text: "Alianzas de Servicios de Emergencia", doc: "DOC-06", icon: "badge" },
  { text: "Reparación de Infraestructura Sanitaria", doc: "DOC-07", icon: "tools" },
  { text: "Plan de Adaptación de Infraestructura (Salud, Educación)", doc: "DOC-02", icon: "building" },
  { text: "Crear una red de apoyo vecinal para promover la comunicación y monitorear población vulnerable antes, durante y después de emergencias. La red tendrá un doble propósito: establecer un sistema efectivo de comunicación y organizar el acompañamiento y monitoreo de las personas más vulnerables", doc: "DOC-10", icon: "heart" },
  { text: "Establecer un Plan de Respuesta Comunitaria ante emergencias, con puntos de encuentro, contactos clave, capacitación de primeros auxilios y protocolos incluyendo ciclos de simulacros de emergencia tomando en consideración a personas mayores y con movilidad reducida", doc: "DOC-10", icon: "clipboard-check" },
  { text: "Establecer un mecanismo organizacional para darle seguimiento a las nuevas iniciativas de resiliencia comunitaria y atender nuevas. La comunidad enfrenta riesgos severos como inundaciones, tsunamis, terremotos y el deterioro de infraestructura esencial, lo cual requiere una respuesta planificada y continua.", doc: "DOC-10", icon: "chart-bar" },
  { text: "Realizar un registro voluntario para identificar los recursos disponibles entre los vecinos, así como las vulnerabilidades en las viviendas y las necesidades particulares en la población. Permitirá conocer fortalezas como habilidades especializadas y equipos disponibles.", doc: "DOC-10", icon: "list-details" },
  { text: "Revisar y abogar por la actualización de las rutas de desalojo, la señalización de la ruta y el sistema de alarma oficial en caso de eventos de emergencias.", doc: "DOC-10", icon: "arrow-right" }
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
      return \`
        <div class="flex items-start gap-4 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
          <div class="w-12 h-12 shrink-0 rounded-lg \${color} flex items-center justify-center">
            <i class="ti ti-\${s.icon} text-[24px]"></i>
          </div>
          <p class="font-body-md text-on-surface font-medium">\${s.text}</p>
        </div>
      \`;
    }).join('');
  } else {
    strategiesHtml = '<p class="text-on-surface-variant italic p-4">No hay estrategias extraídas de este plan específicas para Raíces Costeras.</p>';
  }

  let buttonHtml = '';
  if (plan.link) {
    buttonHtml = \`
      <a href="\${plan.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary rounded-lg font-label-md uppercase tracking-wider hover:bg-primary-fixed-dim transition-colors shadow-md mt-6">
        <i class="ti ti-download"></i>
        Descargar Plan
      </a>
    \`;
  }

  const modalHtml = \`
    <div id="plan-modal" class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 md:p-8">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-on-surface/50 backdrop-blur-sm" onclick="closePlanModal()"></div>
      
      <!-- Modal Content -->
      <div class="relative w-full max-w-3xl max-h-full bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="p-6 md:p-8 border-b border-outline-variant/30 flex justify-between items-start gap-4 bg-surface-container-low">
          <div class="flex-grow pr-4">
            <span class="inline-block px-3 py-1 mb-3 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm uppercase tracking-wider">
              \${plan.id} &bull; \${plan.date}
            </span>
            <h2 class="font-pt-serif text-2xl md:text-3xl text-primary font-bold leading-tight">\${plan.title}</h2>
            <p class="text-on-surface-variant mt-2 font-body-md">\${plan.org}</p>
            \${buttonHtml}
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
            \${strategiesHtml}
          </div>
        </div>
      </div>
    </div>
  \`;

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
`;

// Insert the data and modal logic where `const pages = {};` is located
appJs = appJs.replace('const pages = {};', dataCode);

const planesTemplate = `
pages['planes'] = () => {
  const planesCardsHtml = planesData.map(plan => {
    return \`
      <article onclick="openPlanModal('\${plan.id}')" class="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col p-6 md:p-8 h-full">
        <div class="flex justify-between items-start mb-4">
          <span class="bg-surface-container-high text-on-surface-variant font-label-sm px-3 py-1 rounded-full uppercase tracking-wider">
            \${plan.id}
          </span>
          <div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
            <i class="ti ti-\${plan.icon} text-[24px]"></i>
          </div>
        </div>
        <h3 class="font-pt-serif text-xl md:text-2xl text-primary font-bold leading-snug mb-3">
          \${plan.title}
        </h3>
        <p class="text-on-surface-variant flex-grow text-sm md:text-base mb-6">
          \${plan.org} &bull; \${plan.date}
        </p>
        <div class="mt-auto pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-secondary font-label-md uppercase tracking-wider group-hover:underline">
          <i class="ti ti-list-details text-lg"></i>
          Ver Detalles y Estrategias
        </div>
      </article>
    \`;
  }).join('');

  return \`
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
        \${planesCardsHtml}
      </div>
    </div>
  \`;
};
`;

const estrategiasTemplate = `
pages['estrategias'] = () => {
  const cardsHtml = estrategiasData.map(item => {
    const categoryColor = getCategoryColor(item.doc);
    return \`
      <article class="bg-surface-container-lowest rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-lg transition-all p-8 md:p-10 flex flex-col gap-6 items-start min-h-[300px] justify-center" data-doc="\${item.doc}">
        <div class="w-20 h-20 shrink-0 rounded-2xl \${categoryColor} flex items-center justify-center">
          <i class="ti ti-\${item.icon} text-[48px]"></i>
        </div>
        <h3 class="font-pt-serif text-2xl md:text-3xl text-on-surface font-bold leading-snug">\${item.text}</h3>
      </article>
    \`;
  }).join('');

  return \`
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
        \${cardsHtml}
      </div>
    </div>
  \`;
};
`;

// Replace pages['estrategias'] 
appJs = appJs.replace(/pages\['estrategias'\] = \(\) => \{[\s\S]*?^\};\n?/m, estrategiasTemplate);

// Replace pages['planes']
appJs = appJs.replace(/pages\['planes'\] = \(\) => \{[\s\S]*?^\};\n?/m, planesTemplate);

fs.writeFileSync(appJsPath, appJs);
console.log("Successfully migrated planes and estrategias to use dynamic data and modal.");
