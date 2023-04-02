# Table of Contents

- [Known Issues](#known-issues)
- [Common Issues and Solutions](#common-issues-and-solutions)
- [Frequently Asked Questions](#frequently-asked-questions)

# Known Issues

1. **Sponsor Page - Widget Incompatibility with dark theme:** Widgets on the Sponsor Page currently do not support the dark theme. As a workaround, we can either fetch data from https://opencollective.com/stride3d/members/all.json and render it before deployment or make it dynamic. Both options would give us more control over the content and design, and allow for better compatibility with the dark theme in the future.
1. **Search Page - Lack of pagination:** At present, the Search Page does not have pagination, which limits the maximum number of search results displayed to 100. To resolve this issue, we can implement a pager in JavaScript. This would enable users to navigate through multiple pages of search results, providing a more comprehensive view of the available content. 

# Common Issues and Solutions

Any issue should be added to GitHub issues so it can be tracked and elaborated by the community.

# Frequently Asked Questions

**Q:** I just want to fix a typo in the post, do I need to follow your installation steps?<br>
**A:** *No, you can fix the typo directly in the GitHub website, but you would need to still fork the repo, make your update on the main or your new branch and then create a pull request*


