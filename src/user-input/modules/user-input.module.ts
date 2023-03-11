import { Module } from '@nestjs/common';

import { GetUserInputService } from '../services/get-user-input.service';

@Module({
  imports: [],
  providers: [GetUserInputService],
  exports: [GetUserInputService],
})
export class UserInputModule {}
