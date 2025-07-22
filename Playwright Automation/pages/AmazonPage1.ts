import { expect, Page } from "@playwright/test";

export class AmazonPage1 {
  private page: Page;
  private loginLink: string;
  private usernameInput: string;
  private continueBtn: string;
  private passwordInput: string;
  private loginButton: string;
  private userPhoneNum: string;
  private password: string;
  private productDetailsPageResults: string;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = "//span[normalize-space()='Account & Lists']";
    this.usernameInput = 'Enter your mobile number or';
    this.continueBtn = 'Continue';
    this.passwordInput = 'Password';
    this.loginButton = 'Sign in';
    this.userPhoneNum = "92311991";
    this.password = "Govinda@2015";
    this.productDetailsPageResults = "//h2[text()='Results']";
  }

  async launch(): Promise<void> {
    await this.page.goto("https://www.amazon.in");
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.loginLink).click();
    await this.page.locator("//input[@id='ap_email_login']").pressSequentially('78');
    await expect(this.page.locator("//span[@data-action='a-dropdown-button']")).toBeVisible();

    await this.page.getByRole('textbox', { name: this.usernameInput }).pressSequentially(username);
    await this.page.getByRole('button', { name: this.continueBtn }).click();
    await this.page.getByRole('textbox', { name: this.passwordInput }).fill(password);
    await this.page.getByRole('button', { name: this.loginButton, exact: true }).click();
  }

  async searchAndSelectSuggestion(searchKey: string, selectSuggestion: string): Promise<string | null> {
    await this.page.locator("//input[@id='twotabsearchtextbox']").pressSequentially(searchKey);

    const searchSuggestions = this.page.locator('#sac-autocomplete-results-container [role="row"]');
    const count = await searchSuggestions.count();

    for (let i = 0; i < count; i++) {
      if ((await searchSuggestions.nth(i).textContent())?.trim() === selectSuggestion) {
        await searchSuggestions.nth(i).click();
        break;
      }
    }

    return await this.page.title();
  }

  async addToCartByProductName(productName: string): Promise<string | undefined> {
    const productList = this.page.locator("[data-cy='title-recipe'] a h2 span");

    for (let i = 0; i < await productList.count(); i++) {
      if ((await productList.nth(i).textContent())?.trim() === productName) {
        await productList.nth(i).click();
        await this.page.waitForTimeout(3000);
        await expect(this.page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
        await this.page.locator("//input[@id='add-to-cart-button']").click();

        console.log(await this.page.title());
        return productName;
      }
    }
  }

  async addToCartByIndex(index: number): Promise<string | undefined> {
    const productList = this.page.locator("[data-cy='title-recipe'] a h2 span");
    const requiredProduct = (await productList.nth(index).textContent())?.trim();

    if (!requiredProduct) return;

    await productList.nth(index).click();
    await this.page.waitForTimeout(3000);
    await expect(this.page.locator("//input[@id='add-to-cart-button']")).toBeVisible();
    await this.page.locator("//input[@id='add-to-cart-button']").click();

    console.log(await this.page.title());
    return requiredProduct;
  }

  async goToCartPage(): Promise<void> {
    await this.page.locator("//a[@id='nav-cart']").click();
  }

  async getNumberOfProductsInCart(): Promise<void> {
    await this.page.waitForTimeout(3000);
    const cartProductList = this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']");
    const count = await cartProductList.count();

    console.log("Total Number of Products in cart page -->", count);
    console.log("-----------------------------------------");
  }

  async verifyProductTitle(expectedProductName: string): Promise<void> {
    await this.page.waitForSelector('#sc-active-cart');

    const cartProductTitle = await this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//span[@class='a-truncate-cut']").first().innerText();
    const cartProductPrice = await this.page.locator("//ul[@data-name='Active Items']//div[@class='sc-list-item-content']//div[@class='sc-apex-cart-price']//span[@class='a-offscreen']").first().innerText();

    console.log("Expected Title:", expectedProductName);
    console.log("-----------------------------------------");
    console.log("Cart Product Title:", cartProductTitle);
    console.log("-----------------------------------------");
    console.log("Cart Product Price:", cartProductPrice);

    expect(cartProductTitle.toLowerCase()).toContain(expectedProductName.slice(0, 5).toLowerCase());
  }
}
