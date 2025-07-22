import { test, expect } from '@playwright/test';
import { Console } from 'console';
import { AmazonPage } from '../../pages/AmazonPage';
//test.describe.configure({mode:'serial'}); // Run one after another
const dataset=JSON.parse(JSON.stringify(require("../../utils/placOrderData.json")));

for (const data of dataset)
{
test(`@sanity AmazonFlow ${data.RequiredProduct}`, async ({ page }) => 
  {
  //const userPhoneNum='7892311991';
  //const password='Govinda@2015';
 
    //Launch the Amazon application
    const amazon=new AmazonPage (page);
await amazon.Launch();
await page.waitForTimeout(2000)

//verify the Title of the landing page
const expTitle="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
await expect (page).toHaveTitle(expTitle); 

//Login
await amazon.login(data.userPhoneNum,data.password);
await page.waitForTimeout(2000)
//const searchKey='shoe';
const search_sagg=data.search_sagg;
 
//search the Product ex: School Bag and select the saggestion and verify the slected saggestion page title
 const actSelectedSaggPageTitel=await amazon.searchAndSelectSagg( data.searchKey,data.search_sagg)
 const expSelectedSaggPageTitle='Amazon.in : '+search_sagg;
 await expect (page).toHaveTitle(expSelectedSaggPageTitle); 
 
//select the Product By index number in Product list Page ex:7th produt 
//const ProductNumberIndex=7;
//const productname=await amazon.Addtocart(ProductNumberIndex) 

//or
const RequiredProduct=data.RequiredProduct;
const productname=await amazon.Addtocart_ProductName(RequiredProduct);
console.log('------Added to cart Productname is-------')
console.log(productname)
console.log('-----------------------------------------')

//verify the postselecting the product page titel
 //await expect(page).toHaveTitle('Amazon.in Shopping Cart')

//click on goto cart button and verify the cart page titel
 await amazon.Cartpage();
 await expect(page).toHaveTitle('Amazon.in Shopping Cart')

//verify the added Product name and price in cart page
 await amazon.VerifyProductTitel(productname);

 //Print Total No of Products
 //await amazon.getNumberOfProductsInCartpage();
})

}