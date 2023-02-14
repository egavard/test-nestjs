import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { BeerModel } from './model/beer-model';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('firstname') firstname: string): string {
    return this.appService.getHello(firstname);
  }

  @Post('/beers')
  async createBeer(
    @Body() beerModel: BeerModel,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const beer = await this.appService.createBeer(beerModel);
    res
      .status(HttpStatus.CREATED)
      .setHeader('Location', req.url + '/' + beer.id)
      .send();
  }

  @Get('/beers/:id')
  async getBeer(@Param('id') id: string) {
    return this.appService.getBeer(id);
  }
}
