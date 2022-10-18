const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be defined"],
  },
  price: Number,
});

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour;
