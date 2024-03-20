const logRequest = (req, res, next) => {
  const now = new Date();
  const timestamp = now.toLocaleTimeString();
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.log(`Request time[${timestamp}] Request from ${req.ip}: ${req.method} ${fullUrl}`);
  next();
};

module.exports = {
  logRequest
};
