<template>
  <div>
    <div v-for="(component, index) in components" :key="index">
      <component
        :is="component.component"
        :options="component.options"
        :question="component.question"
      />
    </div>
    <div>
      <a-button @click="sendForm" type="primary" style="margin-left: 8px">
        Send
      </a-button>
    </div>
  </div>
</template>
<script>
import Dropdown from "./components/Dropdown";
import Static from "./components/Static";
import Input from "./components/Input";
import Radio from "./components/Radio";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Dropdown, Static, Input, Radio },
  data() {
    return {
      components: []
    };
  },
  computed: {
    ...mapGetters({
      builderComponents: "getBuilderComponents",
      viewComponents: "getViewerComponents"
    })
  },
  methods: {
    ...mapActions(["fetchSavedForm", "setViewerComponents"]),
    generateForm() {
      for (let i = 0; i < this.builderComponents.length; i++) {
        let current = this.builderComponents[i];
        if (current.type === "Static") {
          this.components.push({
            type: "Static",
            component: Static,
            question: current.question
          });
        } else if (current.type === "Input") {
          this.components.push({
            type: "Input",
            component: Input,
            question: current.question
          });
        } else if (current.type === "Radio") {
          this.components.push({
            type: "Radio",
            component: Radio,
            question: current.question,
            options: current.options
          });
        } else if (current.type === "Dropdown") {
          this.components.push({
            type: "Dropdown",
            component: Dropdown,
            question: current.question,
            options: current.options
          });
        }
      }
      this.setViewerComponents(this.components);
    },
    sendForm() {
      console.log(JSON.stringify(this.viewComponents));
    }
  },
  async mounted() {
    const id = this.$route.query.id;
    await this.fetchSavedForm(id);
    this.generateForm();
  }
};
</script>
