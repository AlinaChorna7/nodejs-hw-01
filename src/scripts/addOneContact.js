import {readContacts} from '../utils/readContacts.js';
import {writeContacts} from '../utils/writeContacts.js';
import {createFakeContacts} from '../utils/createFakeContacts.js';




export const addOneContact = async () => {
    try {
        const existingContacts = await readContacts();
        const newContact = createFakeContacts();
        const updateContacts = [...existingContacts, newContact];

        await writeContacts(updateContacts);
    } catch (error) {
        console.error('Error assing contact', error);
    }
};

addOneContact();
