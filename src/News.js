import React, {useEffect, useState} from 'react'
import './News.css';

const News = () => {
    const [error, setError] = useState(null)
    const [isLoaded,setLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        const URL = "https://newsapi.org/v2";
        const APIKEY = "ce033f2dc9dd40cb8dc05a8709991ce5";
        const criteria = "top-headlines?country=us&category=business";
        const address = URL + "/" + criteria + "&apikey=" + APIKEY;

        fetch(address)
        .then(res => res.json())
        .then(
            (result) => {
                setError(null)
                setItems(result.articles)
                setLoaded(true)
            }, (error) => {
                setError(true)
                setItems([])
                setLoaded(true)
            }
        )  
        
    }, [])

        if (error) {
            return <p>{error.message}</p>;
        }

        if(!isLoaded) {
            return <p>Loading...</p>;
        } 

        return (
            <div>
                <div className="flexContainer">
                    <div className="logo">/</div>
                    <div><span className="country">US</span><span className="field">Business</span></div>
                </div>
                {items.map(item => (
                    <div key={item.title} className="newsContainer">
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <img src={item.urlToImage} alt={item.title}></img>
                            <div className="textBox">
                                <h3>{item.title}</h3>
                                <p></p>
                                <p className="source">{item.source.name}</p>
                                <p className="text">{item.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        );       

}

export default News