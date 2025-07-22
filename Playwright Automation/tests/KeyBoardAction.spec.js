const {test,expect}=require('@playwright/test')

test('KeyBoard Actions',async({page})=>
{
await page.goto('https://gotranscript.com/text-compare')
await page.locator('[name="text1"]').fill("welcome to automation")

//press ctrl A
// press ctrl c
//press tab key
// press ctrl v

//press ctrl A- this will select the text
await page.keyboard.press('Control+A')

// press ctrl c -> this will copy the text
await page.keyboard.press('Control+C')

//press tab key-> Move to next tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab') // re;lase the tab key


// // press ctrl v
await page.keyboard.press('Control+V')

await page.waitForTimeout(3000)

})