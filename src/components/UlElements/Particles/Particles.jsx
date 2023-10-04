import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import ReactParticles from 'react-tsparticles';
import {
  THEME_PARTICLES,
} from './particleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const Particles = () => {
  const { dark } = useThemeContext();

  const particlesInit = useCallback(async (engine) => {
    console.log('engine', engine);
    console.log('theme', dark);
    await loadFull(engine);
  }, []);

  const particles = dark
    ? THEME_PARTICLES
    : THEME_PARTICLES;

  return (
    <ReactParticles
      init={particlesInit}
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
