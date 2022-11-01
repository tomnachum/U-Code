"use strict";
let z = new Zoo();
z.addAnimalFactory("Lion", "Simba", 1);
z.addAnimalFactory("Lion", "Nala", 1);
z.addAnimalFactory("Whale", "Willy", 1);
z.addAnimalFactory("Goose", "Akka", 1);
z.addAnimalFactory("SnowyOwl", "Hedwig", 1);
z.addAnimalFactory("ClownFish", "Nemo", 1);
z.addAnimalFactory("ClownFish", "Marlin", 1);
console.log(z.toString());
z.feedAnimalsForTwoWeeks();
//# sourceMappingURL=main.js.map