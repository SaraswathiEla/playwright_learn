const {test,expect}=require("@playwright/test")
const { JHSHomePage } = require("../../pages/JHSHomepage")
const{JHSmypage}=require("../../pages/JHSmypage")

test('JHSHomepage',async({page})=>
{


   const homepage=new JHSHomePage(page);
   await homepage.LaunchJHS();
   page.waitForLoadState();
   await homepage.myspaceClick();

      const Mypage=new JHSmypage(page);
      await page.waitForTimeout(3000);
      await Mypage.LoginBtnClick();

  
})