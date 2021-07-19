// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Image extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Image.init({
//     toyId: DataTypes.INTEGER,
//     url: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Image',
//   });
//   return Image;
// };


"use strict";

const { image } = require("faker");

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define( "Image",
    {
      toyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Toys",
          },
        },
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Image.associate = function (models) {
    // associations can be defined here
  };
  Image.add = async function({ toyId, url }) {
    const image = await Image.create({
      toyId,
      url
    })
    return await Image.findByPk(image.id)
  }

  Image.delete = async function({imageId}) {
    const image = Image.findByPk(imageId)
    if (!image) throw new Error('Image does not exits!!')

    await Image.destroy({
      where: {id : imageId}
    })
    return image.id
  }


  return Image;
};
