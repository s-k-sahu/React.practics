import React from "react";
import Style from './style.css'
import Flower from '../02.addingimages/flower.jpg'

const Css = () =>{ 
     return (
        <>
        <h1 style={{background:"aqua",
                    color:"red",
                    border:"2px solid black",
                    borderRadius:"100px",
                    marginLeft:"100 px",
                    marginRight:"100 px",
                    textAlign:"center",
                    paddingLeft:"10 px",
                    paddingRight:"10 px",    
    }}>NAMASTE JAVA SCRIPT</h1>
        <h2 className="Hello">A paragraph has three major parts- 1. Topic sentence 2. Supporting
         sentences 3. Concluding sentence 1. Topic Sentence A topic sentence is a precise statement
          that reflects the main idea of the paragraph. It should be carefully written as it will
           show the reader what you are going to talk about. Words chosen for this shoul</h2>

            <img style={{
                display : 'flex',
                justifyContent :' center',
                alignItems : 'center',
            }} width={450} src={Flower} alt="image" />

        
        </>
    )
}
export default Css;