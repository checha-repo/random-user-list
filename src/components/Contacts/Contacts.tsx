import { Table } from "react-bootstrap"
import { User } from "../../interfaces/User"
import './Contacts.scss'

const Contacts = (props: {groupedContacts: Array<any>, selectContact: (user: User) => void, selectedContact: User | null}) => {

    const showPane = (user: User) => {
        document.getElementById("wrapper")?.classList.toggle("toggled");
        props.selectContact(user);
    }

    let userList = 
        <div className ="table-container">
            <h1>Contact List</h1>
            <Table className="table table-hover">
                <thead className="table__head">
                    <tr>
                        <th className="table__th">Name</th>
                        <th className="table__th">Email</th>
                        <th className="table__th">Phone</th>
                        <th className="table__th">Address</th>
                    </tr>
                </thead>
                <tbody className="table__tbody">
                    {props.groupedContacts.map((user: User, index) => {
                        return (
                            // Comparing against email because the ID is found in multiple users sometimes
                            <tr key={user.email} onClick={() => showPane(user)} className={(props.selectedContact!== null && user.email===props.selectedContact.email)? 'table-primary' : '' + 'table-row'} >
                                <td className="table-row__td">
                                    <div className="table-row__img" style={{backgroundImage: `url('${user?.picture.thumbnail}')`}}></div>
                                    <div className="table-row__info">
                                        <p className="table-row__name">{user.name.first} {user.name.last}</p>
                                    </div>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.location.street.name}{user.location.street.number}, {user.location.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    return <div>{userList}</div>;
  }

export default Contacts;