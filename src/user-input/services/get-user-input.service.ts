import { Injectable } from '@nestjs/common';
import * as readlineSync from 'readline-sync';

@Injectable()
export class GetUserInputService {
  async execute() {
    const name = readlineSync.question('Interaja com Omar: \n');

    console.log(`Olá, ${name}!`);

    return name;
  }
}
