// Dados dos heróis em JSON (um array de objetos)

const herois = [
    {
        nome: "Gandalf",
        tipo: "mago",
        ataque: "Magia Arcana"
    },
    {
        nome: "Aragorn",
        tipo: "guerreiro",
        ataque: "Espada Flamejante"
    },
    {
        nome: "Lee Sin",
        tipo: "monge",
        ataque: "Punho das Nuvens"
    },
    {
        nome: "Naruto",
        tipo: "ninja",
        ataque: "Shuriken do Vento"
    }
];

// Função para atacar (usa if...else básico)
function atacar(heroi) {
    let mensagem;
    
    if (heroi.tipo === "mago") {
        mensagem = `O mago ${heroi.nome} atacou usando ${heroi.ataque}!`;
    } else if (heroi.tipo === "guerreiro") {
        mensagem = `O guerreiro ${heroi.nome} atacou usando ${heroi.ataque}!`;
    } else if (heroi.tipo === "monge") {
        mensagem = `O monge ${heroi.nome} atacou usando ${heroi.ataque}!`;
    } else if (heroi.tipo === "ninja") {
        mensagem = `O ninja ${heroi.nome} atacou usando ${heroi.ataque}!`;
    } else {
        mensagem = `${heroi.nome} usou um ataque desconhecido.`;
    }

    console.log(mensagem);
}

// Loop for...of para executar os ataques
for (const heroi of herois) {
    atacar(heroi);
}

