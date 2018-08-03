export class Age{
  constructor(birthday){
    this.usersBday = birthday;
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
    this.getUsersAgeInYears();
  }

  convertEarthYearsToSeconds(){
   let usersAgeInSeconds = this.planetAges.earth * 365.25 * 24 * 60 * 60;
   return usersAgeInSeconds;
  }
  getYearsLeft(){
    for (let i =0 ; i < this.allPlanets.length; i++){
      let planet = this.allPlanets[i];
    this.yearsLeft[planet] = (this.earthLifeExpectency * this.earthVersusPlanetRate[planet]) - this.planetAges[planet];
    }
  }
  getUsersAgeInYears(){
    let currentDateTime = new Date();
    let earthAgeInYears = (currentDateTime - this.usersBday) /1000 /60 /60 /24 /365.25;
    for (let i =0 ; i < this.allPlanets.length; i++){
      let planet = this.allPlanets[i];
      this.planetAges[planet] = earthAgeInYears * this.earthVersusPlanetRate[planet] ;
    }
  }
}
