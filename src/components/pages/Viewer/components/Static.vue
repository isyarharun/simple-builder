<template>
  <div>
    <a-card>
      <div>{{ question }}</div>
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
