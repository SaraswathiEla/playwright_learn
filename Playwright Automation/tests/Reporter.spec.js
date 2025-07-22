const {test,expect} = require('@playwright/test');

test('Test1',async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page).toHaveTitle('OrangeHRM');
})

test('Test2',async({page})=>
{
    await page.goto("https://demoblaze.com/index.html");
    await expect(page).toHaveTitle('STORE');
})

test('Test3',async({page})=>
{
    await page.goto("https://demo.nopcommerce.com/");
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');
})


// npx playwright test Reporter.spec.js --project=chromium --headed --reporter=  line
// [line/list/dot/html/json/junit]
//--reporter=list -> it will show the report in form of list
//--reporter=dot
//--reporter=html -> it will show the report in form of html 
//--reporter=json-> it will give in json format
//--reporter=junit -> it will give in XML format

//also we can create multiple reporte by giving the reporter "value" in array format in config.js file


//Allure report from third party tool
//step1:
//  install the allure using command
//npm i -D @playwright/test allure-playwright

// step 2: 
// Installing the allure command line
//npm install -g allure-commandline --save-dev
//or
//sudo install -g allure-commandline --save-dev -> use this command mac,linux

//step 3:
//playwright.config.js  
/* reporter: [['list'],
              ['html'],
              ['junit',{outputFile:'result.xml'}],
              ['json',{outputFile:'result.json'}],
              ['allure-playwright',{outputFile:'my-allure-results'}],

],  */

//step 4
//Run the test tests/Reporter.spec.js

//step 5:
//Generate Allure Report
//allure generate my-allure-results -o allure-report --clean


//step 6:
//allure open allure-report