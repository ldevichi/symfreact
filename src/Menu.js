import{Link} from "react-router-dom";

function Menu(props) {
   
    return (
      <>
    <ul className="nav nav-pills"> 
        <li className="nav-items">
            <a className="nav-link" onClick={props.testclic}>Accueil</a>
        </li>
        <li className="nav-items">
        <Link to ="/catalogue" className="nav-link">Catalogue</Link>
        </li>
        <li className="nav-items">
        <Link to ="/account" className="nav-link">Mon compte</Link>
        </li>
    </ul>
      
      </>
    );
    
  }
  
  export default Menu;