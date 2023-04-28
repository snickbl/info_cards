import { useEffect } from "react";
import axios from "axios";
import CardColor from "../components/CardColor";
import { useState } from "react";
import React from "react";
import View from "../components/View";

const Users = () => {
    
    const [buttonClicked, setButtonClicked] = useState(3);
    const [size, setSize] = useState('smallCard')
    const [numberOfCards, setNumberOfCards] = useState(3);
    const [article, setArticle] = useState(null);
    const [articles, setArticles] = useState([]);
    const [btnSize, setBtnSize] = useState('Make big cards')
 
     useEffect(() => {
         const fetchData = async () => {
             const result = await axios("https://jsonplaceholder.typicode.com/users");
             if (result.data) {
                 setArticles(result.data);
             } else {
                fetchData();
             }
         };
         fetchData();
     }, []);    
     
     useEffect(() => {
     setArticle(
          articles.filter(item => item.id <= buttonClicked).map((post) => 
          <div className={"greenCard" + ' ' + size} id={post.id}  key={post.id}>
          <h3 className="articleHeader">{post.name}</h3>
          <p className="text">{post.email}</p>
          <p className="text">{post.phone}</p>
          <View title={post.name} email={post.email} phone={post.phone}/>
          <CardColor />
          </div> 
       )
     )
     }, [articles, buttonClicked, size])
 
    return (
        <>
        <div className="head">
        <h1 className="articleList">Article List</h1>
        <button className="button" onClick={() => {
            size === "smallCard" ? setSize("bigCard") : setSize("smallCard")
            numberOfCards === 3 ? setNumberOfCards(2) : setNumberOfCards(3)
            btnSize === "Make big cards" ? setBtnSize('Make small cards') : setBtnSize('Make big cards')
        }}>{btnSize}</button>

        </div>
        <div className="articles">
        {article}
        </div>
        <button className="button" onClick={() =>{
             setButtonClicked(buttonClicked + numberOfCards)
            }}>Show more</button>

        </>
    )
}

export {Users}