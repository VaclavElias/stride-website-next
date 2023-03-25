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

## RC1+ Checklist
- [x] Web - Update blog post urls so they match the old urls
- [ ] Web - Dark theme - Update `[data-bs-theme=dark]` in css or disable in `site.json`
  - CSS Collaborator wanted
- [ ] Web - FAQ - Remove Premium Support sentence
- [ ] Web - Code refactoring and code clean up - Once the new design update is settled
- [ ] Web - Past Posts - Update and pretify content
- [ ] Web - Do we need Contact Form? Is Contact page good enough as it is (I will add missing links to GitHub and Discussions)?
- [ ] Web - Community - What should we do with Q&A Game Dev, if this is going to be used, how can we be notified on Discord, maybe GitHub Discussions should be encouraged?
- [ ] Wiki - Review and update
- [x] Web - Staging web - Check image caching and gzip (web.config)
- [ ] Web - Ensure excerpt and page description is set for all pages
- [ ] Web - Check with devs current googletagmanager which is importing lots of junk like facebook events


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
- [ ] Web - Add/List GitHub contributors automatically to a dedicated page (link from the footer)
- [ ] Wiki - New post instructions (e.g. using webp images)
- [ ] Wiki - Update post instructions
- [ ] Web - Features - Create dedicated page for some features
- [ ] Web - Futher update existing images and content across pages
- [ ] Web - Friends - Shall we link to our friends GoDot, others, just to be open and making friends in other C# open source game communities? 
- [ ] Web - Authors links to author pages
- [ ] Web - Blog Comments from GitHub Issues - Analyse https://www.aleksandrhovhannisyan.com/blog/jekyll-comment-system-github-issues/, the problem is spam..
- [ ] Include Avatar, wtith different asssets like dotnet bot, use also for 2D Games
- [ ] Community Page - Elaborate more on each item, maybe like this https://www.blender.org/support/ and this https://www.blender.org/get-involved/
- [ ] Web - Keep only used FontAwesome references in all.css, to reduce the file sie
- [ ] Metrics - Update to ASP.NET Core / Blazor https://github.com/stride3d/stride/tree/master/sources/metrics/Stride.Metrics
- [ ] Web - Change all images to webp
- [ ] Web - Minify if possible js and html
- [ ] Footer example https://www.blender.org/
  - [ ] New Section Download
     - [ ] Direct link to Release Notes
     - [ ] Direct link to Requirements

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
  - [ ] Content update? Keep similar length.
  - [ ] Do we need Q&A external link? If yes, shall we collect some typical Questions and Answer them there? Maybe another platform to watch but maybe helpful for SEO? Make sense to support it and link it if this is watched by community?
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
