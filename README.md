
# ManyPI

A Simple and Cost-Effective Solution for Big Challenges. Designed to even run on a $5 Linux Machine, built on Node.js.

[API Docs 🚀](https://documenter.getpostman.com/view/18849676/2sAXjF8utc)

### Current Features

- **S3 (Blob Storage) ✅**
- **Caching (Key-Value Storage) ✅**
- **More features coming soon** (Feel free to request by opening an issue)

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Anas-Dew/ManyPI.git
   ```
2. **Install dependencies**  
   
   #### Using npm
   ```bash
   npm install
   ```
   #### Using yarn
   ```bash
   yarn install
   ```
   #### Using pnpm
   ```bash
   pnpm install
   ```
   
3. **Run the service**   

   If you're using PM2:
   ```bash
   pm2 start server.js --name ManyPI
   ```

   The service will be available on `localhost:7005`. You can link any domain to this port.

4. **Edit the ENV file**

   Configure the environment variables:
   
   - **S3_UPLOAD_LIMIT**: Set the maximum upload size for each file in MB.
   - **ALLOWED_DOMAINS**: Specify which domains can access the server APIs (e.g., `https://google.com,http://localhost:3000`).
   - **SECRET_KEY**: Set a secret key for securing your application.

   *Note: Do not include spaces or trailing slashes. Follow the example format precisely.*

## Why ManyPI Was Built?

ManyPI was created to simplify the development process for small projects, hobby projects, and for beginners. The goal is to save both money and the hassle of managing multiple accounts across various platforms.
