
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
