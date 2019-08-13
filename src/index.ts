require('dotenv').load({ silent: true });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

import config from './config';
import { FormActions } from './FormActions';

const app = express();
console.log('Starting form actions server');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: config.maxBodySize }));
app.use(bodyParser.json({ limit: config.maxBodySize }));

new FormActions(app, config);

app.listen(config.port);

console.log(`Listening on port ${config.port}`);
