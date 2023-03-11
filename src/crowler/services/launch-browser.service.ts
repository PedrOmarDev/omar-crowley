import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class LaunchBrowserService {
  async execute() {
    const browser = await puppeteer.launch({
      headless: false,
    });

    const page = await browser.newPage();

    const URL = `https://www.compreinarp.com.br`;

    await page.goto(URL);
  }
}
