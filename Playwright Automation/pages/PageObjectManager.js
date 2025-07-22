module.exports=class PageObjectManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new clientLoginpage(this.page);
        this.dashboard = new Dashboard(this.page);
      
    }

    getLoginPage() {
        return this.loginpage;
    }

    getDashboardPage() {
        return this.dashboard;
    }
   
}
