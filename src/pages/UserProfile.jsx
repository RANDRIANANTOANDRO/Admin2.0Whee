import React, {useState, useEffect} from "react";
import EventService from "../services/EventService";
import axios from "axios";
import {storage} from "../firebase"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"; 



function UserProfile() {
const[fileData, setFileData]=useState("");
const[selectedFile, setSelectedFile]=useState("");
const[profileImage, setProfileImage]=useState("https://i.imgur.com/cEmbD0i.jpg");
    const[formData, setFormData]=useState({
        titre: "",
        lieuEvent: "",
        heureEvent: "",
        dateEvent: "",
        description: "",
        image: "",
        note: "",
        categories: [] 
    });
    const fileSelectedHandler =event=>{
        console.log(event.target.value.files[0]);
    }
   
       const getFile = event => {
        console.log(event);
        setSelectedFile(event.target.files[0]);
        const reader = new FileReader();
        reader.onload =()=>{
            if(reader.readyState===2){
                setProfileImage(reader.result)
            }

        }
        reader.readAsDataURL(event.target.files[0])
 
        // setFormData({
        //     ...formData,
        //     image: event.target.files[0]
        // })
        const formaData = new FormData();

        formaData.append("file", event.target.files[0]);
        
        formaData.append("upload_preset", "joel");
        const imageRef = ref(storage, `images/${selectedFile.name}`);
        uploadBytes(imageRef, selectedFile).then((snapsot )=>{
            getDownloadURL(snapsot.ref).then((url)=>{
                setFormData({
                    ...formData,
                    image: url
                })
                
            })
            
        });
      formData.image = storage + 'images/'+selectedFile.name;

        }
    
        
const fileUploadHandler = ()=>{

}
   
    const addEvent = (e) => {
        e.preventDefault();
        console.log(formData);
        EventService.publierEvent(formData);
        setFormData({
            titre: "",
            lieuEvent: "",
            heureEvent: "",
            dateEvent: "",
            description: "",
            image: "",
            note: "",
            categories: []
        })
    }

    return (
        <div className="container d-flex justify-content-center my-5">
            <div className="row my-2 mx-2 main">
                {/*left-column*/}
                <div className="col-md-4 col-5 col-4 mycol">
                    {/*image*/}
                    <img src={profileImage} width="100%" height="100%"/>
                    <input type="file" onChange = {getFile}/>
                </div>
                {/*right-column*/}
                <div className="col-md-8 col-7 xcol">
                    <h2 className="title pt-5 pb-3 titreEvent">Créer un évènement</h2>
                    <form className="myform">
                        <div className="row rone">
                            <div className="form-group col-md-6 fone py-3">
                                <label className="form-control">Titre</label>
                            </div>
                            <div className="form-group col-md-6 col-10 ftwo py-3">
                                <input type="text" className="form-control" placeholder="Last name" value={formData.titre} onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    titre: e.target.value
                                                })
                                            }
                                        }/>
                            </div>
                        </div>
                        <div className="row rtwo">
                            <div className="form-group col-md-6 fthree py-3 evenementLabel">
                                <label className="form-control">Lieu</label>

                            </div>
                            <div className="form-group col-md-6 ffour py-3 evenementLabel">
                                <input type="text" className="form-control lm" placeholder={formData.lieuEvent} value={formData.lieuEvent} onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    lieuEvent: e.target.value
                                                })
                                            }
                                        }/>
                            </div>
                        </div>
                        <div className="row rthree">
                            <div className="form-group col-md-6 ffive py-3 evenementLabel">
                                <label className="form-control">Heure</label>
                            </div>
                            <div className="form-group col-md-6 fthree py-3 evenementLabel">
                                <input type="time" className="form-control" placeholder="Confirm Password" onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    heureEvent: e.target.value
                                                })
                                            }
                                        } />
                            </div>
                        </div>
                        <div className="row rthree">
                            <div className="form-group col-md-6 ffive py-3 evenementLabel">
                                <label className="form-control">Date</label>
                            </div>
                            <div className="form-group col-md-6 fthree py-3 evenementLabel">
                                <input type="date" className="form-control" placeholder="Mety" value={formData.dateEvent} onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    dateEvent: e.target.value
                                                })
                                            }
                                        }/>
                            </div>
                        </div>
                        <div className="row rthree">
                            <div className="form-group col-md-6 ffive py-3 evenementLabel">
                                <label className="form-control">Evaluation</label>
                            </div>
                            <div className="form-group col-md-6 fsix py-3 evenementLabel">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>

                        </div>
                        <div className="row rthree">
                            <div className="form-group col-md-6 ffive py-3 evenementLabel">
                                <label className="form-control">Description</label>
                            </div>
                            <div className="form-group col-md-6 fsix py-3 evenementLabel">
                                <textarea type="password" className="form-control" placeholder="Confirm Password"  onChange={
                                            (e) => {
                                                setFormData({
                                                    ...formData,
                                                    description: e.target.value
                                                })
                                            }
                                        }/>
                            </div>
                        </div>
                        <div className="row rfour">
                            <div className="form-group col-md-6 feight py-3">
                                <p className="text-muted">
                                    <br/>
                                    <button className="deleteButton">Vider</button>
                                    <button className="editButton" onClick={addEvent}>Ajouter</button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default UserProfile
