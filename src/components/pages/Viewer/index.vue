<template>
  <div class="viewer-wrapper">
    <a-row>
      <a-col :span="6"></a-col>
      <a-col :span="12">
        <div v-for="(component, index) in components" :key="index">
          <component
            :is="getComponent(component.type)"
            :index="index"
            :options="component.options"
            :question="component.question"
          />
        </div>
        <div>
          <a-button
            v-if="components.length > 0"
            @click="sendForm"
            type="primary"
            style="margin-top: 10px"
          >
            Submit
          </a-button>
        </div>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
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
    ...mapActions(["fetchSavedForm", "setViewerComponents", "submitForm"]),
    getComponent(type) {
      if (type === "Static") {
        return Static;
      } else if (type === "Input") {
        return Input;
      } else if (type === "Dropdown") {
        return Dropdown;
      } else if (type === "Radio") {
        return Radio;
      }
    },
    generateForm() {
      for (let i = 0; i < this.builderComponents.length; i++) {
        let current = this.builderComponents[i];
        if (current.type === "Static") {
          this.components.push({
            type: "Static",
            question: current.question
          });
        } else if (current.type === "Input") {
          this.components.push({
            type: "Input",
            question: current.question
          });
        } else if (current.type === "Radio") {
          this.components.push({
            type: "Radio",
            question: current.question,
            options: current.options
          });
        } else if (current.type === "Dropdown") {
          this.components.push({
            type: "Dropdown",
            question: current.question,
            options: current.options
          });
        }
      }
      this.setViewerComponents(this.components);
    },
    sendForm() {
      const id = this.$route.query.id;
      this.submitForm(id);
    }
  },
  async mounted() {
    const id = this.$route.query.id;
    await this.fetchSavedForm(id);
    this.generateForm();
  }
};
</script>

<style lang="scss">
.viewer-wrapper {
  text-align: left;

  .question-wrapper {
    border: none;
    resize: none;
    border-bottom: solid;
    padding-bottom: 5px;
    margin-bottom: 15px;
  }

  .ant-card-bordered {
    margin-top: 10px;
    background-color: wheat;
  }

  .add-option-btn {
    margin-top: 10px;
  }

  .ant-input {
    margin-bottom: 10px;
  }
}
</style>
