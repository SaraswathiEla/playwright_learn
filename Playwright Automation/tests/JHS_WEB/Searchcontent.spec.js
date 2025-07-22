import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';
import { Loginpage } from '../../pages/LoginPage';


test("@JHSsanity Verify User able to search the content and click on watchNow Button", async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

const login=jhs.getHomePage();
  await login.launch();
 await login.gotoSearchPage();

const search= jhs.getSearchPage();
 await search.searchContentandClick("Spider-Man");

const watchPage=jhs.getWatchPage();
await watchPage.verifyContentPlayback();


})
