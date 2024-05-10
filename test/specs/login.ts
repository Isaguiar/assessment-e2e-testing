import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import LogOutPage from '../pageobjects/logout.page'
import SecurePage from '../pageobjects/secure.page'

beforeEach( async function(){
    await LoginPage.open();
}) 

describe('Login page', () => {

it('should not login if there are no credentials', async () => {
        await LoginPage.login('', '');
        expect(SecurePage.errorMessage).toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();
    
    });

   it('should not login with empty username', async () => {
        await LoginPage.login('', 'testing');
        expect(SecurePage.errorMessage).toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();
    });


    it('should not login with empty password', async () => {
        await LoginPage.login('standard_user@mail.com', '');
        expect(SecurePage.errorMessage).toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();
    });

    it('should not login with invalid username', async () => {
         //The email address is incorrect.
        await LoginPage.login('standarduser@testing.com', 'Testing1!');
        expect(SecurePage.errorMessage).toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();

        //Invalid email address
        await LoginPage.login('standarduser@testing.com', 'Testing1!');
        expect(SecurePage.errorMessage).toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();
    });

   it('should not login with invalid password', async () => {
       // await LoginPage.open();
        await LoginPage.login('aguiara@mail.com', 'secret');
        expect(SecurePage.errorMessage) .toBeTruthy();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        expect (LoginPage.inputUsername).toBeExisting();
    });

  it('should login with valid credentials', async () => {
        // await LoginPage.open();
        await LoginPage.login('aguiara@mail.com', 'Testing1!');
        expect(await SecurePage.errorMessage).toBeTruthy();
        expect (await SecurePage.checkUrl("login")).toBeFalsy;
        expect (LoginPage.inputUsername).not.toBeExisting();
       
    });

    after( async function(){
         await LogOutPage.logOut;
    }) 


}) 

