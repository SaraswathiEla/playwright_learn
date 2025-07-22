const {test, expect} =require('@playwright/test');
const { Console } = require('console');

test('Register_Login_getThe firstProduceTitle',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
const products=page.locator(".card-body");
const productName="ZARA COAT 3";
await page.goto("https://rahulshettyacademy.com/client/");
//login

await page.getByRole("button",{name: "Login"}).click();
await page.locator("#userEmail").fill("SaraHem11118110@gmail.com");
await page.locator("#userPassword").fill("Sara@1234");
await page.locator("#login").click();
// print first product title
await page.waitForLoadState('networkidle'); // when ever its working randomly(flacky) that time  please use the below code
//await page.locator(".card-body b").first().waitFor();
const firstTitel=await page.locator(".card-body b").first().textContent();
console.log(firstTitel);
const titles=await page.locator(".card-body b").allTextContents();

 
console.log(titles);
//Zara coat

const Prd_count =await products.count();
console.log(Prd_count)
for(let i=0; i<Prd_count; i++)
{
if(await products.nth(i).locator("b").textContent()==productName)
{
    //add to cart
    await products.nth(i).locator("text=' Add To Cart'").click();
    break;

}
}
await page.locator("button[routerlink='/dashboard/cart']").click();

await page.locator("div li").first().waitFor(); // when we get strict violetion that time use first
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//const bool=await page.locator("h3:has-text(productName)").isVisible();
 expect(bool).toBeTruthy();

await page.locator("text='Checkout'").click();

// type ind and select the india country in dropdown option
await page.locator("[placeholder='Select Country']").pressSequentially("ind");
const dropdown=await page.locator(".ta-results");
await dropdown.locator("button").first().waitFor();
const optioncount=await dropdown.locator("button").count();
console.log(optioncount);

for(let i=0;i<optioncount;++i)
{
   const text=await dropdown.locator("button").nth(i).textContent();
    if(text==" India")
    {
       await dropdown.locator("button").nth(i).click();
       break;
    }
}

///verify the same login id is present in checkout page
const email="SaraHem11118110@gmail.com";
await expect(await page.locator(".user__name label").first()).toHaveText(email);

await page.locator(".actions a").click();

await expect(await page.locator('h1')).toHaveText(" Thankyou for the order. ");

const OrderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();

console.log(OrderID);

//verify the order in order history page

await page.locator("[routerlink*='myorders']").nth(0).click();
await page.locator("tbody").waitFor();

const rows=await page.locator("tbody tr");

for(let i=0;i<await rows.count();i++)
{
    const rowOrderID=await rows.nth(i).locator("th").textContent();
    if(OrderID.includes(rowOrderID))
    {
        await rows.nth(i).locator("button").first().click();
        break;
    }
     
}

// verify orderid is present in view order details page

const viewpageOrderid =await page.locator("div [class='col-text -main']").textContent();
expect (await viewpageOrderid.includes(OrderID));
await page.pause();


});