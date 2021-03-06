import React, {useState, useEffect} from 'react';
import Home from './Home';
import About from './About';

export default function App({aaa}) {
    const [page, setPage] = useState(aaa);
    useEffect(() => {
        window.onpopstate = event => {
            setPage(event.state);
        }
    }, []);

    function onChangePage(e) {
        const newPage = e.target.dataset.page;
        window.history.pushState(newPage, '', `/${newPage}`);
        setPage(newPage);
    }
    const PageComponent = page === 'home' ? Home : About;
    return (
        <div className="container">
            <button data-page="Home" onClick={onChangePage}>
                Home
            </button>
            <PageComponent/>
        </div>
    );
}