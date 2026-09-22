import { test, expect } from '../pages/FixtureBase.js';

const TICKERS = [
  'MSFT',
  'GOOGL',
  'AMZN',
  'AAPL',
  'META',
  'WMT',
  'JPM',
  'V',
  'JNJ',
  'ORCL',
  'ABBV',
];

test.describe('Trade and analytics flows', () => {
  test('Buying one share of every stock updates cash consistently and shows a diversified portfolio', async ({
    tradePage,
    analyticsPage,
  }) => {
    await tradePage.goto();

    const startingCashValue = Number(await tradePage.cashBalance().textContent());

    let totalSpent = 0;

    for (const ticker of TICKERS) {
      await tradePage.selectTicker(ticker);

      const marketPrice = await tradePage.currentPrice();
      totalSpent += marketPrice;

      await tradePage.placeOrder({
        side: 'buy',
        price: marketPrice,
        quantity: 1,
      });
    }

    const expectedCash = startingCashValue - totalSpent;

    await expect(tradePage.cashBalance()).toHaveText(expectedCash.toFixed(2));

    await analyticsPage.goto();

    await expect(analyticsPage.cashBalance()).toHaveText(expectedCash.toFixed(2));
    await expect(analyticsPage.diversificationMessage()).toHaveText(
      'Your portfolio seems to be well diversified. Well done.'
    );
  });
});
