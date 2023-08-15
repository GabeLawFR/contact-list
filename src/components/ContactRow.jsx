// Component to generate row with data from the API


export default function ContactRow({ setSelectedContactId, contact }) {
    return (
        <tr onClick={() => {
            setSelectedContactId(contact.id)}}
            className="contact-row"
            >
            <td className="row-data">{contact.name}</td>
            <td className="row-data">{contact.email}</td>
            <td className="row-data">{contact.phone}</td>
        </tr>
    );
}