#mkzense_smarthome

Built on top of node-oauth2-server

Added google smarthome fulfillment endpoints to
have google assistant talk to smarthome iot devices

>> From node-oauth2
An example mySql implementation of the node-oauth2-server library

Original code from:
https://github.com/Meeks91/nodeJS_OAuth2Example

9/3/2018:
Google home requires fulfillment urls to use SSL.
Updated oauth2_server to use SSL. Certificates from LetsEncrypt.
Instructions for node js SSL setup in google drive/MKZENSE

start server using : sudo node index.js (needs root priviledges)
<< End node-oauth2

9/5/2018:
Added SYNC, QUERY endpoints, tested with postman.
deviceinfo.js holds info on device.

9/7/2018:
Added EXEC endpoint to return a valid SUCCESS reponse
always

To deploy with SSL
sudo MKZENSE_ENABLE_SSL=true node index.js 
or as a daemon
sudo MKZENSE_ENABLE_SSL=true forever start index.js
