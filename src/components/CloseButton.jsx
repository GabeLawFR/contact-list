import React from 'react';

// Component to generate close button to revert to ContactList component from SelectedContact

export default function CloseButton({ setSelectedContactId }) {
    return(
        <button className='close-button' 
        onClick={() => setSelectedContactId(null)}
        >Go Back To Contact List
        </button>
    );
}