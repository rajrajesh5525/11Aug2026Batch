
import { Given, Then } from "@cucumber/cucumber"

import { TestData, TestData1, TestData2 } from "../Files/TestData.json";

import { Testing, Testing1, Testing2 } from "../Files/Testing.json";

import { Browser, chromium, expect, firefox, Locator, Page, webkit } from "playwright/test";
import { indexOf } from "typescript-collections/dist/lib/arrays";









let browser: Browser, page: Page
let context;
Given('I Launch the browser', async function () {
    browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']
    });
    context = await browser.newContext({
        viewport: null
    });
    page = await context.newPage();
});
Given('I Launch the firefox browser', async function () {
    browser = await firefox.launch({
        headless: false,
        args: ['--start-maximized']
    });
    context = await browser.newContext({
        viewport: null
    });
    page = await context.newPage();
});
Given('I Launch the webkit browser', async function () {
    browser = await webkit.launch({
        headless: false,
        args: ['--start-maximized']
    });
    context = await browser.newContext({
        viewport: null
    });
    page = await context.newPage();
});
Given('I Launch the headless browser', async function () {
    browser = await chromium.launch({
        headless: true,
        args: ['--start-maximized']
    });
    context = await browser.newContext({
        viewport: null
    });
    page = await context.newPage();
});

Then('I Launch the facebook application', async function () {

    await page.goto("https://www.facebook.com/");
});
Then('I verfiy the login functionality', async function () {
    await page.getByText("email");
    await page.getByText("Email address or mobile number").fill("Rajesh");
    await page.locator("//input[@type='password']").fill("Veldanda")
});

Then('I Launch the test automation practice application', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");
});

Then('I verify playwright locators', { timeout: 5000 }, async function () {
    console.log("==================getByPlacehoder====================")
    await page.getByPlaceholder("Enter Name").fill("VeldandaRajesh");
    await page.getByPlaceholder("Enter EMail").fill("Hyderabad")
    console.log("==================getByText====================")
    await page.getByText("START").click();
    await page.getByText("STOP").click();
    console.log("==================getByRole====================")

    await page.getByRole('button', { name: 'START' }).click();
    await page.getByRole('button', { name: 'STOP' }).click();
    //checkboxs
    await page.getByRole('checkbox', { name: 'Sunday' }).click();
    await page.getByRole('checkbox', { name: 'Wednesday' }).click();
    await page.getByRole('checkbox', { name: 'Monday' }).click();
    await page.getByRole('checkbox', { name: 'Thursday' }).click();
    await page.getByRole('checkbox', { name: 'Friday' }).scrollIntoViewIfNeeded();
    await page.getByRole('textbox', { name: 'Phone' }).fill("98989898952");

});
Then('I verify playwright locators part2', { timeout: 20000 }, async function () {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    console.log("==================getByAltText====================")
    await page.getByAltText("ParaBank").click();
    console.log("==================getByAltTitle====================")
    await page.getByTitle("ParaBank").click();
    await page.goto("https://login.salesforce.com/?locale=in");
    console.log("==================getlabel====================")
    await page.getByLabel("Username").fill("playwright");
    await page.getByLabel("Password").fill("Automation");
});
Then('I verify selenium locators', async function () {
    console.log("==========Selenium locators==================");
    console.log("==========absolute xpath==================");
    //await page.locator("/html[1]/body[1]/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/input[1]").fill("TEsting");
    console.log("==========Relative xpath==================");
    await page.locator("//input[@placeholder='Enter Name']").fill("Rajesh")
    await page.locator("//input[@id='email']").fill("veldanda@gmail.com");
    console.log("==========css xpath==================");
    await page.locator("[id='phone']").fill("875445415541");
    // . means class in css selector
    // await page.locator(".atribute value of the class").methods();
    await page.locator(".wikipedia-search-input").fill("Testing");
    // # means id in css selector
    // await page.locator("#atribute value of the id").methods();
    await page.locator("#textarea").fill("Hyderabad")
});
Then('I Verify Playwright Practice application', async function () {
    await page.getByRole("textbox", { name: 'Username:' }).fill("HHHHHHHHH");
    await page.getByText("List item 1").click();
    await page.getByRole("radio", { name: ' Standard' }).click();
    await page.getByAltText("logo image").click();
    await page.getByRole('textbox', { name: "Email Address" }).fill("Testing@gmail.com");
    await page.getByRole('textbox', { name: "Email Address" }).scrollIntoViewIfNeeded();
    await page.locator("//input[@name='password']").fill("Rajesh");
    await page.getByLabel("Your Age").fill("35");

    console.log("=========getByplaceholder====================");
    await page.getByPlaceholder("Enter your full name").fill("Veldanda");
    await page.getByPlaceholder("Enter your full name").scrollIntoViewIfNeeded();
    await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("849849849498")
    await page.getByPlaceholder("Type your message here...").fill("Hyderabad")
});
Then('I Verify Xpath methods', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("========================Contains method======================")
    await page.locator("//input[contains(@id,'name')]").fill("veldandaRajesh");
    await page.locator("//*[contains(@id,'email')]").fill("testing@gmail.com");

    console.log("========================Starts-with method======================")
    await page.locator("//input[starts-with(@placeholder,'Enter Phone')]").fill("5665656565");
    await page.locator("//*[starts-with(@id,'textarea')]").fill("Hyderabad");
    await page.locator("//input[starts-with(@class,'wikipedia-search-inpu')]").fill("Testing");

    console.log("========================Text() method======================")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText();
    console.log("1st way of text is:", text); //Alerts & Popups

    text = await page.locator("//*[text()='Alerts & Popups']").innerText();
    console.log("2nd way:", text); //Alerts & Popups

    text = await page.locator("//*[contains(text(),'Alerts & Popups')]").innerText();
    console.log("3rd way", text)  //Alerts & Popups

    text = await page.locator("//*[starts-with(text(),'Alerts & Popups')]").innerHTML();
    console.log("4th way,", text);  //Alerts &amp; Popups

    console.log("============And==============================");

    await page.locator("//*[@type='text' and @id='field2']").fill("HI Good Evening");

    await page.locator("//*[@type='text' and @id='field2']").scrollIntoViewIfNeeded();

    console.log("============Or==============================");

    var orCount = await page.locator("//input[@type='text' or @id='field2']").all();
    console.log("oRCount is:", orCount.length); //13

});
//I Verify Selenium Xpath Axes
Then('I Verify Relative Xpath Axes', { timeout: 20000 }, async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("================Xpath axes=parent===========================");
    var ParentCount = await page.locator("//input[@value='wednesday']//parent::div").all();
    console.log("oRCount is:", ParentCount.length); //1
    //input[contains(@value,'wednesday')]//parent::div - Xpath for parent
    //*[@id='saturday']//parent::div
    console.log("================Xpath axes=ancestor===========================");
    var Precedingcount = await page.locator("//input[@value='sunday']//preceding::div").all();
    console.log("ancestor count is: ", Precedingcount.length);

    var Precedingcount = await page.locator("//input[@value='sunday']//preceding::input").all();
    console.log("ancestor count is: ", Precedingcount.length);  //5

    var Precedingcount = await page.locator("//input[@value='sunday']//preceding::label").all();
    console.log("ancestor count is: ", Precedingcount.length);

    console.log("==============Child Tags=================================")

    var childcount = await page.locator("//*[@class='form-group']//child::*[@type='text']").all();
    console.log("childcount is : ", childcount);   //3

    await page.locator("//*[@class='form-group']//child::*[@type='text']").first().fill("1st web element");

    await page.locator("//*[@class='form-group']//child::*[@type='text']").last().fill("2 element");

    await page.locator("//*[@class='form-group']//child::*[@type='text']").nth(1).fill("2nd element");

    console.log("==============descendent Tags=================================")

    var descedantcount = await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").all();
    console.log("descedantcount is : ", descedantcount); // 7

    await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").first().click();// sunday
    await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").last().click(); //Saturday
    await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").nth(3).click(); //Wednesday
    await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").nth(4).click(); //Thursday
    await page.locator("//*[@class='form-group']//descendant::*[@type='checkbox']").nth(5).click();  //Friday

    console.log("==============Following Tags=================================")
    var follwingcount = await page.locator("//*[@class='form-group']//following::*[@type='checkbox']").all();
    console.log("Following count is:", follwingcount); //12

    console.log("========Following sibling=================================")
    var following = await page.locator("//*[@id='field1']//following-sibling:: input").fill("HyderabadTesting");
    console.log("following", following);
    await page.locator("//*[@id='field1']//following-sibling:: input").scrollIntoViewIfNeeded();

});

