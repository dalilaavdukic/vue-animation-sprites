<template>
  <div class="animation-selector">
    <select :value="modelValue" @input="updateValue">
      <option
        v-for="animation in animations"
        :value="animation.name"
        :key="animation.name"
      >
        {{ animation.name }}
      </option>
    </select>
  </div>
</template>

<script>
import characterActions from "@/assets/constants/characterActions";

export default {
  name: "AnimationSelector",
  props: ["modelValue"],
  data() {
    return {
      animations: characterActions,
    };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.animation-selector {
  text-align: center;
}
</style>