import ImportFile from 'components/ImportFile/ImportFile';
import CommonTable from 'layout/CommonTable';
import StudentAddEdit from './StudentAddEdit';

const columns = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'actions',
    name: 'Actions',
    align: 'right'
  }
];

function Country(props) {
  return (
    <CommonTable columns={columns} title={'Standards'} urlPrefix="standards">
      <StudentAddEdit type="addEdit" />
      <ImportFile
        type="import"
        sampleUrl={`${process.env.REACT_APP_BASE_URL}sample/sample_import_country.csv`}
        url="country/import"
      />
    </CommonTable>
  );
}
export default Country;
