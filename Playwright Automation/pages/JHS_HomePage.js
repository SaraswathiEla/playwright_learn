import { expect } from '@playwright/test';
const { allure } = require('allure-playwright');

export class JHS_HomePage {
  constructor(page) {
    this.page = page;
    this.homePageURL="https://www.hotstar.com/in/home";
    this.searchPageURL="https://www.hotstar.com/in/explore";
    this.moviesPageURL="https://www.hotstar.com/in/movies";
    this.myspacePageURL="https://www.hotstar.com/in/mypage";
    this.sportsPageURL="https://www.hotstar.com/in/sports"
    this.tvPageURL="https://www.hotstar.com/in/shows"
    this.categoriesPageURL="https://www.hotstar.com/in/categories"
    this.sparkPageurl="https://www.hotstar.com/in/creators"
    this.ppBaseUrl='https://pp5.hotstar.com/in/home?ref=%2Fin';
    this.prodBaseURL='https://www.hotstar.com/in';

  }

  // ---------- Locators ----------

  get sideMenu() {
    return this.page.locator('aside[data-testid="sideNav"]');
  }

  get logo() {
    return this.page.locator('img[alt*="JioHotstar"]');
  }

  get homeButton() {
    return this.sideMenu.locator('a[aria-label="Home"]');
  }

  get searchButton() {
    return this.sideMenu.locator('a[aria-label="Search"]');
  }

  get tvButton() {
    return this.sideMenu.locator('a[aria-label="TV"]');
  }

  get moviesButton() {
    return this.sideMenu.locator('a[aria-label="Movies"]');
  }

  get sportsButton() {
    return this.sideMenu.locator('a[aria-label="Sports"]');
  }

  get sparksButton() {
    return this.sideMenu.locator('a[aria-label="Sparks"]');
  }

  get categoriesButton() {
    return this.sideMenu.locator('a[aria-label="Categories"]');
  }

  get mySpaceButton() {
    return this.sideMenu.locator('a[aria-label="My Space"]');
  }

  //------------bilboar add------------------
  get bilboardAdssection()
  {
    return this.page.locator("//div[@data-testid='bbtype-image']")
  }

  get bilboardAdTag()
  {
    return this.page.locator("//span[text()='Ad']");
  }

  get bilboardAdDescription()
  {
    return this.bilboardAdssection.locator("//div[@data-testid='brand-body']//p");
  }

  get billboardAdCTA()
  {
    return this.bilboardAdssection.locator("//button[@data-testid='billboard-cta']");
  }
  // ---------- Footer Locators ----------

  get footer() {
    return this.page.locator('footer');
  }

  get companyLabel() {
    return this.footer.getByRole('heading', { name: 'Company', level: 4 });
  }

  get viewWebsiteInLabel() {
    return this.footer.getByRole('heading', { name: 'View Website in', level: 4 });
  }

  get needHelpLabel() {
    return this.footer.getByRole('heading', { name: 'Need Help?', level: 4 });
  }

  get connectWithUsLabel() {
    return this.footer.getByRole('heading', { name: 'Connect with Us', level: 4 });
  }

  get aboutUSLabel()
  {
    return this.footer.getByText('About Us');

  }

   get CareersLabel()
  {
    return this.footer.getByText('Careers');
   
  }

   get EnglishLabel()
  {
    return this.footer.getByText('English');
   
  }

   get visitHelpCenterLabel()
  {
    return this.footer.getByText('Visit Help Center');
   
  }

   get shareFeedbackLabel()
  {
    return this.footer.getByText('Share Feedback');
   

  }
   get termsOfUseLabel()
  {
    return this.footer.locator("//a[text()='Terms Of Use']");

  }
     get privacyPolicyLabel()
  {
    return this.footer.locator("//a[text()='Privacy Policy']");

  }
    get fAQ()
  {
    return this.footer.locator("//a[text()='FAQ']");

  }

  get facebookImageICon()
  {
    return this.footer.locator("//i[@aria-label='Facebook']");
  }
  
