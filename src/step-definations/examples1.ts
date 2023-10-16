import { Given, Then } from "@cucumber/cucumber";
import { Login } from "../page-objects/login-logout/login";
import { Utilities } from "../../Utilities";
import { Logout } from "../page-objects/login-logout/logout";
import { iFrame } from "../page-objects/iFrame/iFrame";

const login = new Login()
const logout = new Logout()
const iframe = new iFrame()
const utilit = new Utilities()


Given('As a user I can successfully login to application using {string} and {string}', { timeout: 90 * 1000 }, async function (Username, Password) {
    await login.Login(Username, Password)
    await utilit.delay(5000) // delay here just to increase user experience you can remove it if you want
})

Then('As a user I can successfully logout', { timeout: 90 * 1000 }, async function () {
    await logout.Logout()
})

Given('As a user I can type {string} in an iFrame with the following {string}', { timeout: 90 * 1000 }, async function (Text, Options) {
    await iframe.iFrame(Text, Options)
})