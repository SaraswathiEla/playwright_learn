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
    await this.page.locator(this.LoginBtn).waitFor();
    await this.page.getByRole('button', { name: 'Log In' }).click();
    
  
}

async EnterNumber(){

     await this.page.locator(this.MbTextField).isVisible();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7892311991');
  await page.getByTestId('signup-form-submit-button').click();

}
async EnterOTPandSubmit(){
  await page.getByTestId('id-0').fill('1');
  await page.getByTestId('id-1').fill('2');
  await page.getByTestId('id-2').fill('3');
  await page.getByTestId('id-3').fill('0');
  await page.getByTestId('id-3').click();
  await page.getByTestId('otp-form-submit-button').click();



}



}


