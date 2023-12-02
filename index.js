let saldoDeVitoria = calcular(100, 10)
let elo = classicadorDeRank(saldoDeVitoria)

console.log("O Heroi tem de saldo de "+ saldoDeVitoria+" está no nivel "+ elo)
console.log(`O Heroi tem um saldo de ${saldoDeVitoria} vitorias, esta no vível ${elo}`)

function calcular(vitorias, derrotas){
    return vitorias - derrotas
}

function classicadorDeRank(saldo){
    let rank = ""
    if(saldo <= 10){
        rank = "FERRO"
    }
    else if(saldo <= 20){
        rank = "BRONZE"
    }
    else if(saldo <= 50){
        rank = "PRATA"
    }
    else if(saldo <= 80){
        rank = "OURO"
    }
    else if(saldo <= 90){
        rank = "DIAMANTE"
    }
    else if(saldo <= 100){
        rank = "LENDÁRIO"
    }
    else if(saldo > 100){
        rank = "IMORTAL"
    }

    return rank
}
