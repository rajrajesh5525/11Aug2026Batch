import { Given, Then } from "@cucumber/cucumber";
import { LoginPage } from "../Pages/LoginPage";
import { pageFixture } from "../hooks/pageFixture";
import { CredentialsOrangeHRM } from "../Files/Testing.json";
import { HomePage } from "../Pages/HomePage";
import { ForgotYourPasswordPage } from "../Pages/ForgotYourPasswordPage";

let lp: LoginPage

let hp: HomePage

let Fyp: ForgotYourPasswordPage

Given('I launch the OrangeHRM application', async function () {

   lp = new LoginPage(pageFixture.page)

   await lp.navigatetoorageHRM(CredentialsOrangeHRM.url)

});

Then('I Verify login functionality for the OrangeHRM application', async function () {
   lp = new LoginPage(pageFixture.page)
   await pageFixture.page.waitForTimeout(3000)
   lp.eneterUsername(CredentialsOrangeHRM.userName);
   await pageFixture.page.waitForTimeout(3000)
   lp.enterPassword(CredentialsOrangeHRM.password);
   await pageFixture.page.waitForTimeout(3000)
   lp.clickLogin();
   await pageFixture.page.waitForTimeout(3000);

});

//I logout application
Then('I logout', async function () {
   hp = new HomePage(pageFixture.page)
   hp.clickUserdropDown();
   await pageFixture.page.waitForTimeout(3000)
   hp.clickOnLogOutTab();
   await pageFixture.page.waitForTimeout(3000)

});

//I Verify your password functionality for the OrangeHRM application

Then('I Verify forgot your password functionality for the OrangeHRM application', async function () {

   lp = new LoginPage(pageFixture.page)

   lp.clickforgotYourPasswordLink();

   Fyp = new ForgotYourPasswordPage(pageFixture.page)
   await pageFixture.page.waitForTimeout(3000);
   Fyp.enterUsername(CredentialsOrangeHRM.OrangeFYP);
   await pageFixture.page.waitForTimeout(3000);
   Fyp.clickCancelButton();
   await pageFixture.page.waitForTimeout(3000);
   

});