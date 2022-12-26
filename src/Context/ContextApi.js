import React from 'react';
import { useState } from 'react';

export const contextManage = React.createContext({
    searchedData: '',
    getSearchedData: () => {}
});

export const ContextProvider = props => {
    // const [isHaveAnyValueForSearch, setIsHaveAnyValueForSearch] = useState(false);
    const [searchedData, setSearchedData] = useState('');

    const getData = (val) => {
        setSearchedData(val);
    }

    return (
        <contextManage.Provider value={ {searchedData, getSearchedData: getData} }>
            {props.children}
        </contextManage.Provider>
    )
}