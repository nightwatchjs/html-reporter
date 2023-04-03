describe('Nightwatchjs.org Demo', function () {
  before((browser) => browser.navigateTo('https://nightwatchjs.org/'));

  it('Demo test nightwatchjs.org', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Nightwatch.js')
      .assert.visible('.brand-message')
      .assert.visible('.button-default.copy.btn-copy')
      .click('.button-default.copy.btn-copy')
      .assert.textContains('.npm-install', 'Code copied');
  });

  after((browser) => browser.end());
});
