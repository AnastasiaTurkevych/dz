import { useFormik } from 'formik';
import * as Yup from 'yup';
import './register.css'

function RegisterForm() {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            check_password: '',
            age: '',
            country: '',
            gender: '',
            checkbox: false,
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().required('Email is required').email('Wrong email format'),
            password: Yup.string().required('Password is required').matches(
                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                'Password must contain at least 8 characters, including one letter and one number'
            ),
            check_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
            age: Yup.number().required('Age is required').min(18, 'You need to be at least 18 years old'),
            country: Yup.string().required('Country is required'),
            gender: Yup.string().required('Gender is required'),
            checkbox: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),

        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })


    return (
        <div className="register">
            <h1>Sing Up     </h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <h2>Create Account</h2>
                <div className="form-control">
                    <label htmlFor="username">Username: </label>
                    <input
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text" id="username" name="username" />
                    <div className="error-container">
                        {
                            formik.touched.username && formik.errors.username &&
                            (
                                <span className="error">{formik.errors.username}</span>
                            )
                        }
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="email"> Email: </label>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email" id="email" name="email" />
                    <div className="error-container">
                        {
                            formik.touched.email && formik.errors.email &&
                            (
                                <span className="error">{formik.errors.email}</span>
                            )
                        }
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="password:"> Password: </label>
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password" id="password" name="password" />
                    <div className="error-container">
                        {
                            formik.touched.password && formik.errors.password &&
                            (
                                <span className="error">{formik.errors.password}</span>
                            )
                        }
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="check_password">Сonfirm password: </label>
                    <input
                        value={formik.values.check_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id="check_password"
                        name="check_password" />
                    <div className="error-container">
                        {
                            formik.touched.check_password && formik.errors.check_password &&
                            (
                                <span className="error">{formik.errors.check_password}</span>
                            )
                        }
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="age"> Age: </label>
                    <input
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number" id="age" name="age" />
                    <div className="error-container">
                        {
                            formik.touched.age && formik.errors.age &&
                            (
                                <span className="error">{formik.errors.age}</span>
                            )
                        }
                    </div>
                </div>

                <div className="form-control">
                    <label htmlFor="country">Region:</label>
                    <select
                        id="country"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="" label="Select a region" />
                        <option value="us" label="United States" />
                        <option value="ca" label="Canada" />
                        <option value="eu" label="Europe" />
                    </select>
                    <div className="error-container">
                        {formik.touched.country && formik.errors.country && (
                            <span className="error">{formik.errors.country}</span>
                        )}
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="checkbox">Agree to terms and conditions:</label>
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        checked={formik.values.checkbox}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <div className="error-container">
                        {formik.touched.checkbox && formik.errors.checkbox && (
                            <span className="error">{formik.errors.checkbox}</span>
                        )}
                    </div>
                </div>
                <div>
                    <button disabled={formik.isSubmitting} type="submit">Submit </button>                </div>
            </form>
        </div>

    )
}

export default RegisterForm