import { expect } from '@playwright/test';
const { allure } = require('allure-playwright');
export class JHS_SearchPage
{
    constructor(page)
    {
        this.page=page;
    }

//-------Locators-----------
get searchTextBox() {
    return this.page.locator('//input[@id="searchBar"]');
  }

  get TopResultText()
  {
    return this.page.locator("//p[text()='TOP RESULT']");
  }
 
  get topResultscontentName()
  {
    return '//div[@data-testid="search-hero"]//p';
  }

  get WatchnowButton()
  {
    return this.page.locator("//div[@data-testid='search-hero']//button[@type='button']")
  }

  get allSearchContentTitel()
  {
    return this.page.locator ("//div[@data-testid='grid']//span[contains(@class, 'BODY3_MEDIUM') ]");
  }


  //---------Action--------------

async searchContentandClick(contentName) {

  await allure.step('verify User able to search the specific content name and click on watch button', async () => { 
 await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).click();
  await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).pressSequentially(contentName)
  await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).press('Enter');
  });
  await allure.step('verify TopResult TEXT is Present', async () => { 
 
    await expect(this.TopResultText).toBeVisible();
  });
  await allure.step('verify User able to see searched specific content on Top results', async () => { 
   const actualConntentName=await this.page.locator(this.topResultscontentName).textContent();
  console.log(actualConntentName);

    const count = actualConntentName.length;
    console.log(count);
    console.log(contentName)

    if (contentName.trim() === actualConntentName?.trim()) {
      await allure.step('verify watch button is present on Search specific content', async () => { 
      await expect(this.WatchnowButton).toBeVisible(); 
      await this.WatchnowButton.click();
      });
    }
  });
}

  
}