const { allure } = require('allure-playwright');
import { expect } from '@playwright/test';
exports.JHSmypage= class JHSmypage
{
    constructor(page){

        this.page=page;
        this.LoginBtn="text='Log In'";  
        this.MbTextField='text="Enter Mobile Number"';
        this.MobileNumbersubmit='signup-form-submit-button';
        this.OTPfield1='id-0';
        this.OTPfield2='id-1';
        this.OTPfield3='id-2';
        this.OTPfield4='id-3';
        this.OTPSubmitbtn='otp-form-submit-button';       
    }

async LoginBtnClick(){
  await allure.step('verify Login Button functinality', async () => { 
    await this.page.locator(this.LoginBtn).waitFor();
    await this.page.getByRole('button', { name: 'Log In' }).click();
    console.log("✅ Clicked the Login Button")
});
}

async EnterNumber(){
await allure.step('verify user able to enter the mobile number', async () => { 
     await this.page.locator(this.MbTextField).isVisible();
  await this.page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await this.page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7892311991');
  await this.page.getByTestId('signup-form-submit-button').click();
  console.log("✅ Entered the Phone number successfully")

});
}
async EnterOTPandSubmit(){
await allure.step('Enter the wrong OTP ,click on submit and close the loginsection', async () => { 
  
  await this.page.getByTestId('id-0').fill('1');
  await this.page.getByTestId('id-1').fill('2');
  await this.page.getByTestId('id-2').fill('3');
  await this.page.getByTestId('id-3').fill('0');
  await this.page.getByTestId('id-3').click();
  console.log("✅ Entered the OTP")
  await this.page.getByTestId('otp-form-submit-button').click();
  console.log("✅ clicked the Continue Button")
 await  expect(this.page.locator("//span[text()=' Incorrect OTP entered. Please enter again.']")).toBeVisible();
 console.log("✅ Incorrect OTP text message is present")
  await this.page.locator("//button[@data-testid='modal-close-button']").click();
  


});
}


}


