
module.exports = function (browser) {


  this.emailField = 'input[type=text]';
  this.passwordField = 'input[type=password]';
  this.cssSelector = "xpath"
  this.loginButton = 'button[type=submit]';
  this.url= 'https://twitter.com/login';

  this.login = function(usern,passw) {
    browser
      .url(this.url)
       .waitForElementVisible('body')
        .setValue(this.emailField, usern )
         .setValue(this.passwordField, passw)
         .click(this.cssSelector ,'//*[@id="react-root"]/div/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div')
         .assert.containsText('h2.css-4rbku5.css-901oao.css-bfa6kz.r-18jsvk2.r-1qd0xha.r-1b6yd1w.r-1vr29t4.r-ad9z0x.r-bcqeeo.r-qvutc0', "Home")
 
      .end();
  }
};

