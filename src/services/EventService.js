import axios from 'axios';

const EVENT_API_BASE_URL = "http://localhost:8090/api/whee/events";


class EventService{
    getEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }
    publierEvent(event){
        return axios.post(EVENT_API_BASE_URL, event);
    }
    
    getEventById(eventId){
        return axios.get(EVENT_API_BASE_URL+'/'+eventId);
    }

    updateEvent(event,eventId){
        return axios.put(EVENT_API_BASE_URL+'/'+eventId, event);
    }


}

export default new EventService()