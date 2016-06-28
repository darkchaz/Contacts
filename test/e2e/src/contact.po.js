export class PageObjectContact{

  constructor() {

  }

  getCurrentPageTitle() {
    return browser.getTitle();
  }

  getHeading() {
    return element(by.tagName('h2')).getText();
  }

  getSubHeading() {
    return element(by.css('.sub-heading')).getText();
  }

  getModal() {
    return element(by.css('#modal:visible'))
  }

  pressAddContactButton() {
    return element(by.css('button[data-target="#modal"]')).click();
  }


  openModal() {
    return browser.wait(() => {
      this.pressAddContactButton();
      return true;
      return (this.getModal().length > 0)
    });
  }
}
