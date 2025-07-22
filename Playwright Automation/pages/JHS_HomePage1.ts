import { Page, Locator, expect } from '@playwright/test';

export class JHS_HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ---------- Locators ----------

  get sideMenu(): Locator {
    return this.page.locator('aside[data-testid="sideNav"]');
  }

  get logo(): Locator {
    return this.page.locator('img[alt*="JioHotstar"]');
  }

  get homeButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Home"]');
  }

  get searchButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Search"]');
  }

  get tvButton(): Locator {
    return this.sideMenu.locator('a[aria-label="TV"]');
  }

  get moviesButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Movies"]');
  }

  get sportsButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Sports"]');
  }

  get sparksButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Sparks"]');
  }

  get categoriesButton(): Locator {
    return this.sideMenu.locator('a[aria-label="Categories"]');
  }

  get mySpaceButton(): Locator {
    return this.sideMenu.locator('a[aria-label="My Space"]');
  }

  // ---------- Footer Locators ----------

  get footer(): Locator {
    return this.page.locator('footer');
  }

  get companyLabel(): Locator {
    return this.footer.getByRole('heading', { name: 'Company', level: 4 });
  }

  get viewWebsiteInLabel(): Locator {
    return this.footer.getByRole('heading', { name: 'View Website in', level: 4 });
  }

  get needHelpLabel(): Locator {
    return this.footer.getByRole('heading', { name: 'Need Help?', level: 4 });
  }

  get connectWithUsLabel(): Locator {
    return this.footer.getByRole('heading', { name: 'Connect with Us', level: 4 });
  }

  get aboutUSLabel(): Locator {
    return this.footer.getByText('About Us');
  }

  get CareersLabel(): Locator {
    return this.footer.getByText('Careers');
  }

  get EnglishLabel(): Locator {
    return this.footer.getByText('English');
  }

  get visitHelpCenterLabel(): Locator {
    return this.footer.getByText('Visit Help Center');
  }

  get shareFeedbackLabel(): Locator {
    return this.footer.getByText('Share Feedback');
  }

  get termsOfUseLabel(): Locator {
    return this.footer.locator("//a[text()='Terms Of Use']");
  }

  get privacyPolicyLabel(): Locator {
    return this.footer.locator("//a[text()='Privacy Policy']");
  }

  get fAQ(): Locator {
    return this.footer.locator("//a[text()='FAQ']");
  }

  get facebookImageICon(): Locator {
    return this.footer.locator("//i[@aria-label='Facebook']");
  }

  get twitterImageIcon(): Locator {
    return this.footer.locator("//i[@aria-label='Twitter']");
  }

  get googlePlayImg(): Locator {
    return this.footer.locator("//img[@alt='Get it on Google Play']");
  }

  get appStoreImg(): Locator {
    return this.footer.locator("//img[@alt='Download on the App Store']");
  }

  get allrightsReserveTextLabel(): Locator {
    return this.footer.locator("//p[text()='© 2025 STAR. All Rights Reserved.']");
  }

  // ---------- Actions ----------

  async launch(): Promise<void> {
    await this.page.goto('https://www.hotstar.com');
    console.log('✅ Launched JioHotstar homepage');
  }

  async verifyHomePageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');
    console.log('✅ Page title is correct');
  }

  async verifyLogo(): Promise<void> {
    await expect(this.logo).toBeVisible();
    console.log('✅ JioHotstar logo is visible');
  }

  async verifySideMenuButtons(): Promise<void> {
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

  async verifyFooterLabels(): Promise<void> {
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
}
