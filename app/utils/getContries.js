import React, { useEffect, useState } from "react"

import { GET_COUNTRIES } from "../constants/api";
import axios from "axios"

export default function getContries() {
const [countryCodeData, setCountryCodeData] = useState([]);

    useEffect(() => {
        axios
          .get(GET_COUNTRIES)
          .then(response => setCountryCodeData(response.data?.countries))
          .catch(error => console.log('country code error'));
    }, []);
    return countryCodeData
}