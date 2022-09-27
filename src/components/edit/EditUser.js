import "./single.css";
import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import UserService from "../../services/UserService";


const EditUser = () => {
    // "idUser": 65,
    // "nom": "andraibmaol",
    // "prenom": "Joel",
    // "mail": "a.",
    // "password": "1235",
    // "genre": "homme",
    // "adresse": "Madagascar",
    // "contact": "122558",
    // "photo": "jol.jpg",
    // "date_naissance": "21-03-1999",
    // "interests": []

    const {idUser} = useParams();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [genre, setGenre] = useState('');
    const [mail, setMail] = useState('');
    const [adresse, setAdresse] = useState('');
    const [contact, setContact] = useState('');
    const [date_naissance, setDateNaissance] = useState('');
    const[modifier, setModifier] = useState(false);








    useEffect(() => {
        UserService.getUserById(idUser).then((response) =>{
            setNom(response.data.nom);
            setPrenom(response.data.prenom);
            setGenre(response.data.genre);
            setMail(response.data.mail);
            setAdresse(response.data.adresse);
            setContact(response.data.contact);
            setDateNaissance(response.data.date_naissance);

            
        });



    }, [setNom, nom])
    const enableEdit=()=>{
        setModifier(!modifier);
    }
    
  return (
    <div className="single">
      
      <div className="singleContainer">
        
        <div className="top">
          <div className="left">
          {modifier==false? (
            <button className="editButton"  onClick={enableEdit}>Modifier</button>):(
                <div className="editButton"  onClick={enableEdit}>Valider</div>  
            )}
            <h1 className="title">Information</h1>
         
            {modifier==false? (
                <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{prenom} {nom.toUpperCase()}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <input
                type="text"
                placeholder="E-mail"
                name="uname"
                className="modifierLabel"
                required=""
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Contact:</span>
                    <input
                type="text"
                placeholder="Contact"
                name="uname"
                className="modifierLabel"
                required=""
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                />
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adresse:</span>
                    <span className="itemValue">
                    <input type="text" placeholder="Adresse" name="uname" className="modifierLabel" required="" onChange={(e) => setAdresse(e.target.value)}value={adresse} />
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Genre:</span>
                    <span className="itemValue"> <input
                type="text"
                placeholder="Genre"
                name="uname"
                className="modifierLabel"
                required=""
                onChange={(e) => setGenre(e.target.value)}
                value={genre}
                /></span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Evaluation:</span>
                    <span className="itemValue"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                  </div>
                </div>
              </div>
                ) :(   <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">{prenom} {nom.toUpperCase()}</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">{mail}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Contact:</span>
                    <span className="itemValue">{contact}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Adresse:</span>
                    <span className="itemValue">
                   {adresse}
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Genre:</span>
                    <span className="itemValue">{genre}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Evaluation:</span>
                    <span className="itemValue"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                    <span className="itemValue"><button className="editButton"  onClick={enableEdit}>Modifier</button></span>
                  </div>
                  <div className="detailItem">
                  </div>
                  
                </div>
              </div>)}
                
          </div>
          <div className="right">
            {/* <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" /> */}
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Vos Centres d'intérêts</h1>
          {/* <List/> */}
        </div>
      </div>
    </div>
  );
};

export default EditUser;