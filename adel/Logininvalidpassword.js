var logininvalidpassword = require ('./pageObject/loginInvalidpassword');


module.exports={
  
  //Go To login page

  '@tags':['logininvalidpassword'],
    before:function(browser){
      const Logininvalidpassword = new logininvalidpassword(browser)
      Logininvalidpassword.loginpassword('Adel89588044', 'jhjhgghghjg')
     
    
  }
};


