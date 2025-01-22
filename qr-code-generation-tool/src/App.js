import React, { useState } from 'react';
import BusinessSearch from './components/BusinessSearch';
import QRCodePreview from './components/QRCodePreview';
import TemplateSelector from './components/TemplateSelector';
import { generateQRCode } from './services/qrCodeService';

const App = () => {
    const [businessDetails, setBusinessDetails] = useState(null);
    const [qrCodeData, setQrCodeData] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [contactDetails, setContactDetails] = useState({ phone: '', email: '' });

    const handleBusinessSelect = (details) => {
        setBusinessDetails(details);
        setQrCodeData(`https://search.google.com/local/writereview?placeid=${details.place_id}`);
    };

    const handleTemplateSelect = (template) => {
        setSelectedTemplate(template);
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactDetails({ ...contactDetails, [name]: value });
    };

    const handleDownloadQRCode = () => {
        // Logic to download the QR code as an image
        generateQRCode(qrCodeData, selectedTemplate, contactDetails);
    };

    return (
        <div className="app">
            <h1>QR Code Generation Tool</h1>
            <BusinessSearch onBusinessSelect={handleBusinessSelect} />
            {businessDetails && (
                <>
                    <TemplateSelector onTemplateSelect={handleTemplateSelect} />
                    <QRCodePreview qrCodeData={qrCodeData} selectedTemplate={selectedTemplate} />
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Your Phone"
                            value={contactDetails.phone}
                            onChange={handleContactChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={contactDetails.email}
                            onChange={handleContactChange}
                        />
                        <button onClick={handleDownloadQRCode}>Download QR Code</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;