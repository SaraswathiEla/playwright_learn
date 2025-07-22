const {test,expect}=require('@playwright/test')

test('Mouse DoubleClick',async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");

    const btncopy= await page.locator("//button[normalize-space()='Copy Text']");
//doubli click
    await btncopy.dblclick();
    page.waitForTimeout(2000)

    const field2=await page.locator("#field2")
    await field2.waitFor(5000)
    await expect(field2).toHaveValue("Hello World!");


  



await page.waitForTimeout(5000)
})