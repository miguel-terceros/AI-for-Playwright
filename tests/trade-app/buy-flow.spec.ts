import { test, expect } from '../pages/FixtureBase.js';

test.describe('Trade and analytics flows', () => {
  test('Buy flow with valid input', async ({ tradePage }) => {
    await tradePage.goto();

    // 1. Select MSFT: Microsoft
    await tradePage.selectTicker('MSFT');

    const marketPrice = await tradePage.currentPrice();
    await expect(tradePage.page.getByRole('heading', { name: 'MSFT: Microsoft' })).toBeVisible();
    await expect(tradePage.page.getByText(`Market price: $${marketPrice}`)).toBeVisible();
    await expect(tradePage.page.getByLabel('Limit Price')).toBeVisible();
    await expect(tradePage.page.getByLabel('Quantity')).toBeVisible();
    await expect(tradePage.page.getByLabel('Value')).toBeVisible();

    // 2. Enter a valid limit price and quantity and submit the buy
    const validLimitPrice = marketPrice + 5;
    await tradePage.placeOrder({
      side: 'buy',
      price: validLimitPrice,
      quantity: 2,
    });

    await expect(tradePage.cashBalance()).toBeVisible();
    await expect(tradePage.portfolio()).toBeVisible();
    await expect(tradePage.page.getByRole('button', { name: 'Buy', exact: true })).toBeVisible();
  });
});
