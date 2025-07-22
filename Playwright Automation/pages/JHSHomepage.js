exports.JHSHomePage= class JHSHomePage

{
    constructor(page){

        this.page=page;
        this.mySpace="a[aria-label='My Space']";
       
    }

async LaunchJHS(){
    await this.page.goto('https://www.hotstar.com/in/home')
  
}

async myspaceClick()
{
   await this.page.locator(this.mySpace).click();

}

}


