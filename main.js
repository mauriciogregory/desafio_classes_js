listaDeTiposDePersonagens = ["guerreiro", "mago"]

class Hero {
  constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
}
  atacar(ataque) {
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  } 
}

function Principal(){
  let ninja = new Hero("SubZero", 30, "ninja")
  ninja.atacar("shuriken")

  let guerreiro = new Hero("Espadachim", 35, "guerreiro")
  guerreiro.atacar("espada")

  let mago = new Hero("Merlin", 60, "mago")
  mago.atacar("magia")

  let monge = new Hero("Monge", 50, "monge")
  monge.atacar("marciais")
}

Principal()
