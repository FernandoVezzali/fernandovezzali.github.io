# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

install yarn globally:

```
npm install --global yarn
```

```
npm install
```

### NVM for Windows

https://github.com/coreybutler/nvm-windows


### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

If you get this error on Powershell
```
yarn : File C:\Program Files\nodejs\yarn.ps1 cannot be loaded.
```

then try this
```
Set-ExecutionPolicy Unrestricted
```

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment (GitBash)

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Node

Installing a new version

```
nvm install 18.20.7
```

Change to new version

```
nvm use 18.20.7
```

### docusaurus upgrade

https://docusaurus.io/docs/migration/v3