import React from 'react';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 150),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <path d="M464,428,339.92,303.9a160.48,160.48,0,0,0,30.72-94.58C370.64,120.37,298.27,48,209.32,48S48,120.37,48,209.32s72.37,161.32,161.32,161.32a160.48,160.48,0,0,0,94.58-30.72L428,464ZM209.32,319.69A110.38,110.38,0,1,1,319.69,209.32,110.5,110.5,0,0,1,209.32,319.69Z" />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Search for pizza..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path d="M66.83,64,127.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0L64,61.17,3.41.59A2,2,0,0,0,.59.59a2,2,0,0,0,0,2.82L61.17,64,.59,124.59a2,2,0,0,0,0,2.82,2,2,0,0,0,2.82,0L64,66.83l60.59,60.58a2,2,0,0,0,2.82-2.82Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
