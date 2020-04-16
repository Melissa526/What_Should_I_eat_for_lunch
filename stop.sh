#!/bin/bash

pm2 stop app.js;
echo 'Stop app.js by pm2';
sleep 1;
sudo service nginx stop;
echo 'Stop nginx server...';
echo 'All Done!';
exit;