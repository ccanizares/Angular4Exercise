import { AngularexercisePage } from './app.po';

describe('angularexercise App', () => {
  let page: AngularexercisePage;

  beforeEach(() => {
    page = new AngularexercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
