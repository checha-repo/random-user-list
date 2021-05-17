import { Card } from 'react-bootstrap';
import { Name, User } from '../../interfaces/User';
import './ContactCard.scss'

const ContactCard = (props: {user: User | null}) => {

    const getFullName = (userName: Name) => {
        return `${userName.title} ${userName.first} ${userName.last}`;
    }
    if(props.user === null) {
        return (<></>)
    }
    else {
        return (
            <div className="contact-card-wrapper" style={{width: '30%', border: '2px solid', padding: '15px' }}>
              <Card style={{ width: '22rem' }}>
                  <Card.Img variant="top" src={props.user?.picture.large} />
                  <Card.Body>
                      <Card.Title>{getFullName(props.user?.name)}</Card.Title>
                      <Card.Text>
                          <div className="contact-information">
                              <strong>Email:</strong>
                              <div>{props.user?.email}</div>
                              <br/>
                              <strong>Phone: / Mobile:</strong>
                              <div>{props.user?.phone}</div>
                              <div>{props.user?.cell}</div>
                          </div>
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
        )
    }
      
  }

export default ContactCard;