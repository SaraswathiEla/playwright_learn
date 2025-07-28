import { expect } from '@playwright/test';
const { allure } = require('allure-playwright');
export class JHS_WatchPage
{

    constructor(page)
    {
        this.page=page;
        this.expWatchPageTitel="Watch Spider-Man - JioHotstar"

    }
//Locator
    get BackButtonOnPlayer()
    {
       return "//button[@data-testid='back-button']";
    }

    get adInfoSection()
    {
        return "//div[@data-testid='ad-info']";
    }

    get adTag()
    {
        return "//span[@class='ON_IMAGE LABEL_CAPTION1_SEMIBOLD']//span[text()='Ad']";
    }

async verifyContentPlayback(contentName)
{
   
   
    await allure.step('verify the watch page title contains the content name', async () => {
      await this.page.title();
      await expect(this.page).toHaveTitle(new RegExp(contentName, 'i'));
    });

   await allure.step('check for playback error before verifying back button', async () => {
    const errorMessage = this.page.locator('text=Something went wrong');
    if (await errorMessage.isVisible()) {
      throw new Error('Playback failed: Error screen is displayed instead of player.');
    }
  });

  await allure.step('verify back button is present on player page', async () => {
    await expect(this.page.locator(this.BackButtonOnPlayer)).toBeVisible();
  });
}


}



    

