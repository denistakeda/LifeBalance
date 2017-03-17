const importAll = r => r.keys().forEach(r);

// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
importAll(require.context('../../server', true, /\.spec\.js$/));
