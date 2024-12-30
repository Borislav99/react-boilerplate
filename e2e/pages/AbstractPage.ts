import type {Locator} from '@playwright/test';
import {expect} from '@playwright/test';

export abstract class AbstractPage {
  //Define more helper methods that will be shared throughout pages
  protected async assertContainsText(element: Locator, text: string) {
    const innerText = await element.textContent();
    expect(innerText).toContain(text);
  }

  protected async assertMatchesSnapshot(element: Locator, mask?: [Locator]) {
    await expect(element).toHaveScreenshot({
      mask,
    });
  }
}
