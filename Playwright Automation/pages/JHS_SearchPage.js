import { expect } from '@playwright/test';

export class JHS_SearchPage
{
    constructor(page)
    {
        this.page=page;
    }

//Locators

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



  //Action

async searchContentandClick(contentName) {
  
    //await this.searchTextBox.fill(contentName); // Enter the Content Name
      
 await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).click();
  await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).pressSequentially(contentName)
  await this.page.getByRole('textbox', { name: 'Movies, shows and more' }).press('Enter');
 

    await expect(this.TopResultText).toBeVisible();
   const actualConntentName=await this.page.locator(this.topResultscontentName).textContent();
  console.log(actualConntentName);

    const count = actualConntentName.length;
    console.log(count);
    console.log(contentName)

    if (contentName.trim() === actualConntentName?.trim()) {
      console.log("pass");
      await expect(this.WatchnowButton).toBeVisible(); // Uncomment if needed
      await this.WatchnowButton.click();

    }
//await expect( this.page.locator("//button[@data-testid='back-button']")).toBeVisible();

//await this.page.locator("//button[@data-testid='back-button']")
  }
}