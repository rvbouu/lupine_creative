const { Contact } = require('../models');

module.exports = {
  // Get all contact
  async getContact(req, res) {
    try {
      const contact = await Contact.find();
      res.json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a contact
  async getSingleContact(req, res) {
    try {
      const contact = await Contact.findOne({ _id: req.params.contactId });
      if (!contact) {
        return res.status(404).json({ message: 'No contact with that ID' });
      }
      res.json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a contact
  async createContact(req, res) {
    try {
      const contact = await Contact.create(req.body);
      res.json(contact);
    } catch (err) {
      // console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a contact
  async deleteContact(req, res) {
    try {
      const contact = await Contact.findOneAndDelete({ _id: req.params.contactId });
      if (!contact) {
        res.status(404).json({ message: 'No contact with that ID' });
      }
      res.json({ message: 'Contact deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a course
  async updateContact(req, res) {
    try {
      const contact = await Contact.findOneAndUpdate(
        { _id: req.params.contactId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      if (!contact) {
        res.status(404).json({ message: 'No contact with this id!' });
      }
      res.json(contact);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};