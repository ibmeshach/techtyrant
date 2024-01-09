import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./index.module.scss";
import { Message } from "../../../../components/Message";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

type FormData = {
  email: string;
};

export const RecoverPasswordForm: React.FC = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSuccess(false);
    setError("");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // const onSubmit = useCallback(async (data: FormData) => {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`,
  //     {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   )

  //   if (response.ok) {
  //     setSuccess(true)
  //     setError('')
  //   } else {
  //     setError(
  //       'There was a problem while attempting to send you a password reset email. Please try again.',
  //     )
  //   }
  // }, [])

  const onSubmit = useCallback(async () => {}, []);

  return (
    <Fragment>
      {!success && (
        <React.Fragment>
          <p>
            Enter your registered email address. We'll send you a code to reset
            your password.
          </p>

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
            <Button
              type="submit"
              appearance="primary"
              label="Recover Password"
              className={classes.submit}
            />
          </form>
        </React.Fragment>
      )}
      {success && (
        <React.Fragment>
          <h1>Request submitted</h1>
          <p>
            Check your email for a link that will allow you to securely reset
            your password.
          </p>
        </React.Fragment>
      )}
    </Fragment>
  );
};
