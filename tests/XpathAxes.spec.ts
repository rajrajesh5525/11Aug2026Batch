//Xpath Axes:
/*
self
parent 
ancestor
following
ancestor
following sibling
preceding
preceding sibling
*/



import { test, expect, Locator } from "playwright/test";
import { contains } from "typescript-collections/dist/lib/arrays";

test("xpath demo in playwright", async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    //Self axes = Select td element that contains "Germany"
    const Germanycell = await page.locator("//*[text()='Germany']/self::td");
    await page.waitForTimeout(2000)
    await expect(Germanycell).toHaveText("Germany");

    //Parent:
    const Parentcell = page.locator("//*[text()='Germany']/parent::tr");
    //console.log(await Parentcell.textContent());

    //Child:
    const secondrowcells: Locator = page.locator("//*[@id='customers']//tr[2]/child::td")
    await expect(secondrowcells).toHaveCount(3);

    //Ancestor:  Parent element and grand parent elements
    const AllAncestor: Locator = await page.locator("//*[text()='Germany']/ancestor::table");
    await expect(AllAncestor).toHaveAttribute('id', 'customers');

    //Descendent: child element and grand childrens
    //Get all td elements under the table

    const alltds = await page.locator("//*[@id='customers']/descendant::td");
    await expect(alltds).toHaveCount(18);

    //following : getting the right side of the sibling and sibling chilrdren
    const followingcell: Locator = await page.locator("//td[text()='Germany']/following::td[1]");
    await expect(followingcell).toHaveText("Centro comercial Moctezuma");

    //following-sibling: Get the tds right of the elements
    const rightsibling: Locator = await page.locator("//td[text()='Germany']/following-sibling::td");
    await expect(rightsibling).toHaveCount(0);
    //example:
    const maria: Locator = await page.locator("//td[text()='Maria Anders']/following-sibling::td");
    await expect(maria).toHaveCount(1);
    //Preceding : Get the td just before the Germany

    const preceding: Locator = await page.locator("//td[text()='Germany']/preceding::td[1]");
    await expect(preceding).toHaveText("Maria Anders");

    //Preceding-siblings axis: Get <tds> to the left of the germany
    const leftsiblings = await page.locator("//td[text()='Germany']/preceding-sibling::td");
    await expect(leftsiblings).toHaveCount(2);
    await expect(leftsiblings.nth(0)).toHaveText("Alfreds Futterkiste");
    await expect(leftsiblings.nth(1)).toHaveText("Maria Anders");

});

test.only("xpath demo in AutomationPractice", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //self
    const self = await page.locator("//td[text()='500']/self::td");
    await expect(self).toHaveText("500");

    //parent
    const parentelements = await page.locator("//td[text()='500']/parent::tr");
    await expect(parentelements).toHaveCount(1)
    console.log(await parentelements.textContent());

    //child
    const child = await page.locator("//table[@name='BookTable']//tr[3]/child::td");
    await expect(child).toHaveCount(4);
    //console.log("Child elements are:",child.textContent())

    //ancestor
    const ancestor = await page.locator("//td[text()='500']//ancestor::tr");
    await expect(ancestor).toHaveCount(1);

    //follwing
    const following = await page.locator("//td[text()='500']//following::td[1]");
    await expect(following).toHaveCount(1);
    await expect(following).toHaveText("Learn JS");
    //followin-sibling
    const sibling = await page.locator("//td[text()='500']//following-sibling::td");
    await expect(sibling).toHaveCount(0);

    //preceding
    const preceding = await page.locator("//td[text()='500']/preceding::td[1]");
    await expect(preceding).toHaveCount(1);

    //Preceding-sibling
    const precedgingsibling = await page.locator("//td[text()='500']/preceding-sibling::td");
    await expect(precedgingsibling).toHaveCount(3);
    await expect(precedgingsibling.nth(2)).toHaveText("Java");
    await expect(precedgingsibling.nth(1)).toHaveText("Mukesh");
    await expect(precedgingsibling.nth(0)).toHaveText("Learn Java");
    
    


});