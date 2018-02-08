import express from 'express';
import webpack from 'webpack';
import webconfig from './webpack.config.dev';
import config from './config';
import {carousel} from './carousel';
import path from 'path';

/* eslint-disable no-console */

const app = express();
const compiler = webpack(webconfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webconfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.set('view engine', 'ejs');

app.get('/',  (req, res) => {
  res.render('index');
});

app.get('/carousel', (req, res)=> {
  res.send(carousel);
});

app.listen(config.port, function listenHandler(){
  console.info(`Running on ${config.port}`);
});