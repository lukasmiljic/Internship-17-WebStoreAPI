import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    if (!email) {
      throw new BadRequestException('Missing email');
    }
    if (!password) {
      throw new BadRequestException('Missing password');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const hashedPassword = await hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: email,
      },
    });

    const payload = {
      id: user.id,
      email: user.email,
      role: user.admin,
    };

    return { token: this.jwtService.sign({ sub: user.id }) };
  }

  async login(email: string, password: string) {
    if (!email) {
      throw new BadRequestException('Missing email');
    }
    if (!password) {
      throw new BadRequestException('Missing password');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new BadRequestException('User does not exist');
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new ForbiddenException('Invalid password');
    }

    const payload = {
      id: user.id,
      email: user.email,
      admin: user.admin,
    }

    return { token: this.jwtService.sign({ sub: user.id }) };
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
