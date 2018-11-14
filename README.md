# getAll
Simple interface to access deep properties in an Object in a failsafe way, returning the value or a `Nothing` if it doesn't exists

You will probably want it when messing with third party APIs, or putting a third party product on your clients, because you can rely on api responses, or properties you need to have on pages, other than that, it's just a cleaner way to do some stuff

## Getting Started
These instructions will get you through installing and using get-all on your project.

### Installing
Simply install using npm or yarn
```sh
npm install --save get-all
```

### Using
This section will guide you through using get-all on your repository, showing how to use and what code you should replace for it

```js
const { getAll } = require('get-all')

// Doing this:
const grayHex = getAll(product, 'details.specs.color.gray')

// Is the same as doing this:
const grayHex = product.details && product.details.specs && product.details.specs.color && product.details.specs.color.gray
```

But your Object is not perfect, and you have to check if it returned what you wanted, in this cases you have the `isNothing` for you

```js
const { getAll, isNothing } = require('get-all')

// Doing this:
const grayHex = getAll(product, 'details.specs.color.gray')

grayHex = isNothing(grayHex) ? /* fallback */ : grayHex

// Is the same as doing this:
const grayHex = product.details && product.details.specs && product.details.specs.color && product.details.specs.color.gray

grayHex ? grayHex : /* fallback */
```

The `getAll` function also gains you a little bit of power when it comes to accessing Array indexes, or Object keys that somehow manage to be numeric, you just put the number where you'd access the index, and it will do the job for you, like this:

```js

const { getAll } = require('get-all')

// Assuming that color is an Array, this way you get the first color:
const grayHex = getAll(product, 'color.0')

// It will be the same as:
const grayHex = Array.isArray(product.color) && product.color[0]

// Also, some sinners make Object keys as Numbers, but it's ok to do:
const clusterName = getAll(cluster, 'up.149.label')

// This case is worse, because it's ugly in my opinion:
const clusterName = cluster.up && cluster.up['149'] && cluster.up['149'].label
```

## Docs
You can access the docs at: [docs](https://github.com/patocinza/get-alltree/master/docs)

## Questions?
If you have any questions about using Arthemis on your project, please open a [new issue](https://github.com/patocinza/get-all/issues/new).

## Filing a bug

If you found a bug, please open a [new issue](https://github.com/patocinza/get-all/new).

## Contributing

This project is open for contributions.
To suggest a new feature, please open a [new issue](https://github.com/patocinza/get-all/issues/new).
To fix a filed bug or implementing a feature, please fork this project, create a new branch containing your code and send a pull request. If you need any guidance, you can reach us out by creating a new issue.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Gabriel Luis** - [PatoCinza](https://github.com/patocinza)

See also the list of [contributors](https://github.com/patocinza/get-all/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
