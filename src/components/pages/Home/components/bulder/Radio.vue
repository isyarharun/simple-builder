<template>
  <div>
    <a-card>
      <a-textarea v-model="model" />
      <div v-for="(option, index) in options" :key="index">
        <a-radio :disabled="true"><a-input v-model="option.text"/></a-radio>
      </div>
      <div>
        <a-button @click="add()" type="primary">
          Add
        </a-button>
      </div>
    </a-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    question: String,
    index: Number
  },
  data() {
    return {
      options: [{ text: "Option" }]
    };
  },
  methods: {
    ...mapActions(["setQuestion", "setOptions"]),
    add() {
      this.options.push({ text: "Option" });
      this.setOptions({ index: this.index, options: this.options });
    }
  },
  computed: {
    model: {
      get() {
        return this.question;
      },
      set(value) {
        this.setQuestion({ index: this.index, question: value });
      }
    }
  }
};
</script>
