const getEcho = (req, res) => {
    res.send('Привет, Redev!');
  };

  const postEcho = (req, res) => {
    const { message } = req.body;
    res.json({ message });
  };

  module.exports = {
    getEcho,
    postEcho,
  };
