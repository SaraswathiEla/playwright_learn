class Dashboard{
constructor (page){
this.products=page.locator(".card-body");
this.productsText=page.locator(".card-body b");
this.cart=page.locator("[routerlink='/dashboard/cart']");
}

async searchProductAddcart(productName)
{

const firstTitel=await this.page.locator(products).first().textContent();
//console.log(firstTitel);
const titles=await this.page.locator(productsText).allTextContents();
const Prd_count =await products.count();
console.log(Prd_count)
for(let i=0; i<Prd_count; i++)
    {
        if(await products.nth(i).locator("b").textContent()==productName)
        {
        //add to cart
        await products.nth(i).locator("text=' Add To Cart'").click();
        break;
        }
    }
}

async navigateTocart()
{
    await this.page.locator(cart).click();
}
}
module.exports={Dashboard};