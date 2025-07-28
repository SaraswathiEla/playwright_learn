import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';
import { Loginpage } from '../../pages/LoginPage';

const dataset=JSON.parse(JSON.stringify(require("../../utils/jhsContentData.json")));

for (const data of dataset)
{

test(`@sanity Verify 'Watch Now' navigates to Watch Page for content:${data.content}`, async ({ page }) => {
 
  
const jhs=new JHSPageObjectManager(page);

const go=jhs.getHomePage();


  await go.launch();
 await go.verifyHomePageTitle();
  await go.verifyLogo();
/*
  //Login with number and verify otp
  await go.gotoMyspacePage();
  const myspacePage=  jhs.getMySpacePage();
 await myspacePage.LoginBtnClick();
 await myspacePage.EnterNumber();
 await myspacePage.EnterOTPandSubmit();
  */
//search the content and play
  await go.gotoSearchPage();
 const search= jhs.getSearchPage();
 await search.searchContentandClick(data.content);
const watchPage=jhs.getWatchPage();
await watchPage.verifyContentPlayback(data.content);


})
}

