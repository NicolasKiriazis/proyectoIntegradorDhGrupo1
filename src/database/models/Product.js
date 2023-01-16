module.exports = (sequelize, dataTypes) => {

    const alias = 'Product';//con este nombre es como llameremos desde el controller

    const cols = {
        // aca en cols van todos los campos de nuestra tabla products
        //id no hace falta ponerlo es opcional
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            notNull: false,
        },
        description: {
            type: dataTypes.STRING,
            notNull: false,
        },
        price: {
            type: dataTypes.DECIMAL,
            notNull: false,
        },
        discount: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        platform_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        image: {
            type: dataTypes.STRING,
            notNull: false,
        },
        image2: {
            type: dataTypes.STRING,
            notNull: false,
        },
        image3: {
            type: dataTypes.STRING,
            notNull: false,
        },
        image4: {
            type: dataTypes.STRING,
            notNull: false,
        },
        type_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        stock: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        categoryId: {
            type: dataTypes.INTEGER,
            notNull: false,
        }
    }

    const config = {
        tableName: 'products',
        underscored: true,
        timestamps: true,
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, { as: 'product_category', foreignKey: 'category_id' });
        Product.belongsTo(models.Platform, { as: 'product_platform', foreignKey: 'platform_id' });
        Product.belongsTo(models.Platform, { as: 'product_type', foreignKey: 'type_id' });
    }

    return Product;
}