export class Age{
  constructor(){
    this.currentTime;
    this.earthAgeYears;
    this.usersBday;
    this.planetAges = {};
    this.planetlifeExpectancies={};
    // this.getPlanetAges();
  }

  convertEarthYearsToSeconds(){
   let usersAgeInSeconds = this.earthAgeYears * 365.25 * 24 * 60 * 60;
   return usersAgeInSeconds;
  }
  getPlanetAges(){
    console.log(this.planetAges.mercury);
    this.planetAges.mercury = this.earthAgeYears * .24
    console.log(this.planetAges.mercury);
  }

}
