const { series, watch, dest } = require('gulp')
const exec = require('child_process').execSync

const build = async () => {
    exec('tsc && api-extractor run --local --verbose')
}
const createMd = async () => {
    exec('api-documenter markdown -i temp -o markdown')
}

exports.build = build
exports.createMd = createMd
exports.watch = () => {
    return watch(['src/**/**.ts'], series(build, createMd))
}