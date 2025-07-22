
const {test, expect} =require('@playwright/test')




 test('First Playwright test', async({browser})=> 
    //browser is a playwright fixure ,genereally fixure is nothing but global variable
 {
       //newContext method  will create new browser instances/fresh broswer.
   const context = await browser.newContext(); 
    const page =await context.newPage();
    const title = await page.goto("https://rahulshettyacademy.com/client/");
     console.log (title);
   await expect (page).toHaveTitle("Let's Shop"); 
  
 });

 test('play wright test', async({page})=>
 {

    await page.goto("https://google.com");

    //get titile - assertions
    console.log (await page.title());
   await expect (page).toHaveTitle("Google"); 

 });

 test.only('play wright test1', async({page})=>
 {

    const Username=page.locator("input#username");
    const Signin=page.locator("[name='signin']");
    const CardTitels= page.locator('.card-body  h4');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').waitFor();

    //get titile - assertions
    console.log (await page.title());

   await expect (page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); 

   //CSS ,Xpath 

  await Username.fill("hsara"); // fill method is used to enter the value in the text box

  await  page.locator("[type='password']").fill("learning");

    await Signin.click();
    console.log(await page.locator("[style='display: block;']").textContent());

    // to verify the error message

    await expect(page.locator("[style='display: block;']")).toContainText('Incorrect');

    await Username.fill("");
    await Username.fill("rahulshettyacademy");
    await Signin.click();

    console.log ( await CardTitels.first().textContent()); // print first Element

    //console.log ( await CardTitels.nth(1).textContent()); // print second elemet
    
   //console.log ( await CardTitels.last().textContent()); // print last elemet of an array

const alltitels =await CardTitels.allTextContents();
console.log(alltitels);


 });

 // Run this above code in specific broser like chromium use below command
 // npx playwright test UIbasics.spec.js --project=chromium --headed