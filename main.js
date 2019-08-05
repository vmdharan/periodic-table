const { app, BrowserWindow } = require('electron');

let win

function createWindow() {
    win = new BrowserWindow({
        width: 1800,
        height: 1200,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('Index.html');

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
