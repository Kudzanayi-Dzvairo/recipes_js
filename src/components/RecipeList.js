import React, { Component } from 'react'
import Recipe from './Recipes'
import RecipeSearch from './RecipeSearch'

export default class RecipeList extends Component {
    render() {
        
        const {recipes, handleDetails} = this.props
        // console.log(recipes)
        return (
                <React.Fragment>
                   <RecipeSearch/>
                    <div className="container my-5">
                    {/* title */}
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                             <h1 className='text-slanted'>recipe list</h1>
                        </div>
                    </div>
                    {/* end of title */}
                    <div className="row">
                    {
                        recipes.map(recipe =>{
                            return(
                             <Recipe
                             key={recipe.recipe_id}
                             recipe={recipe} 
                             handleDetails={()=> handleDetails(0, recipe.recipe_id)}
                             />
                            )
                        })
                    }

                    </div>
                </React.Fragment>
    
        )
    }
}
