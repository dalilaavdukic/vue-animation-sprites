<template>
  <canvas ref="characterAnimation"></canvas>
</template>

<script>
import sprite from "@/sprite";

const width = 600;
const height = 600;

export default {
  name: "CharacterAnimation",
  props: ["character", "action"],
  data() {
    return {
      characterSprite: {},
    };
  },
  methods: {
    animate: function () {
      requestAnimationFrame(this.animate);
      this.characterSprite.update();
      this.characterSprite.render();
    },
    renderCanvas: function () {
      const canvas = this.$refs.characterAnimation;
      canvas.width = width;
      canvas.height = height;
      const characterImage = new Image();
      characterImage.src = require(`../assets/characters/${this.character}/${this.action.name}.png`);
      this.characterSprite = sprite({
        context: canvas.getContext("2d"),
        width,
        height,
        image: characterImage,
        numberOfFrames: this.action.numberOfFrames,
        ticksPerFrame: this.action.ticksPerFrame,
        loop: this.action.loop,
      });
      this.characterSprite.render();
    },
  },
  mounted() {
    this.renderCanvas();
    this.animate();
  },
  watch: {
    // whenever animation changes, this function will run
    action() {
      this.renderCanvas();
    },
  },
};
</script>

<style scoped>
canvas {
  height: 300px;
}
</style>
