import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalStyle: React.CSSProperties = {
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        zIndex: 1000,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    };

    const modalContentStyle: React.CSSProperties = {
        backgroundColor: 'white',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%',
        borderRadius: '5px',
    };

    const closeModalButtonStyle: React.CSSProperties = {
        backgroundColor: '#0070f3',
        color: 'white',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
    };

    return (
        <div style={modalStyle}>
            <div style={modalContentStyle}>
                <h2>Booking Form</h2>
                <p>Please fill in your booking details.</p>
                {/* Form or other content goes here */}
                <button onClick={onClose} style={closeModalButtonStyle}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
