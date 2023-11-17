import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|less)$': 'identity-obj-proxy'
  },
  automock: false,
}

export default config