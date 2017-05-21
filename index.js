'use strict'

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;

app.on('window-all-close', () => {
    if (process.platform != 'drawin') app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 640
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => mainWindow = null);
});
