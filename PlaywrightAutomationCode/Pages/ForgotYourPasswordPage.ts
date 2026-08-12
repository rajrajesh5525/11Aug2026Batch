
import {Page,expect} from 'playwright/test';
import { pageFixture } from '../hooks/pageFixture';

export class ForgotYourPasswordPage {

    constructor(public page: Page){

        this.page = page
    }

    public Elements = {
        username: "//*[@name='username']",
        cancelButton : "//*[@type='button']",
        resetPassword : "//*[@type='submit']"
    }
   async verifywebelement(){

         await expect(pageFixture.page.locator(this.Elements.username)).toBeVisible();
         await expect(pageFixture.page.locator(this.Elements.cancelButton)).toBeVisible();
         await expect(pageFixture.page.locator(this.Elements.resetPassword)).toBeVisible();
   }
    async enterUsername(username :string){
        await pageFixture.page.locator(this.Elements.username).fill(username);
    }
    async clickCancelButton(){
        await pageFixture.page.locator(this.Elements.cancelButton).click();
    }
    async clickResetPasswordButton(){
        await pageFixture.page.locator(this.Elements.resetPassword).click();
    }
}