Then('I Verify playwright methods', { timeout: 15000 }, async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.reload();
    console.log("==========Sceroll to the webelement================")
    await page.getByText("New Tab").scrollIntoViewIfNeeded();
    console.log("==================Click element====================")
    await page.getByText("New Tab").click();
    console.log("======================Goto Previous tab=======================");
    await page.bringToFront();

    console.log("Enter the text to the elemet======================")
    await page.getByPlaceholder("Enter Name").fill("Rajesh Veldanda");
    // await page.getByPlaceholder("Enter Name").type("Livetech");

    console.log("===========Get more than one web element=================")
    var allcount = await page.locator("//*[contains(@class,'form-group')]//following::input[@type='checkbox']").all();
    console.log("All the count is :", allcount.length);

    console.log("==================Get the title of the page==================")
    console.log(page.title()); // Title will print
    console.log("==================Get the URL of the page==================")
    console.log(page.url()); // https://testautomationpractice.blogspot.com/

    console.log("=============Get the text of the web element============")
    var gettext = await page.getByText("Mouse Hover").innerText()
    console.log("Text is displayed:", gettext);
    console.log("===============Clear the text in the element==============")
    await page.locator("#field1").clear();
    await page.locator("#field1").fill("LiveTech Testing");

    console.log("=============Get the text from more than one element=================")
    console.log("=====1st way================")
    var textofallwebelement = await page.locator("//h2[@class='title']").allInnerTexts();
    console.log("Textofallwebelements", textofallwebelement.length);
    for (let i = 0; i < textofallwebelement.length; i++) {
        console.log(textofallwebelement[i])
    }
    console.log("=====2nd way================")
    var textofallwebelements = await page.locator("//h2[@class='title']").allTextContents();
    console.log("Textofallwebelements", textofallwebelements.length);
    for (let i = 0; i < textofallwebelements.length; i++) {
        console.log(textofallwebelements[i])
    }
    console.log("==========Double click=====================");

    await page.locator("//*[@name='start']").dblclick();

    console.log("==========Rgiht click=====================");
    await page.getByText("START").click({ button: 'right' });

    console.log("==========Drag and Drop=====================");
    var first = page.locator("//*[contains(@id,'draggable')]");
    var second = page.locator('#droppable');
    await first.dragTo(second);

    console.log("=======Selenium and============================");
    await page.locator("//input[@type='text' and @id='field2']").fill("Hello Good evening");

    console.log("=======Playwright and============================");
    await page.getByPlaceholder("Enter Phone").and(page.locator("//*[@id='phone']")).fill("8523365842241");
    await page.locator('.wikipedia-search-input').and(page.locator("#Wikipedia1_wikipedia-search-input")).fill("PlaywrightTEsting")
});

