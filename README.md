<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://dyte.in">
    <img src="https://assets.dyte.io/logo-outlined.png" alt="Logo" width="120">
  </a>

  <h3 align="center">Express Vanilla JS Sample</h3>

  <p align="center">
    An ExpressJS and Web Components sample app.
    <br />
    <a href="https://docs.dyte.io"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.dyte.io">View Demo</a>
    ·
    <a href="https://github.com/dyte-io/express-vanilla-js-sample/issues">Report Bug</a>
    ·
    <a href="https://github.com/dyte-io/express-vanilla-js-sample/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [About](#about)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm
- NodeJS

### Installation

1. Clone the repo

```sh
git clone https://github.com/dyte-io/express-vanilla-js-sample.git
```

2. Install NPM packages

```sh
npm install
```

3. Add a `.env` on the root of the repo, with the following variables:

```
DYTE_API_KEY=<Your dyte api key>
DYTE_ORG_ID=<Your dyte org id>
```

4. To start the server, run:

```sh
npm start
```

<!-- USAGE EXAMPLES -->

## Usage


To proceed with this guide, make sure you've already created an account at
https://dev.dyte.io

Here are the APIs used in this sample:

- [Create a meeting](#create-a-meeting)
- [Add a participant to a meeting](#add-a-participant-to-a-meeting)

### Create a Meeting

| Method | Route       |
| ------ | ----------- |
| `POST` | `/api/create-meeting` |

Creates a meeting in your organization.

Request body schema:

```js
{
  title: 'Dyte meeting test',
}
```

### Add a participant to a meeting

| Method | Route                               |
| ------ | ----------------------------------- |
| `POST` | `/api/add-participant` |

Adds a participant to a specific meeting.

Request body schema:

```js
{
  meetingId: 'uuid',
  name: 'Dyte dev',
  email: 'dev@dyte.io',
}
```

## Contributing

Contributions are what make the open source community such an amazing place to
be learn, inspire, and create. Any contributions you make are **greatly
appreciated**. Sincere thanks to all our contributors. Thank you,
[contributors](https://github.com/dyte-io/express-vanilla-js-sample/graphs/contributors)!

You are requested to follow the contribution guidelines specified in
[CONTRIBUTING.md](./.github/CONTRIBUTING.md) and code of conduct at
[CODE_OF_CONDUCT.md](./.github/CODE_OF_CONDUCT.md) while contributing to the
project :smile:.

## Support

Contributions, issues, and feature requests are welcome! Give a ⭐️ if you like
this project!

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE)
for more information.

## About

`express-vanilla-js-sample` is created & maintained by Dyte, Inc. You can find us
on Twitter - [@dyte_io](https://twitter.com/dyte_io) or write to us at
`dev [at] dyte.io`. The names and logos for Dyte are trademarks of Dyte, Inc. We
love open source software! See [our other projects](https://github.com/dyte-io)
and [our products](https://dyte.io).