import AddIcon from '@mui/icons-material/Add';
import { InputAdornment } from '@mui/material';
import { Layout } from 'components/Layout/Layout';
import ReusableValidation from 'components/ReusableValidation/ReusableValidation';
import SimpleModal from 'components/SimpleModal';
import { Formik } from 'formik';
import { forwardRef } from 'react';
import APIManager from 'utils/APImanager';
import { trimValues } from 'utils/Helper';

const apiManager = new APIManager();

const CountryAddEdit = forwardRef(
  ({ getList, rowsPerPage, editData, setSearch, clearSearchField }, ref) => {
    let initialValues = {
      name: editData.name || ''
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
          const res = editData
            ? await apiManager.put(`standards/edit/${initialValues._id}`, trimmedValues)
            : await apiManager.post('standards/add', trimmedValues);
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
              label={'Standard Name'}
              required={true}
              inputProps={{
                style: { textTransform: 'capitalize' }
              }}
            />
            
          </SimpleModal>
        )}
      </Formik>
    );
  }
);

export default CountryAddEdit;
