const {test,expect}=require('@playwright/test')

test('Single File',async({page})=>
{
    await page.goto('https://www.foundit.in/')
    await page.waitForSelector('.mpfihd-upload')
    await page.locator('.mpfihd-upload').click();

    await page.locator('#file-upload').setInputFiles('uploadFiles\testfile1.pdf') // pass the file name
    await page.waitForTimeout(5000)

})

test('Multiple File',async({page})=>
{

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
//await page.locator('#filesToUpload').setInputFiles(['tests\uploadFiles\testfile1.pdf','tests\uploadFiles\testfile2.pdf']);

await page.waitForTimeout(3000)
})