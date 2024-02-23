const path = require('path')
const os = require('os')
const config = require(path.join(process.cwd(),"app","config","config"))
if(!config || !config.speech || !config.speech.keyFilename || !config.speech.model || !config.speech.language){
  throw "Configuration Error! Setup your config file";
}

const Sonus = require('sonus')
const speech = require('@google-cloud/speech')({
  projectId: config.speech.projectId,
  keyFilename: path.join(process.cwd(), 'app','config', config.speech.keyFilename)
})

//next

const electron = require('electron');
const spawn = require('child_process').spawn
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function(){
	mainWindow = new BrowserWindow({
		width: 800,
		height: 480
	})

	mainWindow.loadURL('file://'+__dirname+'/app/index.html')
