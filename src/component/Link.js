import React from 'react';
import {Link} from "react-router-dom";

const ListIcon = ({iconName}) =>
    <svg className={iconName} width="32" height="32" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M6.646 3.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L12.293 10 6.646 4.354a.5.5 0 010-.708z" clip-rule="evenodd"/>
    </svg>;

const ListItemLink = ({path, text, iconName}) =>
    <li className="list-group-item">
        <span>
            <ListIcon iconName={iconName}/>
            <Link to={path}>{text}</Link>
        </span>
</li>;

const LinkList = ({children}) => {
    return <ul className="list-group">{children}</ul>
};


export {LinkList, ListItemLink}
