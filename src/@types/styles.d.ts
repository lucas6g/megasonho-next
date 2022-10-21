import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      yellow: string
      green: string
      red: string
      white: string
      gray: string
      darkBlue: string
      black: string
      lighBlack: string
    }

    fonts: {
      lexend: string
    }
    breakpoints: {
      tablet: string
      laptop: string
      desktop: string
    }
  }
}
