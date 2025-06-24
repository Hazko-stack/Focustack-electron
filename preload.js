const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', title, body),
  setTitle: (title) => ipcRenderer.invoke('set-title', title),
  
  // Listen for menu commands
  onStartTimer: (callback) => ipcRenderer.on('start-timer', callback),
  onPauseTimer: (callback) => ipcRenderer.on('pause-timer', callback),
  onResetTimer: (callback) => ipcRenderer.on('reset-timer', callback),
  
  // Remove listeners
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel)
});