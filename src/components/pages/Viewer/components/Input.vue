<template>
  <div>
    <a-card>
      <div>{{ question }}</div>
      <a-input placeholder="Your answer" />
    </a-card>
  </div>
</template>
<script>
export default {
  props: {
    question: String
  }
};
</script>
