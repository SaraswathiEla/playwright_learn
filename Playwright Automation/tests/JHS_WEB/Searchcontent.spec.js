import { test, expect } from '@playwright/test';
import { JHSPageObjectManager } from '../../pages/JHSPageObjectManager';
import { Loginpage } from '../../pages/LoginPage';

const dataset=JSON.parse(JSON.stringify(require("../../utils/jhsContentData.json")));

for (const data of dataset)
{
test(`@sanity verify the search Content ${data.content}`, async ({ page }) => {
  
const jhs=new JHSPageObjectManager(page);

const login=jhs.getHomePage();
  await login.launch();
 await login.gotoSearchPage();

const search= jhs.getSearchPage();
//search the content
 await search.searchContentandClick(data.content);


})

}
