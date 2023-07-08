

import React, { useEffect } from 'react';
import Head from 'next/head';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
const Test = () => {
    useEffect(() => {
        // Run jQuery code here
        // $('.my-element').text('Hello, jQuery!');
        let table = new DataTable('#myTable',{
            responsive: true
        });

    }, []);

    return <div className="my-element">
        <Head>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/jquery.dataTables.css" />
        </Head>
        <table id='myTable'>
            <thead>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
            </tbody>
            
            
        </table>
    </div>;
};

export default Test;
