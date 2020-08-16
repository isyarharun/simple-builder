<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <div>
        <a-select style="width: 100%">
          <a-select-option
            v-for="(option, index) in options"
            :key="index"
            :value="option.text"
          >
            {{ option.text }}
          </a-select-option>
        </a-select>
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
