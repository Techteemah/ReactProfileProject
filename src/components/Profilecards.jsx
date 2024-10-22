
import Profileprops from "./Profileprops"

const Profilecards = () =>{
  
    return (
      
        <div className="container"> 
        
        <Profileprops 
        name = "Fatimah Adeniyi"
        age={32}
        location="Lagos, Nigeria"
        profileImage="src/assets/images/fatimah.png"
      />
      <Profileprops 
        name="Aliyah Mustapha"
        age={28}
        location="Abuja, Nigeria"
        profileImage="src/assets/images/Aliyah.png"
      />
      <Profileprops
        name="Alice Smith"
        age={25}
        location="Lagos, Nigeria"
        profileImage="src/assets/images/alice.png"
      />
        <Profileprops
        name="Grace Ezeji"
        age={25}
        location="Enugu, Nigeria"
        profileImage="src/assets/images/grace.png"
      />

      <Profileprops
        name="FunmiLayo Kamson"
        age={25}
        location="Ibadan, Nigeria"
        profileImage="src/assets/images/layo.png"
      />
        </div>
      
    )
  }
  
  export default Profilecards
  