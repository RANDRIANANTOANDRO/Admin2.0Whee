import axios from 'axios';
const EVENT_API_BASE_URL = "http://localhost:8090/api/whee/newCompte";
class UserService {
    getCompte() {
        return axios.get(EVENT_API_BASE_URL);
    }
    newCompte(event) {
        return axios.post(EVENT_API_BASE_URL, event);
    }

    getEventById(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/' + eventId);
    }

    updateEvent(event, eventId) {
        return axios.put(EVENT_API_BASE_URL + '/' + eventId, event);
    }
    getByMail(email) {
        return axios.get("http://localhost:8090/api/whee/findUserByMail/" + email);
    }
    getIdByMail(email) {
        return axios.get("http://localhost:8090/api/whee/findIdByMail/" + email);
    }


}

export default new UserService()
