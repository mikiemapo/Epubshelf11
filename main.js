const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 840,
    backgroundColor: '#000000',
    title: 'Bookshelf x ElevenReader',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, '..', 'app', 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
