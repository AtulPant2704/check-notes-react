const Filter = () => {
  return (
    <>
      <div className="filter-header">
        <h2 className="filter-heading">Sort</h2>
        <button className="btn btn-solid-primary filter-clear-btn">
          Clear
        </button>
      </div>
      <div className="filter">
        <h3 className="filter-type">By Time:</h3>
        <div className="filter-type-container">
          <input type="radio" id="new-to-old" name="time-filter" />
          <label htmlFor="new-to-old">New to Old</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" id="old-to-new" name="time-filter" />
          <label htmlFor="old-to-new">Old to New</label>
        </div>
      </div>
      <div className="filter">
        <h3 className="filter-type">By Priority:</h3>
        <div className="filter-type-container">
          <input type="radio" id="high-to-low" name="priority-filter" />
          <label htmlFor="high-to-low">High to Low</label>
        </div>
        <div className="filter-type-container">
          <input type="radio" id="low-to-high" name="priority-filter" />
          <label htmlFor="low-to-high">Low to High</label>
        </div>
      </div>
    </>
  );
};

export { Filter };
