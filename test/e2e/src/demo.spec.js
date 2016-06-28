import {PageObjectContact} from './contact.po.js';

describe('Contacts App', function() {
  let poWelcome;

  beforeEach(() => {
    poWelcome = new PageObjectContact();
    browser.loadAndWaitForAureliaPage('http://localhost:9000');
  });

  it('should load the page and display the initial page title', () => {
    expect(poWelcome.getCurrentPageTitle()).toBe('Contacts');
  });

  it('should have heading', () => {
    expect(poWelcome.getHeading()).toBe('External Contacts');
  });

  it('should have sub heading', () => {
    expect(poWelcome.getSubHeading()).toBe('Select the client contacts assocaited with this offer');
  });

  it('should show modal when clicking "add contact" button', () => {
    expect(poWelcome.openModal()).toBe(true);
  });

});
