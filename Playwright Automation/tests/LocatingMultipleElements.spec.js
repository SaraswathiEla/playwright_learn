//const {test,expect} require('@playwright/test')
import{test,expect} from '@playwright/test'

test('LocatingMultipleElemets',async( {page})=>
  {

await page.goto('https://www.demoblaze.com/index.html');

//print all link text present in the page

/* const links=await page.$$('a');

for(const link of links)
{

const linktext=await link.textContent();

console.log(linktext);

} */
//Capture product name

const products=await page.$$("//div[@id='tbodyid']//div//h4//a");

for(const product of products)
{
  const productName=await product.textContent();
  console.log(productName);
}

})
