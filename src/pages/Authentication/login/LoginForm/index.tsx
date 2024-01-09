import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

import classes from "./index.module.scss";
import { Message } from "../../../../components/Message";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  // const searchParams = useSearchParams();
  // const allParams = searchParams.toString()
  //   ? `?${searchParams.toString()}`
  //   : "";
  // const redirect = useRef(searchParams.get("redirect"));
  // const { login } = useAuth();
  // const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    setError(null);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>();

  // const onSubmit = useCallback(
  //   async (data: FormData) => {
  //     try {
  //       await login(data);
  //       if (redirect?.current) router.push(redirect.current as string);
  //       else router.push("/");
  //       window.location.href = "/";
  //     } catch (_) {
  //       setError(
  //         "There was an error with the credentials provided. Please try again."
  //       );
  //     }
  //   },
  //   [login, router]
  // );

  const onSubmit = useCallback(async () => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
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
        name="password"
        type="password"
        label="Password"
        required
        register={register}
        error={errors.password}
      />
      <Button
        type="submit"
        appearance="primary"
        label={isLoading ? "Processing" : "Login"}
        disabled={isLoading}
        className={classes.submit}
      />
      <div className={classes.links}>
        <Link to={`/register`}>Create an account</Link>
        <br />
        <Link to={`/recover-password`}>Recover your password</Link>
      </div>
    </form>
  );
};

export default LoginForm;
