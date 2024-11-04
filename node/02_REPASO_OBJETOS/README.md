# Repaso de objetos en Javascript

¿Qué es un objeto en JavaScript?

En JavaScript, casi todo es un objeto (excepto los tipos de datos primitivos como números, cadenas, booleanos, null y undefined). Un objeto es una colección de propiedades, donde cada propiedad es un par clave-valor. Las claves pueden ser cadenas (o Symbols) y los valores pueden ser de cualquier tipo de dato. Los objetos también pueden tener métodos, que son funciones asociadas al objeto.

## Algo importante por entender

Aunque hay varias maneras de crear objetos, la notación literal {} es la más común y concisa para crear objetos individuales. Las funciones constructoras y las clases son útiles para crear múltiples objetos del mismo tipo, mientras que Object.create() es útil para la herencia prototípica. Entender estos diferentes métodos te permitirá trabajar con objetos de manera más efectiva en JavaScript.

### Diferentes formas de definir un objeto en JS

Objeto Literal

Es la forma más simple y común de crear objetos en JavaScript. Se define utilizando llaves {} y contiene una lista de pares clave-valor separados por dos puntos.

Constructor Object(): Puedes crear un objeto vacío usando el constructor Object(). Luego, puedes agregarle propiedades dinámicamente.

Funciones constructoras: Permiten crear múltiples objetos del mismo "tipo" con propiedades y métodos predefinidos. Actúan como plantillas para crear objetos.

Clases (ES6+): Introducidas en ES6, las clases proporcionan una sintaxis más clara y moderna para definir funciones constructoras y prototipos. Son "syntactic sugar" sobre las funciones constructoras.

Object.create(): Permite crear un nuevo objeto que hereda las propiedades de un objeto prototipo. Es útil para implementar herencia prototípica.