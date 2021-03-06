import Template from "@/js/classes/Template";
import defaultTemplates from "@/assets/templates/"

const array = localStorage.templates ? JSON.parse(localStorage.templates) : defaultTemplates;

const templates = {
  namespaced: true,
  state() {
    return {
      templates: array
    }
  },
  getters: {
    getTemplateByName: (state) => (name) => {
      const templates = state.templates;
      const template = templates.find(template => {
        return template.name === name;
      })
      if (template) {
        return template;
      } else {
        console.log("No template found");
        return null;
      }
    }
  },
  mutations: {
    createTemplate(state, name) {
      const template = new Template(name);
      console.log(template);
      state.templates.push(new Template(name));
    }
  },
  actions: {
    createTemplate({ state, commit, dispatch }, name) {
      const existing = state.templates.find(template => {
        return template.name === name;
      })
      if (existing) {
        console.log("Template with that name already exists");
        return "Template with that name already exists";
      } else {
        commit('createTemplate', name);
        dispatch('saveTemplates');
        return `Template "${name}" created`
      }
    },
    saveTemplates({ state }) {
      console.log("Saving Templates");
      localStorage.templates = JSON.stringify(state.templates);
    }
  }
}

export default templates;