import axios from 'axios';

const ANNONCE_API_BASE_URL = "http://localhost:8090/api/whee/annonces";

class AnnonceCovoiturageService{
    getAnnonces(){
        return axios.get(ANNONCE_API_BASE_URL);
    }
    publierAnnonce(annonce){
        return axios.post(ANNONCE_API_BASE_URL, annonce);
    }

    getAnnoncesById(annonceId){
        return axios.get(ANNONCE_API_BASE_URL+'/'+annonceId);
    }

    updateAnnonce(annonce,annonceId){
        return axios.put(ANNONCE_API_BASE_URL+'/'+annonceId, annonce);
    }

    


}

export default new AnnonceCovoiturageService()