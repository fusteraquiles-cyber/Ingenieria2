// Configuración de Playwright (simple)
module.exports = {
  testMatch: /.*\\.spec\\.js$/,
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 }
  }
};
