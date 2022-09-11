import classes from './Search.module.css';
import { ReactComponent as Searchicon } from '../../svg/search.svg';

export default function Search(props) {
  

  return (
    <div className={classes.container}>
      <div className={classes.search}>
        <Searchicon />
        <input
          type="text"
          placeholder="save or start new chat"
          value={props.searchInput}
          onChange={props.onchangeHandler}
        />
      </div>
    </div>
  );
}
