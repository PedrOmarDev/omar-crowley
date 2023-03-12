import { Module } from '@nestjs/common';

import { CrowlerModule } from './crowler/crowler.module';
import { LaunchBrowserService } from './crowler/services/launch-browser.service';

@Module({
  imports: [CrowlerModule],
  controllers: [],
  providers: [LaunchBrowserService],
})
export class AppModule {}
