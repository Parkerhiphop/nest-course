import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  // @Type(() => Number) -> remove because 'transformOptions' while ValidationPipe
  @IsOptional()
  @IsPositive()
  limit: number;

  // @Type(() => Number)
  @IsOptional()
  @IsPositive()
  offset: number;
}
