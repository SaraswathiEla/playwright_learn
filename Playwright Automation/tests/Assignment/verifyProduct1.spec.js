import { test, expect } from '@playwright/test';
import { Console } from 'console';
test.only('test', async ({ page }) => {
 // Step 1: Launch Amazon
    await page.goto('https://www.amazon.in/');
   
    // Conditional step: Click 'Continue shopping' if present, else click the account list
    let continueShopping = page.getByRole('button', { name: 'Continue shopping' });
 
    if (await continueShopping.isVisible().catch(() => false)) {
        await continueShopping.click();
    } else {
        await page.locator('//div[@id="nav-link-accountList"]').click();
    }
    // Enter mobile number
    await page.locator("//input[@id='ap_email_login']").pressSequentially('7');
    //to validate +91 is visible
    expect (await page.locator("//span[@class='a-dropdown-prompt' and normalize-space()='IN +91']")).toBeVisible();
    await page.locator("//input[@id='ap_email_login']").pressSequentially('892311991');
 
   await page.locator("//input[@type='submit']").click();
    // Enter password
    await page.locator("//input[@id='ap_password']").fill('Govinda@2015')
    await page.locator("//input[@id='signInSubmit']").click();
    // Step 2: validate title
    await expect(page).toHaveTitle(/Amazon/);
 
  //search the Product ex: School Bag
  const search_sagg=page.locator('#sac-autocomplete-results-container [role="row"]');
  const ProductName='school bag for boys';
 
 
  await page.locator("//input[@id='twotabsearchtextbox']").pressSequentially("school bag")
  const searchsagg=page.locator("//div[@class='s-suggestion-container']")
 
const FirstSaggetion=await page.locator("//div[@class='s-suggestion-container']").first().textContent();

 
const allsaagestion=await searchsagg.allTextContents();
//To print all the search saggestions
//console.log(allsaagestion);
const Prd_searchList_count =await search_sagg.count();
 
//console.log(await search_sagg.nth(1).textContent());
 
// selcet the bagg for boys sajjesttion
 
for(let i=0; i<Prd_searchList_count; i++)
{
if(await search_sagg.nth(i).textContent()==ProductName)
{
    //add to cart
   await search_sagg.nth(i).click();
    break;
 
}
}
 
const PrdoctList= page.locator("[data-cy='title-recipe'] a h2 span");
const firstProduct=await PrdoctList.first().textContent();
//console.log(firstProduct)
//console.log(await PrdoctList.allTextContents());
 
const productTitle=await PrdoctList.nth(7).textContent();
//let ProductListPrice=await page.locator("//span[@class='a-price-whole']").nth(7).textContent();
let ProductListPrice; 
 
for(let i=0; i<await PrdoctList.count(); i++)
{
if(await PrdoctList.nth(i).textContent()== productTitle)
{
 
    console.log("selecting product--->",await  PrdoctList.nth(i).textContent());
    await PrdoctList.nth(i).click();
    await page.waitForTimeout(3000)
    //store the price
    //expect (await page.locator('//div[@class="a-box-group"]//div[@class="a-section"]//child::span[@class="a-offscreen"]').nth(1).textContent()).toBeVisible(); 
    //ProductListPrice=await page.locator('//div[@class="a-box-group"]//div[@class="a-section"]//child::span[@class="a-offscreen"]').nth(1).textContent();
//console.log(ProductListPrice)
        // add to cart
expect (await page.locator("//input[@id='add-to-cart-button']")).toBeVisible();

       await  page.locator("//input[@id='add-to-cart-button' and @value='Add to Cart']").click();

 
            break;
 //   await page.waitForTimeout(3000)
    //add to cart
   //const addtocart=await page.locator("(//button[@id='a-autoid-1-announce'])[2]");
  // await addtocart.click()
   
 
}
}

await page.click('#nav-cart');
// After navigating to cart page
await page.waitForSelector('#sc-active-cart');  // wait for cart container

const cartProductTitle = await page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']").first().innerText();

// Try different selectors for price, choose one that works
const cartProductPrice = await page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//div[@class='sc-apex-cart-price']//span[@class='a-offscreen']").first().innerText();



  

  console.log('Expected Title:', productTitle);
  console.log('Cart Product Title:', cartProductTitle);
   console.log('Cart Product Price:', cartProductPrice);
//console.log('Expected Price:', ProductListPrice);
 

 expect(cartProductTitle.toLowerCase()).toContain(productTitle.slice(0, 10).toLowerCase());




})
