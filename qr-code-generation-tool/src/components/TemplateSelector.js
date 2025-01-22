import React from 'react';

const templates = [
    { id: 1, src: '/templates/template1.png', alt: 'Template 1' },
    { id: 2, src: '/templates/template2.png', alt: 'Template 2' },
    { id: 3, src: '/templates/template3.png', alt: 'Template 3' },
    { id: 4, src: '/templates/template4.png', alt: 'Template 4' },
    { id: 5, src: '/templates/template5.png', alt: 'Template 5' },
];

const TemplateSelector = ({ selectedTemplate, onTemplateSelect }) => {
    return (
        <div className="template-selector">
            <h3>Select a QR Code Template</h3>
            <div className="template-options">
                {templates.map(template => (
                    <div key={template.id} className={`template-option ${selectedTemplate === template.id ? 'selected' : ''}`} onClick={() => onTemplateSelect(template.id)}>
                        <img src={template.src} alt={template.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateSelector;