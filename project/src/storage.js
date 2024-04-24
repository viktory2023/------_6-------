const storage = {
  auth: {
    token: "",
    type: ""
  },
  isLogged: false,
  profile: {
    username: "",
    firstName: "",
    lastName: "",
    patronymic: "",
    role: null,
    hasOrg: false,
    organizationId: null   
  }
};

export default storage;