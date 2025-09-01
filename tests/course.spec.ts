import { test, expect } from '@playwright/test';

// CLASS 2 - Test steps, screenshots

test.describe('Test Suite', async () => {

  test('User goes to Playwright Page', async ({ page }) => {
    
    await test.step('User goes to home url', async() => {
      await page.goto('https://playwright.dev/');
    });

    await test.step('Then the user can see the page title', async() => {
      await expect(page).toHaveTitle(/Playwright/);
    });

  });

  test('User navigates to Get Started Page', async ({ page }) => {
    
    await test.step('User goes to home url', async() => {
      await page.goto('https://playwright.dev/');
    });

    await test.step('Then the user clicks on get started link', async () => {
      await page.getByRole('link', { name: 'Get started' }).click();
    });

    await test.step('Then user expects to see the Intallation title', async () => {
      await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });

  });
});