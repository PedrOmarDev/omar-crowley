import { Controller, Get } from '@nestjs/common';

import { LaunchBrowserService } from '../services/launch-browser.service';
import { GetUserInputService } from '../../user-input/services/get-user-input.service';

@Controller()
export class CrowlerController {
  constructor(
    private readonly getUserInputService: GetUserInputService,
    private readonly launchBrowserService: LaunchBrowserService,
  ) {}

  @Get()
  async launch() {
    const userInput = await this.getUserInputService.execute();

    console.log('userInput: ', userInput);

    // this.launchBrowserService.execute();
  }
}
