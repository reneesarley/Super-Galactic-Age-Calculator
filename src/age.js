export class Age{
  constructor(){
    this.currentTime;
    this.usersAge;
    this.usersBday;
    this.planetAges={};
    this.planetlifeExpectancies={};
  }

  convertEarthYearsToSeconds(){
   let usersAgeInSeconds = this.usersAge * 365.25 * 24 * 60 * 60;
   return usersAgeInSeconds;
  }

}
