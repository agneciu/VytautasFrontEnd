import React from 'react';


const SearchHistory = (props) => {
    if(!props.list || !props.list.length) {
        return null;
    }
const paragraph = props.list.map((text, index) => {
    return <p key={text + "-" + index}> {text}</p>;
});

    return <div> {paragraph} </div>;
    
};

export default SearchHistory;