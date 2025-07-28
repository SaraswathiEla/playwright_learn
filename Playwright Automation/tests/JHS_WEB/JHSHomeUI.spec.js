import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';


test(" Verify JHS HomePage UI ", async ({ page }) => {
  const contentName="Spider-Man";
  
const jhs=new JHSPageObjectManager(page);
const go=jhs.getHomePage();

  await go.launch();
 
  //Verify the JHS HomePage Titel
 await go.verifyHomePageTitle();
 
 //verify the JHS logo
  await go.verifyLogo();
 
  // Verify the left side menu buttons and navigation
  await go.verifySideMenuButtons();
 
  // Verify the Footer section
  await go.verifyFooterLabels();
 
  //Verify click on all the landing page and verify its landing page and footer section is present
  await go.verifySideMenuNaviAndFooter();
})
