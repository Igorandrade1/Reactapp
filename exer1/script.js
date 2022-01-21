class Mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}


class Cachorro extends Mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca
    }

   

    latir() {
        console.log("AU AU")
    }
}


console.log(new Cachorro instanceof Mamifero)



let pug = new Cachorro(4, "pug")


console.log(pug.patas)
console.log(pug.raca)