module.exports = (sequelize, dataTypes) => {
    const alias = 'Type';

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
        tableName: 'product_type',
        underscored: true,
        timestamps: false,
        paranoid: false
    }

    const Type = sequelize.define(alias, cols, config);

    Type.associate = models => {
        Type.hasMany(models.Product, { as: 'products', foreignKey: 'type_id' });
    }

    return Type;
}