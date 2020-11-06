const { subscribeToNewsletter } = require('@/lib/newsletter');

module.exports = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const response = await subscribeToNewsletter(email);

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`
      });
    }

    return res.status(201).json({ error: '' });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
