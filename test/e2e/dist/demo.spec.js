'use strict';

var _contactPo = require('./contact.po.js');

describe('Contacts App', function () {
  var poWelcome = void 0;

  beforeEach(function () {
    poWelcome = new _contactPo.PageObjectContact();
    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', function () {
    expect(poWelcome.getCurrentPageTitle()).toBe('Contacts');
  });

  it('should have heading', function () {
    expect(poWelcome.getHeading()).toBe('External Contacts');
  });

  it('should have sub heading', function () {
    expect(poWelcome.getSubHeading()).toBe('Select the client contacts assocaited with this offer');
  });

  it('should show modal when clicking "add contact" button', function () {
    expect(poWelcome.openModal()).toBe(true);
  });
});