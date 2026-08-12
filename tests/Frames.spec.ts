/*
Frames: one/a web page contains another web page inside it or one HTML tag contains another HTML tag inside
Frames will be identify the "view frame source" and Reload frame options  when user right click on the web page
types:===
=========
Frames: It is used to designed parent frame
Iframes It is used to designed child and parent frames
methods=============
frame(): This method is used to pass the URL of the frames
Frames() This method is used to get count of the frames
fremelocator() This method is used to switch/move one frame to anther frame
mainframe() This method is used to switch/move from child frames to parent frame
childframe() This method is used to count of child frames inside the parent frame

Frame();======This method is used to pass the URL in the web page
Frames()======This method is used get count of the frames
fremelocator()=This method is used to switch/move from one frame to another frame
mainframe()====This method is usedt to switch from child frame to another parent frame
childframe=====This methid is used to get count of childframes in the parent

frame(): This methid is used to pass the URL of the frames
frames(): This method is used to count of the frams 
framelocator(): This method is used to switch/move from one frame to another frame
mainframe(): This method is used to switch/move from child frame to parent
childframe() This method is used to get count of child frames in parent frame
syntax:
await page.frame/framelocator(xpath/url).Locator(selenium/playwright)methods();

Frame: one/a web page is contains another web page inside or one HTML tag is contains another html tag inside it, it is nothing but frame

Frame(); it is used designed parent frame
Iframes(); it is used to designed child frame and parent Frames

method();
Frame(): THis methos is used to pass the url in the web page
Frames() This method is used to get count of the frames
framelocator(): This method is used to switch/move from one frame to another frame
mainframe(): This method is used to switch/move from child frame to parent
childframe(); This method is used to get count of child frames to parene frame

*/

import{test,expect} from 'playwright/test';

test('frames Demo',async({page})=>{

   await page.goto("https://UI.vision/demo/webtest/frames/");

   let Frames = await page.frames();
   console.log("Total number of frames:", Frames.length);
   
  //approach1: Using page.frame();

  //  let frame = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1"});
 /*    
    if(frame){
        await frame.locator("//*[@name='mytext1']").fill("LiveTechHyderabad")
        //await frame.fill("//*[@name='mytext1']","Testing");
    }
    else{
        console.log("Frame is not avaiable");
    }
   await page.waitForTimeout(5000);*/
   //approach2: Using Framelocator();
   await page.frameLocator("//*[@src='frame_1.html']").locator("//*[@name='mytext1']").fill("LiveTech");

})

test('Inner/childframe Demo',async({page})=>{

   await page.goto("https://UI.vision/demo/webtest/frames/");
   
   let frame3 = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
    
   if(frame3){
    await frame3.locator("//*[@name='mytext3']").fill("Playwright");
    const childFrames = frame3.childFrames();
    console.log("Child frames are inside frame3:", childFrames.length);  //only one childframe avaiable
    const radio = childFrames[0].locator("//*[text()='I am a human']")
    await radio.click();
    await expect(radio).toBeVisible();
}   
   else{
    console.log("frame3 is not avaiable")
   }
   await page.waitForTimeout(5000);
})

test.only('Assignment Demo',async({page})=>{

 await page.goto("https://UI.vision/demo/webtest/frames/");
 const framescount = await page.frames();
 console.log("Framescount is:", framescount);

 //frame1
  await page.frameLocator("//*[@src='frame_1.html']").locator("//*[@name='mytext1']").fill("Frame1")
//frame2
  const frame2 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_2"});
  if(frame2){
    await frame2.locator("//*[@name='mytext2']").fill("Frame2");
  }
  else{
    console.log("frame2 is not avaiable")
  }
  await page.waitForTimeout(3000);

//frame3;
   const frame33 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
  if(frame33){
    await frame33.locator("//*[@name='mytext3']").fill("Frame33");
    const allchildframes = frame33.childFrames();
    const Option = allchildframes[0].locator("//*[text()='Hi, I am the UI.Vision IDE']");
     Option.click();
     expect(Option).toBeVisible();


  }else{
    console.log("frame3 is not avaiable")
  }
  await page.waitForTimeout(3000);
//frame4

await page.frameLocator("//*[@src='frame_4.html']").locator("//*[@name='mytext4']").fill("Frame4");
//frame5
const frame5= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_5"});
   
await frame5?.locator("//*[@name='mytext5']").fill("Frame5")

await page.waitForTimeout(5000);
   
await frame5?.locator("//*[text()='https://a9t9.com']").click();

const text = await frame5?.locator("//*[@class='responsive-img']").innerText();
console.log("frame innerText Is;", text)

})