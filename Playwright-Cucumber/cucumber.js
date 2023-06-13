const common = `
    --require setup/assertions.js
    --require setup/hook.js
    --require step-defitions/**/*.step.js
`

module.exports = {
    default: `${common} features/**/*.feature`,
}