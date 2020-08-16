<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <a-input :value="responseData" placeholder="Your answer" />
    </a-card>
  </div>
</template>
<script>
export default {
  props: {
    question: String,
    response: String
  },
  data() {
    return {
      responseData: this.response
    };
  }
  
};
</script>
