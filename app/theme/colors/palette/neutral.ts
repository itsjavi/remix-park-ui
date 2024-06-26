import { createSemanticGrayColor } from '@/theme/helpers/create-semantic-color'
import type { RadixColorConfig } from '../types'

export const neutralSemantic = createSemanticGrayColor('neutral', {
  default: { base: 'black', _dark: 'white' },
  emphasized: '{colors.neutral.12}',
  fg: { base: 'white', _dark: 'black' },
  text: { base: 'black', _dark: 'white' },
})
export const neutral: RadixColorConfig = {
  // Based on Radix Color "gray"
  name: 'neutral',
  light: {
    name: 'neutral',
    scheme: 'light',
    config: {
      accent: '#8D8D8D',
      gray: '#D9D9D9',
      background: '#FCFCFC',
    },
    srgb: {
      1: '#fcfcfc',
      2: '#f9f9f9',
      3: '#f0f0f0',
      4: '#e8e8e8',
      5: '#e0e0e0',
      6: '#d9d9d9',
      7: '#cecece',
      8: '#bbbbbb',
      9: '#8d8d8d',
      10: '#838383',
      11: '#646464',
      12: '#202020',
    },
    srgbAlpha: {
      a1: '#00000003',
      a2: '#00000006',
      a3: '#0000000f',
      a4: '#00000017',
      a5: '#0000001f',
      a6: '#00000026',
      a7: '#00000031',
      a8: '#00000044',
      a9: '#00000072',
      a10: '#0000007c',
      a11: '#0000009b',
      a12: '#000000df',
    },
    p3: {
      1: 'color(display-p3 0.988 0.988 0.988)',
      2: 'color(display-p3 0.975 0.975 0.975)',
      3: 'color(display-p3 0.939 0.939 0.939)',
      4: 'color(display-p3 0.908 0.908 0.908)',
      5: 'color(display-p3 0.88 0.88 0.88)',
      6: 'color(display-p3 0.849 0.849 0.849)',
      7: 'color(display-p3 0.807 0.807 0.807)',
      8: 'color(display-p3 0.732 0.732 0.732)',
      9: 'color(display-p3 0.553 0.553 0.553)',
      10: 'color(display-p3 0.512 0.512 0.512)',
      11: 'color(display-p3 0.392 0.392 0.392)',
      12: 'color(display-p3 0.125 0.125 0.125)',
    },
    p3Alpha: {
      a1: 'color(display-p3 0 0 0 / 0.012)',
      a2: 'color(display-p3 0 0 0 / 0.024)',
      a3: 'color(display-p3 0 0 0 / 0.063)',
      a4: 'color(display-p3 0 0 0 / 0.09)',
      a5: 'color(display-p3 0 0 0 / 0.122)',
      a6: 'color(display-p3 0 0 0 / 0.153)',
      a7: 'color(display-p3 0 0 0 / 0.192)',
      a8: 'color(display-p3 0 0 0 / 0.267)',
      a9: 'color(display-p3 0 0 0 / 0.447)',
      a10: 'color(display-p3 0 0 0 / 0.486)',
      a11: 'color(display-p3 0 0 0 / 0.608)',
      a12: 'color(display-p3 0 0 0 / 0.875)',
    },
    aliased: {
      srgb: {
        contrast: '#fff',
        surface: '#f4f4f4cc',
        indicator: '#8d8d8d',
        track: '#8d8d8d',
      },
      p3: {
        contrast: '#fff',
        surface: 'color(display-p3 0.957 0.957 0.957 / 0.8)',
        indicator: 'oklch(0.643 0 0)',
        track: 'oklch(0.643 0 0)',
      },
    },
  },
  dark: {
    name: 'neutral',
    scheme: 'dark',
    config: {
      accent: '#6E6E6E',
      gray: '#3A3A3A',
      background: '#111111',
    },
    srgb: {
      1: '#111111',
      2: '#191919',
      3: '#222222',
      4: '#2a2a2a',
      5: '#313131',
      6: '#3a3a3a',
      7: '#484848',
      8: '#606060',
      9: '#6e6e6e',
      10: '#7b7b7b',
      11: '#b4b4b4',
      12: '#eeeeee',
    },
    srgbAlpha: {
      a1: '#00000000',
      a2: '#ffffff09',
      a3: '#ffffff12',
      a4: '#ffffff1b',
      a5: '#ffffff22',
      a6: '#ffffff2c',
      a7: '#ffffff3b',
      a8: '#ffffff55',
      a9: '#ffffff64',
      a10: '#ffffff72',
      a11: '#ffffffaf',
      a12: '#ffffffed',
    },
    p3: {
      1: 'color(display-p3 0.067 0.067 0.067)',
      2: 'color(display-p3 0.098 0.098 0.098)',
      3: 'color(display-p3 0.135 0.135 0.135)',
      4: 'color(display-p3 0.163 0.163 0.163)',
      5: 'color(display-p3 0.192 0.192 0.192)',
      6: 'color(display-p3 0.228 0.228 0.228)',
      7: 'color(display-p3 0.283 0.283 0.283)',
      8: 'color(display-p3 0.375 0.375 0.375)',
      9: 'color(display-p3 0.431 0.431 0.431)',
      10: 'color(display-p3 0.484 0.484 0.484)',
      11: 'color(display-p3 0.706 0.706 0.706)',
      12: 'color(display-p3 0.933 0.933 0.933)',
    },
    p3Alpha: {
      a1: 'color(display-p3 0 0 0 / 0)',
      a2: 'color(display-p3 1 1 1 / 0.034)',
      a3: 'color(display-p3 1 1 1 / 0.071)',
      a4: 'color(display-p3 1 1 1 / 0.105)',
      a5: 'color(display-p3 1 1 1 / 0.134)',
      a6: 'color(display-p3 1 1 1 / 0.172)',
      a7: 'color(display-p3 1 1 1 / 0.231)',
      a8: 'color(display-p3 1 1 1 / 0.332)',
      a9: 'color(display-p3 1 1 1 / 0.391)',
      a10: 'color(display-p3 1 1 1 / 0.445)',
      a11: 'color(display-p3 1 1 1 / 0.685)',
      a12: 'color(display-p3 1 1 1 / 0.929)',
    },
    aliased: {
      srgb: {
        contrast: '#fff',
        surface: '#21212180',
        indicator: '#6e6e6e',
        track: '#6e6e6e',
      },
      p3: {
        contrast: '#fff',
        surface: 'color(display-p3 0.125 0.125 0.125 / 0.5)',
        indicator: 'oklch(0.538 0 0)',
        track: 'oklch(0.538 0 0)',
      },
    },
  },
}
