const express = require('express');
const cors = require('cors');
const { dbConection } = require('../db/config');

class Server {
    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());
        this.conectDatabase();
        this.app.use('/api/users', require('../routes/users.routes'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log("Server is running in PORT", process.env.PORT);
        });
    }

    async conectDatabase() {
        await dbConection();
    }
}

module.exports = Server;