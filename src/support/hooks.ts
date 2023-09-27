import { BeforeAll, AfterAll, After, Before } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";

let page: Page
let browser: Browser
let context: BrowserContext

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    });
})

Before(async function () {
    context = await browser.newContext()
    page = await context.newPage()
})

After(async function () {
    await page.close()
    await context.close()
})

AfterAll(async function () {
    await browser.close()
})

export { page, browser, context };
