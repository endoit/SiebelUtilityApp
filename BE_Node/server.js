const express = require("express");
const cors = require("cors");
const app = express();

//change these
const corsOptions = {
  origin: "http://localhost:8083"
}
const PORT = 3001;

app.use(cors(corsOptions));
app.use(express.json({ limit: "40mb" }));
app.use(express.urlencoded({ limit: "40mb", extended: true, parameterLimit: 150000 }));

require("./src/routes/profiles.routes")(app);
require("./src/routes/commands.routes")(app);
require("./src/routes/zookeeper.routes")(app);
require("./src/routes/snapshots.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
