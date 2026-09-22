import { test as base } from '@playwright/test';
import { TradePage } from './TradePage.js';
import { AnalyticsPage } from './AnalyticsPage.js';


type MyFixtures = {
    tradePage: TradePage;
    analyticsPage: AnalyticsPage;
};

export const test = base.extend<MyFixtures>({
    tradePage: async ({ page }, use) => {
        const tradePage = new TradePage(page);
        await use(tradePage);
    },
    analyticsPage: async ({ page }, use) => {
        const analyticsPage = new AnalyticsPage(page);
        await use(analyticsPage);
    }
});


// Re-export everything from the base test (including `expect` and other fixtures)
export * from '@playwright/test';