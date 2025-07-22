const{test, expect} = require('@playwright/test')
 
test('Myntraassignment',async({browser})=>
{
    //Open the Myntra
    const context = await browser.newContext()
    const page = await context.newPage()
//Search for T-Shirt
    const pName1="t-shirt";
    const pName2="tshirt";
    const titleName="T-Shirts for Women - Buy Stylish Women's T-Shirts Online | Myntra";
 
    await page.goto("https://www.myntra.com/")
    await page.locator(".desktop-searchBar").pressSequentially("T-Shirt")
    await page.locator(".desktop-group").isVisible()
    const suggestions = await page.locator(".desktop-suggestion")
    const searchedProduct = await page.locator("//li[text()='Tshirts For Women']");
    const productName = await searchedProduct.textContent();
    //await console.log(productName);
    await searchedProduct.isVisible();
    await searchedProduct.click();
    //Check landed to the Filtered T-shirts for Women page
    await page.waitForSelector("//div[contains(@class,'row-base')][2]");
    await expect(page).toHaveTitle(titleName)
    const productTitles = await page.locator("//h4[@class='product-product']").allTextContents();
    //totalListedCount = listOfFiltProd.length();
    const allContainTShirt = await productTitles.every(title =>
    title.toLowerCase().includes(pName1))
  //Check all the filtered products name has T-Shirt text  
    for (const title of productTitles) {
    if (!title.toLowerCase().includes(pName1) && !title.toLowerCase().includes(pName2))
      {
      console.warn("No match:", title);
      }
  }
  await page.locator("//h4[text()='Size']").click();
  await page.locator("//label[normalize-space()='M']//div").click()
  await page.locator("//ul[@class='results-base']").isVisible();
  //Handling second page
  const [page2] = await Promise.all([context.waitForEvent('page'), await page.locator("//img[@title='DILLINGER Graphic Printed Relaxed Fit Pure Cotton T-shirt']").click()])
  const actualProductName = await page2.locator(".pdp-name").textContent();
  const actualPrice = await page2.locator(".pdp-price").textContent();
  console.log("productName:", actualProductName);
  console.log("productPrice:", actualPrice);
  await page2.locator("//p[@class='size-buttons-unified-size' and text()='M']").isEnabled();
  await page2.locator("//p[@class='size-buttons-unified-size' and text()='M']").click();
  await page2.getByText('ADD TO BAG').isVisible();
  await page2.getByText('ADD TO BAG').click();
  await page2.getByRole('link', { name: 'GO TO BAG' }).click();
  await expect(page2.locator(".bulkActionStrip-message")).toBeVisible()
  const pName = await page2.locator(".itemContainer-base-itemLink")
  await expect(pName).toBeVisible();
  const expectedProductName = await pName.textContent();
  const lastPrice = page2.locator(".itemComponents-base-price div");
  await expect(lastPrice).toBeVisible();
  const expectedPrice = await lastPrice.textContent();
  //Assertions to check title and price of the product
  console.log("Final productName:", expectedProductName);
  console.log("Final ProductPrice:", expectedPrice);
  const trimmedPrice = await actualPrice.trim();
  const trimmedexpectedPrice = await expectedPrice.trim();
  expect(trimmedPrice).toContain(trimmedexpectedPrice);
})
