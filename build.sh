cd ~/Developer/grapefruitlite/sencha/
sencha app build package
cd ~/Developer/grapefruitlite/sencha/package/
rm -f index.html
cp -rf * ~/Developer/grapefruitlite/www/
cd ~/Developer/grapefruitlite/
cordova prepare
cordova run android