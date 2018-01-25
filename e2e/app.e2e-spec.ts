import { ECommercePage } from './app.po';

describe('e-commerce App', () => {
  let page: ECommercePage;

  beforeEach(() => {
    page = new ECommercePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
