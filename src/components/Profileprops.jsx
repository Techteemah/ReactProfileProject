
const Profileprops = (props) =>{
  
    return (
      
    
        <div className="profilecards"> 
            <img src={props.profileImage} alt="image" />
            <h3>Name: {props.name}</h3>
            <p >Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
      
    )
  }
  
  export default Profileprops
  