export class Age{
  constructor(userBday){
    this.usersBday;
    this.currentTime;
    this.earthAgeYears;
    this.earthLifeExpectency;
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
  getUsersAgeInYears(){
    let currentDateTime = new Date();
    let planet = 'earth'
    console.log(this.userBday);
    console.log(currentDateTime);
    let ageInYears = currentDateTime - this.userBday;
    ageInYears = ageInYears /1000 /60 /60 /24 /365.25;
    this.planetAges[planet] = Math.round(ageInYears * 100) / 100;
    console.log(this.planetAges[planet]);
  }
}
