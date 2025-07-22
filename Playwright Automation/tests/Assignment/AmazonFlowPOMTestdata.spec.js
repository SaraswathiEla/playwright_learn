import { test, expect } from '@playwright/test';
import { Console } from 'console';
import { AmazonPage } from '../../pages/AmazonPage';
const dataset=JSON.parse(JSON.stringify(require("../../utils/placOrderData.json")))
test('Amazon->Login,search,addtocart,gotocart and Verify the Products', async ({ page }) => {
 // const userPhoneNum='7892311991';
  //const password='Govinda@2015';
 
    //Launch the Amazon application
    const amazon=new AmazonPage (page);
await amazon.Launch();
await page.waitForTimeout(2000)

//verify the Title of the landing page
const expTitle="Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in";
await expect (page).toHaveTitle(expTitle); 

//Login
await amazon.login(dataset.userPhoneNum,dataset.password);
await page.waitForTimeout(2000)
//const searchKey='shoe';
//const search_sagg='shoes for woman';
 
  //search the Product ex: School Bag and select the saggestion and verify the slected saggestion page title
 const actSelectedSaggPageTitel=await amazon.searchAndSelectSagg(dataset.searchKey,dataset.search_sagg)
 await page.waitForTimeout(2000)
 const expSelectedSaggPageTitle='Amazon.in : '+dataset.search_sagg;
 await expect (page).toHaveTitle(expSelectedSaggPageTitle); 
 
//select the Product By index number in Product list Page ex:7th produt 
const ProductNumberIndex=7;
const productname=await amazon.Addtocart(ProductNumberIndex) 
console.log('------Added to cart Productname is-------')
console.log(productname)
console.log('-----------------------------------------')

//verify the postselecting the product page titel
await expect(page).toHaveTitle('Amazon.in Shopping Cart')

//click on gotocart button and verify the cart page title.

//await expect(page).toHaveTitle('Amazon.in Shopping Cart')

//click on goto cart button
await amazon.Cartpage();

//Print Total No of Products
await amazon.getNumberOfProductsInCartpage()

//verify the added Product name and price in cart page
await amazon.VerifyProductTitel(productname);



})