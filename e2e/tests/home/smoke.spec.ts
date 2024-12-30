import {test} from '@playwright/test';
import {Home} from '@e2e/pages/Home';

test.describe('Smoke test', () => {
  test('has boiler plate text', async ({page}) => {
    await page.goto('/');
    const homePage = new Home(page);
    await homePage.assertIsRendered();
  });
  test('has have boiler plate screenshot', async ({page}) => {
    await page.goto('/');
    const homePage = new Home(page);
    await homePage.assertHasSnapshot();
  });
});
