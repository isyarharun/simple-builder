<template>
  <div>
    <div>
      <div v-for="(type, index) in components" :key="index">
        <component
          :is="type.component"
          :index="index"
          :question="type.question"
        />
      </div>
    </div>
    <div>
      <a-dropdown :trigger="['click']">
        <a-menu slot="overlay">
          <a-menu-item key="1" @click="addComponent('Static')"
            >Static
          </a-menu-item>
          <a-menu-item @click="addComponent('Input')" key="2"
            >Input</a-menu-item
          >
          <a-menu-item @click="addComponent('Radio')" key="3"
            >Radio</a-menu-item
          >
          <a-menu-item @click="addComponent('Dropdown')" key="4"
            >Dropdown</a-menu-item
          >
        </a-menu>
        <a-button type="primary" style="margin-left: 8px">
          Add Question
        </a-button>
      </a-dropdown>
    </div>
    <div>
      <a-button @click="save" type="primary" style="margin-left: 8px">
        Save
      </a-button>
    </div>
  </div>
</template>
<script>
import Dropdown from "./components/bulder/Dropdown";
import Static from "./components/bulder/Static";
import Input from "./components/bulder/Input";
import Radio from "./components/bulder/Radio";
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
      getComponents: "getComponents"
    })
  },
  methods: {
    ...mapActions(["setComponents", "saveForm"]),
    addComponent(type) {
      if (type === "Static") {
        this.components.push({
          type: "Static",
          component: Static,
          question: "your question"
        });
      } else if (type === "Input") {
        this.components.push({
          type: "Input",
          component: Input,
          question: "your question"
        });
      } else if (type === "Dropdown") {
        this.components.push({
          type: "Dropdown",
          component: Dropdown,
          question: "Your Question"
        });
      } else if (type === "Radio") {
        this.components.push({
          type: "Radio",
          component: Radio,
          question: "your question"
        });
      }

      this.setComponents(this.components);
    },
    save() {
      this.saveForm();
    }
  }
};
</script>
