import FormService from "@/services/FormService";

const state = {
  builderComponents: [],
  components: []
};
const types = {
  SET_VIEWER_COMPONENTS: "viewer/SET_VIEWER_COMPONENTS",
  SET_BUILDER_COMPONENTS: "viewer/SET_BUILDER_COMPONENTS",
  SET_VIEWER_VALUE: "viewer/SET_VIEWER_VALUE"
};
const mutations = {
  [types.SET_VIEWER_COMPONENTS](state, components) {
    state.components = components;
  },
  [types.SET_BUILDER_COMPONENTS](state, builderComponents) {
    state.builderComponents = builderComponents;
  },
  [types.SET_VIEWER_VALUE](state, { index, value }) {
    state.components[index].value = value;
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
  setViewerValue({ commit }, { index, value }) {
    commit(types.SET_VIEWER_VALUE, { index, value });
  },
  setBuilderComponents({ commit }, builderComponents) {
    commit(types.SET_BUILDER_COMPONENTS, builderComponents);
  },
  async fetchSavedForm({ dispatch }, id) {
    const result = await FormService.getForm(id);
    const builderComponents = result.data.components;
    dispatch("setBuilderComponents", builderComponents);
  },
  async submitForm({ state }, id) {
    const params = {
      id,
      components: state.components
    };
    await FormService.submitForm(params);
  }
};

export default {
  state,
  mutations,
  getters,
  actions,
  types
};