Then('I Verify playwright methods part2', async function () {

    console.log('==============Visible====================')
    var visible = await page.locator("#female").isVisible();
    if (visible == true)
        await page.locator("#female").click();

    console.log('==============Hidden====================')
    var hiddnen = await page.locator("#sunday").isHidden();
    if (hiddnen == false)
        await page.locator("#sunday").click();

    console.log('==============Disabled====================')
    var dissabled = await page.locator("#monday").isDisabled();
    if (dissabled == false)
        await page.locator('#monday').click();

    console.log('==============Enabled====================')
    var enabled = await page.locator("#tuesday").isEnabled();
    if (enabled == true)
        await page.locator("#tuesday").click();

    console.log('==============Editable====================')
    await page.locator("#textarea").scrollIntoViewIfNeeded();
    var Editable = await page.locator("#textarea").isEditable();
    if (Editable == true)
        await page.locator("#textarea").fill("Tetsing the Ismethods")

    console.log('==============Checked====================')
    var checked = await page.locator("#saturday").isChecked()
    if (checked == false)
        //1st way
        // await page.locator("#saturday").click();
        console.log('2nd Way')
    await page.locator("#saturday").setChecked(true);
    checked = await page.locator("#saturday").isChecked();
    await page.waitForTimeout(5000)
    if (checked == true)
        await page.locator("#saturday").click();

});
Then('I Verify playwright methods part3', async function () {
    await page.goto("https://www.myntra.com/");

    console.log("=========Hover====================")
    await page.locator("//*[(text()='Kids')]").first().hover();

    console.log("=========Highlight====================")
    await page.getByPlaceholder("Search for products, brands and more").fill("RajeshTest");

    await page.getByPlaceholder("Search for products, brands and more").highlight();

    console.log("=========GetAttribute====================")

    var attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('placeholder');
    console.log("attribute value of placeholder: ", attributevalue); //Search for products, brands and more

    attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('class');
    console.log("attribute value of class: ", attributevalue);  //desktop-searchBar

    attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('data-reactid');
    console.log("attribute value of data-reactid: ", attributevalue);  //1039  
    await page.getByText("//*[text()='Beauty']").scrollIntoViewIfNeeded();
    await page.getByText("//*[text()='Beauty']").first().hover();

});
Then('I Verify playwright methods part4', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")

    var text = await page.getByText("Alerts & Popups").innerText();
    console.log("Text is:", text);
    console.log("==================Hover=========================")
    await page.locator("#username").highlight();

    var emailvalue = await page.getByPlaceholder("Enter your full name").getAttribute("class")
    console.log("Email value is: ", emailvalue)  //full-width

    var visib = await page.getByText(" Standard").isVisible();
    if (visib == true)
        await page.getByText(" Standard").click();

    await page.waitForTimeout(10000);
    var hiden = await page.getByText(" Express").isHidden();
    if (hiden == false)
        await page.getByText(" Express").click();

    /* await page.locator("//*[@type='checkbox']").nth(7).scrollIntoViewIfNeeded();
    await page.locator("//*[@type='checkbox']").nth(7).click(); */

    ////tbody/tr[1]/td[4]/input[1]

    await page.locator("//tbody/tr[1]/td[4]/input[1]").scrollIntoViewIfNeeded();
    var visiblity = await page.locator("//tbody/tr[1]/td[4]/input[1]").isVisible()
    if (visiblity == true)
        await page.locator("//tbody/tr[1]/td[4]/input[1]").click();

    console.log("================ISDisabled===============")
    var disable = await page.locator("//tbody/tr[2]/td[4]/input[1]").isDisabled();
    if (disable == false)
        await page.locator("//tbody/tr[2]/td[4]/input[1]").click();

    console.log("================isHidden===============")
    var hide = await page.locator("//tbody/tr[3]/td[4]/input[1]").isHidden();
    if (hide == false)
        await page.locator("//tbody/tr[3]/td[4]/input[1]").click();
    console.log("================ISunabled===============")
    var enabled = await page.locator("//tbody/tr[4]/td[4]/input[1]").isEnabled();
    if (enabled == true)
        await page.locator("//tbody/tr[4]/td[4]/input[1]").click();
    console.log("================Ieditabld===============")
    var editable = await page.locator("//tbody/tr[5]/td[4]/input[1]").isEditable();
    if (editable == false)
        await page.locator("//tbody/tr[5]/td[4]/input[1]").click();

    await page.waitForTimeout(5000);
    console.log("================Ieditabld===============")
    var editable = await page.locator("//tbody/tr[5]/td[4]/input[1]").isEditable();
    if (editable == true)
        await page.locator("//tbody/tr[5]/td[4]/input[1]").setChecked(true);

    console.log("================getText===============")

    var value = await page.locator("//tbody/tr[1]/td[5]").innerText();
    console.log("Box value is:", value);

    /*  await page.getByPlaceholder("Enter Name").scrollIntoViewIfNeeded();
     await page.getByPlaceholder("Enter Name").fill("Hello world");
     await page.locator("#email").fill("rajesh@gmail.com");
     await page.locator("//*[contains(@id,'phone')]").fill("948494949984");
     await page.locator("//*[starts-with(@id,'textarea')]").fill("Veldanda Rajesh"); */

    await page.getByRole("link", { name: "Home" }).click();

    await page.waitForTimeout(5000);

    console.log("===============isvisible=====================")
    var visb = await page.locator("#female").isVisible();
    if (visb == true)
        await page.locator("#female").click();

    //getByRole('textbox', { name: "Email Address" });
});
Then('I Verify playwright methods part6', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("=======1st way to clear the text into the text box======");
    await page.locator("#field1").clear();
    await page.locator("#field1").scrollIntoViewIfNeeded();
    await page.locator("#field1").type("Rajesh");
    await page.waitForTimeout(5000)

    console.log("=======2nd way to clear the text into the text box======");
    await page.locator("#field1").fill(" ")
    await page.locator("#field1").fill("Testing")

    await page.waitForTimeout(5000);

    console.log("=======3rd way to clear the text into the text box======");
    await page.locator("#field1").press("Control+A");
    await page.keyboard.press("Delete");
    await page.keyboard.up("Control")
    await page.keyboard.insertText("HyderabadTestingteam");

    console.log("=======4th way to clear the text into the text box======");
    await page.locator("#field1").clear();
    await page.locator("#field1").pressSequentially("Testing");
    await page.locator("#field1").pressSequentially(" Rajesh");

    console.log("=======Dropdown======");
    let colourdropdown = page.locator("#colors");
    await page.locator("#colors").scrollIntoViewIfNeeded();
    /* colourdropdown.selectOption("Green");
    colourdropdown.selectOption("White");
    colourdropdown.selectOption("Yellow"); */

    //colourdropdown.selectOption(["Yellow", "White", "Green"]);

    colourdropdown.selectOption([{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }]);

    //countrydropdown

    var countrydropdown = page.locator("#country");
    // countrydropdown.selectOption([{index : 4}])
    countrydropdown.selectOption("India")

    console.log("==========1st wayt to create screnshot of the web element==============");
    await page.getByPlaceholder("Enter Name").fill("RajeshVeldanda")
    await page.screenshot({ path: 'Webelementname3.png' });

    console.log("==========2nd wayt to create screnshot of the web element==============");
    await page.screenshot({ path: "./PlaywrightAutomationCode/screenshot/uptoscreenlenth.jpg" });

    console.log("==========3rd wayt to create screnshot of the web element==============");
    await page.screenshot({ path: "./PlaywrightAutomationCode/screenshot/testing.jpg", fullPage: true });

    console.log("============Upload files for single file==================");
    await page.locator("#singleFileInput").scrollIntoViewIfNeeded();
    await page.locator("#singleFileInput").setInputFiles("Webelementname3.png");
    await page.getByText("Upload Single File").click();

    console.log("============Upload files for multiple file==================");
    await page.locator("#multipleFilesInput").setInputFiles(["Webelementname3.png", "Webelementname.png", "./PlaywrightAutomationCode/screenshot/uptoscreenlenth.jpg"]);
    await page.getByText("Upload Multiple Files").click();

});
Then('Generate Dates123', async function () {
    var todaysDate = new Date()
    console.log("todaysDate is: ", todaysDate); //Mon Jul 27 2026 14:02:00 GMT+0530 (India Standard Time)

    var todaysdateinIST = todaysDate.toLocaleDateString();  //
    console.log("todaysdateinIST is: ", todaysdateinIST);  //'27/7/2026'

    var pastdate = new Date(todaysDate)
    pastdate.setDate(pastdate.getDate() - 10)

    console.log("Pastdate is: ", pastdate); //Fri Jul 17 2026 14:08:59 GMT+0530 (India Standard Time)

    var pastdateformat = pastdate.toLocaleDateString();
    console.log("pastdeateformat is: ", pastdateformat)

    var futuredate = new Date(todaysDate)
    futuredate.setDate(futuredate.getDate() + 30)
    console.log("Future date Is: ", futuredate);   //Wed Aug 26 2026 14:12:20 GMT+0530 (India Standard Time)

});
Then('I Verify playwright methods part5', { timeout: 5000 }, async function () {

    page.goto("https://testautomationpractice.blogspot.com/")

    console.log("===========1st way to clear the webelement=============")
    await page.locator("#field1").clear();
    await page.locator("#field1").scrollIntoViewIfNeeded();
    await page.locator("#field1").type("DMT");

    await page.waitForTimeout(5000)
    console.log("===========2nd way to clear the webelement=============")
    await page.locator("#field1").fill(" ");
    await page.locator("#field1").fill("Testing");

    await page.waitForTimeout(5000)
    console.log("===========3rd way to clear the webelement=============")
    await page.locator("#field1").press("Control+A")
    await page.keyboard.press("Delete");
    await page.keyboard.up("Control");
    await page.keyboard.insertText("QualityHyderabad");

    await page.waitForTimeout(6000)
    await page.locator("#field1").clear();
    await page.locator("#field1").pressSequentially("HYDERABAD");
    await page.locator("#field1").pressSequentially(" CAPITAL");

    console.log("==================Dropdowns==================")

    var dropdown = page.locator("#colors");
    /* dropdown.selectOption("Yellow");
    dropdown.selectOption("White"); */
    // dropdown.selectOption(["Yellow","White", "Red"])
    dropdown.selectOption([{ index: 1 }, { index: 2 }, { index: 3 }, { index: 4 }])

    console.log("==================Country Dropdown==================")
    var country = page.locator("#country")
    // await country.selectOption("India")

    await country.selectOption([{ index: 5 }]);

    console.log("==================1st way to take screenshots==================")
    await page.locator("#phone").fill("8886669990");

    /* console.log("===========1st way to take screenshot of web element");
    await page.screenshot({path : 'RajeshTesting.png'});
    
    console.log("===========2nd way to take screenshot of web element");
    await page.screenshot({path : "./PlaywrightAutomationCode/screenshot/Rajesh.png"});

    console.log('===============3rd way to take screenshot full page==================')
    await page.screenshot({path : "./PlaywrightAutomationCode/screenshot/second.png", fullPage : true}) */

    console.log("===============Singleupload files====================");
    await page.locator("#singleFileInput").click();
    await page.locator("#singleFileInput").scrollIntoViewIfNeeded();
    await page.locator("#singleFileInput").setInputFiles("Webelementname3.png")
    await page.getByText("Upload Single File").click();

    /*  console.log("===============multipleupload files====================")
     await page.locator("#multipleFilesInput").setInputFiles(["Webelementname3.png","Webelementname.png","./PlaywrightAutomationCode/screenshot/uptoscreenlenth.jpg"]);
     await page.getByText("Upload Multiple Files").click(); */

});
Then('Generate Dates', async function () {
    var todaysdate = new Date()
    console.log("todaysdate is: ", todaysdate);  //Mon Jul 27 2026 16:19:04 GMT+0530 (India Standard Time)

    var todaysdateinIST = todaysdate.toLocaleDateString();
    console.log("TodaysdateinIST:", todaysdateinIST);

    var format = todaysdate.toLocaleDateString();
    console.log("normal format is: ", format);

    var pastdate = new Date(todaysdate)
    pastdate.setDate(pastdate.getDate() - 10);
    var pastdateformat = pastdate.toLocaleDateString();
    console.log("Pastdate is: ", pastdateformat);

    var futuredate = new Date(todaysdate)
    futuredate.setDate(futuredate.getDate() + 11)
    var futuredateformat = futuredate.toLocaleDateString();
    console.log("Futuredate is: ", futuredateformat);

    var completemonthname = todaysdate.toLocaleDateString("en-us", { month: "long" })
    console.log("Completemonthname is: ", completemonthname);

    var shortmonthname = todaysdate.toLocaleDateString("en-us", { month: "short" });
    console.log("shortmonth month name is:", shortmonthname);

});
Then('I verify web table in static way2525', async function () {

    await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
    let webtable = await page.locator("//*[@name='BookTable']").isVisible();
    if (webtable == true) {
        console.log("WebTable is displayed on the web page")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded()

        let expectText = "Animesh";
        let actualText = await page.locator("//*[@name='BookTable']//tbody//tr[4]//td[2]").innerText();
        if (expectText == actualText) {

            console.log(expectText, "is displayed in the web table")
        }
        else {
            console.log(actualText, "is not displayed in the web table")
        }
    }
    else {
        console.log("web table is not displyed on the web page")
    }

});
Then('I verify web table in static way2222', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();

    var webTable = await page.locator("//*[@name='BookTable']").isVisible()
    if (webTable == true) {

        console.log("webTable is displayed on the web page")
        let expectText = "Amit";
        let actualText = await page.locator("//*[@name='BookTable']//tbody//tr[4]//td[2]").innerText();
        if (expectText == actualText) {

            console.log(expectText, "is displayed in the Web Table")
        }
        else {
            console.log(actualText, "is not displayed in the web Table")
        }
    }
    else {
        console.log("webTable is not displayed on the web page")
    }
});

