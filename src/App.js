import { useEffect, useState } from 'react';
import './App.css';
import video from './video.coctail.mp4';
import glass from './wine-glass.avif';
import MyNewRecipes from './MyNewRecipes';

function App() {


const MY_ID='b89de246';
const MY_KEY='4f9186d0521875f1430b05bb58c53e66';

const [mySearch, setMySearch]= useState('');
const [myRecipes, setMyRecipes]= useState([]);
const [wordSubmitted,setWordSubmitted]= useState('wine');

useEffect(()=>{
  const getRecipe = async()=>{
  const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  console.log(data.hits);
  setMyRecipes(data.hits);
  }
  getRecipe();
},[wordSubmitted])



const myRecipeSearch = (e)=>{
setMySearch(e.target.value)

}

const finalSearch=(e)=>{
  e.preventDefault()
  setWordSubmitted(mySearch)
}

  return (


    <div className="App">

      <div className='container'>
        <video autoPlay muted loop>
          <source src={video}tupe='video/pm4'/>
        </video>
      </div>

      <div className='container'>
      <h1>New cocktails</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search'onChange={myRecipeSearch}value = {mySearch}/>
         </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch}>
          <img src={glass} alt='pic'width='30px'/>
        </button>
      </div>
      


      {myRecipes.map((element,index) =>(
      <MyNewRecipes key={index}
      label={element.recipe.label}
      image ={element.recipe.image}
      ingredients={element.recipe.ingredientLines}
      />
      ))}
    

    
    </div>
  );
}

export default App;
