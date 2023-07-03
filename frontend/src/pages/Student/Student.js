import CommonTable from 'layout/CommonTable';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import APIManager from 'utils/APImanager';

const apiManager = new APIManager();

function Student() {
    const params = useParams();
    const navigate = useNavigate();
    const [list, setList] = useState([])
    useEffect(async () => {
        if (params?.standard) {
            const list = await apiManager.get(`student/list/${params.standard}`)
            setList(list);
        } else {
            navigate(-1);
        }
    }, [params]);
    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'fatherNo', label: 'Father number' },
        {
          id: 'fees',
          label: 'Fees'
        },
        { id: 'actions', name: 'Actions' }
      ];
    if(params?.standard){
        return (
            <CommonTable
                title={'Students'}
                // imageRequired={true}
                addBtnTitle="Add Student"
                urlPrefix="student"
                appendUrl={params.standard}
                // downloadUrl={`${process.env.REACT_APP_BASE_URL}sample/sample_import_phone.csv`}
                columns={columns}
            >
                {/* <UserFilter type="filter" />
                <UserAddEdit type="addEdit" /> */}
            </CommonTable>
        )
    }
}

export default Student