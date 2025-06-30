const mongoose = require("mongoose");

const complaintStatusSchema = new mongoose.Schema({
  complaintId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Complaint',
    required: true
  },
  updatedBy:   {
    type: String,               // roll-number or "warden"
    required: true
  },
  status: {
    type: String,
    enum: ['In Progress','Completed'],
    default: 'Not yet started',
  },
  updatedAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model("ComplaintStatus", complaintStatusSchema);