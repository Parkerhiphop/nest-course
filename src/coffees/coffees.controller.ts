import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

/**
 * @command
 * nest generate controller
 * short: nest g co
 */

// :root/coffees
@Controller('coffees')
export class CoffeesController {
  /** @feature get /coffees */
  // @Get()
  // findAll(@Res() response) {
  //   // return 'This action returns all coffees';
  /** @feature Response status code */
  //   response.status(200).send('This action returns all coffees');
  // }

  /** @feature Pagination */
  // @Query 會接收 query string
  // GET: 'root/coffees?limit=20&offset=10'
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    console.log(paginationQuery);
    return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
  }

  /** @feature nested route */
  @Get('/flavors')
  find() {
    return 'This action returns nested flavors';
  }

  /** @feature route params */
  @Get(':id')
  // findOne(@Param() params) { params.id }
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffee`;
  }

  /** @feature Request Body/Payload */
  // Body -> 你放在 body 傳過去的資料，通常是 JSON
  // Example:
  // {
  //   name: 'name of the new coffee',
  //   brand: 'brand of the new coffee',
  // }
  /** @feature Request status code */
  // HttpCode decorator
  // HttpStatus Enum usage
  @Post()
  @HttpCode(HttpStatus.GONE) // 👈 HTTP status 410
  create(@Body() body) {
    // create(@Body('name') body) { -> only get the name of body
    return body;
    // return `This action creates a coffee`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
