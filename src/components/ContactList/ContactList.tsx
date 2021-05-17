import { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import UserService from "../../api/UserService";
import config from "../../config/config";
import { GroupedContacts, User } from "../../interfaces/User";
import ContactCard from "../ContactCard/ContactCard";
import Contacts from "../Contacts/Contacts";
import './ContactList.scss'

interface Properties {
}

interface State {
    contacts: Array<User>,
    groupedContacts: GroupedContacts,
    activeTab: String,
    selectedContact: any
}
class ContactList extends Component<Properties, State> {

    state = {
        contacts: [],
        groupedContacts: {} as GroupedContacts,
        activeTab: "",
        selectedContact: null
    }

    componentDidMount() {
        UserService.getContactList().then((results) => {
            this.setState(
                {
                    contacts: results.results,
                    activeTab: config.tabs[0]
                });
        }).then(() => {
            this.groupContactsByTab();
        });
    }

    setActiveTab(tab: string | null) {
        this.setState(previousState => {
            return {
                ...previousState,
                activeTab: tab!,
            }
        }, () => this.groupContactsByTab());
        return this.state.activeTab;
    }

    groupContactsByTab() {
        this.setState(prevState => {
            let stateObj: any = {
                ...prevState,
            }

            if(!stateObj.groupedContacts.hasOwnProperty(`${this.state.activeTab}`)){
                stateObj.groupedContacts[`${this.state.activeTab}`] = this.state.contacts.filter((x: User) => 
                {
                    return x.name!.first.startsWith(this.state.activeTab!.toUpperCase());
                }).sort((a: User, b: User) => (a.name.last > b.name.last) ? 1 : -1);
                
            }
            return stateObj;
        });
    }

    setSelectedContact(user: User) {
        this.setState(prevState => {
            let stateObj: any = {
                ...prevState,
                selectedContact: user,
            }
            return stateObj;
        });
    }

    render() {
        return (
            
            <div className="container d-flex toggled">
                <div className = "row row--top-40">
                    <div className="col-md-12 d-flex" id="wrapper">
                        <div className="bg-light border-right" id="sidebar-wrapper">
                            {<ContactCard user={this.state.selectedContact? this.state.selectedContact: null}/> }
                        </div>
                        <div id="contacts-wrapper">
                            <Tabs activeKey={this.state.activeTab} onSelect={(k) => this.setActiveTab(k)}>
                                {config.tabs.map((tab, index) => {
                                    let tabContent;
                                    if(this.state.groupedContacts.hasOwnProperty(`${tab}`)) {
                                        tabContent = <Contacts 
                                            groupedContacts={this.state.groupedContacts[`${tab}`]} 
                                            selectContact={(user) => this.setSelectedContact(user)}
                                            selectedContact={this.state.selectedContact}
                                        />
                                    }
                                    return (
                                        <Tab key={index} animation="false" eventKey={tab} title={tab.toUpperCase()} >
                                            {tabContent}
                                        </Tab>
                                    )
                                }
                                )}
                                
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactList;