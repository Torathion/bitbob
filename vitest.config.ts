import { defineConfig } from 'vitest/config'

if (process.env.TEST_WATCH) {
  // Patch stdin on the process so that we can fake it to seem like a real interactive terminal and pass the TTY checks
  process.stdin.isTTY = true
  process.stdin.setRawMode = () => process.stdin
}

const isCI = process.env.CI === 'true'

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      exclude: ['**/*.js', '**/*.d.ts', '**/types/', '**/index.ts', '**/constants.ts', '**/*.test.ts', '**/*.spec.ts', '**/*.config.ts'],
      reporter: isCI ? ['text', ['json', { summary: true }], 'json-summary'] : ['default', 'hanging-process']
    },
    reporters: isCI ? ['verbose', 'json', 'junit'] : ['default', 'hanging-process'],
    outputFile: {
      json: './test-results/test-results.json',
      junit: './test-results/test-results.xml'
    },
    silent: isCI
  }
})
