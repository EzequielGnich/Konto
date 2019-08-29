const client = require("../models/ClientSchema");

module.exports = {
  async index(req, res) {
    try {
      const Client = await client.findById(req.params.id);
      res.status(200).send(Client);
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async delete(req, res) {
    try {
      const { _id } = req.params;
      await client.deleteOne(_id);
      res.status(200).send("Sucesso");
    } catch (error) {
      res.status(400).send("Erro");
    }
  },

  async store(req, res) {
    try {
      const { name, lastname, email, DDD, phoneNumber } = req.body;

      const Client = await client.create({
        name,
        lastname,
        email,
        DDD,
        phoneNumber
      });

      res.status(200).send(Client);
    } catch (error) {
      res.status(400).send("Erro", error);
    }
  },

  async change(req, res) {
    try {
      const Client = await client.findById(req.params.id);

      await client.save();

      console.log(Client);

      res.status(200).send(Client);
    } catch (error) {
      res.status(400).send("Erro");
    }
  }
};
