import { defineRecipe } from '@pandacss/dev'

export const overlay = defineRecipe({
  className: 'overlay',
  base: {
    position: 'fixed',
    zIndex: 'docked',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'accent',
    opacity: 0,
    _open: {
      animation: 'fadeIn 0.3s ease-in-out',
    },
    _closed: {
      animation: 'fadeOut 0.3s ease-in-out',
    },
  },
  defaultVariants: {
    placement: 'screen',
    size: 'full',
    stacking: 'overlay',
  },
  variants: {
    size: {
      full: {
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      },
      body: {
        top: 'headerHeight',
        bottom: 0,
        right: 0,
        left: 0,
      },
    },
    placement: {
      screen: {
        position: 'fixed',
      },
      parent: {
        position: 'absolute',
      },
    },
    stacking: {
      overlay: {
        zIndex: 'overlay',
      },
      banner: {
        zIndex: 'banner',
      },
      sticky: {
        zIndex: 'sticky',
      },
    },
  },
})
