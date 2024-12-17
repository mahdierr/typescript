// Étape 1 : Définir l'interface Véhicule
interface Véhicule {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Étape 2 : Implémenter la classe Voiture
  class Voiture implements Véhicule {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Étape 3 : Créer une instance de Voiture et appeler la méthode start
  const maVoiture = new Voiture("Peugeot", "208", 2022);
  maVoiture.start(); // Affiche "Car engine started"
  