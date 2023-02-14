import { ApiProperty } from '@nestjs/swagger';

export class BeerModel {
  @ApiProperty()
  name: string;
  @ApiProperty() brewery: string;
  abv: number;
}
