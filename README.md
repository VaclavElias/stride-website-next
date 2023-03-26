# Stride Website - Next

## Demo

Demo is here https://stride-website.vaclavelias.com/

Please feel free to collaborate, create issues, and submit pull requests.

## The motivation for the update

- [x] modern looking and simplified design
- [x] modern static page generator
- [x] use Bootstrap 5.3
  - this was also used previously with lots of inconsistency
- [x] use Fontawesome 6
  - this was also used previously
- [x] remove old unnecessary code, AddThis, Discus, JQuery, JavaScript libraries
- [x] get better website responsivness
- [x] keep the content as it is and where it is, maybe just improve if needed

## RC2+ Checklist
- [ ] Web - Past Posts - Update and pretify content - Done 9/64
- [ ] Web - Dark theme - Update `[data-bs-theme=dark]` in css or disable in `site.json`
  - CSS Collaborator wanted
- [x] Web - Search - Include docs in search
- [ ] Web - Code refactoring and code clean up - Once the new design update is settled
- [ ] Web - Community - What should we do with Q&A Game Dev, if this is going to be used, how can we be notified on Discord, maybe GitHub Discussions should be encouraged?
- [ ] Wiki - Review and update
- [ ] Web - Ensure excerpt and page description is set for all pages
- [ ] Web - Check with devs current googletagmanager which is importing lots of junk like facebook events

## RC1 Checklist
- [x] Web - Update blog post urls so they match the old urls
- [x] Web - FAQ - Remove Premium Support sentence
- [x] Web - Do we need Contact Form? Is Contact page good enough as it is (I will add missing links to GitHub and Discussions)?
- [x] Web - Staging web - Check image caching and gzip (web.config)


## Release Checklist
- [ ] Web - Proof reading
- [ ] Web - Update Ore System Link
- [ ] Web - Features - Add .NET/C# section
  - [ ] Mention/add section dedicated to scripting, mentioning ```async```, maybe add code snippets?
- [ ] Wiki - Add Deployment Docs (staging, production, process for simple changes vs bigger updates)
- [ ] Wiki - Instructions how to add posts, update website, folder structure, site.json (describe settings), _data, _drafts, remote c# code, explain packages in package.json
- [ ] Web - Shall we remove Diamond Striders and Platinum Striders, maybe to past 
- [ ] Web/Wiki - Shall we mention that we use Bootstrap and Fontawesome to support Open Source community?

## Suggested posts
- [ ] Posts about all Stride tutorials, internal and external tutorials

