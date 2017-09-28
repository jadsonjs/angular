import { KootenaiWebPage } from './app.po';

describe('kootenai-web App', () => {
  let page: KootenaiWebPage;

  beforeEach(() => {
    page = new KootenaiWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
