// Component to ease displaying more info about the selected contact, more rows and data are to be displayed by this component, as opposed to the ContactRow one which only shows Name, Address and Email

export default function SingleContactRow({ setSelectedContactId, contact }) {
    return (
        <tr onClick={() => {
            setSelectedContactId(contact.id)}}
            className="contact-row"
            >
            <td className="row-data">{contact.username}</td>
            <td className="row-data">{contact.name}</td>
            <td className="row-data">{contact.email}</td>
            <td className="row-data">{contact.phone}</td>
            <td className="row-data">{contact.website}</td>
        </tr>
    );
}