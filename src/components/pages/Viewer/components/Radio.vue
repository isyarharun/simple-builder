<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <a-radio-group v-model="model">
        <a-radio
          v-for="(option, index) in options"
          :value="option.text"
          :key="index"
          :style="radioStyle"
          >{{ option.text }}</a-radio
        >
      </a-radio-group>
    </a-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    question: String,
    options: Array,
    index: Number
  },
  data() {
    return {
      value: undefined,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
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
        this.setViewerValue({ index: this.index, value: this.value });
      }
    }
  }
};
</script>
