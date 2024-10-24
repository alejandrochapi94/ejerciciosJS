# Ejemplo de aplicación PWA para PC y navegador


1. Estructura Básica de la Aplicación
    Antes de comenzar, asegúrate de tener la estructura básica de tu aplicación web. Debes contar con:

    Un archivo HTML principal (por ejemplo, index.html).
Archivos de CSS y JavaScript para manejar el estilo y la funcionalidad de tu aplicación.

2. Añadir el Archivo de Manifesto
Para que tu aplicación sea reconocida como una PWA, necesitas un archivo de manifesto (manifest.json).  Este archivo le dice al navegador cómo debe comportarse tu aplicación cuando sea instalada en la pantalla de inicio de un dispositivo móvil o de escritorio.

    Nombre de la Aplicación: Define un nombre visible y otro corto para mostrar en la pantalla de inicio.

    Iconos: Proporciona diferentes tamaños de iconos (48x48, 96x96, 144x144, etc.) para que sean utilizados en varios dispositivos y contextos.
    Tema y Color de Fondo: Define el color de tema para la barra de estado del navegador y un color de fondo para la pantalla de carga inicial de tu aplicación.
URL de Inicio: Este es el archivo que se cargará al iniciar la aplicación (normalmente tu index.html).
Modo de Pantalla Completa: Define si tu aplicación se verá en modo de pantalla completa, sin barra de navegación, o en modo navegador estándar.

Aquí el código de cómo debe quedar implementado el archivo manifesto.js en la misma ruta del index.html:

```json
{
    "name": "Deudas",
    "short_name": "Deudas",
    "theme_color": "#2196f3",
    "background_color": "#2196f3",
    "display": "fullscreen",
    "orientation": "portrait",
    "scope": "./",
    "start_url": "./",
    "icons": [
        {
            "src": "./images/icono-512.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ]
}
```


3. Registrar el Manifesto en HTML
Una vez creado tu archivo manifest.json, debes vincularlo a tu archivo HTML. Esto se hace dentro del head del documento HTML, y es lo que permite que el navegador detecte tu archivo manifesto. Esto debe estar debajo de la etiqueta title del archivo index.html.

```html
<link rel="manifest" href="./manifest.json">

```

4. Configurar HTTPS (Adicional para un servidor propio, para este caso lo haremos con github pages)
Las PWAs requieren una conexión segura (HTTPS) para poder funcionar correctamente. Si estás trabajando localmente, puedes utilizar un servidor HTTPS local para las pruebas, pero cuando subas tu aplicación a producción, asegúrate de que esté en un servidor con HTTPS.

5. Instalar Workbox
Workbox es una herramienta muy útil para crear el Service Worker, que es el componente clave que permite que tu aplicación funcione sin conexión y almacene archivos en caché.

    Primero, necesitas instalar Workbox. En tu terminal, utiliza npm para instalar el paquete. Workbox te ayudará a gestionar la caché de recursos y optimizar la carga de tu aplicación.

    Nota importante: Se puede ejecutar este código desde cualquier ruta, ya que se instala de forma global.

```bash
npm install workbox-cli --global
```

6. Configurar el Service Worker
El Service Worker es un script que se ejecuta en segundo plano y gestiona la caché y las notificaciones push para tu aplicación. Debes registrar el Service Worker desde tu archivo JavaScript principal.

    Registrar el Service Worker en HTML: Dentro de tu archivo HTML principal, agrega el código necesario para registrar el Service Worker.
    Precaching de Recursos con Workbox: Utiliza Workbox para configurar el precaching, que asegura que los archivos críticos (como el HTML, CSS, JavaScript e imágenes) se descarguen en caché para que la aplicación funcione sin conexión.

    Estrategias de Caché: Existen diferentes estrategias de caché que puedes aplicar con Workbox, como almacenar archivos estáticos de forma inmediata, o caché con actualización en segundo plano.

Ahora nos debemos dirigir a la ruta del archivo index.html y ejecutar el siguiente comando por consola:

```bash
workbox wizard
```

Configuramos según lo indicado y ahora pegamos este código en el archivo index.html debajo de la etiqueta tilte.


```bash
<script type="text/javascript">
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
  }
</script>
```

**Una vez hecho esto el archivo de configuración está listo y el sitio web se encuentra preparado para subir a un servidor y mostrar el sitio web.** 

## Ejemplo de un sitio web creado solo como prueba de una aplicación web.

https://alejandrochapi94.github.io/empleados/JS/04_SitioWeb_PWA/index.html