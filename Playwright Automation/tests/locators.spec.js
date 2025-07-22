//const {test,expect} require('@playwright/test')
import{test,expect} from '@playwright/test'

test('Loacators',async( {page})=>
  {

    await page.goto("https://www.demoblaze.com/index.html"); // semicolon is optional in JS

    //locate the Login button
    //click on Login button -Property locator

  //  await page.locator('id=login2').click();
  await page.click('id=login2');

  //provide User name-- CSS  loactor

  //await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername','pavanol')


//provide the Password
await page.fill("input[id='loginpassword']",'test@123')


//Click on Login Button

 await page.click("//button[normalize-space()='Log in']");

 //verify the visibility of element 'Logout'

 const logoutLink = await page.locator("//a[normalize-space()='Log out']")

 await expect(logoutLink).toBeVisible();

 await page.close();




})