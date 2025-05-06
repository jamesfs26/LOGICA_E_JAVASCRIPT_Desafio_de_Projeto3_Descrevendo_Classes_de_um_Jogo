class Heroi {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo; 
    }

    atacar() {
        let ataque;
        
    
        if (this.tipo === "mago") {
            ataque = "usando Invocações";
        } else if (this.tipo === "guerreiro") {
            ataque = "usando Espada e Escudo";
        } else if (this.tipo === "monge") {
            ataque = "usando a Palma Budista";
        } else if (this.tipo === "ninja") {
            ataque = "usando Bombas de fumaça";
        } else {
            ataque = "usando um ataque genérico";
        }

        console.log(`O ${this.tipo} ${this.nome} atacou ${ataque}!`);
    }
}

// Lista de heróis
const herois = [
    new Heroi("Harry Potter", "mago"),
    new Heroi("Gladiador", "guerreiro"),
    new Heroi("Mestre Giriku", "monge"),
    new Heroi("Kakashi", "ninja")
];

// Estrutura de repetição (for...of)
for (let heroi of herois) {
    heroi.atacar(); // Chama o método atacar() para cada herói
}