import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';
import { Loginpage } from '../../pages/LoginPage';


test("@JHSsanity Verify JHS HomePage UI", async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

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
  

})