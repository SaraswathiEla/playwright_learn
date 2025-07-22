import{test,expect} from '@playwright/test'
test('Loacators',async( {page})=>
    {

        await page.goto("https://www.jiocinema.com/"); // semicolon is optional in JS

            //click on the Carosal and verify Redirection is happening to JHS

            page.waitForSelector('(//div[@tabindex])[2]//a[@id="editorial"][3]');

            await page.click('(//div[@tabindex])[2]//a[@id="editorial"][3]');

           // await pageURL('https://www.hotstar.com/in');

            page.waitForSelector('//button[@type="button"]//i[@class="icon-close soul-icon _1_NA5fvEVp--uxNbR09uuo _10QtdfLpgjnmjRDFG3gw12"]');
            await page.click('//button[@type="button"]//i[@class="icon-close soul-icon _1_NA5fvEVp--uxNbR09uuo _10QtdfLpgjnmjRDFG3gw12"]');
           /*const pagetitle=page.title();
            console.log('page title is:,pageTitle');
            await expect(page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football')
            */

            const pageURL=page.url();
            console.log('page URL is:pageURL');
            await expect(page).toHaveURL('https://www.hotstar.com/in/home');

            





            await page.close();
    }
)