import Layout from "@/components/Layout";
import siteConfig from "@/config/site.config.json";
import data from "../../content/hindilibrary.json"
import PageHeaderBlock from "@/components/PageHeader";
import { useEffect } from 'react';
import { useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Search } from "react-bootstrap-table2-toolkit";
const { SearchBar } = Search;
const columns = [
    {
        dataField: 'value1', text: 'Titles in English',
        formatter: (cell, row) => <a href={row.href1}>{cell}</a>

    },
    {
        dataField: 'value2',
        text: 'Read/Download',
        formatter: (cell, row) => <a href={row.href2}>{cell}</a>
    },
    { dataField: 'value3', text: 'Read', formatter: (cell, row) => <a href={row.href4}>{cell}</a> },
    { dataField: 'value4', text: 'Audio Link', formatter: (cell, row) => <a href={row.href4}>{cell}</a> },
    { dataField: 'value5', text: 'Subject', formatter: (cell, row) => <a href={row.href5}>{cell}</a> }
];
const search = {
    defaultSearch: '',
};
const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: '<<',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    showTotal: true,
    disablePageTitle: true,
    paginationPosition: 'end',
    sizePerPageList: [{
        text: '10', value: 10
    }, {
        text: '20', value: 20
    }, {
        text: 'All', value: data.length
    }]
};
const searchStyle = {
    width: "200px",
    marginRight: "10px",
};
export default function Library() {
    const [searchTerm, setSearchTerm] = useState("");


    const filteredData = searchTerm
        ? data.filter((item) =>
            item.value1.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.value2.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.value3.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : data;

    return (
        <Layout metaTitle="Read, Listen, Download Book and Audio Discourse of Osho">
            <PageHeaderBlock title="Read, Listen, Download Book and Audio Discourse of Osho" blogPage={true} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                        <div className="input-group input-group-sm mb-2 flex-end">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <BootstrapTable
                            keyField="value1"
                            data={filteredData}
                            columns={columns}
                            pagination={paginationFactory(options)}
                            filter={filterFactory()}
                        />
                    </div>
                </div>
            </div>

        </Layout>
    );
}


