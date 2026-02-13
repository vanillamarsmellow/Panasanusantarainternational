
# Panasa Global Export - Web App

## Cara Menambahkan Katalog Produk

Website ini sudah dikonfigurasi untuk menampilkan katalog produk dalam format PDF. Agar tombol "Download Catalog" berfungsi, ikuti langkah berikut:

1. Siapkan file PDF katalog Anda.
2. Ubah nama file tersebut menjadi **`Panasa_Commodities_Catalog.pdf`**.
3. Masukkan file tersebut ke dalam folder **`public/`** di root project ini.

Struktur folder akan terlihat seperti ini:
```
/project-root
  /public
    Panasa_Commodities_Catalog.pdf  <-- Masukkan di sini
    vite.svg
  /src
  index.html
  package.json
  ...
```

## Cara Menjalankan Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Jalankan server development:
   ```bash
   npm run dev
   ```
