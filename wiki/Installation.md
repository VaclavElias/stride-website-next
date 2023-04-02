# Installation

This guide will walk you through the steps to install the Stride website on your local machine for development purposes. Although we use the Windows operating system for development, the steps should be similar for other operating systems.

**Minor updates** can be made directly on GitHub. However, for **more significant updates** that affect multiple pages, we recommend using a local development environment. This is because we use a static site generator **Eleventy**, and in some cases, all pages need to be regenerated.

This guide assumes you have a basic understanding of the following technologies used in the Stride website.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Running the Development Server](#running-the-development-server)

## Prerequisites

Before updating the Stride website, ensure you are familiar with the following prerequisites:

1. **Node.js 16+ (including npm) installed:** You can download the installer from the [Node.js website](https://nodejs.org/en/download).
   - If Node.js is already installed, ensure you have version 16 or higher. You can check your version by running `node -v` in a terminal. Note that `npm`, the package manager for Node.js, is included with the installation.
1. **Git installed:** You will need Git for version control. If you don't have Git installed, you can download it from the [Git website](https://git-scm.com/downloads).
1. **Development IDE of choice:** Choose an Integrated Development Environment (IDE) that you're comfortable with for development. Although there are various popular choices, such as Visual Studio, Visual Studio Code, and others, this guide will focus on using **Visual Studio**, as it is the primary IDE for the Stride project, and as of writing, we use **Visual Studio 2022**. You can download the free Community editon from the [Visual Studio website](https://visualstudio.microsoft.com/downloads/).

## Installation Steps

1. Create an issue so we can track your contribution and to avoid duplicate work. If you are not sure if your contribution is needed, feel free to create an issue and ask.
1. Fork the repository by navigating to the [Stride website repository](https://github.com/stride3d/stride-website) and clicking the **Fork** button in the top-right corner.
1. Clone your forked repository using the following command, replacing `your-username` with your GitHub username: `git clone https://github.com/your-username/stride-website.git`
   - **Tip:** It's a good idea to create a new branch for each feature or bug fix you work on. This helps keep your forked repository organized and makes it easier to manage multiple pull requests.
1. Go to the project folder `cd stride-website`
1. Run `npm install` to install all dependencies.

## Running the Development Server

1. Run `npm start` (`npx @11ty/eleventy --serve`) in the command line to start the development server.
1. You should see many logs in the command line, indicating the progress and displaying any errors.
   - A Windows Security warning may appear on the first run (Allow Node.js JavaScript Runtime to communicate on these networks). Click **Allow access**.
1. Open the site in your browser by navigating to `http://localhost:8080/`.
1. Happy coding!

Assuming you have made all necessary changes and tested them on the development server, follow these steps to contribute your updates:

1. Commit your changes to your forked repository:
   - Commit the changes with a meaningful message
   - Push the changes to your forked repository
1. Create a pull request to the main repository:
   - You can create a pull request from your forked repository by navigating to Pull requests page and click **New pull request** button
   - Select the **main** branch as the base branch and your branch as the compare branch
   - Click **Create pull request** button

Once your pull request has been reviewed and approved, your changes will be merged into the main repository.
