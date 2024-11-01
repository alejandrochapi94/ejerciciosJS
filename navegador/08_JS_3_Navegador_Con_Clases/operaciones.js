// operations.js (módulo de operaciones)
export class Suma {
    static operate(a, b) {
      return a + b;
    }
  }
  //Nueva clase independiente
  export class Resta {
    static operate(a, b) {
      return a - b;
    }
  }
  //Tercera clase
  export class Multiplicacion {
    static operate(a, b) {
      return a * b;
    }
  }
  //Cuarta clase
  export class Division {
    static operate(a, b) {
      if (b === 0) {
        return "Error: División por cero";
      }
      return a / b;
    }
  }
  