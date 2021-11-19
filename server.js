
const app = require('./app');

const port = process.env.PORT || 5000;
module.exports = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
