import React from "react";
import "../common/mainContent.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios';
import CardColor from "../components/CardColor";
import View from "../components/View";
import AddArticle from "../components/AddArticle";


const Home = () => {

   const [btnSize, setBtnSize] = useState('Make big cards')
    
   const [buttonClicked, setButtonClicked] = useState(3);
   const [size, setSize] = useState('smallCard')
   const [numberOfCards, setNumberOfCards] = useState(3);
   const [article, setArticle] = useState(null);
   const [articles, setArticles] = useState([]);

   const [newArticleObj, setNewArticleObj] = useState(null)
   const [newArticlesArr, setNewArticlesArr] = useState(null)
   const [newArticlesBlock, setNewArticlesBlock] = useState([])
   const [newArticleTitle, setNewArticlTitle] = useState(null);
   const [newArticleText, setNewArticlText] = useState(null);
   const [newArticleClick, setNewArticlClick] = useState(null);


   const handleTitleChange = (titleValue, contentValue, createClick) => {
    setNewArticlTitle(titleValue)
    setNewArticlText(contentValue)
    setNewArticlClick(createClick)
   }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://jsonplaceholder.typicode.com/posts");
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
         <h3 className="articleHeader">{post.title}</h3>
         <p className="text">{post.body}</p>
         <View title={post.title} body={post.body}/>
         <CardColor />
         </div> 
      )
    )
    }, [articles, buttonClicked, size])

    useEffect(() => {
        setNewArticleObj({
            'userId': newArticleClick,
            'id': newArticleClick,
            'title': newArticleTitle,
            'body': newArticleText
        })

        console.log(newArticleClick)
        console.log(newArticleObj)
    }, [newArticleClick])

    useEffect(() => {
        setNewArticlesArr([...newArticlesBlock, newArticleObj])
        console.log(newArticlesArr)
    }, [newArticleObj])

    useEffect(() => {
        if (newArticleClick > 0) {
            setNewArticlesBlock(newArticlesArr.map((post) => 
            <div className={"greenCard" + ' ' + size} id={post.id}  key={new Date().getTime()}>
            <h3 className="articleHeader">{post.title}</h3>
            <p className="text">{post.body}</p>
            <View title={post.title} body={post.body}/>
            <CardColor />
            </div>     
       ))
        }
    }, [newArticlesArr])


    return (
        <>
        <div className="head">
        <h1 className="articleList">Article List</h1>
        <div>
        <button className="button makebig" onClick={() => {
            size === "smallCard" ? setSize("bigCard") : setSize("smallCard")
            numberOfCards === 3 ? setNumberOfCards(2) : setNumberOfCards(3)
            btnSize === "Make big cards" ? setBtnSize('Make small cards') : setBtnSize('Make big cards')
        }}>{btnSize}</button>
        <AddArticle updateData={handleTitleChange}/>
        </div>

        </div>
        <div className="articles">
        {article}
        {newArticlesBlock}
        </div>
            <button className="button" onClick={() =>{
             setButtonClicked(buttonClicked + numberOfCards)
            }}>Show more</button>

        </>
    )
}
export {Home}