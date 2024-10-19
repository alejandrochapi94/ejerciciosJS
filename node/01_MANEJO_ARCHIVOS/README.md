# Manejo de archivos con Javascript

Como habíamos visto con python, se puede tratar con archivos de forma local, vamos a realizar lo mismo con la ayuda de JavaScript.

## Breve explicación de cómo funciona

File System (fs) es un módulo nativo en Node.js que permite interactuar con el sistema de archivos de tu computadora. Con este módulo, puedes realizar operaciones como leer, escribir, actualizar, renombrar, eliminar archivos y directorios. Estas tareas son fundamentales para muchas aplicaciones del mundo real, como gestores de archivos, aplicaciones que guardan datos en archivos de texto o JSON, y mucho más.

Introducción al FileSystem (fs) en Node.js
El módulo fs proporciona dos maneras principales de realizar operaciones de archivo:

Operaciones sincrónicas (Sync): Bloquean la ejecución del código hasta que la operación se completa.
Operaciones asíncronas: No bloquean la ejecución del código. Usan callbacks, promesas o async/await para manejar el resultado.

## Algunas operaciones básicas que puedes hacer con fs:

- Leer archivos

fs.readFileSync(): Lee un archivo de manera sincrónica.
fs.readFile(): Lee un archivo de manera asíncrona.

- Escribir archivos

fs.writeFileSync(): Escribe en un archivo de manera sincrónica.
fs.writeFile(): Escribe en un archivo de manera asíncrona.

- Actualizar archivos

fs.appendFileSync(): Añade contenido al final de un archivo de manera sincrónica.
fs.appendFile(): Añade contenido al final de un archivo de manera asíncrona.

- Eliminar archivos

fs.unlinkSync(): Elimina un archivo de manera sincrónica.
fs.unlink(): Elimina un archivo de manera asíncrona.

- Renombrar archivos

fs.renameSync(): Renombra un archivo de manera sincrónica.
fs.rename(): Renombra un archivo de manera asíncrona.

# Videos explicativos

Todos los videos explicativos de las clases los puede encontrar en este Drive:
https://drive.google.com/drive/folders/1z19GVJqkYrDOd5mroOzQ57qeTtHPSgpr?usp=sharing

- Intentemos replicar estos ejercicios para comprender de mejor manera su funcionamiento.
- Si hay algún problema o la explicación de los videos no es clara por favor informar.
- Crear una rama alterna en el caso de tener algún problema con el funcionamiento.