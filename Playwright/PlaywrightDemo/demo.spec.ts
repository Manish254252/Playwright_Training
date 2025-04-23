import { chromium } from 'playwright';

(async () => {
    // Launch browser
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Google
    await page.goto('https://www.google.com');
    // Take screenshot
    await page.screenshot({ path: 'google-search.png' });

    // Close browser
    await browser.close();
})();
