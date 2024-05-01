

describe ('Tugas Test Cases', () => {
    it('Test Case 1 - Berhasil Login', async () => {
        
        await browser.url('https://www.saucedemo.com/')

        const username =  await browser.$('#user-name')
        const password = await browser.$('#password')
        const LoginButton = await browser.$('#login-button')
        const AddItem = await $('#add-to-cart-sauce-labs-backpack')
        const Cart = await $('#shopping_cart_container')

        await username.setValue('standard_user')    
        await password.setValue('secret_sauce')
        LoginButton.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

        AddItem.click()
        await browser.pause(3000)
        Cart.click()

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        await browser.pause(5000)
    })
})