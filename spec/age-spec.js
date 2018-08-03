import{Age} from '../src/age';

describe ('Age', function(){

  ///setup variables there
  beforeEach(function(){

    //establish test instances here
  });
//add tests here
  it('should convert earth years to seconds', function(){
    let newAge = new Age();
    newAge.usersAge = 35.5
    expect (newAge.convertEarthYearsToSeconds(this.usersAge)).toEqual(1120294800);
  })

})
