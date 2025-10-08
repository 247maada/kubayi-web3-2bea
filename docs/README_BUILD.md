# BUILD — "The Mine in the Mind" Web3 System

## Overview
BUILD is a Web3-powered education and empowerment platform founded by **Lebogang Lesley Kubayi**.  
It connects eBook sales, donations, and community learning through blockchain (Solana) and South African payments (PayFast).

Each book purchase supports mining education and BUILD projects in Tiyani village.

---

## 🔐 File Security (S3)
We use **Amazon S3** (or Google Cloud Storage) to store the protected book files.  
Each buyer receives a **presigned, time-limited download link** after verification.

### Setup Steps:
1. Create an AWS S3 bucket (region: `af-south-1` recommended).  
2. Upload the protected files inside `protected/` folder:
   - `mine-in-the-mind.pdf`
   - `mine-in-the-mind-audiobook.mp3`
3. In Vercel, open Project → Settings → Environment Variables:
# BUILD — "The Mine in the Mind" Web3 System

## Overview
BUILD is a Web3-powered education and empowerment platform founded by **Lebogang Lesley Kubayi**.  
It connects eBook sales, donations, and community learning through blockchain (Solana) and South African payments (PayFast).

Each book purchase supports mining education and BUILD projects in Tiyani village.

---

## 🔐 File Security (S3)
We use **Amazon S3** (or Google Cloud Storage) to store the protected book files.  
Each buyer receives a **presigned, time-limited download link** after verification.

### Setup Steps:
1. Create an AWS S3 bucket (region: `af-south-1` recommended).  
2. Upload the protected files inside `protected/` folder:
   - `mine-in-the-mind.pdf`
   - `mine-in-the-mind-audiobook.mp3`
3. In Vercel, open Project → Settings → Environment Variables:
<form action="https://www.payfast.co.za/eng/process" method="post">
  <input type="hidden" name="merchant_id" value="YOUR_ID" />
  <input type="hidden" name="merchant_key" value="YOUR_KEY" />
  <input type="hidden" name="amount" value="50.00" />
  <input type="hidden" name="item_name" value="BUILD Donation" />
  <button type="submit" class="btn btn-primary">Donate ZAR</button>
</form>
