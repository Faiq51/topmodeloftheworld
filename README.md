# Top Model of the World Australia - Website Backend

This repository contains the core files for the **Top Model of the World Australia** registration and payment system.

## 🚀 Overview
This project handles the contestant registration flow, integrating a secure payment authorization layer using **Stripe Checkout**.

## 🛠 Features
* **Secure Payment Portal:** Custom `payment-authorization.html` that bridges the registration form to Stripe.
* **Live Mode Integration:** Fully configured for Australian Dollar (AUD) transactions.
* **Automatic Redirects:** Post-payment redirection to a branded `success.html` page.
* **Automated Receipts:** Integrated with Stripe's notification system to send branded customer receipts.

## 💳 Payment Configuration
- **Processor:** Stripe
- **Currency:** AUD
- **Standard Registration Fee:** $300.00
- **Test Mode:** Verified via $1.00 "Penny Test" (Jan 2026).

## 📂 File Structure
- `payment-authorization.html`: The logic for handling the Stripe redirect.
- `success.html`: The landing page for contestants after successful payment.
- `index.html`: The main entry point for the registration form.

## 📝 Maintenance Notes
To update the registration fee, generate a new **Payment Link** in the Stripe Dashboard and update the `stripeLink` variable in `payment-authorization.html`.
