import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('abc 123');
    await page.locator('[data-test="username"]').press('Tab');
    await page.locator('[data-test="password"]').fill('abc123');
    await page.locator('[data-test="password"]').press('Enter');
    await page.locator('[data-test="login-button"]').click();
    await page.getByText('TTACart Epic sadface:').click();
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="login-button"]').dblclick();
});