<template>
  <div>
    <div v-for="(component, index) in components" :key="index">
      <component
        :is="component.component"
        :options="component.options"
        :question="component.question"
      />
    </div>
  </div>
</template>
<script>
import Dropdown from "./components/Dropdown";
import Static from "./components/Static";
import Input from "./components/Input";
import Radio from "./components/Radio";
export default {
  components: { Dropdown, Static, Input, Radio },
  data() {
    return {
      builderData: [],
      components: []
    };
  },
  methods: {
    generateForm() {
      for (let i = 0; i < this.builderData.length; i++) {
        let current = this.builderData[i];
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
    }
  },
  mounted() {
    this.builderData = JSON.parse(
      '[{"type":"Static","component":{"props":{"question":{},"index":{}},"methods":{},"computed":{"model":{}},"staticRenderFns":[],"_compiled":true,"beforeCreate":[null],"beforeDestroy":[null],"__file":"src/components/pages/Home/components/bulder/Static.vue","_Ctor":{}},"question":"only text"},{"type":"Radio","component":{"props":{"question":{},"index":{}},"methods":{},"computed":{"model":{}},"staticRenderFns":[],"_compiled":true,"beforeCreate":[null],"beforeDestroy":[null],"__file":"src/components/pages/Home/components/bulder/Radio.vue","_Ctor":{}},"question":"your question","options":[{"text":"Option 1"},{"text":"Option 2"}]}]'
    );
    this.generateForm();
  }
};
</script>
