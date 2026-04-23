const { test, expect } = require('@playwright/test');
const path = require('path');

test('index carga y contiene el encabezado', async ({ page }) => {
  const filePath = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(filePath);
  await expect(page.locator('h1')).toHaveText(/Bienvenidos/i);
});
