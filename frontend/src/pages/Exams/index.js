import ImportFile from 'components/ImportFile/ImportFile';
import CommonTable from 'layout/CommonTable';
import ExamAddEdit from './ExamAddEdit';

const columns = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'subject',
    label: 'Subject'
  },
  {
    id: 'mark',
    label: 'Total Marks'
  },
  {
    id: 'actions',
    name: 'Actions',
    align: 'right'
  }
];

function Standard(props) {
  return (
    <CommonTable columns={columns} title={'Exams'} urlPrefix="exam">
      <ExamAddEdit type="addEdit" />
      {/* <ImportFile
        type="import"
        sampleUrl={`${process.env.REACT_APP_BASE_URL}sample/sample_import_country.csv`}
        url="country/import"
      /> */}
    </CommonTable>
  );
}
export default Standard;
