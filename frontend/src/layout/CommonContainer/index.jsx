import React, { useEffect, useState } from 'react';
import APIManager from 'utils/APImanager';
import Container from 'components/Container';
import { Grid } from '@mui/material';

const apiManager = new APIManager();

function CommonContainer({ urlPrefix, onClick, fieldName = 'name', getValue }) {
  const [list, setList] = useState([]);
  useEffect(async () => {
    const res = await apiManager.get(`${urlPrefix}`);
    setList(res?.data?.list);
  }, []);
  return (
    <Grid container spacing={2}>
      {list.map((e) => {
        return (
          <Grid key={e?._id} onClick={()=>getValue(e)} item xs={2}>
            <Container name={e[fieldName]} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CommonContainer;
