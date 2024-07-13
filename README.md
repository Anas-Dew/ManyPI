# ManyPI
A simple & cost-saving solution for big problems. Compatible to run on a $5 Linux Machine, Built on Node.js

Currently solutions for

* S3 (Blob Storage) ✅
* Caching (Key-Value Storage) ✅
* More coming soon (You may request by opening issue)

## Installation
1. Clone
``git clone [add link]``
2. Run ``cd many-pi && npm install``
3. Run the service 

if you're using PM2:
``pm2 start server.js --name ManyPI``

It will listen to ``localhost:7005``
then connect any domain of yours to this port.

4. (Optional) Edit ENV file

You may like to configure env file for
    
    a. S3_UPLOAD_LIMIT, which allows you to set limit for each file upload in MB.
    
    b. ALLOWED_DOMAINS, allow which domains can make requests to the server APIs. For example put: https://google.com,http://localhost:3000
    
    (DO NOT ADD ANY SPACE IN BETWEEN OR A SLASH AT THE END. FOLLOW EXAMPLE FORMAT.)
Done!

## Why I built this?
I felt there shouldn't be a lot of hassle for a small-mid project or a hobby project. And even for someone who's just getting started.

The idea is to save money and hassle of creating multiple account on tons of platforms.

