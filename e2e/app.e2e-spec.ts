import { SimplePagesPage } from './app.po';

describe('simple-pages App', function() {
  let page: SimplePagesPage;

  beforeEach(() => {
    page = new SimplePagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
