const { DataTypes, INTEGER } = require("sequelize");
const sqldb = require("../services/conectionSQL");

const dataUsers = sqldb.define(
  "dataUsers",
  {
    idUser: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // 36 caracteres
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre es obligatorio",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // email@email.com tiene este formato
        notNull: {
          msg: "El correo es obligatorio",
        },
      },
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "El telefono es obligatorio",
        },
        isNumeric: {
          msg: "El telefono debe ser numerico",
        },
        min: {
          args: [9],
          msg: "El telefono debe tener 9 digitos",
        },
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Debe dejar su consulta",
        },
      },
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updateAt: true,
  }
);

module.exports = dataUsers;
