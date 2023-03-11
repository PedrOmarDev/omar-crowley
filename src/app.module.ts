import { Module } from '@nestjs/common';

import { CrowlerModule } from './crowler/crowler.module';

@Module({
  imports: [CrowlerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
