import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Search,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';
import { UserAuthGuard } from 'src/users/user-auth.guard';
import { AdminAuthGuard } from 'src/users/admin-auth.guard';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @UseGuards(AdminAuthGuard)
  @Post()
  @ApiCreatedResponse({ type: ProductEntity })
  create(@Req() {user}, @Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @UseGuards(UserAuthGuard)
  @Get()
  @ApiOkResponse({ type: ProductEntity })
  findAll(@Req() { user }) {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Get('search/:term')
  @ApiOkResponse({ type: ProductEntity })
  search(@Param('term') term: string) {
    return this.productsService.search(term);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ProductEntity })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductEntity })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
