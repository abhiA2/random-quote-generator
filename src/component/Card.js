import { useEffect, useState } from 'react'
import './Card.css';
import axios from 'axios';

const URL = 'https://type.fit/api/quotes';

const Card = () => {
    const [fetchedQuotes, setFetchedQuotes] = useState('');
    const [author, setAuthor] = useState('');

    const getQuotes = async () => {
        try {
            const quotesList = await axios.get(URL)
            console.log(quotesList.data)
            let dataQ = quotesList.data
            let ranNum = Math.floor(Math.random() * dataQ.length);
            let ranQ = dataQ[ranNum];
            setFetchedQuotes(ranQ.text)
            setAuthor(ranQ.author)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getQuotes();
    }, [])

    const handleClick = () => {
        getQuotes();
    }

    return (
        <div className='card'>
            <div>
                <p style={{ color: "rgb(155, 89, 182)", opacity: "1" }} className='quote'>{fetchedQuotes}</p>
                <div className='author'>-{author}</div>
            </div>
            <br />
            <div className='button'>
                <div className='btn-icon'>
                    <a href="https://www.twitter.com" target='blank'><i className="fa fa-twitter"></i></a>
                    <a href="https://www.tumblr.com" target='blank'><i className="fa fa-tumblr"></i></a>
                </div>
                <button onClick={handleClick}>New Quote</button>
            </div>
        </div>
    )
}

export default Card