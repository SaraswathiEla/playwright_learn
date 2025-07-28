import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';


test("Verify JHS HomePage UI,Login,Search and watchpage", async ({ page }) => {
  const contentName="Spider-Man";
  
const jhs=new JHSPageObjectManager(page);
const go=jhs.getHomePage();

  await go.launch();
 await go.verifyHomePageTitle();
  await go.verifyLogo();
  await go.verifySideMenuButtons();
  await go.verifyFooterLabels();
  await go.verifySideMenuNaviAndFooter();

  //Login with number and verify otp
  await go.gotoMyspacePage();
  const myspacePage=  jhs.getMySpacePage();
 await myspacePage.LoginBtnClick();
 await myspacePage.EnterNumber();
 await myspacePage.EnterOTPandSubmit();
  
//search the content and play
  await go.gotoSearchPage();
 const search= jhs.getSearchPage();
 await search.searchContentandClick(contentName);
const watchPage=jhs.getWatchPage();
await watchPage.verifyContentPlayback(contentName);


})
