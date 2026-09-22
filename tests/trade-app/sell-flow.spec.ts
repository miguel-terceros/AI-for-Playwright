import { test, expect } from '../pages/FixtureBase.js';

test.describe('Trade and analytics flows', () => {
  test('Sell flow with valid input', async ({ tradePage }) => {
    await tradePage.goto();

    // 1. Create a position so there is a valid sell scenario
    await tradePage.selectTicker('MSFT');
    const marketPrice = await tradePage.currentPrice();
    await tradePage.placeOrder({
      side: 'buy',
      price: marketPrice + 5,
      quantity: 2,
    });

    // 2. Sell part of the position using valid values
    await tradePage.selectTicker('MSFT');
    await expect(tradePage.page.getByRole('heading', { name: 'MSFT: Microsoft' })).toBeVisible();
    await expect(tradePage.page.getByText(`Market price: $${marketPrice}`)).toBeVisible();

    await tradePage.placeOrder({
      side: 'sell',
      price: marketPrice + 5,
      quantity: 1,
    });

    await expect(tradePage.cashBalance()).toBeVisible();
    await expect(tradePage.portfolio()).toBeVisible();
    await expect(tradePage.page.getByRole('button', { name: 'Sell', exact: true })).toBeVisible();
  });
});
