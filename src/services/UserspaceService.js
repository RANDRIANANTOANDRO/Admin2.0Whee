import axios from 'axios'

const USERSPACE_API_BASE_URL = "http://localhost:8090/api/whee/espaceperso";

class UserspaceService {
    getPubByUserId(userId){
        return axios.get(USERSPACE_API_BASE_URL+'/'+userId);
    }
}

export default new UserspaceService()
