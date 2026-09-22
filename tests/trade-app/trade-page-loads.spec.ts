import { test, expect } from '@playwright/test';

test.describe('Trade and analytics flows', () => {
  test('Trade page loads with stock catalog and empty portfolio', async ({ page }) => {
    await page.goto('http://localhost:3000/index.html');

    // 1. Open http://localhost:3000/index.html
    await expect(page).toHaveTitle('Trade');
    await expect(page.getByRole('link', { name: 'Trade' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Analytics' })).toBeVisible();

    const stockList = page.locator('li');
    await expect(stockList).toContainText('MSFT: Microsoft');
    await expect(stockList).toContainText('GOOGL: Alphabet');
    await expect(stockList).toContainText('AMZN: Amazon');
    await expect(stockList).toContainText('AAPL: Apple');
    await expect(stockList).toContainText('META: Meta');
    await expect(stockList).toContainText('WMT: Walmart');
    await expect(stockList).toContainText('JPM: JPMorgan Chase');
    await expect(stockList).toContainText('V: Visa');
    await expect(stockList).toContainText('JNJ: Johnson & Johnson');
    await expect(stockList).toContainText('ORCL: Oracle');
    await expect(stockList).toContainText('ABBV: AbbVie Inc.');

    await expect(page.getByText('Cash: $10000.00')).toBeVisible();
    await expect(page.locator('table')).toBeVisible();
    await expect(page.locator('th').filter({ hasText: 'Ticker' })).toBeVisible();
    await expect(page.locator('th').filter({ hasText: 'Quantity' })).toBeVisible();
    await expect(page.locator('th').filter({ hasText: 'Avg Price' })).toBeVisible();
    await expect(page.locator('th').filter({ hasText: 'Total Value' })).toBeVisible();

    // 2. Review the default page without selecting a stock
    await expect(page.getByRole('heading', { name: 'Portfolio' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Buy' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Sell' })).toHaveCount(0);
  });
});
