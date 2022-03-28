export default (options) => {
  let frameIndex = 0; // The current frame to be displayed
  let tickCount = 0; // The number updates since the current frame was first displayed

  const { context, width, height, image, numberOfFrames, ticksPerFrame, loop } =
    options;

  return {
    render: function () {
      // clear the canvas
      context.clearRect(0, 0, width, height);
      // draw the image
      context.drawImage(
        image,
        frameIndex * width,
        0,
        width,
        height,
        0,
        0,
        width,
        height
      );
    },
    update: function () {
      tickCount += 1;

      if (tickCount > ticksPerFrame) {
        tickCount = 0;

        if (frameIndex < numberOfFrames - 1) {
          frameIndex += 1;
        } else if (loop) {
          frameIndex = 0;
        }
      }
    },
  };
};
