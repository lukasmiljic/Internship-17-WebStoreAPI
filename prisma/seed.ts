import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const product1 = await prisma.product.upsert({
    where: { title: "Men's Denim Jeans" },
    update: {},
    create: {
      title: "Men's Denim Jeans",
      price: 49.99,
      description:
        "High-quality men's denim jeans with a modern fit and stylish design.",
      category: 'Clothing',
    },
  });

  const product2 = await prisma.product.upsert({
    where: { title: "Women's Leather Boots" },
    update: {},
    create: {
      title: "Women's Leather Boots",
      price: 89.99,
      description:
        "Stylish and durable women's leather boots with a comfortable fit.",
      category: 'Shoes',
    },
  });

  const product3 = await prisma.product.upsert({
    where: { title: 'Smartphone case' },
    update: {},
    create: {
      title: 'Smartphone case',
      price: 14.99,
      description:
        'Protective case for your smartphone, made with high-quality materials.',
      category: 'Tech Accessories',
    },
  });

  const product4 = await prisma.product.upsert({
    where: { title: 'Wireless Headphones' },
    update: {},
    create: {
      title: 'Wireless Headphones',
      price: 39.99,
      description:
        'Premium wireless headphones with noise-canceling technology for an immersive listening experience.',
      category: 'Tech',
    },
  });

  const product5 = await prisma.product.upsert({
    where: { title: 'Yoga Mat' },
    update: {},
    create: {
      title: 'Yoga Mat',
      price: 24.99,
      description:
        'Durable and non-slip yoga mat for your daily workout sessions.',
      category: 'Fitness',
    },
  });

  const product6 = await prisma.product.upsert({
    where: { title: 'Cookware Set' },
    update: {},
    create: {
      title: 'Cookware Set',
      price: 124.99,
      description:
        'Complete cookware set with non-stick coating for easy cooking and cleaning.',
      category: 'Kitchen',
    },
  });

  const product7 = await prisma.product.upsert({
    where: { title: 'Graphic T-Shirt' },
    update: {},
    create: {
      title: 'Graphic T-Shirt',
      price: 19.99,
      description:
        'Comfortable and stylish graphic t-shirt featuring unique designs.',
      category: 'Kitchen',
    },
  });

  const product8 = await prisma.product.upsert({
    where: { title: 'Gaming Mouse' },
    update: {},
    create: {
      title: 'Gaming Mouse',
      price: 58.99,
      description:
        'High-performance gaming mouse with customizable buttons and RGB lighting',
      category: 'Tech',
    },
  });

  const product9 = await prisma.product.upsert({
    where: { title: 'Desk Lamp' },
    update: {},
    create: {
      title: 'Desk Lamp',
      price: 34.99,
      description:
        'Sleek and adjustable desk lamp with multiple brightness levels for your workspace.',
      category: 'Office Supplies',
    },
  });

  const product10 = await prisma.product.upsert({
    where: { title: 'Hiking Backpack' },
    update: {},
    create: {
      title: 'Hiking Backpack',
      price: 34.99,
      description:
        'Durable and spacious travel backpack with padded straps for comfort on long journeys.',
      category: 'Travel Gear',
    },
  });

  console.log(product1, product2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
