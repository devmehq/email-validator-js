import release from 'release-it';

const branch = process.env.BRANCH || process.env.CI_REF_NAME || '';
const branchSlug = branch.replace(/\//g, '-');
const branchPrefix = branch.split('/')[0];

/**
 * @type {import('release-it').Config}
 */
const config = {
  isPreRelease: branch !== 'master',
  preRelease: branch !== 'master',
  preReleaseId: branch === 'master' ? '' : branch,
  npm: {
    skipChecks: true,
    publishArgs: ['--access', 'public', '--registry', 'https://registry.npmjs.org/'],
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          // match anything else
          { type: '**', release: 'patch' },
          { subject: '**', release: 'patch' },
          { message: '**', release: 'patch' },
        ],
      },
    },
  },
};

release(config).then((output) => {
  console.debug('output', output);

  const { version: nextVersion, latestVersion, name, changelog } = output || {};

  console.info(`Last release is ${latestVersion} and next release is ${nextVersion}`);
  if (latestVersion === nextVersion) {
    console.info(`No release is needed, last release is ${latestVersion} and next release is ${nextVersion}`);
    return;
  }

  if (!nextVersion) {
    console.info(`No release is needed - no next version`);
  }
});
