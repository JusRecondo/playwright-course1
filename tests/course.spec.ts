import { test, expect } from '@playwright/test';

// CLASS 1 - First tests, locators

// Shop sandbox http://opencart.abstracta.us/
// Page title
test.describe('Page title', () => {
  test('Has title', async ({ page }) => {
    await page.goto("http://opencart.abstracta.us/");
    const title = page.getByRole('heading', { name: 'Your Store' });
    await expect(title).toBeVisible();
  });
});

// Searchbar
test.describe('Shop searchbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://opencart.abstracta.us/");
  });

  test('Searchbar is visible', async ({ page }) => {
    await expect(page.getByPlaceholder('Search')).toBeVisible();
  });

  test('Searchbar can be filled', async ({ page }) => {
    const searchField = page.getByPlaceholder('Search');
    await searchField.fill('Iphone');
    await expect(searchField).toHaveValue('Iphone');
  });

});

// Product item
test.describe("Product Item", () => {
  let product;

  test.beforeEach(async ({ page }) => {
    await page.goto("http://opencart.abstracta.us/");
    await page.waitForLoadState('domcontentloaded');
    product = page.getByRole('link').filter({ hasText: /macbook/i });
  });

  test('Product Exists', async () => {
    await expect(product).toBeVisible();
  });

  test('Product click goes to product detail', async ({ page }) => {
    await product.click();
    const productTitle = page.getByRole('heading', { name: 'MacBook' });
    await expect(productTitle).toBeVisible();
  });

  test('Product has price', async ({ page }) => {
    const price = page.getByText('$602.00');
    await expect(price).toBeVisible();
  });
});

// Form sandbox https://testertestarudo.com/sandbox-para-pruebas-automatizadas/
test.describe('Name field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://testertestarudo.com/sandbox-para-pruebas-automatizadas/");
  });

  test('Form has name field', async ({ page }) => {
    const nameField = page.locator("//input[@id='name']");
    await expect(nameField).toBeVisible();
  });

  test('Name field can be focused', async ({ page }) => {
    const nameField = page.locator("//input[@id='name']");
    await nameField.focus();
    await expect(nameField).toBeFocused();
  });

  test('Name field can be filled', async ({ page }) => {
    const nameField = page.locator("//input[@id='name']");
    await nameField.fill('John');
    await expect(nameField).toHaveValue('John');
  });
});

test.describe('Email field', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://testertestarudo.com/sandbox-para-pruebas-automatizadas/");
  });

  test('Form has email field', async ({ page }) => {
    const emailField = page.locator("//input[@id='email']");
    await expect(emailField).toBeVisible();
  });

  test('Email field can be focused', async ({ page }) => {
    const emailField = page.locator("//input[@id='email']");
    await emailField.focus();
    await expect(emailField).toBeFocused();
  });

  test('Email field can be filled', async ({ page }) => {
    const emailField = page.locator("//input[@id='email']");
    await emailField.fill('example@test.com');
    await expect(emailField).toHaveValue('example@test.com');
  });
});