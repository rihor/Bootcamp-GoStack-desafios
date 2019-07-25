/**
 * base gerada com comando da sequelize-cli
 * yarn sequelize migration:create --name=add-avatar_id-to-users
 *
 * para rodar a migration para o banco de dados
 * yarn sequelize db:migrate
 */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'files',
        key: 'id',
        // altera a imagem do usuário nessa tabela também
        onUpdate: 'CASCADE',
        // define a imagem como null
        onDelete: 'SET NULL',
        allowNull: true,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
