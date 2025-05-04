import "./index.scss"
export const RightComponent = () =>{
    return <div className = "right-container">
        <div className ="header">
           <div className ="title"> <span> My</span> Playground</div>
           <button className ="add-folder">
            <span><i class="fa-solid fa-plus"></i></span>
            <span>New Folder</span>
            </button>

        </div>
        <div className = "folder-container">
            <div className="folder-header">
                <div className = "folder-header-item">
                   <span> <i class="fas fa-folder"   style={{color: "#FFCA29"}}></i></span>
                   <span>{"DSA"}</span>
                </div>
                <div className = "folder-header-item">
                <span><i class="fas fa-trash"></i></span>
                <span><i class="fas fa-pen"></i></span>
                <button>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <span>New Playground</span>
                </button>

                </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
            </div>

        </div>
        <div className = "folder-container">
            <div className="folder-header">
                <div className = "folder-header-item">
                   <span> <i class="fas fa-folder"   style={{color: "#FFCA29"}}></i></span>
                   <span>{"Fullstack"}</span>
                </div>
                <div className = "folder-header-item">
                <span><i class="fas fa-trash"></i></span>
                <span><i class="fas fa-pen"></i></span>
                <button>
                    <span><i class="fa-solid fa-plus"></i></span>
                    <span>New Playground</span>
                </button>

                </div>
            </div>
            <div className="cards-container">
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
                <div className="card">
                    <img src=""></img>
                    <div className="title-container">
                        <span>{"Heap Implementations"}</span>
                        <span>Language: {"Java"}</span>
                    </div>
                  
                    <div style={{display: 'flex', gap:'10px'}}>
                        <span><i class="fas fa-trash"></i></span>
                        <span><i class="fas fa-pen"></i></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
}