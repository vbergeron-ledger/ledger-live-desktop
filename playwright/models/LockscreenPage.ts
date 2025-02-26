import { Page, Locator } from "@playwright/test";
import { Layout } from "./Layout";

export class LockscreenPage extends Layout {
  readonly page: Page;
  readonly container: Locator;
  readonly passwordInput: Locator;
  readonly forgottenButton: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.container = page.locator('data-test-id=lockscreen-container');
    this.passwordInput = page.locator('data-test-id=lockscreen-password-input');
    this.forgottenButton = page.locator('data-test-id=lockscreen-forgotten-button');
    this.loginButton = page.locator('data-test-id=lockscreen-login-button');
  }

  async login(password: string) {
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async lostPassword() {
    await this.forgottenButton.click();
  }
}
