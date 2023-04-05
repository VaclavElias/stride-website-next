[Eleventy](https://www.11ty.dev/) is a static site generator that uses JavaScript as its templating language. It is a very powerful tool that allows us to create a website with a lot of flexibility and customization. It is also very easy to use and learn. This section will cover the basics of Eleventy and how to use it to create and update content on the Stride website.

We used to use **Jekyll** as our static site generator, but we decided to switch to Eleventy because of its flexibility and ease of use. We also wanted to use a tool that is more widely used and supported, which is why we decided to switch to Eleventy.

# Table of Contents

- [Packages and Dependencies](#packages-and-dependencies)
- [Configuration](#configuration)
- [Global Data](#global-data)
- [Folder Structure](#folder-structure)
- Layouts and Templates
- Includes and Partials
- Advanced Topics
  - Creating Custom Shortcodes and Includes
  - Performance Optimization

# Packages and Dependencies

Eleventy is a **Node.js** application. Please follow our [Installation](Installation) guide to install Node.js and all the required dependencies.

Packages we currently use:

- Dev Dependencies
  - `@11ty/eleventy` v2.0 - Main package for the static site generator
  - `@11ty/eleventy-plugin-rss` - RSS feed plugin
  - `@11ty/eleventy-plugin-syntaxhighlight` - Syntax highlighting plugin (dark and light theme in `/css/syntax-highlighting.scss`)
- Dependencies
  - `@11ty/eleventy-fetch` - Fetch plugin
  - `@fortawesome/fontawesome-free` - Font Awesome with a variety of awesome icons 😃🤩
  - `bootstrap` - Bootstrap 5.3
  - `lunr` - Lunr search plugin that consumes local `search.json (/search.liquid)` and remote `index.json` from the docs website; the script is in `/assets/scripts/search.liquid`
  - `markdown-it-anchor` - Anchor plugin for markdown-it
  - `markdown-it-table-of-contents` - Table of contents plugin for markdown-it, used mainly in blog posts as `[[TOC]]`
  - `sass` - Sass compiler for our `/css/*.scss` files

# Configuration

The Eleventy configuration is located in the `.eleventy.js` file at the root of the project. This file contains all the configuration settings for the Eleventy build process. As it is a JavaScript file, you can utilize all JavaScript features and syntax within it.

**What do you find in this file?**

- plugins configuration - All the plugins we use
- pass through files - Files that are copied to the output folder without any processing
- custom collections - Custom collections used in the templates like `tagList` and `yearList`
- filters - Custom filters used in the templates
- custom shortcodes - Custom shortcodes used in the templates

The file is well-commented and should be self-explanatory. If you need to add a new configuration, please follow the existing structure and include a comment to explain the new configuration.

# Global Data

Global data is located in the `/_data` folder. It contains all the global data that is accessible in all the templates. Currently, we have these JSON files:

- `site.json` - Contains all the global data for the website, used in the templates and shortcodes.
- `features.json` - Contains all the data for the features page and its features sections.
- `sponsors.json` - Contains sponsor information used in multiple places on the website.

Our `site.json` file contains these main properties, with only some listed below:

- `dark-mode` - Dark mode toggle `true|false`
- `docs-search` - Includes docs website content in the search `true|false`
- `links` - Contains all the main links used across the website (social media, docs, GitHub, etc.)
- `authors` - Contains all the authors used in the blog posts
- repeated data - like `csharp-version`, `dotnet-version`, `download-version` which are used in multiple places on the website and are updated with every release

# Folder Structure

The folder structure is very important for Eleventy. It is used to determine the output of the build process. The folder structure is as follows:

- `/_data` - Global data
- `/_drafts` - Draft blog posts - excluded from the build process
- `/_includes` - Reusable snippets of code that can be included in multiple pages
- `/_layouts` - Main layout pages, `container`, `page`, `post` which use primary layout page `default`
- `/_site` - This is an outpub build 
- `/_data` - Global data
- `/_data` - Global data
- `/_data` - Global data
- `/_data` - Global data
 


# Layouts and Templates

# Includes and Partials

# Advanced Topics

## Creating Custom Shortcodes and Includes
## Performance Optimization