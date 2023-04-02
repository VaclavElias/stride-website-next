# Deployment

## Table of Contents

- [GitHub Pages](#github-pages)
- [Azure Web Apps](#azure-web-apps)
  - [Deploying with .NET Framework](#deploying-with-net-framework)
  - [Deploying with .NET Core](#deploying-with-net-core)
- [Wiki Deployment](#wiki-deployment)

## GitHub Pages

GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files directly from a repository on GitHub, optionally processes the files through a build process, and publishes a website. It is an excellent way to host a website for free and serves as an effective method for testing a website before deploying it to a paid hosting service.

We use GitHub Pages to test our website. Any content pushed to the `staging` branch of the `stride-website` repository is automatically deployed to the `gh-pages` branch, from which GitHub Pages builds and publishes the website.

To manage the build and deployment process, we use the GitHub action `stride-web-staging-github.yml`. This action is triggered when:

1. A push is made to the staging branch
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

The `gh-pages` branch is a special branch used by GitHub Pages to host the website and should not be edited directly. Any changes made to the `gh-pages` branch will be overwritten by the subsequent `staging` branch deployment.

The GitHub action `stride-web-staging-github.yml` works as follows:

1. The action is triggered when:
   - A push is made to the staging branch
   - The action is manually triggered
1. `paths-ignore` is used to ignore specific changes to the `staging` branch
   - Current exclusions: `README.md`, `wiki/**`, `.github/**`
1. The remaining steps in the action are self-explanatory

## Azure Web Apps

### Deploying with .NET Framework

.NET Framework is using IIS to host the website, so any static files will be served by IIS. The static files are located in the `wwwroot` folder. The `wwwroot` folder is the root folder of the website. The `wwwroot` folder is also the root folder of the website when it is deployed to GitHub Pages.

### Deploying with .NET Core

## Wiki Deployment

While the GitHub wiki offers a convenient way to document a project, it has some drawbacks, such as not being part of the repository by default and restricting edits to collaborators. To address these issues and allow community editing, we have implemented an alternative approach.

We created a `wiki` folder within the repository, which contains all wiki pages. The GitHub action `stride-web-wiki.yml` deploys the `wiki` folder to the GitHub wiki.

The GitHub action `stride-web-wiki.yml` is triggered when:

1. A push is made to the `master` branch of the `stride-website` repository
1. The action is manually triggered

You can manually trigger the action by navigating to the **Actions** tab and clicking the **Run workflow** button.

This GitHub action only monitors changes to the `wiki` folder. Any modifications made to the `wiki` folder will be deployed to the GitHub wiki. Note that changes to the `wiki` folder will not trigger other GitHub actions.

We use the [Wiki Page Creator GitHub Action](https://github.com/marketplace/actions/wiki-page-creator-action) to deploy the `wiki` folder to the GitHub wiki.

Please note that a GitHub personal access token (GH_PAT) is required for authentication. This token is stored as a secret in the repository settings.