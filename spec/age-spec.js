import{Age} from '../src/age';

describe ('Age', function(){
  let newAge;
  let testBDay = new Date(1982, 4, 21, 4, 30, 0, 0)
  ///setup variables there
  beforeEach(function(){
    newAge = new Age();
    //(year, month, day, hours, minutes, seconds, milliseconds
    newAge.earthAgeYears = 35.5
    newAge.earthLifeExpectency = 88
    newAge.userBday = testBDay;
    //establish test instances here
  });
//add tests here
  it('should convert earth years to seconds', function(){
    expect (newAge.convertEarthYearsToSeconds(this.earthAgeYears)).toEqual(1120294800);
  })

  it('this will convert earth years to planet years', function(){
    newAge.getPlanetAges();
    expect(newAge.planetAges.mercury).toEqual(8.52);
    expect(newAge.planetAges.venus).toEqual(22.01);
    expect(newAge.planetAges.mars).toEqual(66.74);
    expect(newAge.planetAges.jupiter).toEqual(421.03);
  })

  it('should calculate years left to live for all planets', function(){
    newAge.getPlanetAges();
    newAge.getYearsLeft();
    expect(newAge.yearsLeft.mercury).toEqual((88*.24)-8.52);
    expect(newAge.yearsLeft.venus).toEqual((88*.62)-22.01);
    expect(newAge.yearsLeft.mars).toEqual((88*1.88)-66.74);
    expect(newAge.yearsLeft.jupiter).toEqual((88*11.86)-421.03);
  })

  it('should return the users age in earth years', function(){
    newAge.getUsersAgeInYears();
    let currentDateTime = new Date();
    let age = (currentDateTime - testBDay)/1000 /60 /60 /24 /365.25
    let ageRounded = Math.round(age*100)/100;
    expect(newAge.planetAges.earth).toEqual(ageRounded);
  })
})
