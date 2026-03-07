# Setup Deployment ke VPS

## Prerequisites di VPS

### 1. Install Node.js & PM2

```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Setup PM2 startup
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u dev --hp /home/dev
```

### 2. Clone Repository

```bash
cd /home/dev
git clone https://github.com/zaidrobbani/ajisaka-2026.git ajisaka-26
cd ajisaka-26
npm install
npm run build
```

### 3. Start dengan PM2

```bash
pm2 start npm --name "ajisaka-26" -- start
pm2 save
```

### 4. Setup Nginx (jika belum)

```bash
sudo nano /etc/nginx/sites-available/ajisaka.bccdev.id
```

Isi dengan:

```nginx
server {
    listen 80;
    server_name ajisaka.bccdev.id;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/ajisaka.bccdev.id /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Setup SSL (Optional)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ajisaka.bccdev.id
```

## Setup GitHub Secrets

Pergi ke: `https://github.com/zaidrobbani/ajisaka-2026/settings/secrets/actions`

Tambahkan secret:

- Name: `SSH_PRIVATE_KEY`
- Value: Isi dengan private key SSH kamu

### Cara mendapatkan SSH Private Key:

Di local machine kamu:

```bash
# Generate SSH key jika belum punya
ssh-keygen -t ed25519 -C "github-actions-ajisaka"

# Copy private key
cat ~/.ssh/id_ed25519
```

Copy hasil output, paste ke GitHub Secret `SSH_PRIVATE_KEY`.

Lalu copy public key ke VPS:

```bash
# Copy public key
cat ~/.ssh/id_ed25519.pub

# Di VPS, tambahkan ke authorized_keys
ssh dev@proxy.bccdev.id -p 11013
echo "PASTE_PUBLIC_KEY_DISINI" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

## Testing Deployment

1. Commit & push ke main branch
2. Cek GitHub Actions: https://github.com/zaidrobbani/ajisaka-2026/actions
3. Setelah selesai, cek website: https://ajisaka.bccdev.id

## Troubleshooting

### Jika deployment gagal:

1. **Check VPS logs:**

```bash
ssh dev@proxy.bccdev.id -p 11013
cd /home/dev/ajisaka-26
pm2 logs ajisaka-26
```

2. **Check PM2 status:**

```bash
pm2 status
pm2 restart ajisaka-26
```

3. **Check Nginx:**

```bash
sudo nginx -t
sudo systemctl status nginx
```

4. **Manual deployment test:**

```bash
cd /home/dev/ajisaka-26
git pull
npm ci
npm run build
pm2 restart ajisaka-26
```

## Environment Variables (jika diperlukan)

Buat file `.env.production` di VPS:

```bash
cd /home/dev/ajisaka-26
nano .env.production
```

Isi dengan environment variables yang diperlukan, lalu restart:

```bash
pm2 restart ajisaka-26
```
