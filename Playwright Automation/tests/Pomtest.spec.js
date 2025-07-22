
import {test,expect} from '@playwright/test';
import { Loginpage } from '../pages/LoginPage';
import { Homepage } from '../pages/Homepage';
import { CartPage } from '../pages/Cartpage';
test ('pom Test',async({page})=>
    {

       // await page.goto('https://demoblaze.com/index.html')

        //Login
       // await page.locator('#login2').click();
        //await page.locator('#loginusername').fill('pavanol');
        //await page.locator('#loginpassword').fill('test@123');
        //await page.locator("//button[normalize-space()='Log in']").click();
        

        //login
const login=new Loginpage(page);
await login.gotoLoginPage();
await login.login('pavanol','test@123')

       //Home
        const home=new Homepage(page);
        await page.waitForTimeout(3000);
        await home.addProductToCart('Nexus 6');
        await page.waitForTimeout(3000);
        await home.gotoCart();
        //cart

        const cart=new CartPage(page);
        await page.waitForTimeout(3000);
       const status= await cart.checkProductInCart('Nexus 6');
        expect(await status).toBe(true);      
    });
