const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    Id: {
      type: String
    },
    
    // Customer Address to ship the product to
    address: [
      {
        addressCity: {
          type: String,
        },

        addressCountry: {
          type: String,
        },

        addressLine1: {
          type: String,
        },

        addressLine2: {
          type: String,
        },

        addressPostalCode: {
          type: String,
        },

        addressState: {
          type: String,
        },
      },
    ],

    email: {
      type: String
    },

    phone: {
      type: String
    },

    name: {
      type: String
    },

    // This is the mailing and shipping address - only appears on Invoices emailed to the customer
    shippingAddress: [
      {
        shippingAddressCity: {
          type: String,
        },

        shippingAddressCountry: {
          type: String,
        },

        shippingAddressLine1: {
          type: String,
        },

        shippingAddressLine2: {
          type: String,
        },

        shippingAddressPostalCode: {
          type: String,
        },

        shippingAddressState: {
          type: String,
        },

        phone: {
          type: String
        },
    
        name: {
          type: String
        },
      },
    ],
      
    paymentMethodId: {
      type: String
    },
  },
  {
    timestamps: true
  }
)

const Customer = mongoose.model("customer", CustomerSchema);
module.exports = Customer;