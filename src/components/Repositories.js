import Filters from './Filters';
import './Repositories.css';

function Repositories() {
  return (
    <div className="repos">
      <div className="repos__filters">
        <div className="repos-filters">
          <Filters></Filters>
        </div>
      </div>
      <div className="repos__result">
        <div className="repos__total">Записей найдено: 0</div>
        <ul className="repos-list">
          
        </ul>
      </div>
    </div>
  );
}

export default Repositories;
