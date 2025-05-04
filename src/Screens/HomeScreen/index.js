import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { RightComponent } from "./RightComponent"
export const HomeScreen=()=>{
    return(
        <>
       
       <div className="home-container">
        
        <div className="left-container" >
            <div className="items-container">
            <img src="wha.jpg"/>
            <h1>Acciojob</h1>
            <h2>code.compile</h2>
            <button>
                <FontAwesomeIcon icon={faPlus}/>
                <span>Create Playground</span> 
            </button>
            </div>
        </div>
        <RightComponent/>
        </div>
        </>
    )
}