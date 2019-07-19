import React from 'react';
import PropTypes from 'prop-types';


/////////////////////SearchBar/////////////////////////
class SearchBar extends React.Component {
    handChange(event) {
        this.props.onUserInput(event.target.value)
    }

    render() {
      return (
        <input type="search" 
                placeholder="search"
                value={this.props.filterText}
                onChange={this.handChange.bind(this)} /> 
      )
    }
}
SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
}
/////////////////////////////////////////////////////////

////////////////ContactList//////////////////////////////
class ContactList extends React.Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => contact.name.indexOf(this.props.filterText) !== -1
        );
//        console.log(filteredContacts);
//        console.log(this.props.filterText);
        return (
        <ul>
            {filteredContacts.map(
                (contact) => <ContactItem key = {contact.email}
                                          name = {contact.name}
                                          email = {contact.email}/>
            )}
        </ul>)
    }
}
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string.isRequired,
}

class ContactItem extends React.Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}
/////////////////////////////////////////////////////////



class SearchComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };
    }

    handleUserInput(searchItem) {
        this.setState({filterText: searchItem})
    }

    render(){
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           onUserInput={this.handleUserInput.bind(this)} />
                <ContactList contacts={this.props.contacts}
                          filterText={this.state.filterText} />
            </div>
        )
    }
};

SearchComponent.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default SearchComponent;