import React from 'react';
import "./UserList.css"
import { userRows } from '../../../../datas';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import  DeleteOutlineIcon  from '@mui/icons-material/DeleteOutline';

export default function UserList() {

    const [userDatas, setUserDatas] = useState(userRows)
    const userDelete = userId =>(
        setUserDatas(userDatas.filter(user => (user.id != userId)))
    )
    const columns = [
        {
            field: "id",
            headerName: 'ID',
            width: 90,
        },
        {
            field: "user",
            headerName: 'User',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="/" className='Link'>
                            <div className="userListUser">
                                <img src={params.row.avatar} alt="" className='userListImg' />
                                {params.row.username}
                            </div>
                        </Link>
                    </>
                )
            },


        },
        {
            field: "email",
            headerName: "Email",
            width: 190
        },
        {
            field: "status",
            headerName: "status",
            width: 120
        },
        {
            field: "transaction",
            headerName: "Transaction",
            width: 160
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/${params.row.id}`} className='Link'>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='userListDelet' 
                        onClick={()=>userDelete(params.row.id)}
                        
                        />
                    </>
                )
            }
        }


    ]
    return (
        <div className='userList'>
            <DataGrid
                rows={userDatas}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 4,
                      },
                    },
                  }}
            />
        </div>
    );
}

