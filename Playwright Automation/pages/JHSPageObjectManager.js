import { JHS_HomePage } from './JHS_HomePage';
import { JHS_SearchPage } from './JHS_SearchPage';
import { JHS_WatchPage } from './JHS_watchPage';
import{JHSmypage} from './JHSmypage';


export class JHSPageObjectManager {
    constructor(page) {
        this.page = page;
        this.jhs = new JHS_HomePage(page);
        this.login=new JHSmypage(page)
        this.search = new JHS_SearchPage(page);
        this.watch = new JHS_WatchPage(page);

    }

    getHomePage() {
        return this.jhs;
    }

    getSearchPage() {
        return this.search;
    }

    getWatchPage() {
        return this.watch;
    }

    getMySpacePage()
    {
        return this.login;
    }
}
