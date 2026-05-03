
# Luxury Taxi Landing Page (Next.js)

This app now runs on Next.js with an integrated API route for booking enquiry emails.

## Running the code

Run `npm i` to install dependencies.

Run `npm run dev` to start the development server.

## Email API

Submit booking enquiries to:

- `POST /api/send-email`

Required headers and body:

- `x-api-key: <NEXT_PUBLIC_API_KEY or API_KEY>`
- JSON body: `{ "name": "...", "message": "..." }`

Environment variables used by the API route:

- `EMAIL`
- `PASSWORD`
- `MAIL_TO`
- `API_KEY` (or `NEXT_PUBLIC_API_KEY`)
  
