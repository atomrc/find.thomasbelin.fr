# find.thomasbelin.fr

This is mainly an excuse to test [@cycle/time](https://github.com/cyclejs/time) out :) ... And I was not disapointed!

Here is what my main function looks like:

```javascript
function main({ time }) {
  return {
    DOM: time
      .animationFrames()
      .fold(updateState, links)
      .map(render)
  }
}
```

Nice and clean declarative style, isn't it?

# What's inside?

Under the hood, it uses:

- [@cycle/xstream-run](https://github.com/cyclejs/cyclejs)
- [@cycle/time](https://github.com/cyclejs/time)
- [@cycle/dom](https://github.com/cyclejs/cyclejs/tree/master/dom)
- [typescript](https://github.com/Microsoft/TypeScript)

I invite you to tests those out, they might very well change the way you think about UI!
