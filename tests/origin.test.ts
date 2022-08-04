import { test } from '@playwright/test';

test('newContext', async ({ browser }) => {
  console.log("Calling newContext...");
  await browser.newContext({storageState: 'storageState_origin.json'});
  console.log("Done");

  // Sleep so program doesn't end right away
  await new Promise(resolve => setTimeout(resolve, 1000));
});
