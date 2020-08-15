<template>
  <div>
    <a-card>
      <a-textarea v-model="model" />
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
  methods: {
    ...mapActions(["setQuestion"])
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
