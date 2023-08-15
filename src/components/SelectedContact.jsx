import React from "react";
import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';
import CloseButton from './CloseButton'

// Component that displays a table containing info of contact selected by Id using ContactRow and CloseButton component

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContactById() {
            try {
                const response = await fetch(`http://fsa-async-await.herokuapp.com/api/workshop/guests/${selectedContactId}`);
                const contactInfo = await response.json();
                setContact(contactInfo);
                console.log(contactInfo);
            } catch (error) {
                console.error(error);
                setContact(null);
            };
        }
        fetchContactById();
    }, []);


    return(
        <>
            <div>
                {contact !== null ? (
                <table className="table-single">
                    <thead>
                        <tr>
                            <th colSpan="3">Contact Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="row-text">Name:</td>
                            <td className="row-text">Phone:</td>
                            <td className="row-text">Email:</td>
                        </tr>
                        <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                    </tbody>
                </table>
              ) : null}
                  <CloseButton setSelectedContactId={setSelectedContactId}/>
            </div>
        </>
    );
}