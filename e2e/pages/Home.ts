import {AbstractPage} from '@e2e/pages/AbstractPage';
import type {Locator, Page} from '@playwright/test';

export class Home extends AbstractPage {
  private readonly wrapper: Locator;

  constructor(page: Page) {
    super();
    this.wrapper = page.getByTestId('home-page');
  }

  // Add methods related to homepage
  public async assertIsRendered() {
    await this.assertContainsText(this.wrapper, 'Home page');
  }

  public async assertHasSnapshot() {
    await this.assertMatchesSnapshot(this.wrapper);
  }
}
