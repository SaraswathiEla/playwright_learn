const {test,expect,chromium}=require('@playwright/test');
test('Handle pages/windows',async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    const page2=await context.newPage();

    const allPages=context.pages();
    console.log("no of pages created:",allPages.length);

    

    page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');

    page2.goto("https://www.orangehrm.com/");
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ');

    //await page2.pause();
})
test('Handle Multiplepages/windows',async()=>
{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
   
    page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle('OrangeHRM');

   const pagePromise=context.waitForEvent('page')

   await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

   const newpage=await pagePromise; 
    await expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ');


    await page1.waitForTimeout(3000)
        await newpage.waitForTimeout(3000)

        await browser.close();
})
