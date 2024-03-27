class EchoController {
  getEcho(req, res) {
    res.send('Привет, Redev!')
  }
  postEcho(req, res) {
    const { message } = req.body;
    console.log(message);
    res.send(message);
  }
}
module.exports = new EchoController()
