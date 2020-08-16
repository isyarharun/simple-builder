import FormService from "@/services/FormService";
import router from "../router";
const state = {
  form: {
    components: []
  }
};
const types = {
  SET_COMPONENTS: "builder/SET_COMPONENTS",
  SET_QUESTION: "builder/SET_QUESTION",
  SET_OPTIONS: "builder/SET_OPTIONS"
};
const mutations = {
  [types.SET_COMPONENTS](state, components) {
    state.form.components = components;
  },
  [types.SET_QUESTION](state, { index, question }) {
    state.form.components[index].question = question;
  },
  [types.SET_OPTIONS](state, { index, options }) {
    state.form.components[index].options = options;
  }
};
const getters = {
  getComponents: state => state.form.components,
  getForm: state => state.form
};
const actions = {
  setComponents({ commit }, components) {
    commit(types.SET_COMPONENTS, components);
  },
  setQuestion({ commit }, { index, question }) {
    commit(types.SET_QUESTION, { index, question });
  },
  setOptions({ commit }, { index, options }) {
    commit(types.SET_OPTIONS, { index, options });
  },
  async saveForm({ state }) {
    const response = await FormService.saveForm(state.form);
    router.push(`/viewer?id=${response.data.id}`);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  types
};
