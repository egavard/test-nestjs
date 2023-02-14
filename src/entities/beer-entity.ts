import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BeerModel } from '../model/beer-model';

@Entity()
export class Beer {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  brewery: string;

  public static fromBeerModel(beerModel: BeerModel): Beer {
    const beer = new Beer();
    beer.name = beerModel.name;
    beer.brewery = beerModel.brewery;
    return beer;
  }
}
