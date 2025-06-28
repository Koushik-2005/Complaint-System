const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  title:       { 
    type: String,
     required: true 
    },
  description: {
     type: String, 
     required: true },
  category: {
    type: String,
    enum: ['Plumbing','Electricity','Cleaning','Furniture','WiFi','Other'],
    required: true
  },
  roomno:      {
     type: Number, 
     required: true
    },
  block:       { 
    type: String, 
    required: true 
    },
  createdBy:   { 
    type: String,
    required: true 
    },      // roll-number
  status:      { 
    type: String, 
    enum: ['Not Done Yet','In Progress','Completed','verified','rejected'],
                 default: 'Not Done Yet' 
                },

  attempts:    { type: Number, default: 1 },
  createdAt:   { type: Date,   default: Date.now }
});

module.exports = mongoose.model("Complaint", complaintSchema);