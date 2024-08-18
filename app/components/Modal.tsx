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
        left: '50%',
        top: '50%',
        padding: '20px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '8px',
        transform: 'translate(-50%, -50%)',
    };

    const modalContentStyle: React.CSSProperties = {
        backgroundColor: 'white',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '80%',
        borderRadius: '5px',
    };

    const overlayStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
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
        <>
        <div style={overlayStyle} onClick={onClose} />
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
        </>
    );
};

export default Modal;
