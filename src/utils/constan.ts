const SERVER_IP = "localhost:7073";
//  const SERVER_IP = "192.168.1.85:5281";

export const ENV = {
  SERVER_IP: SERVER_IP,
  BASE_PATH: `https://${SERVER_IP}`,
  API_URL: `https://${SERVER_IP}/api`,

  ENDPOINTS: {
    USUARIOS: {
      LOGIN: "/Auth/Login",
      GET_USER_BY_ID: "/Usuarios",
    },

    OLTS: {
      GET_ALL: "/Olts",
      PUERTOS: "/Olts/seleccionar-puerto"
    },
    TARJETAS: {
      GET_ALL: "/Tarjetas",
    },
    PUERTOS: {
      GET_ALL: "/Puertoes",
    
    }
  },
};
