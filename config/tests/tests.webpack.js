const importAll = r => r.keys().forEach(r);

// require.context(directory, useSubdirectories = false, regExp = /^\.\//)
importAll(require.context('../../app', true, /\.spec\.js$/));
importAll(require.context('../../server', true, /\.spec\.js$/));
