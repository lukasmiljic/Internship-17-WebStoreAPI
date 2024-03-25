import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  price: number;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({required: false})
  image: string;
  
  @ApiProperty()
  category: string;
}
