<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <a-input v-model="model" placeholder="Your answer" />
    </a-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    question: String,
    response: String,
    index: Number
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    ...mapActions(["setViewerValue"])
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.value = value;
        this.setViewerValue({ index: this.index, value });
      }
    }
  }
};
</script>
