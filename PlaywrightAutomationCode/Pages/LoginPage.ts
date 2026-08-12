import { expect, Page } from "playwright/test";
import { pageFixture } from "../hooks/pageFixture";

export class LoginPage {
  
    constructor(public page: Page) {

        this.page = page;
    }
    public elements = {

        usernameTextbox: "//*[@name='username']",
        passwordTextbox: "//*[@name='password']",
        loginButton: "//*[@type='submit']",
        organgeHRMLogoAltText: "company-branding",
        loginText: "//*[text()='Login']",
        forgotYourLoginPagelink: "//*[text()='Forgot your password? ']"

    }
    async navigatetoorageHRM(url: string) {

        await pageFixture.page.goto(url);

        await pageFixture.page.waitForLoadState('load', { timeout: 3000 })

        console.log(await pageFixture.page.title());

        console.log(pageFixture.page.url);
    }
    async verifywebelements() {
        await expect(pageFixture.page.getByAltText(this.elements.organgeHRMLogoAltText)).toBeVisible();
        await expect(pageFixture.page.locator(this.elements.loginText)).toBeVisible();
        await expect(pageFixture.page.locator(this.elements.usernameTextbox)).toBeVisible();
        await expect(pageFixture.page.locator(this.elements.usernameTextbox)).toBeVisible();
        await expect(pageFixture.page.locator(this.elements.passwordTextbox)).toBeVisible();
        await expect(pageFixture.page.locator(this.elements.loginButton)).toBeVisible();

    }
    async eneterUsername(username: string) {
        await pageFixture.page.locator(this.elements.usernameTextbox).fill(username);
    }
    async enterPassword(password : string){
         await pageFixture.page.locator(this.elements.passwordTextbox).fill(password);
    }
    async clickLogin(){
        await pageFixture.page.locator(this.elements.loginButton).click();
    }
    async clickforgotYourPasswordLink(){
        await pageFixture.page.locator(this.elements.forgotYourLoginPagelink).click();
    }

}