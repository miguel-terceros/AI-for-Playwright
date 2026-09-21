import { expect, test } from './pages/FixtureBase.js';

test('Selling Amazon stock without holdings shows an error', async ({ tradePage }) => {
    await tradePage.goto();
    await tradePage.selectTicker('AMZN');

    const marketPrice = await tradePage.currentPrice();

    await tradePage.placeOrder({
        side: 'sell',
        price: marketPrice,
        quantity: 1
    });

    await expect(tradePage.actionError()).toHaveText('Not enough stock in portfolio.');
});
