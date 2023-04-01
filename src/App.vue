<template>
  <div class="app-container">
    <div v-for="character in characters" :key="character.name">
      <character-animation
        :character="character.name"
        :action="availableActions[character.animation]"
      ></character-animation>
      <animation-selector v-model="character.animation"></animation-selector>
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
      characters: [
        {
          name: "vue",
          animation: characterActions.idle.name,
        },
        {
          name: "angular",
          animation: characterActions.idle.name,
        },
        {
          name: "react",
          animation: characterActions.idle.name,
        },
      ],
    };
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
}
</style>
