<template>
  <div class="app-container">
    <div v-for="character in characters" :key="character">
      <character-animation
        :character="character"
        :action="availableActions[animations[character]]"
      ></character-animation>
      <animation-selector v-model="animations[character]"></animation-selector>
    </div>
  </div>
</template>

<script>
import CharacterAnimation from "./components/CharacterAnimation.vue";
import AnimationSelector from "./components/AnimationSelector.vue";
import characterActions from "@/assets/constants/characterActions";

export default {
  name: "App",
  components: { CharacterAnimation, AnimationSelector },
  data() {
    return {
      availableActions: characterActions,
      characters: ["vue", "angular", "react"],
      animations: {
        vue: characterActions.idle.name,
        angular: characterActions.idle.name,
        react: characterActions.idle.name,
      },
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
}
</style>
