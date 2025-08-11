const { default: mongoose } = require('mongoose');
const app = require('./app');
const { MONGODB_URI, PORT } = require('./utils/config');

console.log("connecting to database");

mongoose.connect(MONGODB_URI)

    .then(() => {
        console.log('connected to database');

        console.log("connecting to server.....................");

        app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
    }
    )

    .catch((err) => {

        console.log(` error connecting to database ${err.message}`);
    })

