export default (sequelize, DataTypes) => {
  const Foo = sequelize.define(
    'Foo',
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      occupation: {
        allowNull: true,
        type: DataTypes.STRING
      },
      gender: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {}
  );
  return Foo;
};
