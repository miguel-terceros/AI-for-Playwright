import { test as base } from '@playwright/test';
import { TradePage } from './TradePage.js';


type MyFixtures = {
    tradePage: TradePage;
};

export const test = base.extend<MyFixtures>({
    tradePage: async ({ page }, use) => {
        const tradePage = new TradePage(page);
        await use(tradePage);
    }
});


// Re-export everything from the base test (including `expect` and other fixtures)
export * from '@playwright/test';