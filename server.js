import { DEBUG_MODE, APP_PORT } from "./app/config/index.js";
import { connectMonogoDB } from "./app/config/mongoose.js";
import app from "./app/app.js";


connectMonogoDB();

app.listen(APP_PORT, () => {
  DEBUG_MODE && console.log(`App is listening on port ${APP_PORT}`);
});