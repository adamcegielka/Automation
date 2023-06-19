const common = `./features/**/*.feature \
                --require-module ts-node/register \
                --require ./step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --format progress-bar`

const dev = `${common} --tags @dev'`
const smoke = `${common} --tags @smoke'`
const regression = `${common} --tags @regression'`

console.log(`\n 😎 😎 😎 😎 😎 \n`)

export { dev, smoke, regression }