Then('I verify web table in static way3', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#taskTable").scrollIntoViewIfNeeded();

    var Dynamicwebtable = await page.locator("#taskTable").isVisible();

    if (Dynamicwebtable == true) {
        console.log("web table is displyed on the web page")
        let expectvalue = "Chrome";
        let actualText = await page.locator("//*[@id='taskTable']//tbody[1]//tr[2]//td").innerText();
        if (expectvalue == actualText) {
            console.log(expectvalue, "is displayed in the Web Table");
        }
        else {
            console.log(actualText, "is not displayed in the Web Table")
        }
    }
    else {
        console.log("web table not is displyed on the web page")
    }
});
Then('I verify web table in static way4', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#taskTable").scrollIntoViewIfNeeded();
    var dynamic = await page.locator("#taskTable").isVisible();
    if (dynamic == true) {
        console.log(" Dynamic table is displayed on web page")
        let expectText = "Chrome";
        let actualText = await page.locator("//*[@id='taskTable']//tbody[1]//tr[2]//td[1]").innerText();
        if (expectText == actualText) {
            console.log(expectText, "is displayed on Dynamic table")
        }
        else {
            console.log(actualText, "is not displayed on Dynamic table")
        }
    }
    else {
        console.log(" Dynamic table is not displayed on web page")
    }
});
Then('I Verify the Static WebTable', async function () {

    // await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    var StaticTable = await page.locator("//*[@name='BookTable']").isVisible();

    await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
    if (StaticTable == true) {
        console.log("Static web table is displayed on the web page")

        let expectText = "Javascript";

        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[4]//td[3]").innerText();

        if (expectText == actualText) {
            console.log(expectText, " Is dipsplayed on the static table");
        }
        else {
            console.log(expectText, "Is not displayed on the Static webtable")
        }
    }
    else {
        console.log("Static web table is not displayed on the web page")
    }
});

Then('I verify web table in static way', { timeout: 15000 }, async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    var Tablevalues = await page.locator("//*[@name='BookTable']").isVisible();
    await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
    if (Tablevalues == true) {

        console.log(" Web table values are displayed on webpage")

        let expectText = "Mukesh";
        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[5]//td[2]").innerText();
        if (expectText == actualText) {
            console.log(expectText, "is displayed on webpage")
        }
        else {
            console.log(expectText, "is not displayed on webpage")
        }
    }
    else {
        console.log(" Web table values are displayed on webpage");
    }
});
Then('I Verify the Webtable in the static way2', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    var Tablevalues = await page.locator("//*[@name='BookTable']").isVisible();

    if (Tablevalues == true) {

        console.log(" Web table values are displayed on webpage");

        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
        let expectText = "Test";
        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[5]//td[2]").innerText();
        if (expectText == actualText) {
            console.log(expectText, "is displayed on webpage")
        }
        else {
            console.log(expectText, "is not displayed on webpage")
        }
    }
    else {
        console.log(" Web table values are displayed on webpage");
    }
});

Then('I Verify the Webtable in the Dynamic way', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let Dynamictable = await page.locator("//*[@name='BookTable']").isVisible();
    if (Dynamictable == true) {
        console.log("Dynamic web table is displayed on web page")

        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();

        let rows = await page.locator("//*[@name='BookTable']//tbody[1]//tr").all();

        if (rows.length > 0) {
            console.log("Web table have the rows")
            for (let i = 2; i <= rows.length; i++) {

                let coulmns = await page.locator("//*[@name='BookTable']//tbody[1]//tr[" + i + "]//td").all();
                if (coulmns.length > 0) {

                    for (let j = 1; j <= coulmns.length; j++) {

                        let expectText = "Mukesh";

                        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[" + i + "]//td[" + j + "]").innerText();

                        if (expectText == actualText) {

                            console.log(expectText, " is displayed on web table on row no:", i, "column no:", j);
                        }
                    }
                }
                else {
                    console.log("Web table does not have columns")
                }
            }
        }
    }
    else {
        console.log("Dynamic webtable is not displayed")
    }
});

Then('I Verify the Webtable in the Dynamic way1', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let Dynamic = await page.locator("//*[@name='BookTable']").isVisible();
    if (Dynamic == true) {
        console.log("Dynamic web table is displayed")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();

        let rows = await page.locator("//*[@name='BookTable']//tbody//tr").all();
        if (rows.length > 0) {
            console.log("Webtable have rows")
            for (let i = 2; i < rows.length; i++) {
                let columns = await page.locator("//*[@name='BookTable']//tbody//tr[" + i + "]//td").all();
                if (columns.length > 0) {
                    for (let j = 1; j <= columns.length; j++) {
                        let expectText = "Amit";

                        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[" + i + "]//td[" + j + "]").innerText();
                        if (expectText == actualText) {
                            console.log(expectText, "is displayed on web table in row number", i, "columns number is:", j)
                        }
                    }
                }
                else {
                    console.log("webTable does not have columns")
                }
            }
        } else {
            console.log("Webtable does not have row number")
        }
    }
    else {
        console.log("Dynamic web table is not displayed")
    }
});

//I Verify the headers in the web table
Then('I Verify the headers in the web table', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let Dynamic = await page.locator("//*[@name='BookTable']").isVisible();
    if (Dynamic == true) {
        console.log("WebTable is displayed on web page")
        let rows = await page.locator("//*[@name='BookTable']//tbody//tr").all();
        if (rows.length > 0) {
            console.log("Webtable have rows")
            for (let i = 1; i < rows.length; i++) {
                if (i == 1) {

                    let columns = await page.locator("//*[@name='BookTable']//tbody//tr[" + i + "]//th").all();
                    for (let j = 1; j <= columns.length; j++) {
                        let headertext = await page.locator("//*[@name='BookTable']//tbody//tr[" + i + "]//th[" + j + "]").innerText();
                        console.log(headertext);
                    }
                }
            }
        }
    } else {
        console.log("WebTable is not displayed on web page")
    }
});

Then('I Verify datepicker in web table', { timeout: 5000 }, async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='datepicker']").click();
    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let Webcalender = await page.locator("//*[@id='ui-datepicker-div']").isVisible();
    if (Webcalender == true) {
        console.log("Webcalender is displayed on webpage")
        let expectdate = "22";
        let actualdate = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[4]//td[4]").innerText();
        if (expectdate == actualdate) {
            console.log(expectdate, "is displayed on webpage")
            await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[4]//td[4]").click();
        }
        else {
            console.log(expectdate, "is not displayed on web page")
        }
    }
    else {
        console.log("Webcalender is not displayed on webpage")
    }
});


Then('I Verify datepicker in dynamic way3', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='datepicker']").click();

    let Dynamicdate = await page.locator("//input[@id='datepicker']").isVisible();
    if (Dynamicdate == true) {
        console.log("Dynamicdate web table is displayed")

        await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

        let rows = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr").all();
        if (rows.length > 0) {
            console.log("Dynamicdate have rows")
            for (let i = 1; i < rows.length; i++) {
                let columns = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td").all();
                if (columns.length > 0) {
                    for (let j = 1; j <= columns.length; j++) {
                        let expectText = "25";
                        let actualText = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td[" + j + "]").innerText();
                        if (expectText == actualText) {
                            console.log(expectText, "is displayed on web table in row number", i, "columns number is:", j)
                            await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td[" + j + "]").click();
                        }
                    }
                }
                else {
                    console.log("webTable does not have columns")
                }
            }
        } else {
            console.log("Webtable does not have row number")
        }
    }
    else {
        console.log("Dynamic web table is not displayed")
    }
});

