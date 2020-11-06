const { getAllSubscribers } = require('@/lib/newsletter');

module.exports = async (req, res) => {
  const response = await getAllSubscribers();
  const { count } = await response;

  return res.status(200).json({ count });
};
