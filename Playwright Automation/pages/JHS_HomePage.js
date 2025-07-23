import { expect } from '@playwright/test';

export class JHS_HomePage {
  constructor(page) {
    this.page = page;
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
   // await this.page.goto('https://www.hotstar.com/in');
   await this.page.goto(this.prodBaseURL);  
   console.log('✅ Launched JioHotstar homepage');
  }

  async verifyHomePageTitle() {
    await expect(this.page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');
    console.log('✅ Page title is correct');
  }

  async verifyLogo() {
    await expect(this.logo).toBeVisible();
    console.log('✅ JioHotstar logo is visible');
  }

  async verifySideMenuButtons() {
    await expect(this.homeButton).toBeVisible();
    console.log('✅ Home button is visible');
    await expect(this.searchButton).toBeVisible();
    console.log('✅ Search button is visible');
    await expect(this.tvButton).toBeVisible();
    console.log('✅ TV button is visible');
    await expect(this.moviesButton).toBeVisible();
    console.log('✅ Movies button is visible');
    await expect(this.sportsButton).toBeVisible();
    console.log('✅ Sports button is visible');
    await expect(this.sparksButton).toBeVisible();
    console.log('✅ spark button is visible');
    await expect(this.categoriesButton).toBeVisible();
    console.log('✅ Categories button is visible');
    await expect(this.mySpaceButton).toBeVisible();
    console.log('✅ MySpace button is visible');
  }

  async verifyFooterLabels()
   {
    await expect(this.companyLabel).toBeVisible();
    console.log('✅ "Company" label is visible in footer');
    await expect(this.viewWebsiteInLabel).toBeVisible();
    console.log('✅ "View Website in" label is visible in footer');
    await expect(this.needHelpLabel).toBeVisible();
    console.log('✅ "Need Help?" label is visible in footer');
    await expect(this.connectWithUsLabel).toBeVisible();
    console.log('✅ "Connect with Us" label is visible in footer');
    await expect(this.aboutUSLabel).toBeVisible();
    console.log('✅ "AboutUs" label is visible in footer');
    await expect(this.CareersLabel).toBeVisible();
    console.log('✅ "Careers" label is visible in footer');
    await expect(this.EnglishLabel).toBeVisible();
    console.log('✅ "English" label is visible in footer');
    await expect(this.visitHelpCenterLabel).toBeVisible();
    console.log('✅ "Visit Help Center" label is visible in footer');
    await expect(this.shareFeedbackLabel).toBeVisible();
    console.log('✅ "Share Feedback" label is visible in footer');
    await expect(this.allrightsReserveTextLabel).toBeVisible();
    console.log('✅ "© 2025 STAR. All Rights Reserved." label is visible in footer');
    await expect(this.termsOfUseLabel).toBeVisible();
    console.log('✅ "Terms Of Use" label is visible in footer');
    await expect(this.privacyPolicyLabel).toBeVisible();
    console.log('✅ "Privacy Policy" label is visible in footer');
    await expect(this.fAQ).toBeVisible();
    console.log('✅ "FAQ" label is visible in footer');
    await expect(this.facebookImageICon).toBeVisible();
    console.log('✅ "Facebook" Image icon is visible in footer');
    await expect(this.twitterImageIcon).toBeVisible();
     console.log('✅ "Twitter" Image icon is visible in footer');
    await expect(this.googlePlayImg).toBeVisible();
    console.log('✅ "GooglePlayStore" Image icon is visible in footer');
    await expect(this.appStoreImg).toBeVisible();
    console.log('✅ "AppStore" Image icon is visible in footer');
  }


 async verifySideMenuNaviAndFooter() {
  //SEARCH
  await this.searchButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.searchPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'searchPAge'succefully naviagted and footer is present");

//tv
 await this.tvButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.tvPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'TV' succefully naviagted and footer is present");
//MOVIES
 await this.moviesButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.moviesPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'MOVIES' succefully naviagted and footer is present");
//SPORTS
 await this.sportsButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.sportsPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'SPORTS' succefully naviagted and footer is present");
//SPARK
 await this.sparksButton.click(); // ✅ Correct usage
   await this.verifyFooterLabels();
  await expect(this.page).toHaveURL(this.sparkPageurl); // Also fixed: remove quotes around variable
   console.log("✅ 'SPARK' succefully naviagted and footer is present");
//CATEGGORIES
 await this.categoriesButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.categoriesPageURL); // Also fixed: remove quotes around variable
    await this.verifyFooterLabels();
   console.log("✅ 'CATEGGORIES' succefully naviagted and footer is present");
//MYSPACE
 await this.mySpaceButton.click(); // ✅ Correct usage
  await expect(this.page).toHaveURL(this.myspacePageURL); // Also fixed: remove quotes around variable
  await this.verifyFooterLabels();
   console.log("✅ 'MYSPACEpage' succefully naviagted and footer is present");

}

async gotoSearchPage()
{
  //SEARCH
  await this.searchButton.click(); // ✅ Correct usage
 await expect(this.page).toHaveURL(this.searchPageURL); // Also fixed: remove quotes around variable
  
    
}

async gotoMyspacePage()
{
  //myspace
await this.mySpaceButton.click();
await expect(this.page).toHaveURL(this.myspacePageURL);

}



}



