const Tour = require("../model/tour");

exports.getAllTours = async (req, res) => {
  const tours = await Tour.find;

  res.json({
    success: true,
    data: {
      tours,
    },
  });
};

exports.getOneTour = async (req, res) => {
  const id = req.params.id;

  const tour = Tour.find(id);

  if (!tour) return res.send({ success: false, message: "Invalid ID" });

  res.json({ success: true, data: tour });
};

exports.createTour = async (req, res) => {
  const newTour = await Tour.create([req.body]);
  res.json({
    success: true,
    data: {
      newTour,
    },
  });
};
