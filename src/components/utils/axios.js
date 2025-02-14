/* 1773ec818c94a2ae87d9215120438208 */

import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default instance;
