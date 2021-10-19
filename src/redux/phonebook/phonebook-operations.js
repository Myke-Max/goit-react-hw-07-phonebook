import contactsControl from '../../service-API';
import actions from './phonebook-actions';

export const getContacts = () => dispatch => {
  dispatch(actions.getContactsRequest());

  contactsControl
    .getContacts()
    .then(data => dispatch(actions.getContactsSuccess(data)))
    .catch(error => dispatch(actions.getContactsError(error.message)));
};

export const addContacts =
  ({ name, number }) =>
  dispatch => {
    dispatch(actions.addContactsRequest());
    contactsControl
      .addContacts({ name, number })
      .then(data => dispatch(actions.addContactsSuccess(data)))
      .catch(error => dispatch(actions.addContactsError(error.message)));
  };

export const deleteContact = id => dispatch => {
  actions.deleteContactsRequest();

  contactsControl
    .deleteContact(id)
    .then(data => actions.deleteContactsSuccess(data))
    .catch(error => dispatch(actions.deleteContactsError(error.message)));
};