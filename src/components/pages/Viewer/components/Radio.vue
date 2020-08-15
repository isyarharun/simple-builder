<template>
  <div>
    <a-card>
      <div>{{ question }}</div>
      <div v-for="(option, index) in options" :key="index">
        <a-radio>{{ option.text }}</a-radio>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    options: Array
  }
};
</script>
