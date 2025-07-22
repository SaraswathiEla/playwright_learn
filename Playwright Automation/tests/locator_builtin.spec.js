const{test,expect}=require('@playwright/test')

test('Built-inLocators',async({page})=>
{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 const  logo= await page.getByAltText('company-branding'); 
 // alt attribute emennt like logo image that time we can use the getByAlttext()
await expect(logo).toBeVisible(); //verifying the logo is visible


//page.getByPlaceholder()- to locate an input by placeholder attribute
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');

//getByRole -> when we perform set of action like Button,link

await page.getByRole('button',{type:'submit'}).click();

const name=await page.locator('oxd-userdropdown-name').textContent();
console.log(name);
await expect (await page.getByText(name)).toBeVisible();


});

// Built in locators
// 1. page.getByAlttext() 
// 2.page.getBytext()
// 3.page.getByRole()
// 4.page.getByPlaceholder()
//5. page.getBytitle()
//6.page.getBytestId()
//7.page.getBylabel()