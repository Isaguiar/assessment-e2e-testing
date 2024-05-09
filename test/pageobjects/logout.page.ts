import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LogOutPage extends Page {
    
    get logoutLink () {
        return $('a[href=href="https://magento.softwaretestingboard.com/customer/account/logout/"]');
    }

    async logOut () {

        await this.logoutLink.click();
    }

}

export default new LogOutPage();
