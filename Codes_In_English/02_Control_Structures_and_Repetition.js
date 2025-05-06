
class Hero {
    constructor(name, type) {
    this.name = name;
    this.type = type;
    }
    
    attack() {
    let attack;
    
    if (this.type === "mage") {
    attack = "using Summons";
    } else if (this.type === "warrior") {
    attack = "using Sword and Shield";
    } else if (this.type === "monk") {
    attack = "using Buddhist Palm";
    } else if (this.type === "ninja") {
    attack = "using Smoke Bombs";
    } else {
    attack = "using a generic attack";
    }
    
    console.log(`The ${this.type} ${this.name} attacked ${attack}!`); }
    }
    
    // List of heroes
    const heroes = [
    new Hero("Harry Potter", "wizard"),
    new Hero("Gladiator", "warrior"),
    new Hero("Master Giriku", "monk"),
    new Hero("Kakashi", "ninja")
    ];
    
    // Looping structure (for...of)
    for (let hero of heroes) {
    hero.attack(); // Call the attack() method for each hero
    }
    
    