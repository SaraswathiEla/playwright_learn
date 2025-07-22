const { test, expect } = require('@playwright/test');
test('JHSHomePage',async( {page})=>
{
await page.goto('https://www.hotstar.com/in/home');
const pagetitle=page.title();
console.log('page title is:,pageTitle');
await expect(page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football')

const pageURL=page.url();
console.log('page URL is:pageURL');
await expect(page).toHaveURL('https://www.hotstar.com/in/home');



await page.close();

})