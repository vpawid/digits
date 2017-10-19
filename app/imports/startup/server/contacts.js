import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: 'Phillip',
    last: 'Johnson',
    address: '1680 East-West Rd, Honolulu, HI',
    phone: '808-956-3489',
    email: 'johnson@hawaii.edu'
  },
  {
    first: 'Henri',
    last: 'Casanova',
    address: '1680 East-West Rd, Honolulu, HI',
    phone: '808-956-3489',
    email: 'henric@hawaii.edu'
  },
  {
    first: 'Kim',
    last: 'Binsted',
    address: '1680 East-West Rd, Honolulu, HI',
    phone: '808-956-3489',
    email: 'binstead@hawaii.edu'
  },

];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(contacts) {
    Contacts.insert(contacts);
  });
}
