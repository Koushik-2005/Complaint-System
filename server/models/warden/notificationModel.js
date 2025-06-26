const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title:      
    {   type: String, 
        required: true
    },
  description:  { 
    type: String, 
    required: true 
    },
  // who should see it?
  receiverId: {                // null  ➜ broadcast to everyone
    type: String,
    ref:  'Hosteller',
    default: null
  },
  // link to a complaint when the message is about that complaint
  complaintId: {
    type: String,
    ref:  'Complaint',
    default: null
  },
  createdAt:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
