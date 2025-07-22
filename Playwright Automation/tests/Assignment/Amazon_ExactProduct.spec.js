import { test, expect } from '@playwright/test';
 
test('Amazon Full Flow - Login, Search, Cart Retry', async ({ page }) => {
 
    // Step 1: Launch Amazon
    await page.goto('https://www.amazon.in/');
   
    // Conditional step: Click 'Continue shopping' if present, else click the account list
    let continueShopping = page.getByRole('button', { name: 'Continue shopping' });
 
    if (await continueShopping.isVisible().catch(() => false)) {
        await continueShopping.click();
    } else {
        expect (await page.locator("//div[@id='nav-link-accountList']//button[@class='nav-flyout-button nav-icon nav-arrow']")).toBeVisible();
        await page.locator('//div[@id="nav-link-accountList"]').click();
    }
    // Enter mobile number equencially
    await page.locator("//input[@id='ap_email_login']").pressSequentially('96');
    //to validate +91 is visible
    expect (await page.locator("//span[@class='a-dropdown-prompt' and normalize-space()='IN +91']")).toBeVisible();
    //once visible enter remaining digits
    await page.locator("//input[@id='ap_email_login']").pressSequentially('86377632');
    //click on submit
   await page.locator("//input[@type='submit']").click();
    // Enter password
    await page.locator("//input[@id='ap_password']").fill('Merril@test@123')
    await page.locator("//input[@id='signInSubmit']").click();
   //validate title
    await expect(page).toHaveTitle(/Amazon/);
    //search for produce
    //enter the product in search
    await page.locator("//input[@id='twotabsearchtextbox']").fill('school bag for boys');
    //click on submit
    await page.locator("//input[@id='nav-search-submit-button']").click();
    //validate title
    const title = await page.title();
    console.log('Search Page Title: ' + title);
    //read all the products [Ui products in Vertical]
    //const prodlist= await page.locator("//div[@data-cy='title-recipe']//a//h2//span");
//read all the products [Ui products in Horizantal]
const prodlist= await page.locator("div[@data-cy='title-recipe']//a//h2")
    
    //console.log(await prodlist.allTextContents();---- print all the product in list
 
    //pick only galaxy M5 mobile
    const targetProduct = prodlist.filter({ hasText: 'Cosmic Critters Series Printed' });
    // Click the first match (just in case there are multiple)
    const requireProducttitle=await targetProduct.first().textContent();
  await targetProduct.first().click();
   //const first=await prodlist.first();
   //console.log(await first.textContent());
   //console.log(await prodlist.allTextContents();
  // await first.click();
 // await page.pause();
 
 
  // click on Add to cart
  await page.locator("//div[@id='a-accordion-auto-6']//input[@id='add-to-cart-button']").click();
  //inner add to cart
  await page.locator("//div[@id='attach-cart-info-content']//input[@class='a-button-input']").click();
 
  // Go to cart
  await page.locator("//a[@id='nav-cart']").click();
 
    //list the items
     const cartlist = page.locator("//div[@id='sc-active-cart']//div[@role='listitem']//h4//span[@class='a-truncate-cut']");
     //const cartlist= page.locator("//div[@id='sc-active-cart']");
     const cartFirstTitle = await cartlist.first().textContent();
     console.log("cart first product title: "+cartFirstTitle);

 console.log("=========================================================")
     console.log("Required prod tite:"+requireProducttitle);
 
 expect(cartFirstTitle.toLowerCase()).toContain(requireProducttitle.slice(0,10).toLowerCase());
 
 //console.log(await cartlist.allTextContents());
     
 
});