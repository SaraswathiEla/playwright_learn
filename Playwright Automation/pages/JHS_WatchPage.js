import { expect } from '@playwright/test';
export class JHS_WatchPage
{

    constructor(page)
    {
        this.page=page;

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

async verifyContentPlayback()
{
    //verify back button
await expect(this.page.locator(this.BackButtonOnPlayer)).toBeVisible();

  await expect(this.page.locator(this.adInfoSection)).toBeVisible();
 // await expect(this.page.locator(this.adTag)).toBeVisible();
}


}
    

