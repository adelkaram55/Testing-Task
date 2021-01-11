var loginPage = require ('./pageObject/loginPage');


module.exports={
  
  //Go To login page

  '@tags':['login'],
    before:function(browser){
      const LoginPage = new loginPage(browser)
      LoginPage.login('Adel89588044', 'More@2020')
    
    
  }
};

