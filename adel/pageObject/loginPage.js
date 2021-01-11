
module.exports = function (browser) {


  this.emailField = 'input[type=text]';
  this.passwordField = 'input[type=password]';
  this.cssSelector = "xpath"
  this.loginButton = 'button[type=submit]';
  this.url= 'https://twitter.com/login';

  this.login = function() {
    browser
      .url(this.url)
       .waitForElementVisible('body')
        .setValue(this.emailField, 'Adel89588044')
         .setValue(this.passwordField, 'More@2020')
         .click(this.cssSelector ,'//*[@id="react-root"]/div/div/div[2]/main/div/div/div[1]/form/div/div[3]/div')
 
      .end();
  }
};