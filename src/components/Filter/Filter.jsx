import { useSelector, useDispatch } from "react-redux";
import { getInputValueFilter } from "../../redux/filter/filter-selectors";
import filterAction from "../../redux/filter/filter-actions";

function Filter() {
  const dispatch = useDispatch();
  const inputValueFilter = useSelector(getInputValueFilter);

  const filterHendler = ({ target }) => dispatch(filterAction(target.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={inputValueFilter} onChange={filterHendler} />
    </label>
  );
}

export default Filter;
