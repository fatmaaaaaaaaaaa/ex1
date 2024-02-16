import React from "react";
class Greeting extends React.Component{
    render(){
    const prenom = 'fatma ';
    const nom = 'elleuch';
    return (
        <>  
            
            <h1>Bonjour {prenom +nom}</h1>
            <p> Bienvenue dans mon application React !</p>
            <p>la date et l'heure actuelles sont :{new Date().toLocaleString()}</p>
        </>
    )
    }
}
export default Greeting;