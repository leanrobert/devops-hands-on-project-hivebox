const fs = require('fs');

const getVersion = () => {
    try {
        return fs.readFileSync('VERSION', 'utf8').trim();
    } catch (error) {
        return 'Version file not found';
    }
};

const printVersion = () => {
    const version = getVersion();
    console.log(`Current Version: v${version}`);
};

printVersion();