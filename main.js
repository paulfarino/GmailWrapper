const {app, BrowserWindow} = require('electron');
var path = require('path')

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768
  });
  mainWindow.loadURL('file://' + __dirname + '/browser.html');
});
