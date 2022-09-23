import axios from 'axios';

const VEHICULE_API_BASE_URL = "http://localhost:8090/api/whee/vehicules";

class VehiculeService{
    getVehicules(){
        return axios.get(VEHICULE_API_BASE_URL);
    }
    publierVehicule(vehicule){
        return axios.post(VEHICULE_API_BASE_URL, vehicule);
    }

    getVehiculeById(vehiculeId){
        return axios.get(VEHICULE_API_BASE_URL+'/'+vehiculeId);
    }

    updateVehicule(vehicule,vehiculeId){
        return axios.put(VEHICULE_API_BASE_URL+'/'+vehiculeId, vehicule);
    }

    


}

export default new VehiculeService()