Then('I Verify the Static table values chrome', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

    let Dynamic = await page.locator("//*[@id='taskTable']").isVisible();
    if (Dynamic == true) {
        console.log("Web table have the values")
        await page.locator("//*[@id='taskTable']").scrollIntoViewIfNeeded();

        let rows = await page.locator("//*[@id='taskTable']//tbody[1]//tr").all();
        if (rows.length > 0) {
            console.log("Dynamic values are displayed on web page")
            for (let i = 1; i < rows.length; i++) {
                let columns = await page.locator("//*[@id='taskTable']//tbody[1]//tr[" + i + "]//td").all();
                if (columns.length > 0) {
                    for (let j = 1; j <= columns.length; j++) {
                        let expectText = "Chrome";
                        let actualText = await page.locator("//*[@id='taskTable']//tbody[1]//tr[" + i + "]//td[" + j + "]").innerText();
                        if (expectText == actualText) {
                            console.log(expectText, "is displayed on row Is", i, "columns is", j);
                        }
                    }
                }
                else {
                    console.log("column values arenot displayed")
                }
            }
        }
    }
    else {
        console.log("Web table does nothave the values")
    }

});

Then('I Lunch automation playwright application123', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

});

Then('I Verify the dynamic table values', async function () {

    let Dynamic = await page.locator("//*[@name='BookTable']").isVisible();
    if (Dynamic == true) {
        console.log("Dynamic table is displayed on webpage")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
        let rows = await page.locator("//*[@name='BookTable']//tbody[1]//tr").all();
        if (rows.length > 0) {
            for (let i = 2; i < rows.length; i++) {
                let columns = await page.locator("//*[@name='BookTable']//tbody[1]//tr[" + i + "]//td").all();
                if (columns.length > 0) {
                    for (let j = 1; j < columns.length; j++) {
                        let expectText = "Amit";
                        let actualText = await page.locator("//*[@name='BookTable']//tbody[1]//tr[" + i + "]//td[" + j + "]").innerText();
                        if (expectText == actualText) {
                            console.log(expectText, "is displayed on web page rows is", i, "columns is", j)
                        }
                    }
                }
                else {
                    console.log("columns are not displayed")
                }
            }
        }
    }
    else {
        console.log("Dynamic table is not displayed on web page")
    }
});


Then('I Verify playwright hard assertion', async function () {

    await page.goto("https://www.amazon.in/");

    expect(await page.getByPlaceholder("Search Amazon.in")).toBeVisible();

    await page.getByPlaceholder("Search Amazon.in").fill("mobiles");

    expect(await page.locator("#nav-search-submit-button")).toBeAttached();

    await page.locator("//*[@id='nav-search-submit-button']").click();

    expect(await page.getByText("//*[text()='Sell']")).toBeHidden();

    expect(await page.getByText("//*[text()='Sell']")).toBeDisabled();

    expect(await page.getByText("//*[text()='Sell']")).toBeTruthy();

    expect(await page.getByText("//*[text()='Sell']")).toHaveCount(1);

    await page.getByText("//a[text()='Sell']").click();


});

Then('I Verify playwright hard assertion1', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    expect(await page.locator("//*[@class='title']")).toHaveCount(17)

    let text = await page.locator("//*[@class='title']").allInnerTexts();

    for (let i = 0; i < text.length; i++) {
        console.log(text[i])
    }

    expect(await page.locator("//*[@class='title']")).toContainText(["Upload Files"])

    expect(await page.locator("//*[@class='title']")).toContainText(["Static Web Table"]);

    expect(await page.locator("//*[@class='title']")).toContainText(["Tabs", "Double Click"])

    expect(await page.getByPlaceholder("Enter Name")).toHaveClass("form-control");

    expect(await page.getByPlaceholder("Enter Name")).toHaveId("name")

    expect(await page.getByPlaceholder("Enter Name")).toHaveAttribute("class")

    expect(await page.getByPlaceholder("Enter Name")).toHaveAttribute("id,name")

    expect(await page.locator("Enter Name")).toHaveAttribute("placeholder", "Enter Name")

    expect(await page.getByPlaceholder("Enter Name")).toBeTruthy();

    expect(await page.getByPlaceholder("Enter Name")).toBeEmpty();

    expect(await page.getByPlaceholder("Enter Name")).toBeEditable();

    await page.getByPlaceholder("Enter Name").fill("Hard Assertion validation");

});

Then('I Verify playwright soft assertion1', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    expect.soft(await page.locator("//*[@class='title']")).toHaveCount(17)

    let texts = await page.locator("//*[@class='title']").allInnerTexts();

    for (let i = 0; i < texts.length; i++) {
        console.log(texts[i])
    }

    expect.soft(await page.getByPlaceholder("Enter Name")).toContainText("Dynamic Button");

    expect.soft(await page.locator("Enter Name")).toContainText("SVG Elements");

    expect.soft(await page.getByPlaceholder("Enter Name")).toContainText("Slider")

    expect.soft(await page.getByPlaceholder("Enter Name")).toHaveClass("form-control");

    expect.soft(await page.getByPlaceholder("Enter Name")).toHaveId("name");

    expect.soft(await page.getByPlaceholder("Enter Name")).toHaveAttribute("id", "class");

    expect.soft(await page.getByPlaceholder("Enter Name")).toHaveAttribute("placeholder", "Enter Name")

    expect.soft(await page.getByPlaceholder("Enter Name")).toBeTruthy();

    expect.soft(await page.getByPlaceholder("Enter Name")).toBeVisible();

    expect.soft(await page.getByPlaceholder("Enter Name")).toBeAttached();

    await page.getByPlaceholder("Enter Name").fill("Veldanda");

});

Then('I Lunch automation playwright application', async function () {
    await page.goto("https://testautomationpractice.blogspot.com/");

});

Then('I Verify Reading the testdata from json file', async function () {

    await page.getByPlaceholder("Name").fill(TestData.Name);

    await page.getByPlaceholder("Enter EMail").fill(TestData.Email);

    await page.getByPlaceholder("Enter Phone").fill(TestData.Phone);

    await page.locator("#textarea").fill(TestData.Address);

    await page.locator(".wikipedia-search-input").fill(TestData.Wikipidia);

});


Then('I Verify Reading the testdata1 from json file', async function () {

    await page.getByPlaceholder("Name").fill(TestData1.Name);

    await page.getByPlaceholder("Enter EMail").fill(TestData1.Email);

    await page.getByPlaceholder("Enter Phone").fill(TestData1.Phone);

    await page.locator("#textarea").fill(TestData1.Address);

    await page.locator(".wikipedia-search-input").fill(TestData1.Wikipidia);

});

Then('I Verify Reading the testdata2 from json file', async function () {

    await page.getByPlaceholder("Name").fill(TestData2.Name);

    await page.getByPlaceholder("Enter EMail").fill(TestData2.Email);

    await page.getByPlaceholder("Enter Phone").fill(TestData2.Phone);

    await page.locator("#textarea").fill(TestData2.Address);

    await page.locator(".wikipedia-search-input").fill(TestData2.Wikipidia);

});

Then('I Verify playwright hard assertion2', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    expect(await page.locator("//*[@class='title']")).toHaveCount(17);

    let texts = await page.locator("//*[@class='title']").allInnerTexts();
    for (let i = 0; i < texts.length; i++) {
        console.log(texts[i])
    }

    expect(await page.locator("//*[@class='title']")).toContainText("Tabs")

    expect(await page.locator("//*[@class='title']")).toContainText("Mouse Hover");

    expect(await page.locator("//*[@class='title']")).toContainText("Slider")

    expect(await page.getByPlaceholder("Enter Name")).toHaveId('id');

    expect(await page.getByPlaceholder("Enter Name")).toHaveClass('class');

    expect(await page.getByPlaceholder("Enter Name")).toHaveAttribute("placeholder")

    expect(await page.locator("Enter Name")).toBeTruthy();

    expect(await page.locator("Enter Name")).toBeAttached();

    expect(await page.locator("Enter Name")).toBeVisible();

    expect(await page.locator("Enter Name")).toBeEmpty();
});

