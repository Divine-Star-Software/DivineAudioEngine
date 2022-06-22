"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { app, BrowserWindow, nativeImage } = require("electron");
const ipcMain = require("electron").ipcMain;
const { promises: fs } = require("fs");
const path = require("path");
const { session } = require("electron");
const ws = require("ws");
const APP_INIT = () => __awaiter(void 0, void 0, void 0, function* () {
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        //enable headers to enable shared array buffer
        callback({
            responseHeaders: Object.assign(Object.assign({}, details.responseHeaders), { "Cross-Origin-Embedder-Policy": ["require-corp"], "Cross-Origin-Opener-Policy": ["same-origin"] }),
        });
    });
    const mainWindow = yield CreateMainWindow();
    setUpWindowComm(mainWindow);
});
const CreateMainWindow = () => __awaiter(void 0, void 0, void 0, function* () {
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
    mainWindow.webContents.on("will-navigate", (event) => {
        event.preventDefault();
    });
    mainWindow.loadFile("app/index.html");
    return mainWindow;
});
const setUpWindowComm = (mainWindow) => {
    const wsMessageFunctions = {
        "go to dimension": () => {
            mainWindow.loadFile("app/dimension.html");
        },
        "go home": () => {
            mainWindow.loadFile("app/index.html");
        },
    };
    const wss = new ws.WebSocketServer({ port: 8080 });
    wss.on("connection", function connection(ws) {
        ws.on("message", function message(data) {
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
app.whenReady().then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield APP_INIT();
}));
