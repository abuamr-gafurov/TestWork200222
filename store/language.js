// state
export const state = () => ({
  languageId: 1
});

// actions
export const actions = {
  changeLanguageId(state, id) {
    this.commit("language/setLanguageId", id);
    return id;
  }
};

// mutations
export const mutations = {
  setLanguageId(state, id) {
    state.languageId = id;
  }
};