/*


import { expect } from '@playwright/test';

export class JHS_HomePage {
  constructor(page) {
    this.page = page;
    this.urls = {
      home: 'https://www.hotstar.com',
      search: 'https://www.hotstar.com/in/explore',
      tv: 'https://www.hotstar.com/in/shows',
      movies: 'https://www.hotstar.com/in/movies',
      sports: 'https://www.hotstar.com/in/sports',
      categories: 'https://www.hotstar.com/in/categories',
      sparks: 'https://www.hotstar.com/in/creators',
      myspace: 'https://www.hotstar.com/in/mypage',
    };
  }

  // ---------- Locators ----------

  get sideMenu() {
    return this.page.locator('aside[data-testid="sideNav"]');
  }

  get logo() {
    return this.page.locator('img[alt*="JioHotstar"]');
  }

  get footer() {
    return this.page.locator('footer');
  }

  get footerLabels() {
    return {
      company: this.footer.getByRole('heading', { name: 'Company', level: 4 }),
      viewWebsiteIn: this.footer.getByRole('heading', { name: 'View Website in', level: 4 }),
      needHelp: this.footer.getByRole('heading', { name: 'Need Help?', level: 4 }),
      connectWithUs: this.footer.getByRole('heading', { name: 'Connect with Us', level: 4 }),
      aboutUs: this.footer.getByText('About Us'),
      careers: this.footer.getByText('Careers'),
      english: this.footer.getByText('English'),
      helpCenter: this.footer.getByText('Visit Help Center'),
      feedback: this.footer.getByText('Share Feedback'),
      termsOfUse: this.footer.locator("//a[text()='Terms Of Use']"),
      privacyPolicy: this.footer.locator("//a[text()='Privacy Policy']"),
      faq: this.footer.locator("//a[text()='FAQ']"),
      facebookIcon: this.footer.locator("//i[@aria-label='Facebook']"),
      twitterIcon: this.footer.locator("//i[@aria-label='Twitter']"),
      googlePlayImg: this.footer.locator("//img[@alt='Get it on Google Play']"),
      appStoreImg: this.footer.locator("//img[@alt='Download on the App Store']"),
      copyright:
        this.footer.locator("//p[text()='© 2025 STAR. All Rights Reserved.']"),
    };
  }

  get sideMenuButtons() {
    return {
      home: this.sideMenu.locator('a[aria-label="Home"]'),
      search: this.sideMenu.locator('a[aria-label="Search"]'),
      tv: this.sideMenu.locator('a[aria-label="TV"]'),
      movies: this.sideMenu.locator('a[aria-label="Movies"]'),
      sports: this.sideMenu.locator('a[aria-label="Sports"]'),
      sparks: this.sideMenu.locator('a[aria-label="Sparks"]'),
      categories: this.sideMenu.locator('a[aria-label="Categories"]'),
      myspace: this.sideMenu.locator('a[aria-label="My Space"]'),
    };
  }

  // ---------- Actions ----------

  async launch() {
    await this.page.goto(this.urls.home);
    console.log('✅ Launched JioHotstar homepage');
  }

  async verifyHomePageTitle() {
    await expect(this.page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');
    console.log('✅ Page title is correct');
  }

  async verifyLogo() {
    await expect(this.logo).toBeVisible();
    console.log('✅ JioHotstar logo is visible');
  }

  async verifySideMenuButtons() {
    for (const [name, locator] of Object.entries(this.sideMenuButtons)) {
      await expect(locator).toBeVisible();
      console.log(`✅ ${name} button is visible`);
    }
  }

  async verifyFooterLabels() {
    for (const [name, locator] of Object.entries(this.footerLabels)) {
      await expect(locator).toBeVisible();
      console.log(`✅ "${name}" label/icon is visible in footer`);
    }
  }

  async verifySideMenuNavigationAndFooter() {
    const navItems = {
      search: this.urls.search,
      tv: this.urls.tv,
      movies: this.urls.movies,
      sports: this.urls.sports,
      sparks: this.urls.sparks,
      categories: this.urls.categories,
      myspace: this.urls.myspace,
    };

    for (const [label, url] of Object.entries(navItems)) {
      await this.sideMenuButtons[label].click();
      await expect(this.page).toHaveURL(url);
      await this.verifyFooterLabels();
      console.log(`✅ '${label.toUpperCase()}' successfully navigated and footer is present`);
    }
  }
  }*/
