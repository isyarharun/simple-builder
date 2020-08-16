<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <a-radio-group>
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
export default {
  props: {
    question: String,
    options: Array
  },
  data() {
    return {
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      }
    };
  }
};
</script>
