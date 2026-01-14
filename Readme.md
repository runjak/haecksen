# haecksen

Code for [haecksen.runjak.codes](https://haecksen.runjak.codes/).

A collection of notes made in context of meetings done with the [haecksen at dezentrale](https://dezentrale.space/events/haecksen/).

## Project perspective

Fiona just created this because she wanted it to exist.

Perspective wise it could be cool to develop this into more of a shared resource that could live under a different domain.

Maybe it'd be cool to move the project to [codeberg](https://codeberg.org/) and host it with [grebedoc](https://grebedoc.dev/). Github was just a quick start.

## Tech stack

This project builds on [node](https://nodejs.org/) and [astro](https://astro.build/).

### Setup

You'll need to have `git`, `node` and `npm` at your disposal.

### Scripts

Install dependencies:

`npm install`

Start dev server:

`npm run dev`

Build static website:

`npm run build`

#### Publishing

The page is hosted by [grebedoc.dev](https://grebedoc.dev/)
and publishing the page is done via a webhook configured in the codeberg repository.

To publish the page push access to the `pages` branch is required.
Pushing to this branch executes a webhook that updates the page with the data on that branch.

The script `/scripts/publish.ts` takes care of updating the `pages` branch and pushing it to remote.

Building and publishing are done via this command:

`npm run publish`

The site will become available at the following URLs:

- [runjak.grebedoc.dev/haecksen](https://runjak.grebedoc.dev/haecksen/)
- TBD: [haecksen.runjak.codes](https://haecksen.runjak.codes/)
