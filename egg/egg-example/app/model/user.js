'use strict';

module.exports = app => {
  const DataTypes = app.Sequelize.DataTypes;

  const User = app.model.define('user', {
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
    last_sign_in_at: {
      allowNull: false,
      type: DataTypes.DATE,
      comment: '最后登录时间',
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
        exclude: [ 'updated_at', 'deleted_at' ],
      },
    },
  });

  User.findByName = async name => {
    return await User.findAll({
      where: {
        name,
      },
    });
  };
  return User;
};
