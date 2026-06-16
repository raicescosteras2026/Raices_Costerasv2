const fs = require('fs');
const path = 'index.html';
let html = fs.readFileSync(path, 'utf8');

// Hide Resiliencia y Datos (desktop)
html = html.replace(
  '<!-- RESILIENCIA Y DATOS -->\n      <div>',
  '<!-- RESILIENCIA Y DATOS -->\n      <div class="hidden">'
);
// Hide Preparación y Respuesta (desktop)
html = html.replace(
  '<!-- PREPARACIÓN Y RESPUESTA -->\n      <div>',
  '<!-- PREPARACIÓN Y RESPUESTA -->\n      <div class="hidden">'
);
// Hide Comunidad (desktop)
html = html.replace(
  '<!-- COMUNIDAD -->\n      <div>',
  '<!-- COMUNIDAD -->\n      <div class="hidden">'
);
// Hide Herramientas (desktop)
html = html.replace(
  '<a data-route="herramientas" class="flex items-center gap-3 text-on-surface-variant',
  '<a data-route="herramientas" class="hidden flex items-center gap-3 text-on-surface-variant'
);

// Hide Resiliencia y Datos (mobile)
html = html.replace(
  '<!-- RESILIENCIA Y DATOS -->\n      <div>',
  '<!-- RESILIENCIA Y DATOS -->\n      <div class="hidden">'
);
// Wait, the replace string might need to be global or just call it again if it didn't match all.
// Actually, using a regex with global flag is better.

html = fs.readFileSync(path, 'utf8');

html = html.replace(/<!-- RESILIENCIA Y DATOS -->\s*<div>/g, '<!-- RESILIENCIA Y DATOS -->\n      <div class="hidden">');
html = html.replace(/<!-- PREPARACIÓN Y RESPUESTA -->\s*<div>/g, '<!-- PREPARACIÓN Y RESPUESTA -->\n      <div class="hidden">');
html = html.replace(/<!-- COMUNIDAD -->\s*<div>/g, '<!-- COMUNIDAD -->\n      <div class="hidden">');

// Hide herramientas (both desktop and mobile)
html = html.replace(/<a data-route="herramientas"/g, '<a data-route="herramientas" class="hidden"');

fs.writeFileSync(path, html);
console.log('Successfully hid menu items in index.html');
