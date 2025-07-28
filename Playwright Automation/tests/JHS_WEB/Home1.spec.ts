import { test, expect, Page } from '@playwright/test';
import { JHS_HomePage } from '../../pages/JHS_HomePage';

test(' Verify JHS HomePage UI', async ({ page }: { page: Page }) => {
  const jhs = new JHS_HomePage(page);

  // Launch JHS and verify HomePage title and Logo
  await jhs.launch();
  await jhs.verifyHomePageTitle();
  await jhs.verifyLogo();

  // Verify the left side menu buttons and navigation
  await jhs.verifySideMenuButtons();

  // Verify footer section
  await jhs.verifyFooterLabels();


});
