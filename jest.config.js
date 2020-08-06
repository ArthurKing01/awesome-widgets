module.exports = {
    roots: [
        'src'
    ],
    testRegex: '(.+)\\.test\\.(jsx?|tsx?|ts?)$',
    transform: {
        '^.+\\.(tsx?|ts?)$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}