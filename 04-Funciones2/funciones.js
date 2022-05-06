function concatenar(a, b) {
  let resultado = "";
  for (let i = 0; i < arguments.length; i++) {
    resultado += arguments[i];
  }
  return resultado;
}

function invocarFunciones() {
  let respuestas = "";
  for (let i = 0; i < arguments.length; i++) {
    respuestas += arguments[i]();
  }
  return respuestas;
}

function creadorDeIncrementos(num) {
  let numGuardado = num;
  return function incremento(a) {
    return numGuardado + a;
  };
}

function invocacionUnica() {
  function incrementar() {
    var num = 0;
    num++;
    return num;
  }
  return incrementar;
}
let incrementar = invocacionUnica();

function invocacionUnica(fn) {
  fn();
  return function () {};
}

function objetoConClousure() {
  num = 0;
  obj = {
    incremento: () => (num += 1),
    incrementoPor10: () => (num += 10),
    pedirValor: () => num,
    cambiarValor: (a) => (num = a),
  };
  return obj;
}

/*function ListaDeFuncionesInvitados() {
  let invitado;
  let array = [
    function a(a) {
      if (a === 404) {
        invitado = funcionesInvitados[0];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
    function b(a) {
      if (a === 404) {
        invitado = funcionesInvitados[1];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
    function c(a) {
      if (a === 404) {
        invitado = funcionesInvitados[2];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
    function d(a) {
      if (a === 404) {
        invitado = funcionesInvitados[3];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
    function e(a) {
      if (a === 404) {
        invitado = funcionesInvitados[4];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
    function f(a) {
      if (a === 404) {
        invitado = funcionesInvitados[5];
        return invitado;
      } else {
        return "código secreto: invalido";
      }
    },
  ];
  return array;
}
 */

/* function ListaDeFuncionesInvitados(arr, codigo) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = function (codigo) {
      if (codigo == 404) {
        return arr[i];
      } else {
        return "código secreto: invalido";
      }
    };
  }
  return newArr;
} */

function ListaDeFuncionesInvitados(arregloInvitados, codigoSecreto) {
  let arr = [];

  for (let i = 0; i < arregloInvitados.length; i++) {
    arr.push(function (codigo) {
      if (codigo === codigoSecreto) {
        return arregloInvitados[i];
      } else if (codigo !== codigoSecreto) {
        return "código secreto: invalido";
      }
    });
  }

  return arr;
}

function armarListaDeInvitados(arregloInvitados, codigoSecreto) {
  let newArr = [];
  for (let i = 0; i < arregloInvitados.length; i++) {
    newArr.push(arregloInvitados[i](codigoSecreto));
  }
  return newArr;
}
