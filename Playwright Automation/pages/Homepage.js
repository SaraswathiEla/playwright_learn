exports.Homepage=
class Homepage{
    constructor(page)
    {
        this.page=page;
        this.productList='#tbodyid h4 a';
        this.addToCartbtn="//a[normalize-space()='Add to cart']";
        this.cart='#cartur';
    }

    async addProductToCart(ProductName)
    {
        const productList=await this.page.$$(this.productList);
        for(const product of productList) //read individual product in array
        {
        if(ProductName==await product.textContent())
        {
            await product.click();
            break;
        }
    }
    await this.page.on('dialog',async dialog=>{
        if(dialog.message().includes('added')){
            await dialog.accept();
        }
    }
    )
    
    await this.page.locator(this.addToCartbtn).click();
}
async gotoCart()
{
 await this.page.locator(this.cart).click();
}
}