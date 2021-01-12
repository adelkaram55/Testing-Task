var logininvalidemail = require ('./pageObject/loginInvalidemail');


module.exports={
  
  //Go To login page

  '@tags':['logininvalidpassword'],
    before:function(browser){
      const Logininvalidemail = new logininvalidemail(browser)
      Logininvalidemail.loginemail('Adel89588044', 'jhjhgghghjg')
     
    
  }
};

