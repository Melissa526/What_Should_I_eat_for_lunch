#!/bin/bash

pm2 reload app.js;
echo 'Reload pm2 demon..';
sleep 1;
sudo service ngix restart;
echo 'restart nginx restart';
echo 'All Done!';
exit;