Then('I Verify Reading the testing json file', async function () {

    await page.getByPlaceholder("Name").fill(Testing.Name);

    await page.getByPlaceholder("Enter EMail").fill(Testing.Email);

    await page.getByPlaceholder("Enter Phone").fill(Testing.Phone);

    await page.locator("#textarea").fill(Testing.Address);

    await page.locator(".wikipedia-search-input").fill(Testing.Wikipidia);

});

Then('I Verify Reading the testing1 json file', async function () {

    await page.getByPlaceholder("Name").fill(Testing1.Name);

    await page.getByPlaceholder("Enter EMail").fill(Testing1.Email);

    await page.getByPlaceholder("Enter Phone").fill(Testing1.Phone);

    await page.locator("#textarea").fill(Testing1.Address);

    await page.locator(".wikipedia-search-input").fill(Testing1.Wikipidia);

});

Then('I Verify Reading the testing2 json file', async function () {

    await page.getByPlaceholder("Name").fill(Testing2.Name);

    await page.getByPlaceholder("Enter EMail").fill(Testing2.Email);

    await page.getByPlaceholder("Enter Phone").fill(Testing2.Phone);

    await page.locator("#textarea").fill(Testing2.Address);

    await page.locator(".wikipedia-search-input").fill(Testing2.Wikipidia);

});
Then('I Launch the automation application Practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");
});

Then('I Verify webtable functionality', async function () {

    let Dynamictable = await page.locator("//*[@name='BookTable']").isVisible();
    if (Dynamictable == true) {
        console.log("Dynamic values are displyed on webpage")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();

        let rows = await page.locator("//*[@name='BookTable']//tbody//tr").all();
        if (rows.length > 0) {
            console.log("Rows are displayed on webpage")
            for (let i = 2; i < rows.length; i++) {
                let coulmns = await page.locator("//*[@name='BookTable']//tbody//tr[" + i + "]//td").all();
                if (coulmns.length > 0) {
                    for (let j = 1; j < coulmns.length; j++) {
                        let expectText = "Javascript";
                        let actualText = await page.locator("//*[@name='BookTable']//tbody//tr[" + i + "]//td[" + j + "]").innerText();
                        if (expectText == actualText) {
                            console.log(expectText, "is displayed on webpag on row", i, "columns is", j)
                        }
                    }
                } else {
                    console.log("columns are not displayed")
                }
            }
        }
        else {
            console.log("Rows are not displayed on webpage")
        }

    } else {
        console.log("Dynamic values are not displyed on webpage")
    }

});


Then('I Verify Application elemenets', async function () {

    expect(await page.getByPlaceholder("Enter Name")).toBeVisible();

    expect(await page.getByPlaceholder("Enter Name")).toBeTruthy();

    expect(await page.getByPlaceholder("Enter Name")).toBeAttached();

    await page.getByPlaceholder("Enter Name").fill("Veldanda")

    expect(await page.getByPlaceholder("Enter EMail")).toBeVisible();

    await page.getByPlaceholder("Enter EMail").fill("rajesh@gmail.com");

    expect(await page.getByPlaceholder("Enter Phone")).toBeTruthy();

    expect(await page.getByPlaceholder("Enter Phone")).toHaveAttribute("id");

    await page.getByPlaceholder("Enter Phone").fill("984984984984");

    expect(await page.locator("#textarea")).toBeVisible();

    expect(await page.locator("#textarea")).toBeTruthy();

    await page.locator("#textarea").fill("HyderabadTelangana")

    await page.waitForTimeout(2000)

    let genderMale = await page.locator("#male").isVisible();
    if (genderMale == true)
        await page.locator("#male").click();

    await page.waitForTimeout(2000)

    let genderfemale = await page.locator("#female").isVisible();

    if (genderfemale == true)
        await page.locator("#female").click();

    console.log("==========Checkboxs==========================");

    let sunday = await page.locator("#sunday").isHidden();
    if (sunday == false)
        await page.locator("#sunday").click();
    await page.waitForTimeout(1000);
    let Monday = await page.locator("#monday").isEnabled();
    if (Monday == true)
        await page.locator("#monday").click();
    await page.waitForTimeout(1000);
    let tuesday = await page.locator("#tuesday").isDisabled();
    if (tuesday == false)
        await page.locator("#tuesday").click();
    await page.waitForTimeout(1000);
    let wednesday = await page.locator("#wednesday").isEditable();
    if (wednesday == true)
        await page.locator("#wednesday").click();
    await page.waitForTimeout(1000);
    let thursday = await page.locator("#thursday").isChecked();
    if (thursday == false)
        await page.locator("#thursday").click();
    await page.waitForTimeout(1000);
    let friday = await page.locator("#friday").isVisible();
    if (friday == true)
        await page.locator("#friday").click();
    await page.waitForTimeout(1000);
    let saturday = await page.locator("#saturday").isEditable();
    if (saturday == true) {
        await page.locator("#saturday").click();
    }
    console.log("===========dropdown=====================");

    let dropdown = await page.locator("#colors");

    await page.locator("#colors").scrollIntoViewIfNeeded();

    dropdown.selectOption(["Red"]);

    dropdown.selectOption(["White", "Green"]);

    let country = await page.locator("#country");
    country.selectOption("India")

    console.log("==========datePicker==============")

    await page.locator("//input[@id='datepicker']").click();
    await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();

    let Dynamic = await page.locator("//*[@id='ui-datepicker-div']").isVisible()
    if (Dynamic == true) {
        console.log("Dynamic table displayed on webpage")
        await page.locator("//input[@id='datepicker']").scrollIntoViewIfNeeded();
        let rows = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr").all();
        if (rows.length > 0) {
            console.log("Dynamicdate have rows")

            for (let i = 1; i < rows.length; i++) {
                let columns = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td").all();
                if (columns.length > 0) {
                    for (let j = 1; j <= columns.length; j++) {
                        let expectdate = "15";
                        let actualdate = await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td[" + j + "]").innerText();

                        if (expectdate == actualdate) {
                            console.log(expectdate, "is displayed on row is", i, "Column is", j)
                            await page.locator("//*[@id='ui-datepicker-div']//tbody//tr[" + i + "]//td[" + j + "]").click();
                        }
                    }
                } else {
                    console.log("Web table does not have columns")
                }
            }
        } else {
            console.log("Dynamicdate does not have rows")
        }
    } else {
        console.log("Dynamic table is not displayed on webpage")
    }

    console.log("===========SortedList=====================")

    let animals = await page.locator("//*[@id='animals']");

    animals.selectOption([{ index: 2 }, { index: 4 }, { index: 5 }, { index: 6 }, { index: 7 }])

    console.log("============Upload Singlefile================")
    await page.locator("#singleFileInput").scrollIntoViewIfNeeded();
    await page.locator("#singleFileInput").click
    await page.locator("#singleFileInput").setInputFiles("Webelementname2.png")
    await page.getByText("//*[text()='Upload Single File']").click();

    /* console.log("============Upload multiplefile================")
    await page.locator("//*[@id='multipleFilesInput']").click();
    await page.waitForTimeout(5000)
    await page.locator("#multipleFilesInput").setInputFiles(["Webelementname3.png","Webelementname.png"])
    await page.getByText("//*[text()='Upload Multiple Files']").click(); */


    console.log("============Static Web Table====================")

    let Static = await page.locator("//*[@name='BookTable']").isVisible();
    if (Static == true) {
        console.log("Static web table is displayed on webpage")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
        let expectText = "Animesh";
        let actualText = await page.locator("//*[@name='BookTable']//tbody//tr[4]//td[2]").innerText();

        if (expectText == actualText) {
            console.log(expectText, "is displayed on webpage")
        } else {
            console.log(expectText, "is not displayed on webpage")
        }
    } else {
        console.log("Static web table is not displayed on webpage")
    }

    console.log("==================Dynamic webtable===================================");

});

