import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('contacts');

/**
 * Create the schema for Stuff
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    max: 200,

  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    max: 200,

  },

  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 200,

  },

  phone: {
    label: 'phone',
    type: String,
    optional: false,
    max: 200,

  },

  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,

  },


});

Contacts.attachSchema(ContactsSchema);
