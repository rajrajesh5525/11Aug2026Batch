
import {Page,expect} from 'playwright/test';
import { pageFixture } from '../hooks/pageFixture';

export class HomePage {

    constructor(public page: Page){

        this.page = page
    }

    public Elements = {
        userDropdown: ".oxd-userdropdown-tab",
        logoutTab : "//*[text()='Logout']",
    }
   async verifywebelement(){

         await expect(pageFixture.page.locator(this.Elements.userDropdown)).toBeVisible();
         await expect(pageFixture.page.locator(this.Elements.logoutTab)).toBeVisible();
   }
    async clickUserdropDown(){
        await pageFixture.page.locator(this.Elements.userDropdown).click()
    }
    async clickOnLogOutTab(){
        await pageFixture.page.locator(this.Elements.logoutTab).click();
    }
    
}
