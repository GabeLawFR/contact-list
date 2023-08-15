import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ContactRow from './ContactRow';

// Component that generates the Contact List table with the data retrieved from the API mapped through the ContactRow component

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  ];

export default function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState(dummyContacts)
    console.log("Num1 Contacts:", contacts)
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch('http://fsa-async-await.herokuapp.com/api/workshop/guests');
                const result = await response.json();
                console.log(result);
                setContacts(result);

            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts()
        console.log("Num2 Contacts:", contacts)
    }, []);

    return (
        <div>
            <table className="table-list">
                <thead>
                    <tr>
                        <th colSpan="3">Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="row-text">
                        <td>Name</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                        {contacts.map((contact) => {
                            return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
                        })}
                </tbody>
            </table>
        </div>
    );

}