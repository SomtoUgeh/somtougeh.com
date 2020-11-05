const axios = require('axios');

module.exports = async (req, res) => {
  const userResponse = await axios.get(
    'https://api.github.com/users/somtougeh'
  );

  const userReposResponse = await axios.get(
    'https://api.github.com/users/somtougeh/repos'
  );

  const { data: user } = await userResponse;
  const { data: repositories } = await userReposResponse;

  const mine = repositories.filter(repo => !repo.fork);

  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  return res.status(200).json({
    followers: user.followers,
    stars
  });
};
