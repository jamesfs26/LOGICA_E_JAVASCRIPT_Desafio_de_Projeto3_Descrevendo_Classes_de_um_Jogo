// Hero data in JSON (an array of objects)
const heroes = [
    {
    name: "Gandalf",
    type: "wizard",
    attack: "Arcane Magic"
    },
    {
    name: "Aragorn",
    type: "warrior",
    attack: "Flaming Sword"
    },
    {
    name: "Lee Sin",
    type: "monk",
    attack: "Fist of the Clouds"
    },
    {
    name: "Naruto",
    type: "ninja",
    attack: "Wind Shuriken"
    }
    ];
    
    // Function to attack (uses basic if...else)
    function attack(hero) {
    let message;
    
    if (hero.type === "wizard") {
    message = `The wizard ${hero.name} attacked using ${hero.attack}!`; } else if (hero.type === "warrior") {
    message = `The warrior ${hero.name} attacked using ${hero.attack}!`;
    } else if (hero.type === "monk") {
    message = `The monk ${hero.name} attacked using ${hero.attack}!`;
    } else if (hero.type === "ninja") {
    message = `The ninja ${hero.name} attacked using ${hero.attack}!`;
    } else {
    message = `${hero.name} used an unknown attack.`;
    }
    
    console.log(message);
    }
    
    // For...of loop to execute the attacks
    for (const hero of heroes) {
    attack(hero);
    }   