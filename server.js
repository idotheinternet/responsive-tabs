const express = require('express'),
server = express();
server.use(express.static('./dist/responsive-tabs'));
server.listen(process.env.PORT || 8080);