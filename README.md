# mozaik-ext-embed

Embded content like HTML markup into widget. Handy to adding ambiguous content like raw HTML (iframe, html video etc.)

## Setup

1. Navigate into dashboard project directory
1. Install dependencies
  ```shell
  npm i -S mozaik-ext-embed
  ```
1. Register widget: `./src/App.jsx`
  ```javascript
  import embed from 'mozaik-ext-embed';

  Mozaik.Registry.addExtensions({ embed });
  ```
1. Restart dashboard

## Widgets

### Markup

> Show custom markup in widget

#### parameters

key       | required | description
----------|----------|--------------------------
`content` | yes      | *html content*
`title`   | no       | *widget title content*

#### usage

```javascript
{
  type: 'embded.markup',
  title: 'Live feed',
  content: '<iframe src="http://livefeed.com/"></iframe>',
  columns: 1, rows: 1, x: 0, y: 0
}
```

## Development

Link peer dependencies (wherever you have 'em):

```shell
npm link ../mozaik
npm link ../mozaik/node_modules/react
```

## license

MIT
