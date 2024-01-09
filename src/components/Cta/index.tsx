import React from "react";
import classes from "./index.module.scss";
import { Button } from "../Button";

// Sample children array representing different types of nodes
// Sample children array representing different types of nodes

export const Cta: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.heroTextBox}>
          <h4>Continue shopping</h4>
          <p>Discover more products that are perfect for your tech needs!</p>
        </div>
        <Button
          className={classes.checkoutButton}
          href={"/products"}
          label="Continue shopping"
          appearance="primary"
        />
      </div>
    </section>
  );
};
