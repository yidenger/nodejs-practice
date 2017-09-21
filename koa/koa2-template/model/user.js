

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      comment: '自增id',
    },
    login: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: 'no',
      comment: '是否登录',
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(30),
      defaultValue: '',
      comment: '姓名',
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(32),
      defaultValue: '',
      comment: '密码',
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
      comment: '年龄',
    },
  }, {
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'user',
    comment: '用户表',
    defaultScope: {
      attributes: {
        exclude: ['updated_at', 'deleted_at'],
      },
    },
  });

  User.findByName = async (name) => await User.findAll({
      where: {
        name,
      },
      raw: false,
    });

  User.prototype.getUserInfo = function () {
    return `My name is ${this.name}, i am ${this.age} old.`;
  };
  return User;
};
