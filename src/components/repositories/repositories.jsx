import Filters from '../filters';
import RepoCard from '../repo-card';
import './repositories.css';

function Repositories() {
  const repos = [...Array(8)].map((_, i) => 
    <li className="repos-list__item" key={i}>
      <RepoCard></RepoCard>
    </li>
  );

  return (
    <div className="repos">
      <div className="repos__filters">
        <div className="repos-filters">
          <Filters></Filters>
        </div>
      </div>
      <div className="repos__result">
        <div className="repos__total">Записей найдено: {repos.length}</div>
        <ul className="repos-list">{repos}</ul>
      </div>
    </div>
  );
}

export default Repositories;
