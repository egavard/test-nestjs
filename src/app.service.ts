import { Injectable } from '@nestjs/common';
import { BeerModel } from './model/beer-model';
import { AppDataSource } from './datasource';
import { Beer } from './entities/beer-entity';

@Injectable()
export class AppService {
  getHello(firstname: string): string {
    return `Hello ${firstname}!`;
  }

  async createBeer(beer: BeerModel) {
    const beerObj = Beer.fromBeerModel(beer);
    return await AppDataSource.manager.save(Beer, beerObj);
  }

  getBeer(id: string) {
    return AppDataSource.manager.getRepository(Beer).findOneByOrFail({ id });
  }
}
