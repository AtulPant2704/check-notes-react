import { useRef, useEffect } from "react";
import { useFilter } from "../../../context";

const Filter = ({ showFilters, setShowFilters }) => {
  const filterRef = useRef();
  const {
    filterState: { sortDateBy, sortPriorityBy },
    filterDispatch,
  } = useFilter();

  const closeFilters = (e) => {
    if (!filterRef.current.contains(e.target)) {
      setShowFilters(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeFilters);
    return () => {
      document.removeEventListener("click", closeFilters);
    };
  }, []);

  return (
    <div className="filter-container filter-container-active" ref={filterRef}>
      <div className="filter-header">
        <h2 className="filter-heading">Sort</h2>
        <button
          className="btn btn-solid-primary filter-clear-btn"
          onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear
        </button>
      </div>
      <div className="filter">
        <h3 className="filter-type">By Time:</h3>
        <div className="filter-type-container">
          <input
            type="radio"
            id="new-to-old"
            name="time-filter"
            checked={sortDateBy === "newToOld"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "newToOld" })
            }
          />
          <label htmlFor="new-to-old">New to Old</label>
        </div>
        <div className="filter-type-container">
          <input
            type="radio"
            id="old-to-new"
            name="time-filter"
            checked={sortDateBy === "oldToNew"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_DATE", payload: "oldToNew" })
            }
          />
          <label htmlFor="old-to-new">Old to New</label>
        </div>
      </div>
      <div className="filter">
        <h3 className="filter-type">By Priority:</h3>
        <div className="filter-type-container">
          <input
            type="radio"
            id="high-to-low"
            name="priority-filter"
            checked={sortPriorityBy === "highToLow"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRIORITY", payload: "highToLow" })
            }
          />
          <label htmlFor="high-to-low">High to Low</label>
        </div>
        <div className="filter-type-container">
          <input
            type="radio"
            id="low-to-high"
            name="priority-filter"
            checked={sortPriorityBy === "lowToHigh"}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRIORITY", payload: "lowToHigh" })
            }
          />
          <label htmlFor="low-to-high">Low to High</label>
        </div>
      </div>
    </div>
  );
};

export { Filter };
