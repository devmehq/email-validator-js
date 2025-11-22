```markdown
# 🎉 email-validator-js Has a New Home!

**This repository is archived and no longer maintained.**

The official, actively maintained, and future-proof version of **email-validator-js** has moved to:

### 🚀 **https://github.com/email-check-app/email-validator-js**

We've consolidated it under the `email-check-app` organization for streamlined maintenance, faster updates, enhanced TypeScript support, modern tooling, and seamless integration with our disposable/free email domain lists.

### Why you'll love the new repo
- ✅ **Active development** with rapid PR reviews and issue triage  
- ✅ **Full TypeScript** with comprehensive `.d.ts` declarations  
- ✅ **Fresh data sources** for disposable & free email domains  
- ✅ **Optimized bundles** – smaller, tree-shakeable, and ESM/CJS ready  
- ✅ **Automated workflows** for releases, testing, and changelogs  
- ✅ **Expanded coverage** including better error handling and edge cases  

### Migration Guide (Super Quick – Under 1 Minute!)

#### npm / yarn / pnpm users
The **package name has changed** for better scoping, but the API remains 100% compatible:

```bash
# Remove the old package
npm uninstall @devmehq/email-validator-js

# Install the new one (same great features!)
npm install @emailcheck/email-validator-js
```

**No code changes needed** – just swap the package and you're live! 🎯

#### Direct GitHub or raw file users
Update your URLs to keep things current:

```diff
- https://github.com/devmehq/email-validator-js
+ https://github.com/email-check-app/email-validator-js

- https://raw.githubusercontent.com/devmehq/email-validator-js/main/dist/email-validator.min.js
+ https://raw.githubusercontent.com/email-check-app/email-validator-js/main/dist/email-validator.min.js
```

#### Git submodules or forks
```bash
git submodule add https://github.com/email-check-app/email-validator-js.git path/to/module
# Or update existing: git submodule set-url <path> https://github.com/email-check-app/email-validator-js.git
```

### Pro Tips for a Smooth Switch
- **Test it out:** Run your existing tests post-migration – everything should pass unchanged.
- **Caching:** Clear your npm cache if you hit any resolution issues: `npm cache clean --force`.
- **CDN users:** Update any script tags pointing to the old raw files.

### Let's Keep Building Together! 🙌
- ⭐ **Star** the new repo to show your support: https://github.com/email-check-app/email-validator-js
- 🔔 **Watch** for releases and updates (go to Watch → Custom → Releases)

Huge thanks for choosing email-validator-js – your feedback has shaped it into what it is today. Excited for the next chapter!

→ https://github.com/email-check-app/email-validator-js
```
