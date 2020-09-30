const electron = require('electron');
const url = require('url')
const path = require('path')
const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        width: 800,
        height: 620,
    })
    mainWindow.setTitle("Who's Better")
    mainWindow.loadURL(url.format({
        pathname: path.join('https://whosbetter.netlify.com'),
    }))

    const mainMenu = Menu.buildFromTemplate(menuItems);
    Menu.setApplicationMenu(mainMenu);
})

const menuItems = [
    {
        label: 'File',
        submenu: [{
            label: 'Quit',
            accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
            click() {
                app.quit()
            }
        }]
    },
    {
        label: 'Results',
        submenu: [{
            label: 'Open',
            click(){
                mainWindow.loadURL('https://whosbetter.netlify.com/rankings')
            }
        }]
    }
]
