import React, { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { Message } from "../../../../components/Message";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const CreateAccountForm: React.FC = () => {
  // const searchParams = useSearchParams()
  // const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  // const { login } = useAuth()
  // const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
    setError(null);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const password = useRef({});
  password.current = watch("password", "");

  // const onSubmit = useCallback(
  //   async (data: FormData) => {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`, {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     })

  //     if (!response.ok) {
  //       const message = response.statusText || 'There was an error creating the account.'
  //       setError(message)
  //       return
  //     }

  //     const redirect = searchParams.get('redirect')

  //     const timer = setTimeout(() => {
  //       setLoading(true)
  //     }, 1000)

  //     try {
  //       await login(data)
  //       clearTimeout(timer)
  //       if (redirect) router.push(redirect as string)
  //       else router.push(`/`)
  //       window.location.href = '/'
  //     } catch (_) {
  //       clearTimeout(timer)
  //       setError('There was an error with the credentials provided. Please try again.')
  //     }
  //   },
  //   [login, router, searchParams],
  // )
  const onSubmit = useCallback(async () => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <p>
        {`This is where new customers can signup and create a new account. To manage all users, `}
        <Link to="/admin/collections/users">login to the admin dashboard</Link>
        {"."}
      </p>
      <Message error={error} className={classes.message} />
      <Input
        name="email"
        label="Email Address"
        required
        register={register}
        error={errors.email}
        type="email"
      />
      <Input
        name="name"
        label="Full name"
        required
        register={register}
        error={errors.name}
        type="text"
      />
      <Input
        name="password"
        type="password"
        label="Password"
        required
        register={register}
        error={errors.password}
      />
      <Input
        name="passwordConfirm"
        type="password"
        label="Confirm Password"
        required
        register={register}
        validate={(value) =>
          value === password.current || "The passwords do not match"
        }
        error={errors.passwordConfirm}
      />
      <Button
        type="submit"
        label={loading ? "Processing" : "Sign up"}
        disabled={loading}
        appearance="primary"
        className={classes.submit}
      />
      <div>
        {"Already have an account? "}
        <Link to={`/login`}>Login</Link>
      </div>
    </form>
  );
};

export default CreateAccountForm;