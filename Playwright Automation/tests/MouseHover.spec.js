const {test,expect}=require('@playwright/test')

test('Mouse Hover',async({page})=>
{
    await page.goto("https://demo.opencart.com.gr/");
    const desktop=await page.locator("//a[normalize-space()='Desktops']")
    const macbook=await page.locator('//a[normalize-space()="Mac (1)"]')


    //mouse hover
    await desktop.hover()
    await macbook.hover()

await page.waitForTimeout(5000)
})