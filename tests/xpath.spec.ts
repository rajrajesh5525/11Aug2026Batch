
import {test,expect, Locator} from "@playwright/test";

test("xpath demo in playwright", async ({page})=>{
    
    await page.goto("https://demowebshop.tricentis.com/");
    
    //absolute xpath: 
   /*  var logoT: Locator  = page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]").click();
    await expect(logoTT).toBeVisible(); */
    //Relative Xpath
   const Relxpath =  page.locator("//*[@alt='Tricentis Demo Web Shop']");
   await expect(Relxpath).toBeVisible();
   //contains method()
   const producuts:Locator =  page.locator("//h2/a[contains(@href,'computer')]");
   //await expect(producuts).toBeVisible();
   const productscount =await producuts.count();
   expect(productscount).toBeGreaterThan(0); 
   console.log("computer releated products:",productscount);
   
//    console.log(await producuts.textContent());
   console.log("First computer related products: ",await producuts.first().textContent());
   console.log("First computer related products: ",await producuts.last().textContent());
   console.log("First computer related products: ",await producuts.nth(1).textContent());
   console.log("First computer related products: ",await producuts.nth(2).textContent());
   
   let productscou:string[] = await producuts.allTextContents();
    console.log('============FOr Loop=================')
    for(let i=0; i<productscou.length; i++)
    {
        console.log(productscou[i])
    }
    console.log('============for of Loop=================')
    for(let pd of productscou){
        console.log(pd)
    }
   console.log('============for in Loop=================')
   for(let pt in productscou){}
   console.log(productscou)
   
   //starts-with

    const buildingproducts: Locator = page.locator("//h2//a[starts-with(@href,'/build')]");
    const count:number = await buildingproducts.count();
    expect(count).toBeGreaterThan(0)
   
    //text()
    const reglink: Locator = page.getByText("//*[text()='Register']");
    expect(reglink).toBeVisible();

    //Last()
    //*[@class='column follow-us']//li[last()]
    const lastitem: Locator = page.locator("//*[@class='column follow-us']//li[last()]")
    await expect(lastitem).toBeVisible();
    console.log("Last item of the value:",lastitem.textContent);
   //position
   const positionitem: Locator = page.locator("//*[@class='column follow-us']//li[position(3)]")
     await expect(positionitem).toBeVisible();
    console.log("Position of the element:",positionitem.textContent);



 

})


