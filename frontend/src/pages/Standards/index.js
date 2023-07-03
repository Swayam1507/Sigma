import ImportFile from 'components/ImportFile/ImportFile';
import CommonTable from 'layout/CommonTable';
import StandardAddEdit from './StandardAddEdit';

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

function Standard(props) {
  return (
    <CommonTable columns={columns} title={'Standards'} urlPrefix="standards">
      <StandardAddEdit type="addEdit" />
      {/* <ImportFile
        type="import"
        sampleUrl={`${process.env.REACT_APP_BASE_URL}sample/sample_import_country.csv`}
        url="country/import"
      /> */}
    </CommonTable>
  );
}
export default Standard;
