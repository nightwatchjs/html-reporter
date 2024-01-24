describe('Nightwatchjs.org Demo', function () {
  before((browser) => browser.navigateTo('https://nightwatchjs.org/'));

  it('Demo test nightwatchjs.org', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Nightwatch V3')
      .assert.visible('.hero__heading')
      .assert.visible('.hero__action-copy-command-button')
      .click('.hero__action-copy-command-button')
      .assert.textContains('.hero__action-copy-command-button.active', 'Copied!');
  });

  after((browser) => browser.end());
});
