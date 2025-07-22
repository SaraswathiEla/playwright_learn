import{test,expect} from '@playwright/test'
test('Loacators',async( {page})=>
    {

        await page.goto("https://www.jiocinema.com/"); // semicolon is optional in JS
    
        //locate the Login button
        //click on Login button -Property locator
    
      //  await page.locator('id=login2').click();
      await page.click('//button[@class="mui-style-12p3rdi-avatar-btn"]');

      await page.click('//button[@id="login-btn"]');

      await page.fill('//input[@placeholder="Your mobile number"]','7892311991');

      page.waitForSelector('//button[@type="submit"]');

      await page.click('//button[@type="submit"]');

      page.waitForSelector('(//input[@class="mui-style-1n2p4i1-otpInputStyle "])');

      await page.fill('//input[@aria-label="Please enter verification code. Digit 1"]','314159');

      page.waitForSelector('//button[@type="submit"]');

      await page.click('//button[@type="submit"]');

      const pageTitle=await page.title();
 
     console.log('Page title is', pageTitle);

     await expect(page).toHaveURL('https://www.jiocinema.com/');

     

      await page.close();
    
    
    
    
    })