import { $ } from '@wdio/globals'
import Page from './page';

//sub page containing specific selectors and methods for a specific page
 
class SecurePage extends Page {
   
    public get errorMessageTop () {
        return $('div[data-ui-id="message-error"]');
    }

    public get emailErrorMessage () {
        return $('div[id="email-error"]');
    }

    public get passErrorMessage () {
        return $('div[id="email-error"]');
    }

    public get pageUrl () {
        return browser.getUrl();
    }

    public async errorMessage () {
        if (await this.emailErrorMessage || await this.passErrorMessage || await this.errorMessageTop){
            return true
        }
        return false
    }

    public async checkUrl (path: string ) {
        let completePath = await this.pageUrl
        return completePath.includes(path);
    }

}
    

export default new SecurePage();
