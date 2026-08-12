/*
Css Selector: Cascading style sheets
types:
Absolute css locators:

Relative css locators:
======================
tag with id------------------tag#id--------------------------------#id
tag with class---------------tag.class-----------------------------.class
tag with other atribute------tag[atributename=atributevalue]-------[atrubute=value]
tag with class and atribute--tag.class[atribute=value]-------------.class[atribute=value]
In above locators Tag is optional

*/

import { test, expect, Locator } from "playwright/test"

test("css selector demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    //tag#id
    //const serachbox: Locator= page.locator("input#small-searchterms");
    //await serachbox.fill("T-Shirts");
    // await page.locator("#small-searchterms").fill("T-Shirts");
    // await expect(page.locator("#small-searchterms")).toBeVisible();

    //tab with class = tag.class
    //await page.locator("input.search-box-text").fill("T-Shirts");
    // expect(page.locator("input.search-box-text")).toBeVisible();

    //tag[atrbute=value]  here tag is optional
    // await page.locator("input[name=q]").fill("T-Shirts");
    //await page.locator("[name=q]").fill("T-Shirts");

    //tag.class[atribute=value]
    //await page.locator("input.search-box-text[value='Search store']").fill("T-Shirts");
    await page.locator(".search-box-text[value='Search store']").fill("T-Shirts");

    await page.waitForTimeout(3000);



})