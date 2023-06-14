import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  getHello(): string {
    return `<h1>"Daily Trends"<h1>
    <h2>Prueba Técnica MuchoSol<h2>
    <h2>Luis Andrade<h2>
    `;
  }
}
