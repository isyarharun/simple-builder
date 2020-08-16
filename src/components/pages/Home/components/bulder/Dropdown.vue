<template>
  <div>
    <a-card>
      <a-input class="question-wrapper" v-model="model"/>
      <div v-for="(option, index) in options" :key="index">
        <a-input v-model="option.text" />
      </div>
      <div>
        <a-button class="add-option-btn" @click="add()" type="primary">
          Add option
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
