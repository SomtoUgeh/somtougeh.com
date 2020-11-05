export default async (_, res) => {
  const userResponse = await fetch('https://api.github.com/users/somtougeh');
  const userReposResponse = await fetch(
    'https://api.github.com/users/leerob/somtougeh'
  );

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();

  const mine = repositories.filter(repo => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  return res.status(200).json({
    followers: user.followers,
    stars
  });
};
