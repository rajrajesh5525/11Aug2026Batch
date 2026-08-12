

import { test, expect, Locator } from "playwright/test";

test.only('Selectsingledropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //select the option from the drop down (4 ways)

    //await page.locator("#country").selectOption('India') //visible text
    await page.locator("#country").scrollIntoViewIfNeeded();
    //await page.locator('#country').selectOption({value: 'usa'}) // value
    //await page.locator("#country").selectOption({label : 'Australia'}); //label
    await page.locator("#country").selectOption({ index: 1 }); //united kingdom

    //check number of options in the dropdown(count)
    const dropdownoptions: Locator = page.locator("//select[@id='country']/option");
    await expect(dropdownoptions).toHaveCount(10);
    await page.waitForTimeout(5000);
  
    //check an option present in the drop down
   const optiontext:string[] = (await (page.locator("//select[@id='country']/option")).allInnerTexts()).map(text=>text.trim());
   console.log(optiontext);
   
   expect(optiontext).toContain("France"); //check if the array contain japan

   //Printing options from the dropdown
   for(let option of optiontext){
       console.log(option)
   }

});