const {test, expect} =require('@playwright/test');
const { Console } = require('console');

test('Register_Login_getThe firstProduceTitle',async ({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/client/");
await page.locator("text='Register here'").click();
await page.getByPlaceholder("First Name").fill("saraswathi ");
await page.getByPlaceholder("Last Name").fill("Basavaraj");
await page.getByPlaceholder("email@example.com").fill("SaraHem11118110@gmail.com");
await page.getByPlaceholder("enter your number").fill("7892311991");
await page.locator("[formcontrolname='occupation']").selectOption("Engineer");
await page.locator("//input[@value='Female']").click();
await page.locator("#userPassword").fill("Sara@1234");
await page.getByPlaceholder("Confirm Passsword").fill("Sara@1234");
await page.locator("input[type='checkbox']").click();
await page.getByRole("button", {name: "Register"}).click();
await page.locator("text='Account Created Successfully'").isVisible();
const succReg = await page.locator("text='Account Created Successfully'").textContent();
console.log(succReg);
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


});

test ('UIControls',async ({page})=>
{ 
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentRequest=page.locator("[href*='documents-request']");
const username= await page.locator("#username").fill("sara");
const  paswword=await page.locator("#password").fill('sara');
const dropdown=await page.locator("select[class='form-control']");
await dropdown.selectOption("Consultant");
//await page.locator(".checkmark").waitFor();
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();

await console.log(await page.locator(".radiotextsty").last().isChecked());
await page.locator("#terms").click();await 
expect (await page.locator("#terms").last()).toBeChecked();
await page.locator("#terms").uncheck();

await expect(await page.locator("#terms").isChecked()).toBeFalsy();

await expect(documentRequest).toHaveAttribute("class","blinkingText");


//await page.pause();

})

test.only('child window handel',async({browser})=>

{
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const documentLink=await page.locator("[href*='documents-request']");
const [newpage]=await Promise.all(

[
context.waitForEvent('page'),    // in backgroung any new page opened listen any new page is opened we will write before the page open
 documentLink.click(),
 ]) //new page is opened
const text=await newpage.locator(".red").textContent();

console.log(text);
// [Please email us at mentor@rahulshettyacademy.com with below template to receive response  ] take the email address in the text print it

const arrayText=text.split("@")
const domainName=arrayText[1].split(" ")[0]
console.log(domainName);




});