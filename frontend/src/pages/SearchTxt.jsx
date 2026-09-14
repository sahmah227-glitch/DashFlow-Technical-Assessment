import { useState } from 'react';

export const SearchTxt = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const getHighlightedText = (text, highlight) => {
        if (!highlight) {
            return { content: <span>{text}</span>, found: true };
        }
        const escapedHighlight = highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(${escapedHighlight})`, 'gi');
        const parts = text.split(regex);
        let found = false;
        const content = parts.map((part, index) => {
            if (part.toLowerCase() === highlight.toLowerCase()) {
                found = true;
                return <mark key={index}>{part}</mark>;
            }
            return <span key={index}>{part}</span>;
        });
        return { content, found };
    };

    const { content, found } = getHighlightedText(paragraph, searchTerm);

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f9fafb',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '60px 20px',
            fontFamily: 'Segoe UI, sans-serif',
        }}>
            <div style={{ width: '100%', maxWidth: '680px' }}>

           
                <div style={{
                    backgroundColor: '#fff',
                    border: '1.5px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '32px',
                    boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                }}>

                    <h2 style={{
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '6px',
                        marginTop: 0,
                    }}>
                        Search
                    </h2>

                    <p style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        marginBottom: '28px',
                        marginTop: 0,
                    }}>
                        اكتب كلمة للبحث عنها داخل النص
                    </p>

                    {/* Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            fontSize: '1rem',
                            fontFamily: 'Segoe UI, sans-serif',
                            border: '1.5px solid #d1d5db',
                            borderRadius: '8px',
                            outline: 'none',
                            color: '#111827',
                            backgroundColor: '#f9fafb',
                            boxSizing: 'border-box',
                            marginBottom: '20px',
                        }}
                        onFocus={e => e.target.style.borderColor = '#3b82f6'}
                        onBlur={e => e.target.style.borderColor = '#d1d5db'}
                    />

                    {/* Status */}
                    {searchTerm && (
                        <p style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            color: found ? '#16a34a' : '#dc2626',
                            marginBottom: '16px',
                            marginTop: 0,
                        }}>
                            {found ? '✓ Found' : '✗ Not Found'}
                        </p>
                    )}

                    {/* Paragraph */}
                    <p style={{
                        fontSize: '1rem',
                        color: '#374151',
                        lineHeight: '1.85',
                        margin: 0,
                    }}>
                        {content}
                    </p>

                </div>

            </div>
        </div>
    );
};
