# @cowtech/cera

[![Package Version](https://img.shields.io/npm/v/@cowtech/cera)](https://npm.im/@cowtech/cera)
[![Dependency Status](https://img.shields.io/david/cowtech/cera)](https://david-dm.org/cowtech/cera)

CowTech Jest testing utilities.

https://github.com/cowtech/cera

## Exported methods

### General

- `expect(res).toBeObject()`
- `expect(res).toBeArray()`
- `expect(res).toBeEmpty()`

### HTTP

- `expect(res).toHaveHTTPStatus(200)` (shorthand for `expect(res.statusCode).toEqual(200)`)
- `expect(res).toBeJSON()` (uses `res.headers['content-type']`)
- `expect(res).toBeText()` (uses `res.headers['content-type']`)

## Contributing to cera

- Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet.
- Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it.
- Fork the project.
- Start a feature/bugfix branch.
- Commit and push until you are happy with your contribution.
- Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.

## Copyright

Copyright (C) 2019 and above Shogun <shogun@cowtech.it>.

Licensed under the ISC license, which can be found at https://choosealicense.com/licenses/isc.
