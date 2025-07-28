const { test, expect } = require('@playwright/test');
const { JHSPageObjectManager } = require('../../pages/JHSPageObjectManager');

let jhs;
let go;

test.beforeEach(async ({ page }) => {
  jhs = new JHSPageObjectManager(page);
  go = jhs.getHomePage();
  await go.launch();
});

test('@JHSsanity Verify Bilboard Ads are displayed in HOME', async () => {

  await go.gotoHomePage();
  await go.VerifyBilboarAd();
  await go.VerifyBilboarAdTagCheck();
  await go.VerifyBilboarAdDescription();
  await go.VerifyVillboardCTA();
});

test('@JHSsanity Verify Bilboard Ads are displayed in Movies Page', async () => {
  await go.gotoMoviepage();
  await go.VerifyBilboarAd();
  await go.VerifyBilboarAdTagCheck();
  await go.VerifyBilboarAdDescription();
  await go.VerifyVillboardCTA();
});

test('@JHSsanity Verify Bilboard Ads are displayed in TV Page', async () => {
  await go.gotoTvpage();
  await go.VerifyBilboarAd();
  await go.VerifyBilboarAdTagCheck();
  await go.VerifyBilboarAdDescription();
  await go.VerifyVillboardCTA();
});

test('@JHSsanity Verify Bilboard Ads are displayed in Sports Page', async () => {
  await go.gotoSportsPage();
  await go.VerifyBilboarAd();
  await go.VerifyBilboarAdTagCheck();
  await go.VerifyBilboarAdDescription();
  await go.VerifyVillboardCTA();
});
