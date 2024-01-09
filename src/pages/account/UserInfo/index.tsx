import profile from "../../../assets/icons/profile.svg";
import classes from "./index.module.scss";

export const UserInfo = () => {
  // const { user } = useAuth()

  return (
    <div className={classes.profile}>
      <img src={profile} alt="profile" width={50} height={50} />

      <div className={classes.profileInfo}>
        <p className={classes.name}>ibadin</p>
        <p className={classes.email}>ibmeshach@gmail.com</p>
      </div>
    </div>
  );
};
