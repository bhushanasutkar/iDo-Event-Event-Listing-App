import React,{useContext} from 'react'
import Notecontext from "../contexapi/Notecontext"

const Noteitem = (props) => {
    const context = useContext(Notecontext);
    const { deletenote } = context;
    const {note,updatenode}= props;
    return (
        <div className="col-md-4 mx-2 my-3" style={{backgroundColor:"#1c111f"}}>
        <div className="card mx-1 my-3 text-light" style={{backgroundColor:"#350b2c"}}>

            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description} </p>
                <i className="fas fa-trash-alt mx-2" onClick={()=>{deletenote(note._id)}}></i>
                <i className="far fa-edit mx-2"onClick={()=>{updatenode(note)}}></i>
                
            </div>
        </div>
        </div>
    )
}

export default Noteitem
