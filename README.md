# newContext Blank Page if storageState origin - Playwright Test MWE

This test shouldn't create any pages, just an unused context:

```ts
import { test } from "@playwright/test";

test("newContext", async ({ browser }) => {
  console.log("Calling newContext...");
  await browser.newContext({ storageState: "my_storageState.json" });
  console.log("Done");

  // Sleep so program doesn't end right away
  await new Promise((resolve) => setTimeout(resolve, 1000));
});
```

However, if `my_storageState.json` contains an `origin` entry, then a blank page briefly appears during `newContext` (visible in headed mode).

You can see this by running `npm run origin`, which uses `{ storageState: 'storageState_origin.json' }`. Meanwhile, no page appears if you run `npm run no_origin`, which is the same except that it uses a `storageState` with no `origin` entries (`storageState_no_origin.json`).
