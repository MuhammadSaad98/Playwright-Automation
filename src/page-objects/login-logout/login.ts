import { expect } from "@playwright/test";
import { Utilities } from "../../../Utilities";
import { page } from "../../support/hooks";

const utility = new Utilities()

export class Login {
    userNameField = '[id="username"]'
    passwordField = '[id="password"]'
    loginBtn = '//button[normalize-space()="Login"]'


    async navigateToLoginScreen() {
        await page.goto('https://the-internet.herokuapp.com/login')
    }

    async Login(username: string, password: string) {
        await this.navigateToLoginScreen()
        await page.locator(this.userNameField).fill(username)
        await page.locator(this.passwordField).fill(password)
        await page.locator(this.loginBtn).click()
        await expect(page.locator('h2')).toHaveText(' Secure Area ')
    }
}