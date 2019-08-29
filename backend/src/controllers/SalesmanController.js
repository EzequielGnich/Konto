const salesman = require("../models/SalesmanSchema");

module.exports = {
  async index(req, res) {
    try {
      const Salesman = await salesman.findById(req.params.id);
      res.status(200).send(Salesman);
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      await salesman.deleteOne(_id);
      res.status(200).send("Sucesso");
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async store(req, res) {
    try {
      const { name, lastname, email, DDD, phoneNumber } = req.body;

      await user.create({ name, lastname, email, DDD, phoneNumber });

      res.status(200).send({ name, lastname, email, DDD, phoneNumber });
    } catch (error) {
      res.status(400).send("Erro");
    }
  }
};
