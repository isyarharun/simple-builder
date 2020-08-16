import Api from "@/services/Api";

export default {
  saveForm(params) {
    return Api().post("form/save", params);
  },
  getForm(id) {
    return Api().get(`form/${id}`);
  }
};
