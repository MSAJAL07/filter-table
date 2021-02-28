import React, { useState,useEffect } from "react";


const Table = ({column, data}) =>{

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    {
                        column.map(e=> {
                        return (<td> {e.value}</td>)
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e => {
                            console.log(e.verified)
                            return(
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