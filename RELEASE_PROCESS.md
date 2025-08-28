# Release Process Documentation

## Overview
This project uses release-it for automated versioning and publishing based on conventional commits.

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

### `.release-it.json`
Main release-it configuration for production releases:
- Git configuration and tagging
- GitHub release settings
- NPM publishing settings
- Build and test hooks
- Conventional changelog generation

### `.release-it-beta.json`
Beta release configuration for develop branch:
- Pre-release versioning
- Beta NPM tags
- GitHub pre-release settings

### `.commitlintrc.json`
Enforces conventional commit format in commit messages.

### `.czrc`
Commitizen configuration for interactive commits.

### `package.json`
Contains release script and commitizen configuration.

## Manual Release

### Production Release
```bash
yarn release
```

### Beta Release
```bash
yarn release:beta
```

### Dry Run (Preview)
```bash
yarn release:dry
```

### CI Mode (Non-interactive)
```bash
yarn release:ci
```

## Interactive Release Process

Release-it provides an interactive CLI that will:
1. Show current version and proposed new version
2. Allow you to select version bump type (patch/minor/major)
3. Generate changelog from conventional commits
4. Create git tag and push
5. Create GitHub release
6. Publish to NPM

## Release Hooks

The release process includes these hooks:
- **before:init**: Runs linting and tests
- **after:bump**: Builds the project
- **after:git:release**: Logs success message
- **after:release**: Final success message

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
- Verify branch configuration in `.release-it.json`
- Ensure working directory is clean
- Check upstream is set correctly

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

## Release-it Features

- **Interactive Mode**: Step-by-step guided release process
- **Dry Run**: Preview release without making changes
- **Conventional Changelog**: Automatic changelog generation
- **Version Bumping**: Smart version increments based on commits
- **Git Integration**: Automatic tagging and pushing
- **GitHub Releases**: Create releases with notes
- **NPM Publishing**: Automatic package publishing
- **Hooks**: Custom scripts at various stages
- **CI Mode**: Non-interactive for automation

## Version History

Check `CHANGELOG.md` for detailed version history.