# QR Code Generation Tool

## Overview
The QR Code Generation Tool is a web application designed for business owners to easily generate QR codes that link directly to their Google Maps review pages. This tool allows users to search for their business listings, confirm details, customize QR codes, and download them for use.

## Features
- **Business Listing Search**: Users can search for their business name or address using an autocomplete feature powered by the Google Places API.
- **QR Code Generation**: Generate a QR code that links to the Google review page of the selected business.
- **Template Selection**: Choose from 5 pre-designed QR code templates to customize the appearance of the QR code.
- **Preview Functionality**: Preview the QR code before downloading.
- **Contact Information**: Users can enter their contact details (phone and email) before downloading the QR code as an image (PNG/JPG).

## Project Structure
```
qr-code-generation-tool
├── public
│   ├── index.html
│   ├── styles
│   │   └── main.css
│   └── templates
│       ├── template1.png
│       ├── template2.png
│       ├── template3.png
│       ├── template4.png
│       └── template5.png
├── src
│   ├── components
│   │   ├── BusinessSearch.js
│   │   ├── QRCodePreview.js
│   │   └── TemplateSelector.js
│   ├── services
│   │   ├── googlePlacesService.js
│   │   └── qrCodeService.js
│   ├── App.js
│   └── index.js
├── package.json
├── .env
├── README.md
└── webpack.config.js
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd qr-code-generation-tool
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add your Google Places API key:
   ```
   REACT_APP_GOOGLE_PLACES_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```
   npm start
   ```

## Technologies Used
- React
- Google Places API
- Webpack
- CSS

## Notes
- Ensure that the API key has the necessary permissions for the Google Places API.
- The project can be expanded with additional features such as user authentication or analytics for QR code scans.

## Contribution
Feel free to contribute to the project by submitting pull requests or reporting issues. Your feedback and suggestions are welcome!