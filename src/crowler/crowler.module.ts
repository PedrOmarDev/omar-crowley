import { Module } from '@nestjs/common';

import { CrowlerController } from './controllers/crowler.controller';
import { LaunchBrowserService } from './services/launch-browser.service';
import { UserInputModule } from '../user-input/modules/user-input.module';

@Module({
  imports: [UserInputModule],
  controllers: [CrowlerController],
  providers: [LaunchBrowserService],
  exports: [LaunchBrowserService],
})
export class CrowlerModule {}
