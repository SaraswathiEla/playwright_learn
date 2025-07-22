import { test, expect } from '@playwright/test';

test('launch JHS login test', async ({ page }) => {
  await page.goto('https://pp5.hotstar.com/in/home?ref=%2Fin');
 // await page.waitForLoadState("networkidle");
  await page.locator("a[aria-label='My Space']").click();
 // await page.getByRole('button', { name: 'My Space' }).click();
 await page.waitForTimeout(8000)
 await page.locator("text='Log In'").waitFor();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.locator("text='Enter Mobile Number'").isVisible();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number' }).fill('7892311991');
  await page.getByTestId('signup-form-submit-button').click();
  await page.getByTestId('id-0').fill('1');
  await page.getByTestId('id-1').fill('2');
  await page.getByTestId('id-2').fill('3');
  await page.getByTestId('id-3').fill('0');
  await page.getByTestId('id-3').click();
  await page.getByTestId('otp-form-submit-button').click();
  await page.getByTestId('otp-form-back-button').click();
  await page.getByTestId('signup-form-submit-button').click();
  await page.getByTestId('id-0').fill('1');
  await page.getByTestId('id-1').fill('2');
  await page.getByTestId('id-2').fill('3');
  await page.getByTestId('id-3').fill('4');
  await page.getByTestId('id-3').click();
  await page.getByTestId('otp-form-submit-button').click();
await page.locator("text='Login Successfully'").isVisible();

await page.locator("text='Log Out 1 Device to Continue'").isVisible();

await page.locator("text='Log Out'").first().click();

await page.locator("a[aria-label='My Space']").click();
await page.locator("text='Profiles'").waitFor(2000);

await expect(await page.locator("text='Profiles'")).toHaveText("Profiles");

//verify the contune watching tray is available

await expect(await page.locator(".TITLE1").last()).toContainText("Continue Watching");

//logout from the application 

await page.locator("text='Help & Settings'").click

await page.pause();

  
});