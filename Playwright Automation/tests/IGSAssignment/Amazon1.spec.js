import { test, expect } from '@playwright/test';
import { Console } from 'console';
test.only('Launch the Amazon application', async ({ page }) => {

    //Launch the Amazon application
  await page.goto('https://www.amazon.in/');
const search_sagg=page.locator('#sac-autocomplete-results-container [role="row"]');
  const ProductName='school bag for boys';
  
})

test('Login', async ({ page }) => {

//Login 
    await page.locator("//span[normalize-space()='Account & Lists']").click();
    await page.waitForTimeout(2000)
    await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('7892311991');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('Govinda@2015');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
})

test('//search the Product ex: School Bag and select it from saggetion and click on', async ({ page }) => {

  //search the Product ex: School Bag

  await page.locator("//input[@id='twotabsearchtextbox']").pressSequentially("School Bag")
  const searchsagg=page.locator("//div[@class='s-suggestion-container']")

const FirstSaggetion=await page.locator("//div[@class='s-suggestion-container']").first().textContent();

const allsaagestion=await searchsagg.allTextContents();
console.log(allsaagestion);
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
})


test('Select the Product and add to cart', async ({ page }) => {


const PrdoctList= page.locator("[data-cy='title-recipe'] a h2 span");
const firstProduct=await PrdoctList.first().textContent();
//console.log(firstProduct)
//console.log(await PrdoctList.allTextContents());

const AddedProduct='Alpine 39L Large Water Resistant School Bag';

for(let i=0; i<await PrdoctList.count(); i++)
{
if(await PrdoctList.nth(i).textContent()== AddedProduct)
{

    console.log("selecting product",await  PrdoctList.nth(i).textContent());
    await PrdoctList.nth(i).click();
    await page.waitForTimeout(3000)
        // add to cart
        page.locator("//input[@id='add-to-cart-button']").click();
                   break;
 
}
}
})

test('Go to cart page and verify the details', async ({ page }) => 
  {

await page.waitForTimeout(3000)
//Go To cart
page.locator("//a[@href='/cart?ref_=ewc_gtc']").click();

const cartProductList=page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']");
const cartText=await cartProductList.first().textContent();
//const text=await cartProductList.first().textContent();
console.log("-------");
console.log(cartText);
const count=await cartProductList.count();
console.log(count);
 const Split=AddedProduct.split(' ');
    const text2=Split[0];

    console.log(text2)

    for(let i=0;i<await cartProductList.count();i++)
    {
         const text1=await cartProductList.nth(i).textContent();
         const Split1=text1.split(' ');
         const text3=Split1[1];
         console.log(text3);         
            if(text2==text3)
            {
                const Price=await page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//div[@class='sc-apex-cart-price']//span[@class='a-offscreen']").nth(i).textContent();
                console.log(AddedProduct,'ProductPric is-->',Price)
                console.log(AddedProduct,'-->Succefully product added to the cart page');
                break;
            }
         }
    
  await page.pause();
    
})
