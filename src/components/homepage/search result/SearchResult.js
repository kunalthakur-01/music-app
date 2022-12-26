import React from 'react';
import SongList from '../sidebar/right/SongList';

import styles from './SearchResult.module.css';

const SearchResult = React.memo((props) => {

  const { searchResults } = props;
  console.log(searchResults);


  return (
    <div className={`${styles['search_section']} section`}>
      <ul>
        {searchResults.map(result => <SongList key={result.trackUrl} track={result}/>)}
      </ul>
    </div>
  )
});

export default SearchResult;
