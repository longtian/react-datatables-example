# react-datables-example
Example for Datatables usage with React and Webpack

> This example will mainly focus on how to use Datatables and its extensions in React project instead of diving into the [fabulous API](http://www.datatables.net/reference/api/).

## How to run this example

```sh
npm install && npm start
```

Open your browser and navigate to http://localhost:8080/static/main

## Tips

### How to import Datatables ?

```js
import $ from 'jquery';
import 'datatables.net';
```

### Is it possible to use DataTable class directly ?

No, because it is deeply coupled with jQuery

```js
import $ from 'jquery';
import DataTable from 'datatables.net';
console.log(DataTable === $.fn.dataTable); // true
```

### How to import Bootstrap styling ?

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
```

### How to load the i18n/fonts file asynchronously ?

Extend the dataTable defaults object

```js
$.extend(true, $.fn.dataTable.defaults, {
  language: {
    url: require('../lib/zh_cn.json')
  }
});
```

Loading i18n files is just like loading icon font files.

```js
{
  test   : /\.(json|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  loader : 'file-loader',
  query:{
    name:'[name]-[md5:hash:8].[ext]'
  }
}
```

### How to load extensions ?

Check the extensions list, https://www.npmjs.com/~datatables

To import an extension, normaly it would require two steps as following:

```js
import 'datatables.net-fixedheader';
import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';
```

1\. Load the extension script, normaly the entry file is defined in package.json `main` property ;

2\. Load the style for specific front-end framework. For example, `bs` means `Bootstrap`.

### How to use template


### How to use React components in cell rendering

If we need to use the `react-toggle`` component in our application.

We have two options:

**Use render function**
```
column.render:elem=>renderToStaticMarkup(<Toggle/>)
```

**Use HTML markup**
```html
<tbody>
{
  DATA.map(e=><tr key={e.id}>
    <td>{e.id}</td>
    <td data-order={e.id}>{e.name}</td>
    <td>{e.value}</td>
    <td><Toggle/></td>
  </tr>)
}
</tbody>
```

### Actual usage

`$(elem).dataTable` or `$(elem).DataTable`

### TODO

* [ ] work with JSON data
* [ ] Lifecycle
* [ ] Using React in column rendering
* [ ] How to avoid conflicts between them
* [ ] Work with react-dom/server