const user = require("../models/UserSchema");

module.exports = {
  async index(req, res) {
    try {
      const UserOwner = await user.findById(req.params.id);
      res.status(200).send(UserOwner);
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      await user.deleteOne(_id);
      res.status(200).send("Sucesso");
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async store(req, res) {
    try {
      const { name, password } = req.body;

      await user.create({ name, password });

      res.status(200).send({ name, password });
    } catch (error) {
      res.status(400).send("Erro");
    }
  }
};
