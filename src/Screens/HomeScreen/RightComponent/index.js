import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faFolder, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd"
export const RightComponent=()=>{
    return(
        <div className="right-container">
        <div className="header">
            <div className="title"><span>My</span> Playground</div>
            <button className="add-folder">
                <span className="material-icons"><FontAwesomeIcon icon={faPlus}/></span>
                <span> New folder</span>
            </button>
        
        </div>
        <div className="folder-container">
            <div className="folder-header">
                <div className="folder-header-item">
                <FontAwesomeIcon icon={faFolder} style={{color:'#FFCA29'}} />
                 <span>{"Dsa"}</span> 
                </div>
                <div className="folder-header-item">
                <FontAwesomeIcon icon={faTrashCan} />
                <FontAwesomeIcon icon={faEdit} /> 
                <button>
                <FontAwesomeIcon icon={faAdd} /> 
                <span>New Playground</span>
                    
                </button>


                </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src=""/>
                    <div className="title-container">
                        <span>{"Heap implementation"}</span>
                        <span>language:{"java"}</span>
                    </div>
                    <div style={{display:"flex",gap:"10px",cursor:"pointer"}}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    <FontAwesomeIcon icon={faEdit} /> 
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}