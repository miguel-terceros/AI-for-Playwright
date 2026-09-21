import type { Locator, Page } from '@playwright/test';
import type { Order } from './types/Order.js';

export class TradePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('index.html');
    }

    /* ========= Left column ========= */
    async selectTicker(ticker: string) {
        await this.page
            .getByTestId('stock-list')
            .getByRole('listitem')
            .filter({ hasText: ticker })
            .click();
    }

    /* ========= Right column ========= */

    async placeOrder(order: Order) {

        await this.page.getByLabel('Limit Price').fill(order.price.toString());
        await this.page.getByLabel('Quantity').fill(order.quantity.toString());

        if (order.side === 'buy') {
            await this.page.getByRole('button', { name: 'Buy', exact: true }).click();
        } else {
            await this.page.getByRole('button', { name: 'Sell', exact: true }).click();
        }
    }

    async currentPrice(): Promise<number> {
        const marketPrice = await this.page.getByTestId('stock-price').textContent();
        if (!marketPrice) throw new Error('Stock price not found');
        return Number(marketPrice);
    }

    priceError(): Locator {
        return this.page.getByTestId('price-error');
    }

    qtyError(): Locator {
        return this.page.getByTestId('qty-error');
    }

    actionError(): Locator {
        return this.page.getByTestId('action-error');
    }


    /* ========= Portfolio ========= */

    cashBalance(): Locator {
        return this.page.getByTestId('cash');
    }

    portfolio(): Locator {
        return this.page.getByTestId('portfolio-table');
    }
}