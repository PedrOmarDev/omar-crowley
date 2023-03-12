import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CrowlerController } from './crowler/controllers/crowler.controller';
import { GetUserInputService } from './user-input/services/get-user-input.service';
import { LaunchBrowserService } from './crowler/services/launch-browser.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);

  const getUserInputService = new GetUserInputService();

  const launchBrowserService = new LaunchBrowserService();

  const crowlerController = new CrowlerController(
    getUserInputService,
    launchBrowserService,
  );

  const sleep = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1800);
    });

  let withError = false;

  while (withError === false) {
    try {
      await crowlerController.launch();

      await sleep();
    } catch (error) {
      console.log('error: ', error);
      withError = true;
    }
  }
}
bootstrap();
