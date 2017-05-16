import { PinkSeriesPage } from './app.po';

describe('pink-series App', () => {
  let page: PinkSeriesPage;

  beforeEach(() => {
    page = new PinkSeriesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
