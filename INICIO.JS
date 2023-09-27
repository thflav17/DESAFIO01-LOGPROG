//DESAFIO 01

    let Jogador = {
        nome = "Surfista Prateado"
        NvExperience = 3800
    }
    if(Jogador.NvExperience <== 1000){
        console.log("Ferro")
    } else if(Jogador.NvExperience >== 1001 && Jogador.NvExperience <== 2000){
        console.log("Bronze")
    } else if(Jogador.NvExperience >== 2001 && Jogador.NvExperience <== 5000){
        console.log("Prata")
    } else if(Jogador.NvExperience >== 5001 && Jogador.NvExperience <== 7000){
        console.log("Ouro")
    } else if(Jogador.NvExperience >== 7001 && Jogador.NvExperience <== 8000){
        console.log("Platina")
    } else if(Jogador.NvExperience >== 8001 && Jogador.NvExperience <== 9000){
        console.log("Ascendente")
    } else if(Jogador.NvExperience >== 9001 && Jogador.NvExperience <== 10000){
        console.log("Imortal")
    } else if(Jogador.NvExperience >== 10001){
        console.log("Radiante")
    }
    console.log("O Jogador de nome " + Jogador.nome + "está no nível de " + Jogador.NvExperience);


