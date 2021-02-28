import React, { useState, useEffect } from "react";
import './table.css';

const Table = ({ column, data }) => {

    return (
        <div style={{
            padding: 20,
            backgroundColor: "white",
            borderRadius: 20,
            width: "80%",
            margin: 30,
            display: 'flex',
            justifyContent: "center",
        }}>
            <table style={{
                margin: 30,
                width: "80%"
            }}>
                <thead style={{
                    margin: 30,
                    padding: 30
                }}>
                    <tr style={{
                        backgroundColor: "skyblue"
                    }}>
                        {
                            column.map(e => {
                                return (<td> {e.value}</td>)
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e => {
                            console.log(e.verified)
                            return (
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.screen_name}</td>
                                    <td>{e.followers_count}</td>
                                    <td>{e.following_count}</td>
                                    <td>{e.location}</td>
                                    <td>{e.verified.toString()}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Table;