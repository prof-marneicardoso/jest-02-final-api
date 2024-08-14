'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed Users
    await queryInterface.bulkInsert('Users', [
      { full_name: 'Carlos Eduardo', email: 'carlos.eduardo@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Lucas Silva', email: 'lucas.silva@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Joyce Monteiro', email: 'joyce.monteiro@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Gustavo Fontenele', email: 'gustavo.fontenele@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Ismael Monteiro', email: 'ismael.monteiro@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Jefferson Fortes', email: 'jefferson.fortes@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Gabriel Caetano', email: 'gabriel.caetano@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Ranyer Paiva', email: 'ranyer.paiva@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Eliel Silva', email: 'eliel.silva@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Arthur Macedo', email: 'arthur.macedo@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Samuel Meneses', email: 'samuel.meneses@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Marcio Oliveira', email: 'marcio.oliveira@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Emanuel Santos', email: 'emanuel.santos@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Brenna Xavier', email: 'brenna.xavier@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { full_name: 'Gustavo Lima', email: 'gustavo.lima@example.com', password: 'password123', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});

    // Seed Addresses
    const users = await queryInterface.sequelize.query(
      'SELECT id from Users;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Addresses', [
      { user_id: users[0].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62701', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[1].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62702', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[2].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62703', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[3].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62704', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[4].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62705', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[5].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62706', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[6].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62707', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[7].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62708', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[8].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62709', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, street: 'Av. Washington Soares', number: '3663', city: 'Fortaleza', state: 'CE', zip_code: '62710', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});

    // Seed Categories
    await queryInterface.bulkInsert('Categories', [
      { name: 'Eletronicos', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Livros', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Roupas', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Eletrodomésticos', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Brinquedos', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Mercearia', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Esportivos', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Automóveis', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Saúde', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Beleza', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});

    // Seed Products
    const categories = await queryInterface.sequelize.query(
      'SELECT id from Categories;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Products', [
      { name: 'Notebook', description: 'Alta performance', price: 999.99, stock: 50, category_id: categories[0].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Smartphone', description: 'Último modelo', price: 699.99, stock: 30, category_id: categories[0].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Tênis', description: 'Confortável para correr', price: 19.99, stock: 100, category_id: categories[1].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'T-shirt', description: 'Malha de algodão', price: 14.99, stock: 200, category_id: categories[2].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Microondas', description: 'Compacto e potente', price: 89.99, stock: 25, category_id: categories[3].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Carro de brinquedo', description: 'Carrinho de controle remoto', price: 29.99, stock: 50, category_id: categories[4].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Pão', description: 'Pão fresco diário', price: 2.99, stock: 300, category_id: categories[5].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Bola de futebol', description: 'Bola padrão para futebol', price: 24.99, stock: 40, category_id: categories[6].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Bateria de carro', description: 'Bateria de 12V', price: 89.99, stock: 20, category_id: categories[7].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { name: 'Shampoo', description: 'Shampoo Anticaspa', price: 9.99, stock: 75, category_id: categories[8].id, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});

    // Seed Orders
    const addresses = await queryInterface.sequelize.query(
      'SELECT id from Addresses;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Orders', [
      { user_id: users[0].id, address_id: addresses[0].id, status: 'pending', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[1].id, address_id: addresses[1].id, status: 'completed', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[2].id, address_id: addresses[2].id, status: 'shipped', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[3].id, address_id: addresses[3].id, status: 'pending', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[4].id, address_id: addresses[4].id, status: 'completed', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[5].id, address_id: addresses[5].id, status: 'shipped', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[6].id, address_id: addresses[6].id, status: 'pending', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[7].id, address_id: addresses[7].id, status: 'completed', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[8].id, address_id: addresses[8].id, status: 'shipped', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { user_id: users[9].id, address_id: addresses[9].id, status: 'pending', createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});

    // Seed OrderItems
    const orders = await queryInterface.sequelize.query(
      'SELECT id from Orders;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    const products = await queryInterface.sequelize.query(
      'SELECT id from Products;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('OrderItems', [
      { order_id: orders[0].id, product_id: products[0].id, quantity: 1, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[1].id, product_id: products[1].id, quantity: 2, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[2].id, product_id: products[2].id, quantity: 3, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[3].id, product_id: products[3].id, quantity: 4, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[4].id, product_id: products[4].id, quantity: 5, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[5].id, product_id: products[5].id, quantity: 6, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[6].id, product_id: products[6].id, quantity: 7, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[7].id, product_id: products[7].id, quantity: 8, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[8].id, product_id: products[8].id, quantity: 9, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
      { order_id: orders[9].id, product_id: products[9].id, quantity: 10, createdAt: Sequelize.fn('now'), updatedAt: Sequelize.fn('now') },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderItems', null, {});
    await queryInterface.bulkDelete('Orders', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
    await queryInterface.bulkDelete('Addresses', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  }
};
