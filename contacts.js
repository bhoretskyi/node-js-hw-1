// contacts.

// import { readFile } from "fs";
// import fs from "fs/promises";
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve("db", "contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  const bufer = await fs.readFile(contactsPath);

  const result = bufer.toString();
  return JSON.parse(result);
  // ...твой код. Возвращает массив контактов.
}

async function getContactById(contactId) {
  const allContacts = await listContacts();

  result = allContacts.find((contact) => contact.id === contactId);
  return result || null;
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

async function removeContact(contactId) {
  const allContacts = await listContacts();

  const contactIndex = allContacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex === -1) {
    return null;
  }
  const removedContact = allContacts.splice(contactIndex, 1)[0];
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return removedContact;

  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

async function addContact({ name, email, phone }) {
  const allContacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
  // ...твой код. Возвращает объект добавленного контакта.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
