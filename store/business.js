// state
export const state = () => ({
  businessType: 1
});

// actions
export const actions = {
  changeType(state, id) {
    this.commit("theme/setType", id);
    return id;
  }
};

// mutations
export const mutations = {
  setType(state, id) {
    state.businessType = id;
  }
};
