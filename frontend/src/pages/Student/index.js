import ImportFile from 'components/ImportFile/ImportFile';
import CommonTable from 'layout/CommonTable';
import CountryAddEdit from './StudentAddEdit';
import CommonContainer from 'layout/CommonContainer'
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const columns = [
  {
    id: 'countryName',
    label: 'Name'
  },
  {
    id: 'countryCode',
    label: 'Dial Code',
    prefix: '+'
  },
  {
    id: 'isoCountry',
    label: 'ISO'
  },
  { id: 'flag', label: 'Flag' },
  {
    id: 'isActive',
    label: 'Active'
  },
  {
    id: 'actions',
    name: 'Actions',
    align: 'right'
  }
];

function Country(props) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <CommonContainer urlPrefix={'standards/list'} fieldName='name' getValue={(standard)=>{
        console.log({standard})
        navigate(`/student/standard/${standard._id}`)
      }} />
      {/* <CommonTable columns={columns} imageRequired={true} title={'Students'} urlPrefix="student">
        <CountryAddEdit type="addEdit" />
        <ImportFile
          type="import"
          sampleUrl={`${process.env.REACT_APP_BASE_URL}sample/sample_import_country.csv`}
          url="country/import"
        />
      </CommonTable> */}
    </Fragment>
  );
}
export default Country;