Then('I Verify Application elemenets123', async function () {

    let Static = await page.locator("//*[@name='BookTable']").isVisible();
    if (Static == true) {
        console.log("Static web table is displayed on webpage")
        await page.locator("//*[@name='BookTable']").scrollIntoViewIfNeeded();
        let expectText = "Animesh";
        let actualText = await page.locator("//*[@name='BookTable']//tbody//tr[4]//td[2]").innerText();

        if (expectText == actualText) {
            console.log(expectText, "is displayed on webpage")
        } else {
            console.log(expectText, "is not displayed on webpage")
        }
    } else {
        console.log("Static web table is not displayed on webpage")
    }

    await page.locator("//*[@id='multipleFilesInput']").scrollIntoViewIfNeeded();
    await page.locator("//*[@id='multipleFilesInput']").click();
    await page.locator("#multipleFilesInput").setInputFiles(["Webelementname.png", "Webelementname2.png"])
    await page.getByText("Upload Multiple Files").click();


    let Pegination = await page.locator("//*[@id='productTable']//tbody/tr[1]/td[4]/input[1]").isVisible();
    if (Pegination == true) {
        await page.locator("//*[@id='productTable']//tbody/tr[1]/td[4]/input[1]").click();
    }

});

Then('I Verify the frames', async function () {
    /*   await page.goto("https://demo.automationtesting.in/Frames.html");
     //Print the numbmer of frames
       let frames = await page.frames();
       console.log("number of frames:", frames.length)
       //1st way
       await page.frame({url: "https://demo.automationtesting.in/SingleFrame.html"})?.locator("//*[@type='text']").fill("Playwright")
       await page.locator("//*[text()='Iframe with in an Iframe']").click();
       //2nd way
       let mulitipleframe = await page.frame({url: "https://demo.automationtesting.in/MultipleFrames.html"})
       let allchildframes= await mulitipleframe?.childFrames();
       console.log("", allchildframes?.length)
       if(allchildframes&&allchildframes?.length){
           await allchildframes[0].locator("//*[@type='text']").fill("TestingQA") 
       } */

    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    let countframes = page.frames();
    console.log("countof the frames is:", countframes.length)

    //1st way
    let Button = await page.frame({ url: "https://the-internet.herokuapp.com/frame_bottom" })?.locator("//*[contains(text(),'BOTTOM')]").innerText();
    console.log("1stWay", Button);

    //2nd
    let bt = await page.frame({ url: "https://the-internet.herokuapp.com/frame_bottom" });
    let bttext2 = await bt?.locator("//*[contains(text(),'BOTTOM')]").innerText();
    console.log("2ndWay is", bttext2)

});



Then('I Reading the testdata from the feature file 1st way {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(name)

    await page.getByPlaceholder("Enter EMail").fill(email)

    await page.getByPlaceholder("Enter Phone").fill(phone)

    await page.locator("#textarea").fill(address)

    await page.locator(".wikipedia-search-input").fill(wikipedia)


});

Then('I Reading the testdata from the feature file 2nd way {string},{string},{string},{string},{string}', async function (name, email, phone, address, wikipedia) {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.getByPlaceholder("Enter Name").fill(name)

    await page.getByPlaceholder("Enter EMail").fill(email)

    await page.getByPlaceholder("Enter Phone").fill(phone)

    await page.locator("#textarea").fill(address)

    await page.locator(".wikipedia-search-input").fill(wikipedia)


});

Then('I Verify Frame application', async function () {

    await page.goto("https://UI.vision/demo/webtest/frames/");
    const framescount = await page.frames();
    console.log("Framescount is:", framescount);

    //frame1
    await page.frameLocator("//*[@src='frame_1.html']").locator("//*[@name='mytext1']").fill("Frame1")
    //frame2
    const frame2 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_2" });
    if (frame2) {
        await frame2.locator("//*[@name='mytext2']").fill("Frame2");
    }
    else {
        console.log("frame2 is not avaiable")
    }
    await page.waitForTimeout(3000);

    //frame3;
    const frame33 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3" });
    if (frame33) {
        await frame33.locator("//*[@name='mytext3']").fill("Frame33");
        const allchildframes = frame33.childFrames();
        const Option = allchildframes[0].locator("//*[text()='Hi, I am the UI.Vision IDE']");
        Option.click();
        expect(Option).toBeVisible();

    } else {
        console.log("frame3 is not avaiable")
    }
    await page.waitForTimeout(3000);
    //frame4

    await page.frameLocator("//*[@src='frame_4.html']").locator("//*[@name='mytext4']").fill("Frame4");
    //frame5
    const frame5 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_5" });

    await frame5?.locator("//*[@name='mytext5']").fill("Frame5")

    await page.waitForTimeout(5000);

    await frame5?.locator("//*[text()='https://a9t9.com']").click();

    const text = await frame5?.locator("//img[@alt='Ui.Vision by a9t9 software - Image-Driven Automation']").getAttribute("alt");

    console.log("frame innerText Is;", text);


});


Then('I Verify the simple alert', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async (dialog) => {
        console.log("Dialog type", dialog.type());
        console.log('Dialog message', dialog.message());
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(5000);

});

Then('I Verify the confirmation alert', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async (dialog) => {

        console.log("Dialog type:", dialog.type());
        expect(dialog.type()).toContain('confirm');
        console.log("Dialog Text Is:", dialog.message());
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();  //close dialog by accepting
        //await dialog.dismiss(); //close the dialog by dismissing
    })
    await page.locator("#confirmBtn").click();
    const text: string = await page.locator("#demo").innerText();
    console.log("output text is:", text);
    //expect(await page.locator("#demo")).toHaveText("You pressed Cancel!");
    expect(page.locator("#demo")).toHaveText("You pressed OK!");
    await page.waitForTimeout(3000);

});
//Prompt alert

Then('I Verify the Prompt alert', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', (dialog) => {
        console.log("Dialog Type is:", dialog.type());
        console.log("Dialog Text is:", dialog.message());
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain('Harry Potter');
        dialog.accept('veldandarajesh');

    });
    await page.locator("#promptBtn").click();
    const prompttext = await page.locator("#demo").innerText();
    console.log("Prompt Ok message is:", prompttext)
    expect(page.locator('#demo')).toHaveText("Hello veldandarajesh! How are you today?")
    await page.waitForTimeout(5000);

});

//Filters on saucedemo
Then('I Verify the filters on saucedemo', async function () {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");

    await page.locator("#password").fill("secret_sauce");

    await page.locator("#login-button").click();

    await page.waitForTimeout(4000);

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to car' }).click();

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Fleece Jacket' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Test.allTheThings() T-Shirt (Red)' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.waitForTimeout(3000);

    await page.locator("//*[@class='inventory_item']").filter({ hasText: "Sauce Labs Bike Light" }).getByRole('button', { name: 'Remove' }).click();

    await page.waitForTimeout(2000);

    await page.locator("//*[@class='inventory_item']").filter({ hasText: "Sauce Labs Backpack" }).getByRole('button', { name: 'Remove' }).click();

    await page.waitForTimeout(2000);

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Sauce Labs Fleece Jacket' }).getByRole('button', { name: 'Remove' }).click();

    await page.waitForTimeout(2000);

    await page.locator("//*[@class='inventory_item']").filter({ hasText: 'Test.allTheThings() T-Shirt (Red)' }).getByRole('button', { name: 'Remove' }).click()

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//*[@class='form-check form-check-inline']").filter({ hasText: "Sunday" }).click();

    await page.waitForTimeout(2000);

    await page.locator("//*[@class='form-check form-check-inline']").filter({ hasText: 'Mon' }).click();

    await page.waitForTimeout(2000);

    await page.locator("//*[@class='form-check form-check-inline']").filter({ hasText: 'Saturday' }).click();

    await page.waitForTimeout(5000);


});

//I Verify the JavaScript Alerts
Then('I Verify the JavaScript Alerts', async function () {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am a JS Alert")
        await dialog.accept()
    })
    await page.locator("//*[@onclick='jsAlert()']").click();
    await page.waitForTimeout(5000);
});

//I Verify the JavaScript confirm Alerts
Then('I Verify the JavaScript Alerts Ok click', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {
        console.log("Dialog tppe is:", dialog.type());
        console.log("Dialog Text is:", dialog.message());
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain("I am a JS Confirm")
        await dialog.accept();

    })
    await page.locator("//*[@onclick='jsConfirm()']").click();
    const Resultconfirm: string = await page.locator("#result").innerText();
    console.log("Result on JS Confirm is:", Resultconfirm);
    expect(Resultconfirm).toContain("You clicked: Ok");
    await page.waitForTimeout(5000);
});

