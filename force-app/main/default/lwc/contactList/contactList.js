import { LightningElement, wire } from 'lwc';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

import getContactList from '@salesforce/apex/ContactController.getContactList';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = [
    { label: 'Contact First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Contact Last Name', fieldName: LASTNAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Contact Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' }
];



export default class ContactList extends LightningElement {
    columns = COLUMNS;
    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.errors = error;
            });
    }
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}