const express = require('express');
const config = require('./config/config');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);

const PORT = config.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
