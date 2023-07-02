import PropTypes from 'prop-types';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Checkbox, FormControl, FormControlLabel, Stack } from '@mui/material';
import { Formik } from 'formik';
import AnimateButton from 'components/AnimateButton';
import APImanager from 'utils/APImanager';
import { PhoneNumberContext } from 'contexts/PhoneNumberContext';
import CustomAlert from 'components/CustomAlert';
import NumberWithCountryCode from 'components/NumberWithCountryCode';
import ReusableValidation from 'components/ReusableValidation/ReusableValidation';

const apiManager = new APImanager();

const Login = ({ loginProp, ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { detail, setDetail } = useContext(PhoneNumberContext);

  return (
    <Formik
      initialValues={{
        checked: true,
        username: '',
        password: ''
      }}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          const res = await apiManager.post('admin/login', {
            name: values.username,
            password: values.password,
          });
          if (!res.error) {
            localStorage.setItem('token', res.data['token']);
            navigate('/admin-dashboard');
          }
        } catch (e) {
          console.error(e);
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
        setFieldValue
      }) => (
        <form noValidate onSubmit={handleSubmit} {...others}>
          <FormControl fullWidth>
            <ReusableValidation fieldName="username" label="Username" required={true} />
          </FormControl>
          <FormControl fullWidth>
            <ReusableValidation fieldName="password" type="password" label="Password" required={true} />
          </FormControl>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.checked}
                  onChange={handleChange}
                  name="checked"
                  color="primary"
                />
              }
              label="Remember me"
            />
          </Stack>
          <Box sx={{ mt: 2 }}>
            <AnimateButton>
              <Button
                disableElevation
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </AnimateButton>
          </Box>
        </form>
      )}
    </Formik>
  );
};

Login.propTypes = {
  loginProp: PropTypes.number
};

export default Login;
