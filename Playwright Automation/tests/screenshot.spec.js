import {test,expect} from '@playwright/test';

test('page screenshot',async({page})=>
{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\screenshots'+Date.now()+'HomePage.png'})
    
});

test('Full page screenshot',async({page})=>
{
    await page.goto('https://demo.opencart.com/')
    await page.screenshot({path:'tests\screenshots'+Date.now()+'FullPage.png',fullPage:true})
    
});

test.only('Element screenshot',async({page})=>
{

    await page.goto('https://demo.opencart.com/')
    await page.locator('#content').screenshot({path:'tests\screenshots'+Date.now()+'Content.png'})
    
});