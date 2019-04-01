import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const columns = [
  {
    dataField: 'msgId',
    text: 'Message Id',
    filter: textFilter(),
    sort: true,
  },
  {
    dataField: 'en',
    text: 'English(en)',
    filter: textFilter(),
    sort: true
  },
  {
    dataField: 'fr',
    text: 'French(fr)',
  },
  {
    dataField: 'de',
    text: 'German(de)'
  },
  {
    dataField: 'es',
    text: 'Spanish(es)'
  },
  {
    dataField: 'zh',
    text: 'Chinese Simplified(zh)'
  }
];

const defaultSorted = [{
  dataField: 'msgId',
  order: 'asc'
}];

class ResultTable extends Component {
  render() {
    return (
      <BootstrapTable
        keyField="msgId"
        data={this.props.messages}
        columns={columns}
        striped
        bootstrap4
        hover
        condensed
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
        filter={filterFactory()}
      />
    )
  }
}

export default ResultTable;