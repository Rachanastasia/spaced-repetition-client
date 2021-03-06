import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import LangApiService from '../../services/lang-api-service';

function WordList() {
    const user = useContext(UserContext)

    useEffect(() => {
        LangApiService.getHead()
            .then(lang => console.log(lang))
            .catch(err => console.log(err, err.message))
    }, [])


    return (
        <Fragment>
            <div className='list_title_wrapper'>
                <h3>Words to practice</h3>
                <Link to='/learn'>
                    <button className='practice'>Start practicing</button>
                </Link>
            </div>

            <ul className='list_wrapper'>
                {user.words.map((w, index) => (
                    <li className='list' key={index}>
                        <h4 className='word_stat list_latin_word'>{w.original}</h4>
                        <p className='word_stat count correct_count'>correct answer count: {w.correct_count}</p>
                        <p className='word_stat count incorrect_count'>incorrect answer count: {w.incorrect_count}</p>
                    </li>))}
            </ul>
        </Fragment>
    )
}

export default WordList
