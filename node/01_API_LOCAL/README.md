# Uso de una api para descargar datos de una api web

En el presente archivo se puede ver el uso de una api web para enviar información que mediante dicha API se pueden descargar los archivos enviados.

- Esto nos permite descargar datos web, procesarlos de forma local y luego descrgarlos y almacenarlos como una copia de seguridad de forma local.

El programa se ejecutará en el lado del navegador, tenemos un ejercicio1.html que se vincula al archivo 01_api_local.js para realizar el proceso de descarga de un archivo JSON y guardarlo de forma local.

### Para ello utilizaremos algunos elementos ya vistos previamente en clases.

## Explicación del funcionamiento del código:

1. Escuchar el clic del botón: Cuando el usuario hace clic en el botón con el ID "download-btn", se activa una función que comienza el proceso de descarga de datos.

2. Definir la URL de la API: Se establece la dirección de la API desde donde se obtendrán los datos. Esta dirección apunta a un archivo JSON que contiene información sobre empleados.

3. Realizar la solicitud a la API: Se envía una solicitud a la URL definida para obtener los datos. Este paso es asíncrono, lo que significa que no bloquea la ejecución del resto del código mientras se espera la respuesta.

4. Procesar la respuesta: Cuando la solicitud se completa y se recibe una respuesta, se convierte esa respuesta en un formato que JavaScript puede entender (un objeto JSON).

5. Manipular los datos: Una vez que se tienen los datos, se crean nuevos objetos a partir de ellos, donde se añade una nueva propiedad que convierte el color de los ojos de cada empleado a mayúsculas. Esto permite personalizar o transformar los datos antes de la descarga.

6. Convertir los datos a formato JSON: Los datos manipulados se convierten de nuevo a una cadena en formato JSON. Esto es necesario para que se pueda descargar correctamente como un archivo.

7. Crear un archivo descargable: Se genera un objeto llamado "Blob" a partir de la cadena JSON. Este objeto representa un archivo de tipo binario que puede ser descargado.

8. Preparar el enlace de descarga: Se crea un elemento de enlace (un <a>) en el documento, y se configura para que apunte al archivo Blob que se creó. También se establece el nombre que tendrá el archivo al ser descargado (en este caso, "datos.json").

9. Simular un clic para descargar: Se añade el enlace al documento y se simula un clic en él, lo que inicia automáticamente la descarga del archivo.

10. Limpiar el documento: Después de que la descarga se ha iniciado, el enlace se elimina del documento para mantener el DOM limpio.

11. Manejo de errores: Si hay algún problema al realizar la solicitud a la API (como que no se pueda acceder a ella), se captura el error y se muestra en la consola para su revisión.

### Información nueva que aparecerá en el ejercicio

## ¿Qué es un Blob?

Definición: Un Blob (Binary Large Object) es un objeto que representa datos en forma de un conjunto de bytes. Se utiliza para manejar datos binarios en aplicaciones web, como imágenes, audio, video o, en este caso, archivos de texto o JSON.

### Características:

Tamaño: Los Blob pueden ser muy grandes, ya que están diseñados para manejar grandes cantidades de datos.

Tipo MIME: Un Blob puede tener un tipo MIME (Multipurpose Internet Mail Extensions), que describe el formato de los datos contenidos en él. Por ejemplo, el tipo MIME para un archivo JSON es application/json.

Inmutabilidad: Una vez creado, el contenido de un Blob no puede ser modificado. Si necesitas cambiar los datos, deberás crear un nuevo Blob con los datos actualizados.
Uso del Blob en este código

Creación de Blob:

En el código, se crea un Blob a partir de los datos manipulados (la cadena JSON). Este Blob actúa como un contenedor para los datos que quieres ofrecer como descarga.
La línea de código que crea el Blob utiliza la función new Blob(), que toma dos argumentos:
Un array que contiene los datos que deseas incluir en el Blob (en este caso, la cadena JSON).
Un objeto de opciones que especifica el tipo MIME del Blob, indicando que los datos son de tipo application/json.
Generación de URL:

Después de crear el Blob, se utiliza URL.createObjectURL(blob) para generar una URL temporal que representa el Blob. Esta URL es necesaria para poder acceder al contenido del Blob a través de un enlace.
Esta URL es única y se puede usar para descargar el archivo, pero solo es válida mientras la página web esté abierta.
Descarga del archivo:

Al establecer el href del enlace (<a>) con la URL creada a partir del Blob, y al simular un clic en el enlace, se inicia la descarga del contenido del Blob como un archivo. En este caso, el archivo se descargará con el nombre especificado, datos.json.
Cuando el usuario hace clic en el enlace, el navegador trata el contenido del Blob como un archivo y lo descarga, permitiendo que el usuario lo guarde en su dispositivo.

Revisar el código e intentar replicarlo para su mejor comprensión.

Si tiene dudas o preguntas del funcionamiento del código escribirme o grabar un video con sus dudas.

Recordar que este material corresponde a las clases Asíncronas (1h).
