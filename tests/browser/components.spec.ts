import { test, expect } from '@playwright/test';

test.describe('Component Interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/test-gallery/index.html');
  });

  test('Button interactions & focus', async ({ page }) => {
    const btn = page.locator('#btn-primary button');
    await expect(btn).toBeVisible();
    await btn.focus();
    await expect(btn).toBeFocused();
    
    const disabledBtn = page.locator('#btn-disabled button');
    await expect(disabledBtn).toBeDisabled();
  });

  test('Switch interaction', async ({ page }) => {
    const switchBtn = page.locator('#switch-notif button');
    await expect(switchBtn).toHaveAttribute('aria-checked', 'false');
    await switchBtn.click();
    await expect(switchBtn).toHaveAttribute('aria-checked', 'true');
  });

  test('Modal open/close', async ({ page }) => {
    const modal = page.locator('#my-modal dialog');
    await expect(modal).toBeHidden();
    
    await page.click('#open-modal button');
    await expect(modal).toBeVisible();
    
    await page.keyboard.press('Escape');
    await expect(modal).toBeHidden();
  });

  test('Tooltip interaction', async ({ page }) => {
    const tooltipContent = page.locator('#tooltip-copy .ui-tooltip-content');
    await expect(tooltipContent).not.toBeVisible();
    
    await page.hover('#tooltip-copy');
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent).toHaveText('Copy to clipboard');
  });
});
