module.exports = (sequelize,dataTypes) => {
    let alias= 'User';
    let cols = {
        id:{
            autoIncrement:true,
            primaryKey:true,
            type:dataTypes.INTEGER
        },
        name:{type:dataTypes.STRING},
        lastname:{type:dataTypes.STRING},
        direction:{type:dataTypes.STRING},
        birth_date:{type:dataTypes.DATE},
        email:{type:dataTypes.STRING},
        password:{type:dataTypes.STRING},
        gender:{type:dataTypes.STRING},
        image:{type:dataTypes.STRING},
        category:{type:dataTypes.INTEGER}
    };
    let config = {
        tableName:'users',
        timestamps:false,
        underscore:true
    };
    const User = sequelize.define(alias,cols,config);

    return User; 
}