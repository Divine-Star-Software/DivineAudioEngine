const { app, BrowserWindow, nativeImage } = require("electron");
const ipcMain: Electron.IpcMain = require("electron").ipcMain;
const { promises: fs } = require("fs");
const path = require("path");
const { session } = require("electron");
const ws = require("ws");

const APP_INIT = async () => {
  session.defaultSession.webRequest.onHeadersReceived(
    (details: any, callback: any) => {
      //enable headers to enable shared array buffer
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          "Cross-Origin-Embedder-Policy": ["require-corp"],
          "Cross-Origin-Opener-Policy": ["same-origin"],
        },
      });
    }
  );
  const mainWindow = await CreateMainWindow();
  setUpWindowComm(mainWindow);
};

const CreateMainWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: true,
    fullscreen: false,
    title: "Divine Audio Engine",

    webPreferences: {
      nodeIntegration: true,
      autoplayPolicy: "no-user-gesture-required",
      nodeIntegrationInWorker: false,
      contextIsolation: false,
      devTools: true,
      spellcheck: false,
      backgroundThrottling: false,
    },
    backgroundColor: "#000000",
  });

  mainWindow.menuBarVisible = false;

  mainWindow.webContents.on("will-navigate", (event: any) => {
    event.preventDefault();
  });

  mainWindow.loadFile("app/index.html");

  return mainWindow;
};

const setUpWindowComm = (
  mainWindow: Electron.CrossProcessExports.BrowserWindow
) => {
  const wsMessageFunctions = {
    "go to dimension": () => {
      mainWindow.loadFile("app/dimension.html");
    },
    "go home": () => {
      mainWindow.loadFile("app/index.html");
    },
  };

  const wss = new ws.WebSocketServer({ port: 8080 });
  wss.on("connection", function connection(ws: any) {
    ws.on("message", function message(data: any) {
      console.log("received: %s", data);
      //@ts-ignore
      if (wsMessageFunctions[data]) {
        //@ts-ignore
        wsMessageFunctions[data]();
      }
    });

    //ws.send("something");
  });
};

app.commandLine.appendSwitch("--disable-gpu-process-crash-limit");
app.disableDomainBlockingFor3DAPIs();
app.commandLine.appendSwitch("js-flags", "--max-old-space-size=10000");

app.whenReady().then(async () => {
  await APP_INIT();
});
