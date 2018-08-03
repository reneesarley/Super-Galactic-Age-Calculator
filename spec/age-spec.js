import{Age} from '../src/age';

describe ('Age', function(){
  let newAge;
  ///setup variables there
  beforeEach(function(){
    newAge = new Age();
    newAge.earthAgeYears = 35.5
    //establish test instances here
  });
//add tests here
  it('should convert earth years to seconds', function(){
    expect (newAge.convertEarthYearsToSeconds(this.earthAgeYears)).toEqual(1120294800);
  })

  it('this will convert earth years to earth planet years', function(){
    newAge.getPlanetAges();
    expect(newAge.planetAges.mercury).toEqual(8.52);
    expect(newAge.planetAges.venus).toEqual(22.01);
    expect(newAge.planetAges.mars).toEqual(66.74);
    expect(newAge.planetAges.jupiter).toEqual(421.03);
  })

})