  get twitterImageIcon()
  {
    return this.footer.locator("//i[@aria-label='Twitter']");
    
  }

  get googlePlayImg(){
    return this.footer.locator("//img[@alt='Get it on Google Play']");
  }

  get appStoreImg()
  {
    
    return this.footer.locator("//img[@alt='Download on the App Store']");
  }

  get allrightsReserveTextLabel()
  {
    return this.footer.locator("//p[text()='© 2025 STAR. All Rights Reserved.']");
  }

  
  // ---------- Actions ----------
async launch() {
    await allure.step('Launch JioHotstar Homepage', async () => {
      await this.page.goto(this.prodBaseURL);
      console.log('✅ sucessfully lunched the jio hotstar');
    });
  }
  async verifyLogo() {
  await allure.step('Verify JioHotstar logo is visible', async () => {
    const visible = await this.logo.isVisible();
    allure.attachment('Logo is Visible true', `Logo is visible: ${visible}`, 'text/plain');
    expect(visible).toBe(true);
  });
}
/*
  async verifyLogo() {
    await allure.step('Verify JioHotstar logo is visible', async () => {
      await expect(this.logo).toBeVisible();
      console.log('✅ Logo is visible');
    });
  } */
  async verifyHomePageTitle() {
     await allure.step('Verify HomePage Titel Matched', async () => {
    await expect(this.page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');
   // Log to Allure only if the title is correct
    allure.attachment('Home page titel True', 'Title matched: true', 'text/plain');
     console.log('✅ Page title is correct');
  });
}

  async verifySideMenuButtons() {

      
     await allure.step('verify sideMenubuttons are present', async () => 
      {
      await allure.step('verify Home Button is present', async () =>
         {
            const isVisible = await this.homeButton.isVisible();

  // Log result to Allure
   expect(isVisible).toBe(true);
  allure.attachment('Home Button Visible', `Home Button visible: ${isVisible}`, 'text/plain');

  // Assert to fail test if false
 

  console.log(`✅ Home button is visible: ${isVisible}`);
          /*
            await expect(this.homeButton).toBeVisible();
            allure.attachment('Home Button visible True', 'Title matched: true', 'text/plain');
            console.log('✅ Home button is visible'); */
        });

     await allure.step('verify Search Button is present', async () => 
      {
        await expect(this.searchButton).toBeVisible();
        console.log('✅ Search button is visible');
     });
       
     await allure.step('verify TV Button is present', async () =>
       {
        await expect(this.tvButton).toBeVisible();
        console.log('✅ TV button is visible');
       });
      await allure.step('verify Movie Button is present', async () => 
    {
    await expect(this.moviesButton).toBeVisible();
    console.log('✅ Movies button is visible');
    });

    await allure.step('verify Sports Button is present', async () => 
      { 
          await expect(this.sportsButton).toBeVisible();
          console.log('✅ Sports button is visible');
      });
  await allure.step('verify Spark Button is present', async () => 
    {
      await expect(this.sparksButton).toBeVisible();
      console.log('✅ spark button is visible');
    });

      await allure.step('verify Categories Button is present', async () => 
        {
           await expect(this.categoriesButton).toBeVisible();
          console.log('✅ Categories button is visible');
        });

     await allure.step('verify Search Button is present', async () => 
      {
      await expect(this.mySpaceButton).toBeVisible();
      console.log('✅ MySpace button is visible');
      });
});
  }

  async verifyFooterLabels()
   {
     await allure.step('verify FooterLabels are present', async () => 
      { 
        await allure.step('verify Company text Label is present', async () =>
       {
            await expect(this.companyLabel).toBeVisible();
            console.log('✅ "Company" label is visible in footer');
       });

       await allure.step('verify View Website in text Label is present', async () =>
      {
          await expect(this.viewWebsiteInLabel).toBeVisible();
          console.log('✅ "View Website in" label is visible in footer');
      });

      await allure.step('verify Need Help? text Label is present', async () =>
      {
          await expect(this.needHelpLabel).toBeVisible();
          console.log('✅ "Need Help?" label is visible in footer');
     });

     await allure.step('verify "Connect with Us" text Label is present', async () =>
    {
        await expect(this.connectWithUsLabel).toBeVisible();
        console.log('✅ "Connect with Us" label is visible in footer');
    });

    await allure.step('verify "AboutUs" text Label is present', async () =>
    {
      await expect(this.aboutUSLabel).toBeVisible();
      console.log('✅ "AboutUs" label is visible in footer');
    });

    await allure.step('verify "Careers" text Label is present', async () =>
    {
        await expect(this.CareersLabel).toBeVisible();
        console.log('✅ "Careers" label is visible in footer');
    });

    await allure.step('verify "English" text Label is present', async () =>
    {
        await expect(this.EnglishLabel).toBeVisible();
        console.log('✅ "English" label is visible in footer');
    });

    await allure.step('verify Visit Help Center text Label is present', async () =>
    {
    await expect(this.visitHelpCenterLabel).toBeVisible();
    console.log('✅ "Visit Help Center" label is visible in footer');
    });

  await allure.step('verify "Share Feedback" text Label is present', async () =>
  {
    await expect(this.shareFeedbackLabel).toBeVisible();
    console.log('✅ "Share Feedback" label is visible in footer');
  });
  
  await allure.step('verify "© 2025 STAR. All Rights Reserved." text Label is present', async () =>
  {
    await expect(this.allrightsReserveTextLabel).toBeVisible();
    console.log('✅ "© 2025 STAR. All Rights Reserved." label is visible in footer');
  });
  
  await allure.step('verify "Terms Of Use" text Label is present', async () =>
  { 
     await expect(this.termsOfUseLabel).toBeVisible();
      console.log('✅ "Terms Of Use" label is visible in footer');
  });
  
  await allure.step('verify "Privacy Policy" text Label is present', async () =>
  {
    await expect(this.privacyPolicyLabel).toBeVisible();
    console.log('✅ "Privacy Policy" label is visible in footer');
  });
  
  await allure.step('verify "FAQ" text Label is present', async () =>
  {
    await expect(this.fAQ).toBeVisible();
      console.log('✅ "FAQ" label is visible in footer');
  });
  
   await allure.step('verify "Facebook" Image icon is present', async () =>
  {
     await expect(this.facebookImageICon).toBeVisible();
     console.log('✅ "Facebook" Image icon is visible in footer');
  });
   
  await allure.step('verify "Twitter" Image icon is present', async () =>
  {
     await expect(this.twitterImageIcon).toBeVisible();
     console.log('✅ "Twitter" Image icon is visible in footer');
   });
   
    await allure.step('verify "GooglePlayStore" Image icon is present', async () =>
  {
   await expect(this.googlePlayImg).toBeVisible();
    console.log('✅ "GooglePlayStore" Image icon is visible in footer');
  });
   await allure.step('verify "AppStore" Image icon is present', async () =>
  {
    await expect(this.appStoreImg).toBeVisible();
    console.log('✅ "AppStore" Image icon is visible in footer');
  });
});
}


 async verifySideMenuNaviAndFooter()
  {

  //SEARCH
  await allure.step('verify SearchButton Functinality and its landingpage footer section', async () => {
  await this.searchButton.click(); 
  await expect(this.page).toHaveURL(this.searchPageURL); 
    await this.verifyFooterLabels();
   console.log("✅ 'searchPAge'succefully naviagted and footer is present");
  });

  //tv
   await allure.step('verify TvButton Functinality and its landingpage footer section', async () => {
 await this.tvButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.tvPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'TV' succefully naviagted and footer is present");
   });


//MOVIES
  await allure.step('verify MoviesButton Functinality and its landingpage footer section', async () => {
 await this.moviesButton.click(); 
  await expect(this.page).toHaveURL(this.moviesPageURL); 
    await this.verifyFooterLabels();
   console.log("✅ 'MOVIES' succefully naviagted and footer is present");
  });

  //SPORTS
await allure.step('verify SportsButton Functinality and its landingpage footer section', async () => {
 await this.sportsButton.click(); 
  await expect(this.page).toHaveURL(this.sportsPageURL); 
    await this.verifyFooterLabels();
   console.log("✅ 'SPORTS' succefully naviagted and footer is present");
});

//SPARK
await allure.step('verify SparkButton Functinality and its landingpage footer section', async () => {
 await this.sparksButton.click(); 
   await this.verifyFooterLabels();
  await expect(this.page).toHaveURL(this.sparkPageurl); 
   console.log("✅ 'SPARK' succefully naviagted and footer is present");
});

//CATEGGORIES
await allure.step('verify Categgories Button Functinality and its landingpage footer section', async () => {

 await this.categoriesButton.click(); 
  await expect(this.page).toHaveURL(this.categoriesPageURL); 
    await this.verifyFooterLabels();
   console.log("✅ 'CATEGGORIES' succefully naviagted and footer is present");
});

//MYSPACE
await allure.step('verify MYspacePageButton Functinality and its landingpage footer section', async () => {
 await this.mySpaceButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.myspacePageURL); // Also fixed: remove quotes around variable
  await this.verifyFooterLabels();
   console.log("✅ 'MYSPACEpage' succefully naviagted and footer is present");

});
}
async gotoHomePage() {
    await allure.step('Go to Home page and verify URL', async () => {
      await this.homeButton.click();
      await expect(this.page).toHaveURL(this.homePageURL);
      console.log('✅Landed on Home Page');
    });
  }


async gotoSearchPage()
{
 await allure.step('Go to search page and verify URL', async () => {
  await this.searchButton.click(); 
 await expect(this.page).toHaveURL(this.searchPageURL);   
   console.log('✅ Landed on search Page');
});
}

async gotoTvpage()
{
  await allure.step('Go to Tv page and verify URL', async () => {
   await this.tvButton.click();
  await expect(this.page).toHaveURL(this.tvPageURL); 
     console.log('✅ Landed on Tv page');
});
}

async gotoMoviepage()
{
    await allure.step('Go to Movies page and verify URL', async () => {
await this.moviesButton.click(); 
  await expect(this.page).toHaveURL(this.moviesPageURL);
  console.log('✅ Landed on Movie page'); 

});
}

async gotoSportsPage()
{
    await allure.step('Go to Sports page and verify URL', async () => {
await this.sportsButton.click(); 
  await expect(this.page).toHaveURL(this.sportsPageURL); 
    console.log('✅ Landed on Sports page');

});
}

async gotoMyspacePage()
{
  await allure.step('Go to Sports page and verify URL', async () => {  
await this.mySpaceButton.click();
await expect(this.page).toHaveURL(this.myspacePageURL);
});
}

async VerifyBilboarAd()
{
    await allure.step('Verify the BillBoard AD is present ', async () => {
  await expect(this.bilboardAdssection).toBeVisible();
   console.log("✅ 'Billboard AD is present");

});
}

async VerifyBilboarAdTagCheck()
{
    await allure.step('Verify the BillBoard AD tag is present ', async () => {
  await expect(this.bilboardAdTag).toBeVisible();
   console.log("✅ 'BillBoard AD tag is present");
});
}

async VerifyBilboarAdDescription()
{
    await allure.step('Verify the BillBoard AD Description is present ', async () => {
  await expect(this.bilboardAdDescription).toBeVisible();
   console.log("✅ 'BillBoard AD Description is present");
});
}

async VerifyVillboardCTA()
{
   await allure.step('Verify the BillBoard ADs CTA button  is present ', async () => {
  await expect(this.bilboardAdTag).toBeVisible();
   console.log("✅ 'BillBoard ADs CTA button is present");

});
}


}
