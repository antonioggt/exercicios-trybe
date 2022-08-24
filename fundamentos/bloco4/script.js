let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//  function boasVindas () {
//    return "Bem vinda, " + info.personagem
//  }

  //console.log(boasVindas());

  info["recorrente"] = "Sim"

//console.log(info);

//for (let key in info) {
//    console.log(key);
//} 

//for (let key in info) {
//    console.log(info[key]);
//}
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

function resultado() {
    for (let key in info){
        if (info[key] === info2[key]) {    
            console.log("Ambos recorrentes")
        } else {        
        resultadinho = console.log(info[key] + " e " + info2[key])
        }
        
    }
    return resultadinho;
}

console.log(resultado());

