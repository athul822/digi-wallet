import React from "react";
import MaterialTable from "material-table";

const UsersTableData = () => {
    const data = [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35, state: "ads" },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, state: "ads" },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, state: "ads" },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16, state: "ads" },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, state: "ads" },
        { id: 6, lastName: "Melisandre", firstName: null, age: 150, state: "ads" },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, state: "ads" },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, state: "ads" },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, state: "ads" },
    ];
    const columns = [
        {
            title: "#",
            field: "id",
        },
        {
            title: "First Name",
            field: "firstName",
        },
        {
            title:'Last Name',field:'lastName'
        },
        {
            title:'State',field:'state'
        }
    ];
    return (
        <div>
           <MaterialTable title="Bank Loan" data={data} columns={columns}></MaterialTable>
        </div>
    );
};

export default UsersTableData;
