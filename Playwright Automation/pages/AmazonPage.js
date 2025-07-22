const { expect } = require("allure-playwright");
const { verify } = require("crypto");
exports.AmazonPage= class AmazonPage
{
        constructor(page){
        this.page=page;
        this.loginLink="//span[normalize-space()='Account & Lists']";
        this.usernameInput='Enter your mobile number or';
        this.continueBtn='Continue'
        this.passwordInput='Password';
        this.loginButton="Sign in";

        this.UserPhoneNum="92311991";
        this.password="Govinda@2015"

        this.prodcutlistPageTtile;
        this.ProductDetilsPage_Results="//h2[text()='Results']";
     }

async Launch(){
    await this.page.goto("https://www.amazon.in");
}
async login(username,password)
{
  await this.page.locator(this.loginLink).click();
    //Enter mobile number equencially
    await this.page.locator("//input[@id='ap_email_login']").pressSequentially('78');

    //to validate +91 is visible
   await expect(await this.page.locator("//span[@data-action='a-dropdown-button']")).toBeVisible();
  
    await this.page.getByRole('textbox', { name:this.usernameInput }).pressSequentially(username);
    await this.page.getByRole('button', { name:this.continueBtn}).click();
    await this.page.getByRole('textbox', { name:this.passwordInput }).fill(password);
    await this.page.getByRole('button', { name: this.loginButton, exact: true }).click();
        
}
 
async searchAndSelectSagg(searchkey,selectsaj){

    await this.page.ProductDetilsPage_Results; //In product list page Reaults elemter is dislayed
  await this.page.locator("//input[@id='twotabsearchtextbox']").pressSequentially(searchkey)
  const search_sagg=this.page.locator('#sac-autocomplete-results-container [role="row"]');
  const selectProdSagg=selectsaj;
  const searchsagg=this.page.locator("//div[@class='s-suggestion-container']")
 
const FirstSaggetion=await this.page.locator("//div[@class='s-suggestion-container']").first().textContent();
 
const allsaagestion=await searchsagg.allTextContents();
//To print all the search saggestions
//console.log(allsaagestion);
const Prd_searchList_count =await search_sagg.count();
// selcet the bagg for boys sajjesttion
 
for(let i=0; i<Prd_searchList_count; i++)
{
if(await search_sagg.nth(i).textContent()==selectProdSagg)
{
    //add to cart
   await search_sagg.nth(i).click();
    break;
}

}
const prodcutlistPageTtile=await this.page.locator('//title').textContent();
return prodcutlistPageTtile;

}

async Addtocart_ProductName(ProductName)
{

    const PrdoctList= this.page.locator("[data-cy='title-recipe'] a h2 span");
const lastProduct=await PrdoctList.last().textContent();
const requiredProduct=ProductName;
 let addedProduct;
for(let i=0; i<await PrdoctList.count(); i++)
{
if(await PrdoctList.nth(i).textContent()== requiredProduct)
{
  addedProduct=await PrdoctList.nth(i);
    addedProduct.click(); //click the productname link and navigate to product details page
    await this.page.waitForTimeout(3000)
        // add to cart
        expect (await this.page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
     await   this.page.locator("//input[@id='add-to-cart-button']").click();
 
            break;
}
}
const afterAddtocartPageTitel= await this.page.locator('//title').textContent();
console.log (afterAddtocartPageTitel);
//await this.page.waitForLoadState('networkidle');
    return requiredProduct;
}

async Addtocart(ProductNumberIndex)
{
   const PrdoctList= this.page.locator("[data-cy='title-recipe'] a h2 span");
const lastProduct=await PrdoctList.last().textContent();
const requiredProduct=await PrdoctList.nth(ProductNumberIndex).textContent();
 let addedProduct;
for(let i=0; i<await PrdoctList.count(); i++)
{
if(await PrdoctList.nth(i).textContent()== requiredProduct)
{
   addedProduct=await PrdoctList.nth(i);
    addedProduct.click(); //click the productname link and navigate to product details page
   await this.page.waitForTimeout(3000)
        // add to cart
        expect (await this.page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
     await   this.page.locator("//input[@id='add-to-cart-button']").click();
 
            break;
}
}
const afterAddtocartPageTitel= await this.page.locator('//title').textContent();
console.log (afterAddtocartPageTitel);
return requiredProduct;
}


async Cartpage()
{
    await this.page.locator("//a[@id='nav-cart']").click();
}

async getNumberOfProductsInCartpage()
{
    await this.page.waitForTimeout(3000)
const cartProductList=await this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']");
const cartText=await cartProductList.first().textContent();
const count=await cartProductList.count();
console.log('Total Number of Products in cart page-->',count);
console.log('-----------------------------------------')
}

async VerifyProductTitel(productname)
{
  const  productTitle=productname;
await this.page.waitForSelector('#sc-active-cart');  // wait for cart container

const cartProductTitle = await this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']").first().innerText();
const cartProductPrice = await this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//div[@class='sc-apex-cart-price']//span[@class='a-offscreen']").first().innerText();

  console.log('Expected Title:', productTitle);
  console.log('-----------------------------------------')
  console.log('Cart Product Title:', cartProductTitle);
  console.log('-----------------------------------------')
 console.log('Cart Product Price:', cartProductPrice);
//console.log('Expected Price:', ProductListPrice);
 expect(cartProductTitle.toLowerCase()).toContain(productTitle.slice(0, 5).toLowerCase());

}

}