# Salud en Cifras application

## Notes

This is an MVP of the app, and has no performance improvements yet.

## Grunt

First time use:

```
$ npm install
$ grunt # to generate the CSS file which was added to .gitignore
```

You can use `grunt watch` to watch for changes and run the build.

###

This application is visible in GitHub Pages.
To push to `master` and `gh-pages`, add the following lines:

In `.git/config`, section `[remote "origin"]`, add:
```
push = refs/heads/master:refs/heads/master
push = refs/heads/master:refs/heads/gh-pages
```



