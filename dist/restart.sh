#!/bin/bash

pm2 delete appjs;
pm2 start /home/ec2-user/경로 -i 0 --name app.js;
echo 'start node_yun by pm2';
sleep 1;
sudo service nginx start;
echo 'Start nginx server...';
echo 'All Done!';
exit;