class clientLoginpage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.loginButton = page.locator("#login");
    }

    async launch() {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    async validLogin() {
        await this.signInButton.click();
        await this.userName.fill("SaraHem11118110@gmail.com");
        await this.password.fill("Sara@1234");
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}


module.exports = { clientLoginpage };
