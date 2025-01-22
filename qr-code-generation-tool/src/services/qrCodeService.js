import QRCode from 'qrcode';

const qrCodeService = {
    generateQRCode: async (url, options = {}) => {
        try {
            const qrCodeDataUrl = await QRCode.toDataURL(url, options);
            return qrCodeDataUrl;
        } catch (error) {
            console.error('Error generating QR code:', error);
            throw new Error('Could not generate QR code');
        }
    },

    getTemplate: (templateNumber) => {
        const templates = [
            '/templates/template1.png',
            '/templates/template2.png',
            '/templates/template3.png',
            '/templates/template4.png',
            '/templates/template5.png',
        ];
        return templates[templateNumber - 1] || templates[0];
    },

    customizeQRCode: (baseUrl, displayName, reviewText) => {
        const customizedUrl = `${baseUrl}?displayName=${encodeURIComponent(displayName)}&reviewText=${encodeURIComponent(reviewText)}`;
        return customizedUrl;
    }
};

export default qrCodeService;