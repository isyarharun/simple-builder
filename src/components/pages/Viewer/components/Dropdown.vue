<template>
  <div>
    <a-card>
      <div class="question-wrapper">{{ question }}</div>
      <div>
        <a-select v-model="model" style="width: 100%">
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
import { mapActions } from "vuex";
export default {
  props: {
    question: String,
    options: Array,
    index: Number
  },
  data() {
    return {
      value: undefined
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
