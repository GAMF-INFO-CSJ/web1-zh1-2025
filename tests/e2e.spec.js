import { test, expect } from '@playwright/test';

test.describe('Web1-ZH1-2025 E2E Tests', () => {
    test('Index.html structure validation @html', async ({ page }) => {
        await page.goto('http://localhost:3000/index.html');

        await expect(page).toHaveTitle('web1-zh1-2025');
        await expect(page.locator('h1')).toHaveText('Megoldások');
        await expect(page.locator('h2')).toHaveText('Rendelések');

        const listItems = await page.locator('.orders li').allTextContents();
        expect(listItems).toEqual(['Ragasztó', 'Élzáró', 'Kivetőpánt']);
    });

    test('CSS validation @css', async ({ page }) => {
        await page.goto('http://localhost:3000/index.html');

        const h1 = page.locator('h1');
        await expect(h1).toHaveCSS('color', 'rgb(0, 0, 255)');
        await expect(h1).toHaveCSS('font-size', '30px');
        await expect(h1).toHaveCSS('font-weight', '700');
        await expect(h1).toHaveCSS('margin-bottom', '5px');

        const h2 = page.locator('h2');
        await expect(h2).toHaveCSS('color', 'rgb(169, 169, 169)');
        await expect(h2).toHaveCSS('font-size', '20px');
        await expect(h2).toHaveCSS('font-weight', '700');
        await expect(h2).toHaveCSS('margin-bottom', '3px');

        const listItem = page.locator('.orders li');
        await expect(listItem.first()).toHaveCSS('display', 'inline');
        await expect(listItem.first()).toHaveCSS('color', 'rgb(255, 0, 0)');
        await expect(listItem.first()).toHaveCSS('font-size', '15px');
    });

    test('Users.html Bootstrap structure @bootstrap', async ({ page }) => {
        await page.goto('http://localhost:3000/users.html');

        const navbar = page.locator('.navbar');
        await expect(navbar).toBeVisible();

        const table = page.locator('table.table.table-striped');
        await expect(table).toBeVisible();

        const rows = await table.locator('tbody tr').count();
        expect(rows).toBeGreaterThanOrEqual(10);

        const actionButtons = table.locator('tbody tr td .btn-group');
        await expect(actionButtons.first()).toBeVisible();

        const editButton = table.locator('tbody tr td .btn-primary .fa-pencil');
        await expect(editButton.first()).toBeVisible();

        const deleteButton = table.locator('tbody tr td .btn-danger .fa-trash');
        await expect(deleteButton.first()).toBeVisible();

        const detailsButton = table.locator('tbody tr td .btn-info .fa-eye');
        await expect(detailsButton.first()).toBeVisible();
    });
});
