import { BeforeAll, AfterAll, After, Before, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../hooks/pageFixture";
import path from 'path'; 
let page: Page; 
let browser: Browser;
let context: BrowserContext;
setDefaultTimeout(60000) // 60 seconds, if any step takes more than 60 seconds, it will be failed due to timeout error

BeforeAll(async function () {

    browser = await chromium.launch({
        headless: false,
        args: ["--start-maximized"],
    });

    console.log("BeforeAll")
});

Before(async function () {
    context = await browser.newContext({
        recordVideo: { dir: 'test-result/videos' },
        viewport: null
    });

    // 3. Start tracing before navigating or creating a page
    await context.tracing.start({ 
        screenshots: true, 
        snapshots: true, 
        sources: true 
    });

    page = await context.newPage();
    pageFixture.page = page

    console.log("Before")
});

After(async function (scenario) {
    // Sanitize scenario name to use as a filename
    const traceName = scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');

    const tracePath = path.join(process.cwd(), `reports/traces/${traceName}.zip`);
    // 5. Close the page
    //await pageFixture.page.close();
    // 6. Stop tracing and save the file
    // Tip: You can wrap this in an if condition to save only on failure
    await context.tracing.stop({ path: tracePath });
    // 7. Clean up the context and browser
    // await context.close();
    // await browser.close();
    console.log("After")
});

AfterAll(async function () {
    //close the page
   //await pageFixture.page.close();
    //browser.close/context.close 
    //await context.close()
    console.log("afterAll")
    console.log("==============================")
});

Then('I Verify shadow dom in hooks', async function () {

    await pageFixture.page?.goto("https://selectorshub.com/xpath-practice-page/");
    // handling shadow dom means parent shadow dom
    await pageFixture.page?.locator("#userName").locator("#kils").fill("LiveTech");
    // handling child shadow dom means parent shadow dom contains another shadow rom
    await pageFixture.page?.locator("#userName").locator("#app2").locator("#pizza").fill("Corn Pizza");

    console.log("I Verify shadow dom in hooks scenario")


});

Then('I Verify facebook applcation in hooks', async function () {

     await pageFixture.page?.goto("https://www.facebook.com/");


      console.log("Background keyword")
    });