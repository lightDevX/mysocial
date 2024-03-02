import { useForm } from "react-hook-form";
import Field from "./common/Field";


const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const formSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <>
            <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]" onSubmit={handleSubmit(formSubmit)}>
                <Field label="Email">
                    <input
                        className="auth-input"
                        name="email"
                        type="email"
                        id="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <div role="alert" className="text-red-500">{errors.email.message}</div>}
                </Field>

                {/* <div className="form-control">
                    <label className="auth-label" htmlFor="email">Email</label>
                    <input
                        className="auth-input"
                        name="email"
                        type="email"
                        id="email"
                    />
                </div>

                <div className="form-control">
                    <label className="auth-label" htmlFor="email">Password</label>
                    <input
                        className="auth-input"
                        name="password"
                        type="password"
                        id="password"
                    />
                </div>

                <button
                    className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                    type="submit"
                >
                    Login
                </button> */}
            </form>
        </>
    );
};

export default LoginForm;