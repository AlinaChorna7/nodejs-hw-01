import { PATH_DB } from '../contacts/contacts.js';
import fs from 'fs/promises';




export const writeContacts = async (updatedContacts) => {
    try {

const data = JSON.stringify(updatedContacts, null, 2);

        await fs.writeFile(PATH_DB,data, 'utf-8');
        console.log('Contacts successfully written to file.');

    } catch (error) {
        console.error('Error writing contacts', error);
    }
};
