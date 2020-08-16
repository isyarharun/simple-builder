import Api from "@/services/Api";

export default {
  saveForm(params) {
    return Api().post("form/save", params);
  },
  submitForm(params) {
    return Api().post("form/submit", params);
  },
  getForm(id) {
    return Api().get(`form/${id}`);
  }
};
