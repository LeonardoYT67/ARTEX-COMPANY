ArteX Company - Sitio web completo con backend (Node.js + Express)
Lista para ejecutar localmente y desplegar en Render.com

Instrucciones rápidas:
1. Instalar dependencias:
   npm install

2. Ejecutar local:
   npm start
   Luego abrir http://localhost:3000

3. Subir a Render.com:
   - Crear un nuevo Web Service (Node)
   - Conectar repo o subir ZIP
   - Build command: npm install
   - Start command: npm start

Estructura:
/public -> archivos frontend (HTML, CSS, JS, img, uploads)
server.js -> servidor Express que maneja subida de archivos y API para portafolio
/data/portafolio.json -> base de datos JSON

Nota: El endpoint de portafolio permite subir imágenes reales desde el formulario. Las imágenes se guardan en public/uploads/
