import AccountForm from "./AccountForm";

import classes from "./index.module.scss";

export default function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>Personal Information</h5>
      <AccountForm />
    </div>
  );
}
