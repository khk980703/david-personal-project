export async function seed(knex) {
  await knex('products').del()
  await knex('products').insert([
    {
      id: 1,
      name: 'Example Treadmill 1',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 2,
      name: 'Example Treadmill 2',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 3,
      name: 'Example Treadmill 3',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 4,
      name: 'Example Treadmill 4',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 5,
      name: 'Example Treadmill 5',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 6,
      name: 'Example Treadmill 6',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 7,
      name: 'Example Treadmill 7',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 8,
      name: 'Example Treadmill 8',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 9,
      name: 'Example Treadmill 9',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 10,
      name: 'Example Treadmill 10',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 11,
      name: 'Example Treadmill 11',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 12,
      name: 'Example Treadmill 12',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 13,
      name: 'Example Treadmill 13',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
    {
      id: 14,
      name: 'Example Treadmill 14',
      imgUrl: '/images/treadmill-example.png',
      price: 999.99,
      description:
        'The StrideFlex 5000 is a compact, foldable treadmill with a quiet motor and adjustable incline. It tracks your speed, distance, and calories, and connects to fitness apps via Bluetooth. Perfect for home use.',
    },
  ])

  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'User 1',
      email: 'example1@gmail.com',
      password: 'Qwer1234',
      phone: '0211231234',
      isAdmin: true,
    },
    {
      id: 2,
      name: 'User 2',
      email: 'example2@gmail.com',
      password: 'Qwer1234',
      phone: '0211231234',
      isAdmin: false,
    },
  ])

  await knex('orders').del()
  await knex('orders').insert([
    {
      id: 1,
      date: 'today',
      userId: 2,
    },
  ])

  await knex('items').del()
  await knex('items').insert([
    {
      orderId: 1,
      productId: 1,
      quantity: 3,
    },
  ])
}
