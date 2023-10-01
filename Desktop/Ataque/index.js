
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    } atacar() {

        let ataque = " ";
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break
            case "guerreiro":
                ataque = "espada";
                break
            case "monge":
                ataque = "artes marciais";
                break
            case 'ninja':
                ataque = 'shuriken';
                break
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque} idade ${this.idade}`);
    }
}
let heroiMonge = new Hero('Spliter', 75, 'monge');
heroiMonge.atacar();

let heroiNinja = new Hero('BruceLee', 25, 'ninja');
heroiNinja.atacar();
