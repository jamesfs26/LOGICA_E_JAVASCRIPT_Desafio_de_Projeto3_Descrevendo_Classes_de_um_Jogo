
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let attackType;

        switch (this.type) {
            case "Mago":
                attackType = "Magia";
                break;
            case "Guerreiro":
                attackType = "Espada";
                break;
            case "Lutador":
                attackType = "Artes Marciais";
                break;
            case "Ninja":
                attackType = "shuriken";
                break;
            case "Monge":
                attackType = "Punho Espiritual";
                break;
            default:
                attackType = "Ataque Desconhecido";
        }

        console.log(`O ${this.type} conhecido como ${this.name} atacou usando ${attackType}`);
    }
}

// Exemplos de uso
const hero1 = new Hero("Gandalf", 1000, "Mago");
hero1.attack();

const hero2 = new Hero("Aragorn", 87, "Guerreiro");
hero2.attack();

const hero3 = new Hero("Goku", 30, "Lutador");
hero3.attack();

const hero4 = new Hero("Naruto", 16, "Ninja");
hero4.attack();

const hero5 = new Hero("Netero", 115, "Monge");
hero5.attack()

