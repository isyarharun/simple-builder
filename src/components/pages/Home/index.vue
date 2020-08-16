<template>
  <div class="builder-wrapper">
    <a-row>
      <a-col :span="6"></a-col>
      <a-col :span="12">
        <div v-for="(type, index) in components" :key="index">
          <component
            :is="getComponent(type.type)"
            :index="index"
            :question="type.question"
          />
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
            <a-button type="primary" style="margin-top: 10px">
              Add Question
            </a-button>
          </a-dropdown>
          <a-button
            v-if="components.length > 0"
            @click="save"
            type="primary"
            style="margin-left: 8px"
          >
            Save
          </a-button>
        </div>
      </a-col>
      <a-col :span="6"></a-col>
    </a-row>
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
    addComponent(type) {
      if (type === "Static") {
        this.components.push({
          type: "Static",
          question: "your static text"
        });
      } else if (type === "Input") {
        this.components.push({
          type: "Input",
          question: "your question"
        });
      } else if (type === "Dropdown") {
        this.components.push({
          type: "Dropdown",
          question: "Your Question"
        });
      } else if (type === "Radio") {
        this.components.push({
          type: "Radio",
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
<style lang="scss">
.builder-wrapper {
  text-align: left;

  .question-wrapper {
    border: none;
    resize: none;
    border-bottom: solid;
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
