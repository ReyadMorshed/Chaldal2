const { $ } = require('@wdio/globals')
//const Page = require('./page');

class LoginPage {

    get clickSearch () {
        return $('//android.widget.TextView[@text="Search"]');
    }

    get inputSearchProduct () {
        return $('//android.widget.EditText[@text="Search Products"]');
    }
    get toothbrush(){
        return $('//android.widget.TextView[@text="Colgate Charcoal Gold 360 Toothbrush"]');
    }
    get addBtn(){ // Add to cart from the first item
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');
    }
    get addBtnTwo(){ //Add to cart for the second item
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup');
    }
    get cartBtn(){//Go to Cart or Shopping Bag page
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
    }
    get cartRemoveBtn(){ //Remove product from shopping bag
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');
    }
    get nothingText(){
        return $('//android.widget.TextView[@text="Nothing to see here"]');
    }

    async searchProduct (productName) {
        (await this.clickSearch).click();
        await this.inputSearchProduct.setValue(productName);
    }
    async clickSearchBtn(){
        (await this.clickSearch).click();
    }
    async toothbrushPage(){
        (await this.toothbrush).click();
    }
    async addtoCartFirstItem(){
        await driver.pause(1000);
        (await this.addBtn).click();
    }
    async addtoCartSecondItem(){
        await driver.pause(1000);
        (await this.addBtnTwo).click();
    }
    async addtoCartThiredItem(){
        await driver.pause(1000);
        (await this.addBtnTwo).click();
    }
    async clickCartBtn(){
        (await this.cartBtn).click();
    }
    async removeCart(){
        await driver.pause(1500);
        (await this.cartRemoveBtn).click();
    }

 
}

module.exports = new LoginPage();
