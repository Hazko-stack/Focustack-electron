# Pomodoro Timer - Electron App

Aplikasi Pomodoro Timer yang cantik dan fungsional dibangun dengan Electron.js. Aplikasi ini membantu Anda meningkatkan produktivitas dengan teknik Pomodoro - bekerja selama 25 menit, kemudian istirahat sejenak.

## Fitur

- ⏰ Timer 25 menit dengan progress visual yang menarik
- 🔔 Notifikasi suara dan desktop ketika waktu habis
- ⌨️ Kontrol keyboard shortcuts
- 🎯 Interface yang simpel dan elegan
- 📱 Always on top option untuk tetap terlihat
- 🔄 Fungsi start, pause, dan reset
- 📋 Menu bar dengan berbagai opsi

## Screenshot

Aplikasi ini memiliki desain yang indah dengan gradient background dan circular progress indicator yang menunjukkan waktu tersisa.

## Instalasi



## Build untuk Production

### Build untuk Windows
```bash
npm run build-win
```

### Build untuk macOS
```bash
npm run build-mac
```

### Build untuk Linux
```bash
npm run build-linux
```

### Build untuk semua platform
```bash
npm run build
```

File executable akan tersedia di folder `dist/`.

## Keyboard Shortcuts

- **Space**: Start/Resume timer
- **Ctrl+P**: Pause timer
- **Ctrl+R**: Reset timer
- **Ctrl+N**: New session (reset)
- **Ctrl+Q**: Quit application (Windows/Linux)
- **Cmd+Q**: Quit application (macOS)

## Menu Bar

Aplikasi ini menyediakan menu bar dengan opsi:

### File
- New Session
- Exit

### Timer
- Start/Resume
- Pause
- Reset

### View
- Reload
- Toggle Developer Tools
- Zoom controls
- Toggle Fullscreen

### Window
- Minimize
- Close
- Always on Top

## Struktur Project

```
pomodoro-electron/
├── package.json          # Dependencies dan build configuration
├── main.js              # Main process Electron
├── preload.js           # Preload script untuk security
├── renderer.html        # UI aplikasi
├── assets/              # Icon dan asset lainnya
│   ├── icon.png
│   ├── icon.ico
│   └── icon.icns
└── dist/               # Built applications (setelah build)
```

## Teknologi yang Digunakan

- **Electron.js**: Framework untuk desktop app
- **HTML/CSS/JavaScript**: UI dan logic
- **Web Audio API**: Untuk sound notification
- **Google Fonts**: Typography (Fira Sans)

## Kustomisasi

Anda dapat mengkustomisasi:

1. **Durasi timer**: Edit nilai default di `renderer.html`
2. **Warna dan styling**: Modifikasi CSS di `renderer.html`
3. **Icon aplikasi**: Ganti file di folder `assets/`
4. **Window size**: Ubah di `main.js` pada `createWindow()`

## Fitur Keamanan

Aplikasi ini menggunakan best practices Electron:
- Context Isolation enabled
- Node Integration disabled
- Preload script untuk secure IPC
- Prevent new window creation

## Troubleshooting

### Masalah Audio
Jika suara notification tidak bekerja, pastikan sistem Anda mendukung Web Audio API.

### Build Issues
- Pastikan semua dependencies terinstall dengan benar
- Untuk build cross-platform, Anda mungkin perlu additional tools

### Permission Issues
Di beberapa sistem, Anda mungkin perlu memberikan permission untuk:
- Notifications
- Audio playback

## Kontribusi

Silakan buat issue atau pull request jika Anda menemukan bug atau ingin menambah fitur.

## Lisensi

MIT License - silakan gunakan untuk project personal atau komersial.

---

**Selamat menggunakan aplikasi Pomodoro Timer! Tingkatkan produktivitas Anda dengan teknik Pomodoro yang terbukti efektif.**