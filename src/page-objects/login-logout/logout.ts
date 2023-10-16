import { page } from "../../support/hooks"
import { expect } from "@playwright/test";

export class Logout {
    logoutnBtn = '//i[normalize-space()="Logout"]'


    async Logout() {
        await page.locator(this.logoutnBtn).click()
        await expect(page.locator('h2')).toHaveText('Login Page')
    }
}