function MyNewRecipes({label,image,ingredients}){
    return(<div>
        <div className="container">
    <p>{label}</p>
    </div>
    <div className="container">
        <img src={image}alt='pic'width='300px'/>
    </div>
         <div className="container">
         <ul className='container list'>
        {ingredients.map((ingredient,index) =>(
          <li key={index}>
            {ingredient}
        </li>
       
        ))}
           </ul>
    </div>
  
      </div>
    
    )

}

export default  MyNewRecipes;