const contacts = require("./contacts");
const argv = require('yargs').argv;


const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const contactToRemove = await contacts.removeContact(id);
      return console.log(contactToRemove);

    default:
      console.log("unknown action");
  }
};

// contactActions({action: 'getContacts'})
// contactActions({action: 'getContactById', id:'1DEXoP8AuCGYc1YgoQ6hw'})
// contactActions({action: "add", name: "Bohdan", email: 'bbb@mail.com', phone: '19191919'})
// contactActions({ action: "remove", id: "nHipaC06na3DV-Y0jy9ij" });
invokeActions(argv)
