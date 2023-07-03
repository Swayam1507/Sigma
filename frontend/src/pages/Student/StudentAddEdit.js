import AddIcon from '@mui/icons-material/Add';
import { InputAdornment } from '@mui/material';
import { Layout } from 'components/Layout/Layout';
import ReusableValidation from 'components/ReusableValidation/ReusableValidation';
import CustomAutoComplete from 'components/CustomAutoComplete';
import SimpleModal from 'components/SimpleModal';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import APIManager from 'utils/APImanager';
import { trimValues } from 'utils/Helper';

const apiManager = new APIManager();

const CountryAddEdit = forwardRef(
  ({ getList, rowsPerPage, editData, setSearch, clearSearchField }, ref) => {
    let initialValues = {
      countryName: editData.countryName || '',
      name: editData.name || '',
      fatherNo: editData.fatherNo || '',
      name: editData.name || '',
      motherNo: editData.motherNo || '',
      selfNo: editData.selfNo || '',
      standard: editData.standard || '',
      fees: editData.fees || '',
    };
    if (editData) {
      initialValues._id = editData._id;
    }

    return (
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={async (values) => {
          const trimmedValues = trimValues(values);
          trimmedValues.standard = values?.standard?._id;
          const res = editData
            ? await apiManager.put(`student/edit/${initialValues._id}`, trimmedValues)
            : await apiManager.post('student/add', trimmedValues);
          if (!res.error) {
            ref.current.handleClose();
            getList();
            setSearch('');
            clearSearchField();
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
          resetForm,
          submitForm
        }) => (
          <SimpleModal
            title={editData ? 'Edit' : 'Add'}
            submitForm={submitForm}
            resetForm={resetForm}
            ref={ref}
            errors={errors}
            handleSubmit={handleSubmit}
          >
            <ReusableValidation
              fieldName="name"
              label={'Student Name'}
              required={true}
            />
            <ReusableValidation
              fieldName="fatherNo"
              label={'Father Number'}
              required={true}
            />
            <ReusableValidation
              fieldName="motherNo"
              label={'Mother Number'}
              required={true}
            />
            <ReusableValidation
              fieldName="selfNo"
              label={'Student Number'}
              required={true}
            />
            <CustomAutoComplete
                placeholder="Choose a standard"
                url="standards/list"
                fieldName="standard"
                errorName={'Standard'}
                required={true}
                optionRow={['name']}
                valueToShowInField="name"
              />
            <ReusableValidation
              fieldName="fees"
              label={'Fees'}
              required={true}
            />
          </SimpleModal>
        )}
      </Formik>
    );
  }
);

export default CountryAddEdit;
