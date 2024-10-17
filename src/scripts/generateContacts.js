
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContacts } from "../utils/createFakeContacts.js";


const generateContacts = async (number) => {
const existingContacts = await readContacts();

const newContact = [];
for(let i=0; i<number; i++){
    newContact.push(createFakeContacts());
}

const updatedContacts = [...existingContacts, ...newContact];

await writeContacts(updatedContacts);
console.log(`Successfully generated and added ${number} contacts.`);
};

generateContacts(5);
