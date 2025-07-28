import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';
import { Loginpage } from '../../pages/LoginPage';


test("Verify JHS HomePage UI", async ({ page },testInfo) => {
  const contentName="Spider-Man";
  
const jhs=new JHSPageObjectManager(page,testInfo);

const login=jhs.getHomePage();
//const jhs.get

  await login.launch();
 await login.verifyHomePageTitle();
  await login.verifyLogo();
  await login.verifySideMenuButtons();
  await login.verifyFooterLabels();
  await login.verifySideMenuNaviAndFooter();

  //Login with number and verify otp
  await login.gotoMyspacePage();
  const myspacePage=  jhs.getMySpacePage();
 await myspacePage.LoginBtnClick();
 await myspacePage.EnterNumber();
 await myspacePage.EnterOTPandSubmit();
  
//search the content and play
  await login.gotoSearchPage();
 const search= jhs.getSearchPage();
 await search.searchContentandClick(contentName);
const watchPage=jhs.getWatchPage();
await watchPage.verifyContentPlayback(contentName);


})


test("Verify Bilboard Ads are displayed in HOME,TV,Movie and Sports page", async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

const home=jhs.getHomePage();

  await home.launch();
 await  home.VerifyBilboarAd();

  await home.gotoTvpage();
  await home.VerifyBilboarAd();

  await home.gotoMoviepage();
   await home.VerifyBilboarAd();

   await home.gotoSportsPage();
   await home.VerifyBilboarAd();

})



test("Verify JHS Login functinality", async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

const login=jhs.getHomePage();
//const jhs.get

  await login.launch();
 await login.verifyHomePageTitle();
  await login.verifyLogo();
  
  //Login with number and verify otp
  await login.gotoMyspacePage();
  const myspacePage=  jhs.getMySpacePage();
 await myspacePage.LoginBtnClick();
 await myspacePage.EnterNumber();
 await myspacePage.EnterOTPandSubmit();
  

})

test("Verify User able to search the content and click on watchNow Button in search page", async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

const login=jhs.getHomePage();
  await login.launch();
 await login.gotoSearchPage();

const search= jhs.getSearchPage();
//await search.searchContentInSearchResults("anupama")
 await search.searchContentandClick("anupama");


})
