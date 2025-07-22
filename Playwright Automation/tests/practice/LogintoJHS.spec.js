import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hotstar.com/in/home?ref=%2Fin');
 // await page.waitForLoadState("networkidle");
  await page.locator("a[aria-label='My Space']").click();
 // await page.getByRole('button', { name: 'My Space' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7892311991');
  await page.getByTestId('signup-form-submit-button').click();
  await page.getByTestId('id-0').fill('1');
  await page.getByTestId('id-1').fill('2');
  await page.getByTestId('id-2').fill('3');
  await page.getByTestId('id-3').fill('4');
  await page.getByTestId('id-3').click();
  await page.getByTestId('otp-form-submit-button').click();
  await page.getByTestId('otp-form-back-button').click();
  await page.getByTestId('signup-form-submit-button').click();
  await page.getByTestId('id-0').fill('1');
  await page.getByTestId('id-1').fill('7');
  await page.getByTestId('id-2').fill('8');
  await page.getByTestId('id-3').fill('8');
  await page.getByTestId('id-3').click();
  await page.getByTestId('otp-form-submit-button').click();

  
});