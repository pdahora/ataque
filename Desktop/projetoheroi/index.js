
function nivelVitorias(vitorias) {
    if (vitorias < 10) {
        return `O Herói tem ${vitorias} vitórias e está no nível de Bronze`;
    } else if (vitorias >= 10 && vitorias <= 20) {
        return `O Herói tem ${vitorias} vitórias e está no nível de Prata.`;

    } else if (vitorias >= 21 && vitorias <= 50) {
        return `O Herói tem ${vitorias} vitórias e está no nível de Ouro}`;

    } else if (vitorias >= 51 && vitorias <= 80) {
        return `O Herói tem ${vitorias} vitórias e está no nível de Diamante}`;

    } else if (vitorias >= 81 && vitorias <= 90) {
        return `O Herói tem ${vitorias} vitórias e está no nível de Super}`;
    } else {
        return `O Herói tem ${vitorias} vitórias e está no nível de Imortal}`;
    }
}

function nivelDerrota(derrotas) {
    if (derrotas < 10) {
        return `O Herói tem ${derrotas} derrotas e está no nível de Bronze`;
    } else if (derrotas >= 10 && derrotas <= 20) {
        return "Prata";
    } else {
        return "Invencível";
    }
}

let derrotas = 2;
let vitorias = 10;

let nivelVitoriaTexto = nivelVitorias(vitorias);
let nivelDerrotaTexto = nivelDerrota(derrotas);

console.log(nivelVitoriaTexto);
console.log(nivelDerrotaTexto);

let resultado = vitorias - derrotas;

console.log("diferanca de vitórias:", resultado);
