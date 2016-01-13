/**
 * Created by yan on 16-1-11.
 */

import $ from 'jquery';
import 'datatables.net';

import 'bootstrap/dist/css/bootstrap.css';
import 'datatables.net-bs/js/dataTables.bootstrap';
import 'datatables.net-bs/css/dataTables.bootstrap.css';

import 'datatables.net-fixedheader';
import 'datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.css';

import zh_cn from '../lib/zh_cn.json';

import React,{Component} from 'react';
import {render} from 'react-dom';

let elem = document.createElement('div');
document.body.appendChild(elem);

$.extend(true, $.fn.dataTable.defaults, {
  language: {
    url: zh_cn
  }
});

const App = ()=> {
  return <div>

    <strong>Zero Configuration</strong>
    <table ref={elem=>$(elem).DataTable()}>
      <thead>
      <tr>
        <td>
          value
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
      </tr>
      </tbody>
    </table>

    <strong>JSON</strong>
    <table className="table table-striped" ref={elem=>$(elem).DataTable({
    data:[{
      name:'1',
      foo:{
        bar:1
      }
    },{
      name:'2',
      foo:{
        bar:2
      }
    }],
    columns:[{
    data:'name',
    title:'Name'
    },
    {
    data:'foo.bar',
    title:'foo.bar'
    },
    {
    data:'foo',
    title:'foo',
    render:foo=>`<em>${foo.bar}</em>`
    }]
    })}>

    </table>

    <strong>Fixed Header</strong>
    <table className="table" ref={elem=>$(elem).DataTable({
    fixedHeader:true
    })}>
      <thead>
      <tr>
        <td>
          It will be fixed
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      </tbody>
    </table>

    <strong>Feature</strong>
    <table className="table" ref={elem=>$(elem).dataTable()}>
      <thead>
      <tr>
        <td>value</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
      </tr>
      <tr>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
      </tr>
      <tr>
        <td>8</td>
      </tr>
      <tr>
        <td>9</td>
      </tr>
      <tr>
        <td>10</td>
      </tr>
      <tr>
        <td>11</td>
      </tr>
      </tbody>
    </table>

    <table ref={elem=>$(elem).DataTable()} className="table table-striped">
      <thead>
      <tr>
        <td>name</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>hello</td>
      </tr>
      <tr>
        <td>world</td>
      </tr>
      </tbody>
    </table>

    <table ref={elem=>$(elem).DataTable()} data-paging={false}>
      <thead>
      <tr>
        <td>
          value
        </td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>2</td>
      </tr>
      <tr>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
      </tr>
      </tbody>
    </table>
  </div>
}

render(<App/>, elem);
