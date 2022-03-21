const user = require('../model/user.model');

exports.findAll = (req, res) => {
  const allUser = user;

  res.json(allUser);
};

exports.findById = (req, res) => {
  try {
    const findUser = user.find((u) => u.id === parseInt(req.params.id, 10));

    if (findUser) {
      res.json(findUser);
    } else {
      res.status(404).send({
        message: 'User Not Found',
      });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
