import FormService from "@/services/FormService";

const state = {
  builderComponents: [],
  components: []
};
const types = {
  SET_VIEWER_COMPONENTS: "viewer/SET_VIEWER_COMPONENTS",
  SET_BUILDER_COMPONENTS: "viewer/SET_BUILDER_COMPONENTS"
};
const mutations = {
  [types.SET_VIEWER_COMPONENTS](state, components) {
    state.components = components;
  },
  [types.SET_BUILDER_COMPONENTS](state, builderComponents) {
    state.builderComponents = builderComponents;
  }
};
const getters = {
  getViewerComponents: state => state.components,
  getBuilderComponents: state => state.builderComponents
};
const actions = {
  setViewerComponents({ commit }, components) {
    commit(types.SET_VIEWER_COMPONENTS, components);
  },
  setBuilderComponents({ commit }, builderComponents) {
    commit(types.SET_BUILDER_COMPONENTS, builderComponents);
  },
  async fetchSavedForm({ dispatch }, id) {
    const result = await FormService.getForm(id);
    console.log(result);
    const builderComponents = result.data.components;
    dispatch("setBuilderComponents", builderComponents);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  types
};
