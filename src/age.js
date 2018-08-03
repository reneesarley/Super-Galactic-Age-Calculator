export class Age{
  constructor(){
    this.currentTime;
    this.earthAgeYears;
    this.earthLifeExpectency;
    this.usersBday;
    this.planetAges = {};
    this.planetLifeExpectancies={};
    this.yearsLeft={};
    this.allPlanets=['earth', 'mercury', 'venus', 'mars','jupiter']
    this.earthVersusPlanetRate ={earth: 1,
                                 mercury:.24,
                                 venus: .62,
                                 mars: 1.88,
                                 jupiter: 11.86};
    // this.getPlanetAges();
  }

  convertEarthYearsToSeconds(){
   let usersAgeInSeconds = this.earthAgeYears * 365.25 * 24 * 60 * 60;
   return usersAgeInSeconds;
  }
  getPlanetAges(){
    for (let i =0 ; i < this.allPlanets.length; i++){
      let planet = this.allPlanets[i];
    this.planetAges[planet] = this.earthAgeYears * this.earthVersusPlanetRate[planet];
    }
  }
  getYearsLeft(){
    for (let i =0 ; i < this.allPlanets.length; i++){
      let planet = this.allPlanets[i];
    this.yearsLeft[planet] = (this.earthLifeExpectency * this.earthVersusPlanetRate[planet]) - this.planetAges[planet];
    }
  }


}
