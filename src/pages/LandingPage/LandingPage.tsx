import Categories from "../../components/Categories";
import { CustomHero } from "../../components/CustomHero";
import { Gutter } from "../../components/Gutter";
import NewCollection from "../../components/NewCollections";
import Promotion from "../../components/Promotion";
import classes from "./index.module.scss";

const LandingPage = () => {
  return (
    <>
      {true ? (
        <section>
          <CustomHero />
          <Gutter className={classes.home}>
            <Categories />
            <NewCollection />
            <Promotion />
          </Gutter>
        </section>
      ) : (
        <>
          {/* <Hero {...hero} />
          <Blocks
            blocks={layout}
            disableTopPadding={!hero || hero?.type === 'none' || hero?.type === 'lowImpact'}
          /> */}
        </>
      )}
    </>
  );
};

export default LandingPage;
