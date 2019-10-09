/* eslint-disable no-console */
import app from './app';

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`The server is running on PORT ${port}`);
  console.log("Hit 'ctrl + c' to shut down");
});
