# Knovo Read Me

## Local

-   Install mongodb https://hub.docker.com/_/mongo

    -   docker pull mongo
    -   docker run --name mysavvytutor -p 27017:27017 -d mongo:latest

-   Install gremlin server https://hub.docker.com/r/cuduykhoa/gremlin-uuid
    -   docker pull cuduykhoa/gremlin-uuid
    -   docker run --name gremlin -p 8182:8182 -d cuduykhoa/gremlin-uuid:latest

## Changelogs

Every branch should add the changelog `md` file under `changelogs/next` directory path.

Common strategy for file name be created base on the JIRA card number, example: `changelogs/next/M20-101.md`

Content of the changelog file should be in this format:

```markdown
**{JIRA#}** [{type}] - {user friendly message with descriptive information}
```

Examples:

_changelogs/next/M20-101.md_

**M20-101** [Feature] - Introduce new API to get class session.

_changelogs/next/M20-105.md_

**M20-105** [Fix] - Fixed incorrect country data returned on `GET /user` API.

## Branch and Deployments

### Getting Start

1. Install jq using brew for MacOS user: `brew install jq`
2. Install git flow using brew for MacOS user: `brew install git-flow`
3. To initialize gitflow, run: `git flow init` and initiate with default settings.
4. Generate required files, run: `./bin/init.sh`
5. Go to generated file `deployrc`, edit `BITBUCKET_CRED` with your bitbucket's username and app password `{username}:{app_password}`. To generate bitbucket app password, read instruction here: [how to create an app password](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#app-passwords).

### Branch Strategy

To make deployment with current branch strategy. Make sure current branch is in `develop` branch and run following script:

```bash
make deploy/{ENV}
```

- `make deploy/test` - Merge PR with title `TEST` keyword, build changelog and finally push to `origin/test` branch for build and deploy.
- `make deploy/stag` - Merge PR with title `STAGE` keyword, build changelog and finally push to `origin/stage` branch for build and deploy.
- `make deploy/prod` - Using `develop` branch to start `release/*` branch, build final changelog, finish off the release branch with tag and finally push to `origin/master`, `origin/develop` and `origin/release/*` with tag for build and deploy.
