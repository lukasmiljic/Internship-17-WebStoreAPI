import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [PrismaModule, ProductsModule, UsersModule, CartsModule, WishlistsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
