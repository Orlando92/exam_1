import React from 'react'
import { Table } from 'react-bootstrap';

export const Report = ({ results }) => {

    return results.length !== 0 ?
        (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {
                            Object.keys(results[0]).map(key =>
                                <th> {key} </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        results.map(result =>
                            <tr>
                                {
                                    Object.keys(results[0]).map(key =>
                                        <td>{result[key]}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                </tbody>


            </Table>
        ) : (
            <h3>No Results</h3>
        );
}
