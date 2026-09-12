import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Accessibility check', async ({ page }) => {
  await page.goto('http://localhost:3000/test-gallery/index.html');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules('region') // We don't care about page-level landmarks for component tests
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
