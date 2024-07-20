# Version Releases

## Semantic Versioning (SemVer): `vMAJOR.MINOR.PATCH`

Example:

- v1.0.0
- v1.0.1
- v1.1.1

## Pre-release versions: `vMAJOR.MINOR.PATCH-<BETA/RC/SNAPSHOT>.<number>`

Example:

- v1.0.0-beta.1
- v1.0.0-beta.2
- v1.2.3-rc1
- v1.2.3-SNAPSHOT

## Post-release versions: `vMAJOR.MINOR.PATCH-POST.<number>`

Example:

- v1.2.3-post.1
- v1.2.3-post.2

## Local versions: `vMAJOR.MINOR.PATCH+LOCAL`

Example:

- v1.0.0+local
- v1.1.0+local

## Caret range versions: `^MAJOR.MINOR.PATCH`

Example:

- ^1.2.3 (similar `>=1.2.3 < 2.0.0`)

## Tilde range versions: `~MAJOR.MINOR.PATCH`

Example:

- ~1.2.3 (similar `>=1.2.3 <1.3.0`)

---

Notes:

- `MAJOR`: major version.
- `MINOR`: Minor version, often adding new features.
- `PATCH`: Patch version, typically fixing bugs.
- `SNAPSHOT`: Indicates a version under development or in progress. It is often used to represent the latest state of the codebase and may include ongoing changes and features that are not yet finalized. This allows developers to work with the most recent developments in a project.
