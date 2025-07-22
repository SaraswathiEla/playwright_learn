const {test} =require('@playwright/test');

test('register', async({browser})=>
{
 const context = await browser.newContext(); 
   const page =await context.newPage();

   const title= await page.goto("https://rahulshettyacademy.com/client/");
   console.log(title);

   await page.locator("text='Register'").click();

   await page.locator("#firstName").fill("sara");
   await page.locator("[type='lastName']").fill("b");
   await page.locator("#userEmail").fill("sara@getMaxListeners.com");
   await page.locator("#userMobile").fill("9902957778");
   await page.locator("[formcontrolname='occupation'] ").selectOption("Engineer");
   await page.locator("text='Female'").click();
   await page.locator("#userPassword").fill("sara1234");
   await page.locator("#confirmPassword").fill("sara1234");
   await page.locator("[type='checkbox']").click();
   await page.locator("[type='submit']").click();



});