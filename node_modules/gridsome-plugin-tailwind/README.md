This plugin will add [TailwindCSS 1.0.0-beta4](https://next.tailwindcss.com) to your
[Gridsome](http://gridsome.org) project.

To use this plugin, run `npm install -D gridsome-plugin-tailwind` add the following to your `gridsome.config.js`.

If you don't supply a config file path, `./tailwind.config.js` will be used by default.

```javascript
plugins: [
  {
    use: 'gridsome-plugin-tailwind',
      options: {
        config: './tailwind.config.js'
      }
  }
]
```

Once you have the plugin added to Gridsome please refer to [Tailwind CSS Docs](https://next.tailwindcss.com/docs/installation) for finishing off the setup of Tailwind CSS
