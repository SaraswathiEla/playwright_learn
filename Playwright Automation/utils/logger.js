// utils/logger.js
function logStep(message, testInfo) {
  if (testInfo?.allure) {
    testInfo.allure.step(message, async () => {});
  }
}

function logAttachment(name, message, testInfo) {
  if (testInfo?.allure) {
    testInfo.allure.attachment(name, message, 'text/plain');
  }
}

module.exports = { logStep, logAttachment };
