# CRYPTO Y LOS ID

La librería `crypto` en Node.js es excelente para generar IDs únicos y aleatorios.  Aunque no genera IDs *automáticamente* en el sentido de una auto-incrementación como en una base de datos, proporciona las herramientas para crear IDs con una alta probabilidad de unicidad, ideales para diversos usos como identificadores de sesión, nombres de archivo, etc.

**Métodos útiles de `crypto` para generar IDs:**

* **`crypto.randomBytes(size)`:**  Genera un buffer con bytes pseudoaleatorios. Es la base para generar IDs robustos.  El argumento `size` especifica el número de bytes a generar.

* **`crypto.randomUUID()`:** (Desde Node.js v14.17.0)  Genera un UUID (Universally Unique Identifier) versión 4, que sigue un estándar específico para garantizar la unicidad con alta probabilidad, incluso entre diferentes sistemas.  Es la forma más sencilla y recomendada para generar UUIDs.

* **`crypto.createHash(algorithm).update(data).digest(encoding)`:**  Permite generar hashes criptográficos.  Si bien no es ideal para IDs directamente (ya que los hashes tienen una longitud fija), puede ser útil si necesitas derivar un ID a partir de otros datos.


**Conversión a string:**

Una vez que tengas los bytes aleatorios, puedes convertirlos a una representación en string. Algunas opciones son:

* **`toString('hex')`:** Convierte el buffer a una cadena hexadecimal.  Es una opción común y produce IDs legibles.

* **`toString('base64')`:** Convierte el buffer a una cadena base64.  Es más compacto que hexadecimal, pero puede contener caracteres especiales.

* **`toString('base64url')`:** Similar a base64, pero usa caracteres seguros para URL, evitando la necesidad de codificarlos.


**Ejemplo de código (generando diferentes tipos de IDs):**

```javascript
const crypto = require('crypto');

// 1. ID aleatorio hexadecimal (16 bytes -> 32 caracteres hexadecimales)
const randomIdHex = crypto.randomBytes(16).toString('hex');
console.log('ID hexadecimal:', randomIdHex);

// 2. ID aleatorio base64url (16 bytes)
const randomIdBase64url = crypto.randomBytes(16).toString('base64url');
console.log('ID base64url:', randomIdBase64url);


// 3. UUID v4 (la forma más sencilla y recomendada)
const uuid = crypto.randomUUID();
console.log('UUID v4:', uuid);

// 4.  Hash SHA-256 (para derivar un ID de otros datos - NO recomendado para IDs únicos directamente)
const data = 'alguna_información';
const hash = crypto.createHash('sha256').update(data).digest('hex');
console.log('Hash SHA-256:', hash);

//Ejemplo de como generar ids de forma incremental.

function generarIdIncremental() {
    let contador = 0; // Inicializar el contador

    return function () {
        contador++;
        const id = contador.toString().padStart(5, '0'); // Formatear con ceros a la izquierda
        return id
    };
}


const obtenerSiguienteId = generarIdIncremental();

const id1 = obtenerSiguienteId();
console.log(id1); // Output 00001

const id2 = obtenerSiguienteId();
console.log(id2); // Output 00002

const id3 = obtenerSiguienteId();
console.log(id3); // Output 00003

```


**Recomendaciones:**

* Para la mayoría de los casos, `crypto.randomUUID()` es la mejor opción para generar IDs únicos.
* Si necesitas un ID derivado de otros datos, usa `crypto.createHash()`, pero ten en cuenta las posibles colisiones.
* Elige la longitud del ID en función de tus necesidades.  Para una alta probabilidad de unicidad, se recomienda al menos 16 bytes (128 bits).
* Para IDs legibles por humanos, hexadecimal es una buena opción.  Para IDs más compactos, considera base64url.

