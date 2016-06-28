'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageObjectContact = exports.PageObjectContact = function () {
  function PageObjectContact() {
    _classCallCheck(this, PageObjectContact);
  }

  PageObjectContact.prototype.getCurrentPageTitle = function getCurrentPageTitle() {
    return browser.getTitle();
  };

  PageObjectContact.prototype.getHeading = function getHeading() {
    return element(by.tagName('h2')).getText();
  };

  PageObjectContact.prototype.getSubHeading = function getSubHeading() {
    return element(by.css('.sub-heading')).getText();
  };

  PageObjectContact.prototype.getModal = function getModal() {
    return element(by.css('#modal:visible'));
  };

  PageObjectContact.prototype.pressAddContactButton = function pressAddContactButton() {
    return element(by.css('button[data-target="#modal"]')).click();
  };

  PageObjectContact.prototype.openModal = function openModal() {
    var _this = this;

    return browser.wait(function () {
      _this.pressAddContactButton();
      return true;
      return _this.getModal().length > 0;
    });
  };

  return PageObjectContact;
}();