import {writeContacts} from '../utils/writeContacts.js';


export const removeAllContacts = async () => {
try {
    const emptyContacts = [];
     await writeContacts(emptyContacts);


} catch (error) {
    console.error('Error removing conacts', error);
}

};

removeAllContacts();
