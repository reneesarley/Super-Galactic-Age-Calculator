import{Age} from '../src/age';

describe ('Age', function(){
  let newAge;
  let testBDay = new Date(1982, 4, 21, 4, 30, 0, 0)
  beforeEach(function(){
    newAge = new Age(testBDay);
    newAge.earthLifeExpectency = 88
  });
  it('should convert earth years to seconds', function(){
    let currentDateTime = new Date()
    let ageInSeconds = (currentDateTime - testBDay)/1000
    expect (Math.round(newAge.convertEarthYearsToSeconds())).toEqual(Math.round(ageInSeconds));
  })

  it('should calculate years left to live for all planets', function(){
    newAge.getYearsLeft();
    expect(newAge.yearsLeft.mercury).toEqual((88*.24)-newAge.planetAges.mercury);
    expect(newAge.yearsLeft.venus).toEqual((88*.62)-newAge.planetAges.venus);
    expect(newAge.yearsLeft.mars).toEqual((88*1.88)-newAge.planetAges.mars);
    expect(newAge.yearsLeft.jupiter).toEqual((88*11.86)-newAge.planetAges.jupiter);
  })

  it('should return the users age in years for each planet', function(){
    // newAge.getUsersAgeInYears();
    let currentDateTime = new Date();
    let age = (currentDateTime - testBDay)/1000 /60 /60 /24 /365.25
    expect(newAge.planetAges.earth).toEqual(age);
    expect(newAge.planetAges.mercury).toEqual(age * .24);
    expect(newAge.planetAges.venus).toEqual(age * .62);
    expect(newAge.planetAges.mars).toEqual(age * 1.88);
    expect(newAge.planetAges.jupiter).toEqual(age * 11.86);
  })
})
