import { Injectable } from '@nestjs/common';
import * as readlineSync from 'readline-sync';

@Injectable()
export class GetUserInputService {
  async execute() {
    const name = readlineSync.question('Qual é o seu nome? ');
    console.log(`Olá, ${name}!`);

    return name;
  }
}
