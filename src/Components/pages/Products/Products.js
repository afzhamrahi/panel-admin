import React from 'react';
import "./Products.css"
import { products } from '../../../datas';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import  DeleteOutlineIcon  from '@mui/icons-material/DeleteOutline';

export default function UserList() {

    const [productsDatas, setproductsDatas] = useState(products)
    const userDelete = userId =>(
        setproductsDatas(productsDatas.filter(user => (user.id != userId)))
    )
    const columns = [
        {
            field: "id",
            headerName: 'ID',
            width: 90,
        },
        {
            field: "title",
            headerName: 'title',
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to="" className='Link'>
                            <div className="userListUser">
                                <img src={params.row.avatar} alt="" className='userListImg' />
                                {params.row.title}
                            </div>
                        </Link>
                    </>
                )
            },


        },
        {
            field: "price",
            headerName: "price",
            width: 190
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`} className='Link'>
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
                rows={productsDatas}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 3,
                      },
                    },
                  }}
            />
        </div>
    );
}
