import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 376,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const polyFluidSizing = (property, map) => {
  function linearInterpolation(map) {
    const keys = Object.keys(map).sort();
    const m = (map[keys[1]] - map[keys[0]]) / (keys[1] - keys[0]);
    const b = map[keys[0]] - m * keys[0];
    const sign = b < 0 ? '-' : '+';
    return `calc(${m * 100}vw ${sign} ${sign === '-' ? Math.abs(b) : b}px);`;
  }

  const keys = Object.keys(map).sort();
  let output = '';

  // Minimum size
  output += `${property}: ${map[keys[0]]}px;`;

  // Interpolated size through breakpoints
  keys.slice(0, keys.length - 1).forEach((key, i) => {
    output += `\n@media (min-width:${key}px) {
  ${property}: ${linearInterpolation({
      [key]: map[key],
      [keys[i + 1]]: map[keys[i + 1]],
    })}
}`;
  });

  // Maximum size
  output += `\n@media (min-width:${keys[keys.length - 1]}px) {
  ${property}: ${map[keys[keys.length - 1]]}px;
}`;

  return output;
};
