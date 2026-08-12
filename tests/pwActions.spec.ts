
import { test, expect, Locator } from "playwright/test";
import { contains } from "typescript-collections/dist/lib/arrays";

//TextInput / Textbox / Inputbox

test("Demo on Actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const TextBox: Locator = page.locator("#name");

    await expect(TextBox).toBeVisible();
    await expect(TextBox).toBeEnabled();
    const maxlength: string | null = await TextBox.getAttribute("maxlength");
    expect(maxlength).toBe('15');

    await TextBox.fill("Playwright");
    const enteredvalue: string = await TextBox.inputValue();
    console.log("Enterted value is:", enteredvalue);

    expect(enteredvalue).toBe("Playwright");

    await page.waitForTimeout(3000);
})
//Radio buttons actions
test("Radio button actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleRadio = page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect(await maleRadio.isChecked()).toBe(false);

    await maleRadio.check();
    //expect(await maleRadio.isChecked()).toBe(true);
    await expect(maleRadio).toBeChecked(); //always preferrable

    await page.waitForTimeout(3000);
});

//checkboxs
test.only("Checkbox actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

     //Select specific checkboc(sunday) using getbylabel assert
     const Sundaycheckbox: Locator = page.getByLabel("Sunday");
     await Sundaycheckbox.check();
     //expect(Sundaycheckbox).toBeChecked();
     //await page.waitForTimeout(3000);
 
     //Select all checkboxs and assert each is selected
     const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday']
     const checkboxs: Locator[] = days.map(index => page.getByLabel(index));
     expect(checkboxs.length).toBe(7);
 
     //Select all checkboxs and assert each is selected
 
     for (const Checkbox of checkboxs) {
         await Checkbox.check();
         await expect(Checkbox).toBeChecked();
     }
     await page.waitForTimeout(4000);
     //Uncheck last 3 checkboxs and assert it
     for (const Checkbox of checkboxs.slice(-3)) {
         await Checkbox.uncheck();
         await expect(Checkbox).not.toBeChecked();
     }
     await page.waitForTimeout(5000);
 
     //Toggle checkboxs = If checked : uncheck or if Unchecked : Check();
 
     for (const Checkbox of checkboxs) {
         if (await Checkbox.isChecked()) {
             //only if checkboxs checked
             await Checkbox.uncheck();
             await expect(Checkbox).not.toBeChecked();
 
         } else {
             //only if checkboxs unchecked
             await Checkbox.check();
             await expect(Checkbox).toBeChecked();
         }
     }
      await page.waitForTimeout(5000);
    //Randomly select checkboxs - select checkboxs by index [1,3,6]
    const indexes: number[] = [1,3,6]
    for (const i of indexes) {
        await checkboxs[i].check();
        await expect(checkboxs[i]).toBeChecked();
    }
        await page.waitForTimeout(5000);
 /*   //Select specific checkboc(sunday) using getbylabel asser
    const Sundaycheckbox: Locator = page.getByLabel("Sunday");
    await Sundaycheckbox.check();
    await expect(Sundaycheckbox).toBeChecked();
    await page.waitForTimeout(4000);

    //Select all checkboxs and assert each is selected
    const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday']
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index))
    expect(checkboxes.length).toBe(7);

    //Select all checkboxs and assert each is selected
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(4000);
    //Uncheck last 3 checkboxs and assert it
    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(5000);
    //Toggle checkboxs = If checked : uncheck or if Unchecked : Check();
    //if checkbox are checked : uncheck
    for (const checkbox of checkboxes) {
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        } else { //if checkbox checked
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
     await page.waitForTimeout(5000);
    //Randomly select checkboxs - select checkboxs by index [1,3,6]
    const indexes: number[] = [1, 3, 6]
    for (const i of indexes) {
        await checkboxs[i].check();
        await expect(checkboxs[i]).toBeChecked();
    }
    await page.waitForTimeout(5000);

    //select the checkbox based on the label
    /* const weekname = "Friday";
    for (const label of days) {
        if (label.toLowerCase() === weekname.toLowerCase()) {
            const checkbox = page.getByLabel(label)
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    } */
});



