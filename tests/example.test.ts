import { expect, test } from './pages/FixtureBase.js';

test.describe('Test Group', () => {

  test('Buy stock updates Cash Balance', async ({ tradePage }) => {
    await tradePage.goto();
    await tradePage.selectTicker('MSFT');

    const marketPrice = await tradePage.currentPrice();
    const qty = 2;

    await tradePage.placeOrder({
      side: 'buy',
      price: marketPrice,
      quantity: qty
    });

    const orderValue = roundToCents(marketPrice * qty);
    const newBalance = formatMoney(10_000 - orderValue);

    expect(tradePage.cashBalance()).toHaveText(newBalance);
  });

  function roundToCents(num: number): number {
    return Math.round(num * 100) / 100;
  }

  function formatMoney(num: number): string {
    return num.toFixed(2);
  }

});


