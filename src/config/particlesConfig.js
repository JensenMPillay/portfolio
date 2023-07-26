const particlesConfig = {
  fpsLimit: 30,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10,
        },
      },
      resize: {
        enable: true,
        delay: 0.5,
      },
    },
    modes: {
      //   attract: {
      //     distance: 200,
      //     duration: 0.4,
      //     easing: "ease-out-squad",
      //     factor: 3,
      //     maxSpeed: 50,
      //     speed: 1,
      //   },
      //   grab: {
      //     distance: 400,
      //     links: {
      //       blink: false,
      //       consent: false,
      //       opacity: 1,
      //     },
      //   },
      bubble: {
        distance: 100,
        duration: 2,
        mix: false,
        opacity: 10,
        size: 50,
        divs: {
          distance: 200,
          duration: 0.4,
        },
        factor: 10,
        radius: 100,
        easing: "ease-out-squad",
        maxSpeed: 50,
        speed: 1,
      },
      // push: {
      //   default: true,
      //   quantity: 1,
      // },
      //   repulse: {
      //     distance: 200,
      //     duration: 0.4,
      //   },
      slow: {
        factor: 3,
        radius: 100,
      },
    },
  },
  particles: {
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 70,
    },
    shape: {
      close: true,
      fill: true,
      image: [
        {
          src: "https://www.svgrepo.com/show/503151/adobe-xd.svg",
          width: 24,
          height: 24,
          // replaceColor: true,
        },
        {
          src: "https://www.svgrepo.com/show/344496/bootstrap.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/445675/css.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/532271/figma.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/447165/github-outline.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/479068/html5-logo.svg",
          width: 12,
          height: 12,
        },
        {
          src: "https://www.svgrepo.com/show/508935/nodejs02.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/306453/mysql.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/354112/nextjs.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/508936/php02.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/306598/prestashop.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/473768/react.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/443470/brand-symfony.svg",
          width: 24,
          height: 24,
        },
        {
          src: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
          width: 24,
          height: 24,
        },
      ],
      type: "image",
    },
    color: {
      value: "#ffffff",
    },
    size: {
      value: { min: 5, max: 20 },
    },
    rotate: {
      direction: "random",
      random: true,
      value: 45,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.2,
        maximumValue: 0.5,
      },
    },
    collisions: {
      absorb: {
        speed: 2,
      },
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: false,
      opacity: 0.5,
      width: 0.5,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  detectRetina: true,
};

export default particlesConfig;
