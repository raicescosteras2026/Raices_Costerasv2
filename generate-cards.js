const fs = require('fs');

const data = [
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
  { text: "Plan de Adaptación de Infraestructura (Salud, Educación)", doc: "DOC-02", icon: "building" }
];

let cardsHtml = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\\n';

data.forEach(item => {
  cardsHtml += `
    <article class="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-shadow p-5 flex gap-4 items-center" data-doc="${item.doc}">
      <div class="w-12 h-12 shrink-0 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
        <i class="ti ti-${item.icon} text-[24px]"></i>
      </div>
      <h3 class="font-body-md text-[15px] text-on-surface font-semibold leading-tight">${item.text}</h3>
    </article>`;
});

cardsHtml += '\\n</div>';

const pageTemplate = `
pages['estrategias'] = () => {
  return \`
    <div class="w-full max-w-7xl mx-auto px-margin-mobile md:px-section-gap py-8">
      <header class="mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 text-on-primary-container rounded-full mb-3">
          <i class="ti ti-route-alt text-sm"></i>
          <span class="font-label-sm text-label-sm uppercase tracking-wider">Planificación Activa</span>
        </div>
        <h2 class="font-headline-xl text-3xl md:text-4xl text-primary font-bold leading-tight mb-4 font-pt-serif">Estrategias de Adaptación</h2>
        <p class="font-body-md text-on-surface-variant leading-relaxed text-lg max-w-3xl">
          Explora las diversas estrategias y proyectos propuestos para mejorar la resiliencia y seguridad de nuestra comunidad.
        </p>
      </header>
      ${cardsHtml}
    </div>
  \`;
};
`;

const appJsPath = 'app.js';
let appJs = fs.readFileSync(appJsPath, 'utf8');

const regex = /pages\['estrategias'\] = \(\) => \{[\s\S]*?^\};\n?/m;
const newAppJs = appJs.replace(regex, pageTemplate + '\\n');

if (appJs !== newAppJs) {
  fs.writeFileSync(appJsPath, newAppJs);
  console.log("Successfully updated pages['estrategias'] in app.js");
} else {
  console.log("Regex match failed, could not replace.");
}
