module.exports = (sequelize, DataTypes) => {
      const unions = sequelize.define('unions', {
            upazilla_id: {
                  type: DataTypes.INTEGER
            },
            name: {
                  type: DataTypes.STRING,
            },
            bn_name: {
                  type: DataTypes.STRING,
            },
            url: {
                  type: DataTypes.STRING,
            }
      }, {
            timestamps: false
      });

      return unions;
}
