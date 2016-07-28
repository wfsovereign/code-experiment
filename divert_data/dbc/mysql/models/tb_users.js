module.exports = function (sequelize, DataTypes) {
    return sequelize.define('tb_users', {
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        amap_id: DataTypes.STRING(128),
        ext_wx_id: DataTypes.STRING(128),
        ext_sina_id: DataTypes.STRING(128),
        ext_qq_id: DataTypes.STRING(128),
        nick_name: DataTypes.STRING(128),
        phone: DataTypes.STRING(128),
        email: DataTypes.STRING(128),
        pwd: DataTypes.STRING(128),
        pwd_salt: DataTypes.STRING(128),
        head_url: DataTypes.STRING(256),
        gender: DataTypes.INTEGER(1),
        birthday: DataTypes.DATE,
        occupation: DataTypes.STRING(128),
        place_like_number: DataTypes.STRING(128),
        user_like_number: DataTypes.STRING(128),
        reg_time: DataTypes.DATE,
        type: DataTypes.INTEGER(1)
    });
};
