import axios from "axios";

const url = axios.create({ baseURL: "http://localhost:3001" })

export default {
    loadRestaurants: () => url.get("/restaurants")
}