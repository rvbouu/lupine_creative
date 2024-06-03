const router = require('express').Router();
const {
  //controllers functions go here
  getContact,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../../controllers/contact.controller');

// /api/contact
router.route('/').get(getContact).post(createContact);

// /api/contact/:contactId
router
  .route('/:contactId')
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;