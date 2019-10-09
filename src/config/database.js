module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'barber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
