import { Given, Then } from "@cucumber/cucumber";
import { Login } from "../page-objects/login-logout/login";
import { Utilities } from "../../Utilities";

const login = new Login()
const utilit = new Utilities()


Given('As a user I can successfully login to application using {string} and {string}', { timeout: 90 * 1000 }, async function (Username, Password) {
    await login.Login(Username, Password)
    await utilit.delay(5000) // delay here just to increase user experience you can remove it if you want
})