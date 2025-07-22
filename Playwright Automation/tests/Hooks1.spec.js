import {test,expect} from '@playwright/test';

test ('Home Page Test',async({page})=>
    {

        await page.goto('https://demoblaze.com/index.html')

        //Login
        await page.locator('#login2').click();
        await page.locator('#loginusername').fill('pavanol');
        await page.locator('#loginpassword').fill('test@123');
        await page.locator("//button[normalize-space()='Log in']").click();
        

        //home page

        const products=await page.$$('.hrefch')
       // expect(products).toHaveLength(9)

        //Logout
        await page.locator('#logout2').click();
        await page.pause();
    });

    test ('Add to cart Page Test1',async({page})=>
    {

    await page.goto('https://demoblaze.com/index.html')

        //Login
        await page.locator('#login2').click();
        await page.locator('#loginusername').fill('pavanol');
        await page.locator('#loginpassword').fill('test@123');
        await page.locator("//button[normalize-space()='Log in']").click();
        
        //Add Product to cart   
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click();
    await page.locator("//a[normalize-space()='Add to cart']").click();

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept()
    })
        //logout
        await page.locator('#logout2').click();
        
    });