module.exports = (sequelize, dataTypes) => {
    const alias = 'Platform';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            notNull: false,
        },
    }

    const config = {
        tableName: 'product_platform',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const Platform = sequelize.define(alias, cols, config);

    Platform.associate = models => {
        Platform.hasMany(models.Product, {as: 'products', foreignKey: 'platform_id'});
    }

    return Platform;
}