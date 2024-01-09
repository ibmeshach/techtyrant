import React from "react";
import heroImg from "../../assets/hero/hero-1.png";

import classes from "./index.module.scss";
import RichText from "../../components/RichText";
import { CMSLink } from "../../components/Link";

// Sample children array representing different types of nodes
// Sample children array representing different types of nodes

export const CustomHero: React.FC = () => {
  const children = [
    {
      type: "hero",
      children: [{ text: "Unleash Innovation in Every Byte", bold: true }],
    },
    {
      type: "hero text",
      children: [{ text: "Explore a World of Cutting-Edge Tech" }],
    },
  ];

  const links = [
    {
      link: {
        type: "reference",
        url: "",
        newTab: true,
        reference: {
          value: "shop",
        },
        label: "Shop now",
        appearance: "primary",
      },
    },
    // {
    //   link: {
    //     type: "custom",
    //     appearance: "secondary",
    //     reference: null,
    //     label: "View on GitHub",
    //     url: "https://github.com/payloadcms/payload/tree/main/templates/ecommerce",
    //     newTab: true,
    //   },
    // },
  ];

  return (
    <section className={classes.hero}>
      <div
        className={classes.heroWrapper}
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className={classes.heroTextBox}>
          <RichText content={children} />

          {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
