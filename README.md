# Bookshelf x ElevenReader (Zero-Build GitHub Installer + iPhone PWA)

## 1. Get Your Windows `.exe` Installer (Like Thorium Reader)
1. Unzip this folder on your Surface Pro 7.
2. Upload all files (including the `.github` folder) to a GitHub repo.
3. Wait ~2 minutes, open the **Actions** tab in your GitHub repo, click the latest **Build Bookshelf Installer & Deploy Web** run, and download **`Bookshelf-Reader-Windows-Installer`** (`.exe`). Double-click to install!

## 2. Open on iPhone / Tablet
In your GitHub repo go to **Settings -> Pages**, set **Source** to **GitHub Actions**, and open the live `github.io` URL in Safari on iPhone (**Share -> Add to Home Screen**).

## 3. Sync Across Devices (Surface Pro 7 <-> iPhone)
1. Create a free project at https://supabase.com and run `supabase/schema.sql` in **SQL Editor**.
2. Tap the **Cloud** icon in the app header, enter the same **Personal Sync User ID** on both devices, paste your Supabase URL & Anon Key, and use **Push to Cloud** / **Pull from Cloud**.
