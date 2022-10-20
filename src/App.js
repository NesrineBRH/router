import React from "react";
import Card from"./component/MoviesCard";
import toy from "./component/toy";
import notf from "./component/notf";
import rap from "./component/rap";
import lion from "./component/lion";
import home from "./component/home";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
//import {createBrowserHistory} from 'history';
//export const customHistory = createBrowserHistory(); 
class App extends React.Component
{
    state={
        movies:[
            {
                "Title": "Toy Story",
                "description":"Toy Story is about the 'secret life of toys' when people are not around.Toy Story is about the 'secret life of toys' when people are not around ",
                "posterURL":"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                "Rating":5,
                "url":'/component/toy',
        },
        {
            "Title": "Lion King",
            "description":"One of Disney's most famous villains is Scar from The Lion King (1994). As Mufasa's dastardly younger brother and the aloof uncle of prince Simba, ",
            "posterURL":"https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519__340.jpg",
            "Rating":4,
            "url":'/component/lion',
    },
    {"Title":"Rapunzel",
"description":"Rapunzel is a spirited, smart, clever, kind, playful, and a very adventurous girl in her late teens, though a bit naive. However, she.teens, though a bit naive.",
"posterURL":"https://media.istockphoto.com/id/489339112/photo/young-woman-in-costume-painting.webp?s=612x612&w=is&k=20&c=B8uyKevaBBC77YTohygReI8CJOHJFuD9e90XPVZJAHU=", 
"Rating":3,
"url":'/component/rap',
},],
}
render(){  


return (
<div>

<Routes >
<Route path='/' element={<home/>}/>
<Route exact path='/component/home' element={<home/>}/>
<Route path='/component/toy' element={<toy>1</toy>}/>
<Route path='/component/rap' element={<rap/>}/>
<Route exact path='/component/lion' element={<lion/>}/>
<Route path='/*' element={<notf/>}/>
</Routes>

<div>
  
<h1>Movies Platform</h1>
<h2>Movies Selection</h2>
<div className="blockfilm">
 {this.state.movies.map(movie=>(
<Card prop={movie}/> 
))}  
</div>

</div></div>
) }
 }

export default App;