import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../action/contactActions';


class Contacts extends Component {
  componentDidMount(){
    this.props.getContacts();
  }


  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts
  }
}

export default connect(mapStateToProps, {getContacts})(Contacts);
