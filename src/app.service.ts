import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  getHello(): string {
    return '<h2>Daily Trends<h2>';
  }
}
