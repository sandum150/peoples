import { browser, element, by } from 'protractor';

export class PeoplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pl-root h1')).getText();
  }
}
