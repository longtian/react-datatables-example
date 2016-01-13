/**
 * Created by yan on 16-1-11.
 */
import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import 'datatables.net';
import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import {renderToStaticMarkup}from 'react-dom/server';

let domElement = document.createElement('div');
document.body.appendChild(domElement);

let {
  app='APP_render',
  count=5000
  } = require('qs').parse(location.search.slice(1));

let DATA = [];

for (var i = 1; i <= count; i++) {
  DATA.push({
    id: i,
    name: 'item-' + i,
    value: Math.random() - 0.5
  })
}

const APP_renderToStaticMarkup = ()=> {
  let opts = {
    data: DATA,
    columns: [{
      title: 'id',
      data: 'id'
    }, {
      title: 'name',
      data: 'name'
    }, {
      title: 'value',
      data: 'value'
    }, {
      title: 'id',
      data: 'value',
      render: elem=>renderToStaticMarkup(<Toggle/>)
    }]
  }
  return <table className="table" ref={elem=>$(elem).dataTable(opts)}></table>
}

const APP_render = ()=> {
  let opts = {
    data: DATA,
    columns: [{
      title: 'id',
      data: 'id'
    }, {
      title: 'name',
      data: 'name'
    }, {
      title: 'value',
      data: 'value'
    }, {
      title: 'id',
      data: 'value',
      createdCell: (td, val)=>render(<Toggle/>, td)
    }]
  }
  return <table className="table" ref={elem=>$(elem).dataTable(opts)}></table>
}

const APP_markup = ()=> {
  return <table className="table" ref={elem=>$(elem).dataTable()}>
    <thead>
    <tr>
      <th >id</th>
      <th data-sortable={false}>name</th>
      <th>value</th>
      <th>-</th>
    </tr>
    </thead>
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
  </table>
}


const Wrapper = props=> {
  return <div>
    <a href="?app=APP_renderToStaticMarkup&count=5000">APP_renderToStaticMarkup</a> |
    <a href="?app=APP_render&count=5000">APP_render</a> |
    <a href="?app=APP_markup&count=5000">APP_markup</a>
    {props.children}
  </div>
}

console.time(app);
var reactElement = React.createElement(Wrapper, null, React.createElement(eval(app)));
render(reactElement, domElement);
console.timeEnd(app);

console.log(console.memory.usedJSHeapSize / 1024 / 1024);
