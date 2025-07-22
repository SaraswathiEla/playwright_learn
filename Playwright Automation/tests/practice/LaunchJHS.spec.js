const {test,expect} =require('@playwright/test');

test('JHS launch and verify the title', async({browser})=> // browser is a fixure
{
 const context = await browser.newContext();  // open the fresh browser
   const page =await context.newPage(); // open the new page

 await page.goto("https://www.hotstar.com/");
   const pageTitle=await page.title();
    console.log(pageTitle);
 await expect(page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');


});