## Post Release Update / Future Updates and Improvements
- [ ] Web - Encourage community to contribute with articles
- [ ] Web - Search - Exclude API Search on the Web, or checkbox to include/exclude API
- [ ] Web - Add/List GitHub contributors automatically to a dedicated page (link from the footer)
- [ ] Wiki - New post instructions (e.g. using webp images)
- [ ] Wiki - Update post instructions
- [ ] Web - Features - Create dedicated page for some features
- [ ] Web - Futher update existing images and content across pages
- [ ] Web - Friends - Shall we link to our friends GoDot, others, just to be open and making friends in other C# open source game communities? 
- [ ] Web - Authors links to author pages
- [ ] Web - Blog Comments from GitHub Issues - Analyse https://www.aleksandrhovhannisyan.com/blog/jekyll-comment-system-github-issues/, the problem is spam..
- [ ] Include Avatar, with different asssets like dotnet bot, use also for 2D Games
- [ ] Community Page - Elaborate more on each item, maybe like this https://www.blender.org/support/ and this https://www.blender.org/get-involved/
- [ ] Web - Keep only used FontAwesome references in all.css, to reduce the file sie
- [ ] Metrics - Update to ASP.NET Core / Blazor https://github.com/stride3d/stride/tree/master/sources/metrics/Stride.Metrics
- [ ] Web - Change all images to webp
- [ ] Web - Creted devs dedicated page (https://developer.blender.org/)
- [ ] Web - Minify if possible js and html
- [ ] Footer example https://www.blender.org/
  - [ ] New Section Download
     - [ ] Direct link to Release Notes
     - [ ] Direct link to Requirements

## Known Issues
- Web - Sponsor - Widgets don't support dark theme. This can be fixed in the future, to fetch data from https://opencollective.com/stride3d/members/all.json and render before deployment or make dynamic. This might be overall better solution to have a full control over the content and design.
- Web - Search - No pager, max result restricted to 100 till the pages is implemented

## Phase 1 - Done

- [x] Top Navigation
  - [x] Search button
  - [x] Search page
- [x] Home Page
- [x] Features Page
- [x] Blog Page
   - [x] GitHub avatar added to list and posts
   - [x] Improve Side bar
   - [x] Popular Posts
   - [x] Latest Posts
   - [x] Resources
   - [x] Rss Link
   - [x] 404 Page
   - [x] Archive - New Page, list by year
   - [x] Tags - New Page, list by tag
- [x] Learn
  - [x] Research new update for stride-docs
- [x] Community Page
  - [x] Content update? Keep similar length.
- [x] Sponsor Page
- [x] FAQ Page
- [x] Footer Section
   - [x] Update all links
- [x] Website code refactoring and code clean up - Once the new design update is settled
   - [x] Primary Links (github, twitter, ..) - Move to site.json?

## Phase 2 - Research - Done

- [x] Consider modern static site generator [11ty](https://www.11ty.dev/docs/)
   - No Ruby issues as it is JavaScript generator
- [x] Features Page - Improve like this, link to individual pages https://www.blender.org/features/


## Additional Content
- Maybe we can include this somewhere https://github.com/Doprez/Awesome-Stride
- Web, Docs, GitHub Wiki
- https://khalidabuhakmeh.com/combining-11ty-static-site-generator-with-aspnet-core

## Wiki

This Contet will be moved to GitHub Wiki

## Website Updates

If you want to update the website, please follow the instructions below.

Small updates can be done directly in the GitHub web interface, for bigger updates please follow the instructions below.

### Small Updates

We can define small updates as changes to the content of the website, like adding a new blog post, updating the content of the existing blog post, updating the content of the existing page, etc.

1. Go to the [Stride Website GitHub repository](https://github.com/VaclavElias/stride-website-next) and click on the `Edit this page` button on the top right corner.
1. Make your changes and click on `Propose changes` button.
1. Click on `Create pull request` button.
1. Click on `Create pull request` button again.
1. Wait for the review and merge.

### Bigger Updates

We can define bigger updates as changes to the design of the website, adding new pages, adding new sections, etc.

## Installation

### Prerequisites

1. Install Node.js and npm. You can download the installer from the [Node.js website](https://nodejs.org/en/download/).
   - Or if already installed make sure you have got Node.js version 16 or higher. You can check your version by running `node -v` in a terminal.
1. Clone the repository `git clone https://github.com/VaclavElias/stride-website-next.git`

### Install
Run `npm install` to install all dependencies.

### Run
1. Run `npm start` to start the development server.
1. Open the site in your browser `http://localhost:8080/`

## Content

### Bootstrap

### Updates

### New Posts

### New Pages

### Global Data

### Shortcodes and Includes

### Web Assets

List of web assets used in the website, like logo.

#### Images

Adding responsive images through shorcode. Ensure you write descriptive title as it will help our posts to be found in search engines.

`{% img 'title' 'url' %}`

renders as

```html
<img alt="title" src="url" class="img-fluid mb-2" loading="lazy" data-src="url">
```
Similarly you can add a link to the image by using `img-click` shortcode. This will allow also open the image and zoom in.

`{% img-click 'title' 'url' %}`

renders as

```html
<a href="url" title="title" class="mb-2"><img alt="title" src="url" class="img-fluid" loading="lazy" data-src="url"></a>
```

#### Video

`{% youtube 'id' %}`

renders as

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/id" title="YouTube video" allowfullscreen></iframe></div>
```

`{% youtube-playlist 'id' %}`

renders as

```html
<div class="ratio ratio-16x9 mb-2"><iframe src="https://www.youtube.com/embed/videoseries?list=id" title="YouTube video" allowfullscreen></iframe></div>
```

## Eleventy

### Packages
### Layouts
### Includes

## Configuration

## Folder Structure

## Deployment

## Styling

## Advance

### Adding new Shortcodes and Includes