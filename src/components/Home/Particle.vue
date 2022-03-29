<template>
  <Particles id="tsparticles" :options="options" />
</template>

<script>
export default {
  name: " Particle",
  data() {
    return {
      options: {
        background: {
          color: {
            value: "#141E27",
          },
        },
        fullScreen: {
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        particles: {
          color: {
            value: "#E0DDAA",
            animation: {
              h: {
                enable: true,
                speed: 2,
              },
            },
          },
          links: {
            color: {
              value: "#EEEDDE",
            },
            enable: true,
            opacity: 0.4,
          },
          move: {
            enable: true,
            outModes: {
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            speed: 4,
          },
          number: {
            density: {
              enable: true,
            },
            value: 50,
          },
          opacity: {
            value: 0.6,
          },
          size: {
            value: {
              min: 0.1,
              max: 3,
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
