
module.exports = function (browser) {


  this.emailField = 'input[type=text]';
  this.passwordField = 'input[type=password]';
  this.cssSelector = "xpath"
  this.loginButton = 'button[type=submit]';
  this.url= 'https://twitter.com/login';

  this.loginemail = function() {
    browser
      .url(this.url)
       .waitForElementVisible('body')
        .setValue(this.emailField, '89588044')
         .setValue(this.passwordField, 'More@2020')
         .click(this.cssSelector ,'//*[@id="react-root"]/div/div/div[2]/main/div/div/div[2]/form/div/div[3]/div/div')
         .assert.containsText('div.css-901oao.r-daml9f.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-qvutc0','We could not verify your credentials. Please double-check and try again..')
 
      .end();
  }
};