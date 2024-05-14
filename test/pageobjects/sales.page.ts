
import Page from './page';


class SalesPage extends Page {

 //Getters   
 
    public get secondProduct(){
        return $(' .product-item:nth-child(2)');
    }
    
    public get fourthProduct(){
        return $(' .product-item:nth-child(4)');
    }

    public get secondProductLink(){
        return $(' .product-item:nth-child(2)').$('.product-item-link');
    }

    public get fourthProductLink(){
        return  $(' .product-item:nth-child(4)').$('.product-item-link');
    }

    public get secondProductPrice(){
        return $(' .product-item:nth-child(2)').$('.price');
    }

    public get fourthProductPrice(){
        return $(' .product-item:nth-child(4)').$('.price');  
    }

    public get secondProductAddCart(){
        return $(' .product-item:nth-child(2)').$('button[title="Add to Cart"]');
    }

    public get fourthProductAddCart(){
        return $(' .product-item:nth-child(4)').$('button[title="Add to Cart"]');  
    }   

    public get cartQty(){
        return $('div[class="minicart-wrapper"]').$('span[class="counter qty"]').$('span[class="counter-number"]')      
    }   
     
    public get cartMessage(){
        return $('div[class="page messages"]');     
    }  

//Setters
    public async secondProductName(){
        return await this.secondProductLink.getText();
    }
    
    public async fourthProductName(){
        return await this.fourthProductLink.getText();
    }
    
    public async secondProductValue(){
        let priceStr =  (await this.secondProductPrice.getText()).slice(1, -3);
        let price: number = +priceStr
        return price;
    }
    
    public async fourthProductValue(){
        let priceStr4 =  (await this.fourthProductPrice.getText()).slice(1, -3);
        let price: number = +priceStr4
        return price;
    }
    
    public async sumValue(){
        let priceStr2 =  (await this.secondProductPrice.getText()).slice(1, -3);
        let priceStr4 =  (await this.fourthProductPrice.getText()).slice(1, -3);
        let price2: number = +priceStr2;
        let price4: number = +priceStr4;
        return price2 + price4
    }   

    public async productCartQty() {
        let qtyStr = await this.cartQty.getText();
        //let qtyNum: number = +qtyStr
        return +qtyStr;
    }
    
    public async cartMessageText (){
        return this.cartMessage.getText()

    }

   public async checkSecongProductMessage() {
        let message = this.cartMessageText();
        let product = this.secondProductName();
        (await message).includes(await product);
    }
     
    public async addToCart(product: any, productBtn: any){
        await product.scrollIntoView();
        await product.moveTo();  
        await productBtn.click({skipRelease: true});
    }

    public open () {
        return super.open('what-is-new.html');
    }

}

export default new SalesPage();
