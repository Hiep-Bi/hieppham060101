import React, { useState, useEffect } from 'react';
import { fetchBusinessDetails } from '../services/googlePlacesService';

const BusinessSearch = ({ onBusinessSelect }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.length > 2) {
            setLoading(true);
            fetchBusinessDetails(query)
                .then(results => {
                    setSuggestions(results);
                    setLoading(false);
                })
                .catch(() => {
                    setSuggestions([]);
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    const handleSelect = (business) => {
        onBusinessSelect(business);
        setQuery('');
        setSuggestions([]);
    };

    return (
        <div className="business-search">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for your business..."
            />
            {loading && <div>Loading...</div>}
            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((business) => (
                        <li key={business.place_id} onClick={() => handleSelect(business)}>
                            {business.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BusinessSearch;