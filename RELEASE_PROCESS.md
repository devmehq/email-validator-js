# Release Process Documentation

## Overview
This project uses semantic-release for automated versioning and publishing based on conventional commits.

## Release Workflow

### Branches
- **master/main**: Production releases (stable versions)
- **develop**: Beta pre-releases
- **next**: Next pre-releases
- **alpha**: Alpha pre-releases

### Automated Releases

#### Production Release (master/main)
- Triggered automatically on push to `master` or `main` branch
- Creates stable version (e.g., `1.2.3`)
- Publishes to NPM without pre-release tag
- Creates GitHub release
- Updates CHANGELOG.md
- Runs tests and build before release

#### Beta Pre-release (develop)
- Triggered automatically on push to `develop` branch
- Creates beta version (e.g., `1.2.3-beta.1`)
- Publishes to NPM with beta tag
- Creates GitHub pre-release
- Uses separate beta configuration

### CI/CD Workflows

#### `.github/workflows/ci.yml`
- Runs on all branches except master/main
- Executes tests, linting, and builds
- Creates pre-releases from develop branch

#### `.github/workflows/release.yml`
- Runs on master/main branches
- Full release pipeline with semantic versioning
- NPM publishing and GitHub releases

## Commit Conventions

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Types
- **feat**: New feature (minor version bump)
- **fix**: Bug fix (patch version bump)
- **docs**: Documentation changes (patch version bump)
- **style**: Code style changes (patch version bump)
- **refactor**: Code refactoring (patch version bump)
- **perf**: Performance improvements (patch version bump)
- **test**: Test changes (patch version bump)
- **build**: Build system changes (patch version bump)
- **ci**: CI/CD changes (patch version bump)
- **chore**: Other changes (patch version bump)
- **revert**: Revert commits (patch version bump)

### Breaking Changes
Add `BREAKING CHANGE:` in commit body or `!` after type for major version bump.

Example:
```
feat!: remove deprecated API

BREAKING CHANGE: The old API has been removed
```

## Using Commitizen

For interactive commit creation:
```bash
npx cz
```

Or install globally:
```bash
npm install -g commitizen
git cz
```

## Configuration Files

### `.releaserc.json`
Semantic-release configuration with best practices:
- Multi-branch support with version patterns
- Granular release rules based on commit types and scopes
- Conventional commits preset with custom sections
- Automated changelog generation with emojis
- NPM publishing configuration
- GitHub release integration
- Git assets management

### `.commitlintrc.json`
Enforces conventional commit format in commit messages.

### `.czrc`
Commitizen configuration for interactive commits.

### `package.json`
Contains release script and commitizen configuration.

## Manual Release

### Trigger Release
```bash
yarn release
```

### Dry Run (Preview)
```bash
yarn release:dry
```

## Automated Release Process

Semantic-release automatically:
1. Analyzes commits since last release using conventional commit format
2. Determines version bump based on commit types:
   - `feat`: Minor version (new features)
   - `fix`: Patch version (bug fixes)
   - `BREAKING CHANGE`: Major version
   - Other types: Patch or no release based on configuration
3. Generates release notes with categorized changes
4. Updates CHANGELOG.md with formatted sections
5. Creates git tag with version
6. Creates GitHub release with notes
7. Publishes to NPM with appropriate tag

## Environment Variables

Required secrets in GitHub repository:
- `NPM_TOKEN`: NPM authentication token for publishing
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

## Release Notes

Release notes are automatically generated from commit messages and included in:
- GitHub releases
- CHANGELOG.md
- NPM release

## Troubleshooting

### No Release Created
- Ensure commits follow conventional format
- Check if there are releasable commits since last version
- Verify branch configuration in `.releaserc.json`
- Check release rules for your commit types

### NPM Publishing Failed
- Verify NPM_TOKEN is set in GitHub secrets
- Check NPM account has publish permissions
- Ensure package name is available

### Pre-release Version Issues
- Beta releases only from develop branch
- Alpha releases from feature branches
- Stable releases only from master/main

## Development Workflow

1. Create feature branch from develop
2. Make changes and commit using conventional format
3. Create PR to develop branch
4. After merge, beta version is automatically released
5. When ready for production, merge develop to master
6. Production version is automatically released

## Semantic-Release Features

- **Automated Versioning**: Version determined by commit analysis
- **Conventional Commits**: Full conventionalcommits preset support
- **Multi-Branch Support**: Different strategies per branch
- **Pre-releases**: Beta, alpha, RC, and next versions
- **Smart Release Rules**: Granular control over what triggers releases
- **Emoji Sections**: Enhanced changelog readability with emojis
- **GitHub Integration**: Automated releases with notes
- **NPM Publishing**: Automatic package publishing with tags
- **CI/CD Optimized**: Designed for automated pipelines

## Version History

Check `CHANGELOG.md` for detailed version history.