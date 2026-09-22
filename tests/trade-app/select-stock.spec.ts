import { test, expect } from '@playwright/test';

test.describe('Trade and analytics flows', () => {
  test('Select a stock and view trade form', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // 1. From the stock list, click MSFT: Microsoft
    await page.getByText('MSFT: Microsoft').click();

    await expect(page.getByRole('heading', { name: 'MSFT: Microsoft' })).toBeVisible();
    await expect(page.getByText('Market price: $323')).toBeVisible();
    await expect(page.getByLabel('Limit Price')).toBeVisible();
    await expect(page.getByLabel('Quantity')).toBeVisible();
    await expect(page.getByLabel('Value')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Buy', exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sell', exact: true })).toBeVisible();

    // 2. Verify the selected stock remains highlighted or is otherwise clearly presented as active
    await expect(page.getByRole('heading', { name: 'MSFT: Microsoft' })).toContainText('MSFT: Microsoft');
    await expect(page.getByText('Market price: $323')).toBeVisible();
  });
});