Then('I Verify the JavaScript Alerts Cancel click', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {
        console.log("Dialog type is:", dialog.type());
        console.log("Dialog message", dialog.message());
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("I am a JS Confirm");
        dialog.dismiss();
    });

    await page.locator("//*[@onclick='jsConfirm()']").click();
    const Resultconfirm: string = await page.locator("#result").innerText();
    console.log("Result on JS Confirm is:", Resultconfirm);
    expect(Resultconfirm).toContain("You clicked: Cancel");
    await page.waitForTimeout(2000);

});

Then('I Verify the JavaScript promptalert Ok click', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("I am a JS prompt");
        dialog.accept("rajesh");
    });
    await page.locator("//*[@onclick='jsPrompt()']").click();
    const PromptResult = await page.locator("#result").innerText();
    console.log("Promplt result when click on OK is:", PromptResult);
    await page.waitForTimeout(3000);
});

//I Verify the JavaScript promptalert Cancel click

Then('I Verify the JavaScript promptalert Cancel click', async function () {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("I am a JS prompt");
        await dialog.dismiss();

    })
    await page.locator("//*[@onclick='jsPrompt()']").click();
    const Promptcanel = await page.locator("#result").innerText();
    console.log("Prompt cancel result is:", Promptcanel);
    expect(Promptcanel).toContain("You entered: null");
    await page.waitForTimeout(3000)

});

Then('I close the browser', async function () {
    await page.close();
});

//I Verify the simplet alerts on automation practice
Then('I Verify the simplet alerts on automation practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("alert");
        expect(dialog.message()).toContain("I am an alert box!");
        dialog.accept()
    })
    await page.locator("//*[@id='alertBtn']").click();
    await page.waitForTimeout(5000);
    await page.close();
});

//I Verify the confirmation OK alerts on automation practice

Then('I Verify the confirmation OK alerts on automation practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is", dialog.message());
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        dialog.accept()
    });
    await page.locator("#confirmBtn").click();
    const confirmresultok = await page.locator("#demo").innerText();
    console.log("confirm alert result is:", confirmresultok);
    expect(confirmresultok).toContain("You pressed OK!");
    await page.waitForTimeout(5000);
    await page.close();
});
//I Verify the confirmation Canel alerts on automation practice
Then('I Verify the confirmation Canel alerts on automation practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', async (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("confirm");
        expect(dialog.message()).toContain("Press a button!");
        dialog.dismiss()
    })
    await page.locator("#confirmBtn").click();
    const confirmcancel = await page.locator("#demo").innerText();
    console.log("confirmcanel message is:", confirmcancel);
    expect(confirmcancel).toContain("You pressed Cancel!");
    await page.waitForTimeout(5000);
    await page.close();
});
Then('I Verify the prompt OK alerts on automation practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog) => {
        console.log("dialog type is:", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept('veldandarajesh')
    })
    await page.locator("#promptBtn").click();
    const promptokresult = await page.locator("#demo").innerText();
    console.log("prompt ok result is:", promptokresult);
    expect(page.locator("#demo")).toHaveText("Hello veldandarajesh! How are you today?")
    await page.waitForTimeout(5000);
    // await page.close();
});

//I Verify the prompt Canel alerts on automation practice
Then('I Verify the prompt Canel alerts on automation practice', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog', (dialog) => {
        console.log("dialog type is", dialog.type());
        console.log("dialog message is:", dialog.message());
        expect(dialog.type()).toContain("prompt");
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.dismiss();
    })
    await page.locator("#promptBtn").click();
    const promptcancel = await page.locator("#demo").innerText();
    console.log("prompt cancel is:", promptcancel);
    expect(page.locator('#demo')).toHaveText("User cancelled the prompt.");
    await page.waitForTimeout(5000);

    //await page.close();
});

Then('I Verify filter option', async function () {

    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon.in").fill("mobiles")

    await page.locator("#nav-search-submit-button").click();

    await page.waitForSelector("//*[text()='Results']");

    await page.close();

});

//I Verify shadow dom elements

Then('I Verify shadow dom elements', async function () {

    await page.goto("https://selectorshub.com/xpath-practice-page/");
    // handling shadow dom means parent shadow dom
    await page.locator("#userName").locator("#kils").fill("LiveTech");
    // handling child shadow dom means parent shadow dom contains another shadow rom
    await page.locator("#userName").locator("#app2").locator("#pizza").fill("Corn Pizza");

});

Then('I verify the Playwright waits', async function () {

     await page.goto("https://www.facebook.com/")

     await page.waitForTimeout(10000);

     await page.locator("//*[@name='email']").fill("LiveTect");

     await page.waitForTimeout(8000);

     await page.locator("//*[@name='pass']").fill("Rajesh");

    console.log("w===============waits for selector======================");

     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //1st way
    await page.waitForSelector('//*[@name="username"]');
     
    await page.locator('//*[@name="username"]').fill("Admin");

    //2nd way
    await page.waitForSelector('//*[@name="password"]',{timeout:5000});

    await page.locator('//*[@name="password"]').fill("admin123");

    console.log("w===============waits for loan state======================");
   //1st way
    await page.waitForLoadState();

    await page.locator('//*[@type="submit"]').click();
    //2nd way
     await page.waitForLoadState('domcontentloaded')   //html css contain waiting

     await page.locator("//*[text()='Admin']").click();
    //3rd way
     await page.waitForLoadState('domcontentloaded',{timeout:5000})  // html and css contant waiting time 5 seconds is loading

     await page.locator("//*[text()='PIM']").click();  

     //4th way
     await page.waitForLoadState('load')  // html and css contant waiting time 5 seconds is loading

     await page.locator("//*[text()='Leave']").click()

     //5th way
     await page.waitForLoadState('load',{timeout:5000})  // html and css contant images and waiting time 5 seconds is loading

     await page.locator("//*[text()='Time']").click()  

    //6th way
     await page.waitForLoadState('networkidle');  // html and css contant images and networl issues

     await page.locator("//*[text()='Recruitment']").click()

    //7th way
     await page.waitForLoadState('networkidle',{timeout:5000});  // html and css contant images and networl issues

     await page.locator("//*[text()='My Info']").click()


});









































/* Then('I Verify the playwright locators', async function () {
    console.log("==========getByPlaceholder=================")
    await page.getByPlaceholder("Enter Name").fill("Rajesh");
    await page.getByPlaceholder("Enter EMail").fill("Veldanda@test.com");
    console.log("==========getByText=================")
    await page.getByText("START").click();
    await page.getByText("STOP").click();
    console.log("==========getByRole=================")
    await page.getByRole('button', { name: 'START' }).click();
    await page.getByRole('button', { name: 'STOP' }).click()
    await page.getByRole('checkbox', { name: 'thursday' }).click();
    await page.getByRole('checkbox', { name: 'saturday' }).click();
    await page.getByRole('checkbox', { name: 'friday' }).click();
    await page.getByRole('checkbox', { name: 'friday' }).scrollIntoViewIfNeeded();
    await page.getByRole('textbox', { name: 'Phone' }).fill("852386985200");
    
});
Then('I Verify the playwright locators part2', async function () {
        await page.goto("https://parabank.parasoft.com/parabank/index.htm");
        console.log("==========Get by alttext================")
        await page.getByAltText("ParaBank").click();
        console.log("==========Get by title================")
        await page.getByTitle("ParaBank").click();
        console.log("==========Get by Label================")
        await page.goto("https://login.salesforce.com/?locale=in")
        await page.getByLabel("Username").fill("testing");
        await page.getByLabel("Password").fill("654654");
    });
//Verify selenium locators
Then('I Verify selenium locators', async function () {
    console.log("============Xpaths=================");
    console.log("============absolute Xpaths=================")
    //Playwright will not support absolute x path
    console.log("===============Relative xpath===============")
    await page.locator("//input[@placeholder='Enter Name']").fill("VELDANDA");
    await page.locator("//input[@placeholder='Enter EMail']").fill("Rajesh");
    await page.locator("//input[@placeholder='Enter Phone']").fill("856565656")
    await page.locator("//textarea[@id='textarea']").fill("Hyderabad");
    await page.locator("//label[@for='male']").click();
    await page.getByRole('checkbox', {name : 'Monday'}).click();
});
Then('I enter with credentials', async function () {
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.getByText("Login").click();


}); */