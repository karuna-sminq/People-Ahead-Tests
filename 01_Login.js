//spec.js

console.log('-------------------------------------');
console.log('Login Spec');
console.log('-------------------------------------');

describe("Login Page: ", function() {

  var baseUrl = 'http://staging.business.sminq.com';
  var sleep_time = 3000;

  it("should enter only valid mobile number", function() {

    browser.get(baseUrl);

    browser.sleep(sleep_time);

    expect(element(by.css('.md-raised.md-primary.md-button.md-sminqTheme-theme.md-ink-ripple.flex-xs-100.flex-sm-100.flex-100')).isEnabled()).toBeFalsy();

    element(by.model('phoneNo')).sendKeys(9158421603);

    browser.sleep(sleep_time);

    expect(element(by.css('.md-raised.md-primary.md-button.md-sminqTheme-theme.md-ink-ripple.flex-xs-100.flex-sm-100.flex-100')).isEnabled()).toBeTruthy();

    //Login
    element(by.css('.md-raised.md-primary.md-button.md-sminqTheme-theme.md-ink-ripple.flex-xs-100.flex-sm-100.flex-100')).click();

    browser.sleep(sleep_time);

  });

  it("should verify valid OTP and login", function () {

    browser.ignoreSynchronization = true;

    expect(element(by.buttonText('Login with OTP')).getAttribute('disabled')).toEqual('true');

    element(by.model('otp')).sendKeys(989898);

    browser.sleep(sleep_time);

    expect(element(by.buttonText('Login with OTP')).isEnabled()).toBeTruthy();

    //Verify OTP
    element(by.buttonText('Login with OTP')).click();

    browser.sleep(sleep_time);

    expect(element(by.css('.md-padding.dashboard-content.ng-scope.md-sminqTheme-theme')).isPresent()).toBeTruthy();

    browser.sleep(sleep_time);

  });

});
