import React from "react";
import { useState, useEffect } from 'react';
import SingleContactRow from './SingleContactRow';
import CloseButton from './CloseButton'

// Component that displays a table containing info of contact selected by Id using ContactRow and CloseButton component

export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContactById() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
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
                            <th colSpan="5">Contact Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="row-text">Username</td>
                            <td className="row-text">Name</td>
                            <td className="row-text">Phone</td>
                            <td className="row-text">Email</td>
                            <td className="row-text">Website</td>
                        </tr>
                        <SingleContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
                        {selectedContactId && (
                                <tr>

                                </tr>
                            )}
                    </tbody>
                </table>
              ) : null}
                  <CloseButton setSelectedContactId={setSelectedContactId}/>
            </div>
        </>
    );
}