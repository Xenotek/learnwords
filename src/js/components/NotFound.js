import logo404 from './../../img/404.svg'
import React from 'react'

const NotFound = () => (
    <div className="wrap-error404">
        <div className="error404"><img src={logo404} alt="404 Not Found" /></div>
        <h1 className="header-error">Ошибочка!</h1>
        <div className="description">Такой страницы не существует или она была удалена.</div>
    </div>
);
export default NotFound;