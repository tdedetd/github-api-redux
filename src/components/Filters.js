import './Filters.css';

function Filters() {
  const orderName = 'order' + String(new Date().getTime());

  return (
    <div className="filters">
      <div className="filters__item filters-item">
        <div className="filters-item__header">Name</div>
        <div className="filters-item__body">
          <input type="text" className="filters-item__w-100" />
        </div>
      </div>
      <div className="filters__item filters-item">
        <div className="filters-item__header">Sort by</div>
        <div className="filters-item__body">
          <select className="filters-item__w-100">
            <option value="">Default</option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="help-wanted-issues">Open issues</option>
            <option value="updated">Updated</option>
          </select>
        </div>
      </div>
      <div className="filters__item filters-item">
        <div className="filters-item__header">Sort direction</div>
        <div className="filters-item__body">
          <label>
            <input type="radio" name={orderName} />
            <span>Ascending</span>
          </label>
          <label>
            <input type="radio" name={orderName} />
            <span>Descending</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
