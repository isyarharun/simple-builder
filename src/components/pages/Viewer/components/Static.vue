<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
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
