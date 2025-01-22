import React from 'react';

const QRCodePreview = ({ qrCodeData, selectedTemplate }) => {
    return (
        <div className="qr-code-preview">
            <h2>QR Code Preview</h2>
            {qrCodeData ? (
                <div className={`qr-code-template template-${selectedTemplate}`}>
                    <img src={qrCodeData} alt="Generated QR Code" />
                </div>
            ) : (
                <p>No QR Code generated yet.</p>
            )}
        </div>
    );
};

export default QRCodePreview;