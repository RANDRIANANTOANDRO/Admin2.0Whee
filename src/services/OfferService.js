import axios from 'axios'

const OFFER_API_BASE_URL = "http://localhost:8090/api/whee/annonces"

class OfferService {
    getOffers() {
        return axios.get(OFFER_API_BASE_URL);
    }
}

export default new OfferService()
