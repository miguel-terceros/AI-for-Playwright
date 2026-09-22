import type { Locator, Page } from '@playwright/test';

export class AnalyticsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('analytics.html');
    }

    cashBalance(): Locator {
        return this.page.getByTestId('cash');
    }

    diversificationMessage(): Locator {
        return this.page.getByTestId('analytics-message');
    }

    portfolio(): Locator {
        return this.page.getByTestId('portfolio-table');
    }
}
