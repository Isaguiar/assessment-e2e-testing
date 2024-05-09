import { $ } from '@wdio/globals'
import Page from './page';


//sub page containing specific selectors and methods for the login page
 
class LoginPage extends Page {
   
    public get inputUsername () {
        return $('#email');
    }

    public get inputPassword () {
        return $('#pass');
    }

    public get btnSubmit () {
        return $('#send2');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
