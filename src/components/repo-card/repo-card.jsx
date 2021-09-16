import './repo-card.css';

function RepoCard() {
  const noDescriptionText = '<No description>';

  const repo = {
    name: 'particle-system',
    html_url: 'https://github.com/tdedetd/particle-system',
    description: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks: 0,
    owner: {
      login: 'tdedetd'
    }
  };

  return (
    <div className="repo">
      <h2 className="repo__header" title={repo.name}>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo__link">{repo.name}</a>
      </h2>
      <div className="repo__description" title={repo.description || ''}>{repo.description || noDescriptionText}</div>
      <div className="repo__lang">{repo.language}</div>
      <footer className="repo__footer">
        <div>
          <span className="repo__stat repo__stars" title="Stars"></span>
          <span>{repo.stargazers_count}</span>
        </div>
        <div>
          <span className="repo__stat repo__forks" title="Forks"></span>
          <span>{repo.forks}</span>
        </div>
        <div>
          <span className="repo__stat repo__user" title="Owner"></span>
          <span>{repo?.owner?.login}</span>
        </div>
      </footer>
    </div>
  );
}

export default RepoCard;
