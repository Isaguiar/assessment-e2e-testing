import { expect } from '@wdio/globals'
import SalesPage from '../pageobjects/sales.page'



describe('Add products to cart  Whats New Page', () => {

    before( async function(){
        await browser.url('https://magento.softwaretestingboard.com/what-is-new.html');
        }) 
    
    it('should add a product without color and size choice to the cart from the main page', async () => {
        //Add a first product to cart    
        await SalesPage.addToCart (SalesPage.secondProduct, SalesPage.secondProductAddCart);

        //Verify that a confirming message is displayed after adding an item
        expect ((await SalesPage.cartMessageText()).length).toBeGreaterThan(0);
        expect (SalesPage.checkSecongProductMessage).toBeTruthy();
        expect ((await SalesPage.cartMessageText()).includes ("12345")).toBeFalsy();
        });

    it('should increment the number of the cart counter after adding a product', async () => {
        expect(await SalesPage.productCartQty()).toBeGreaterThanOrEqual(1);
        }); 
            
    })
