import { Utilities } from "../../../Utilities";
import { page } from "../../support/hooks";


const utility = new Utilities()

export class iFrame {

    boldL = 'Bold'
    alignCenterL = 'Align center'

    async navigateToiFrameScreen() {
        await page.goto('https://the-internet.herokuapp.com/iframe')
    }

    async iFrame(Text: string, Options: string) {
        await this.navigateToiFrameScreen()
        const textIframe = await page.waitForSelector('iframe')
        const textframe = await textIframe.contentFrame();
        const options = Options.split(',')
        for (let i = 0; i < options.length; i++) {
            if (options[i] === 'Bold') {
                await page.getByTitle(this.boldL).click()
            } if (options[i] === 'Align Center') {
                await page.getByTitle(this.alignCenterL).click()
            }
        }
        await textframe?.locator('#tinymce').fill(Text)
        await utility.delay(2000)
    }
}