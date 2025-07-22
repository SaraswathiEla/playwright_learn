const {test,expect}=require('@playwright/test')

test('Login to JHS using wrong OTP', async({browser})=>
{

    const context = await browser.newContext();  // open the fresh browser
   const page =await context.newPage();
await page.goto("https://www.hotstar.com/");
await page.locator("[aria-label='My Space']").click();
await page.waitForSelector(".w-full [type='button']", { state: 'visible', timeout: 10000 });

  // Click the last login button (usually "Continue" or "Login")
  await page.locator(".w-full [type='button']").last().click();
//await page.locator("//span[@class='flex items-center'][1]").click();



});