const {test,expect} = require("@playwright/test");
 
 
test("Calendar validations",async({page})=>
{
 
    const monthNumber = "10";
    const date = "17";
    const year = "2026";
    const expectedList = [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click(); //select the june month june is stored in index 5
    await page.locator("//abbr[text()='"+date+"']").click();
    const inputs = await page.locator(".react-date-picker__inputGroup input");
    for (let index = 0; index <inputs.length; index++)
    {
        const value =inputs[index].getAttribute("value");
        expect(value).toEqual(expectedList[index]);
    }
 
 
 
 
 
 
 
 
 
 
 
 
 
})