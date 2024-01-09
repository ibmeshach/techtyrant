import { useEffect } from "react";
import { Checkbox } from "../../../components/Checkbox";
import { HR } from "../../../components/HR";
import { RadioButton } from "../../../components/Radio";
import { useFilter } from "../../../utils/filter";
import classes from "./index.module.scss";

const Filters = ({ categories }: { categories: any[] }) => {
  const { categoryFilters, sort, setCategoryFilters, setSort } = useFilter();

  const handleCategories = (categoryId: any) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategories = categoryFilters.filter(
        (id) => id !== categoryId
      );

      setCategoryFilters(updatedCategories);
    } else {
      setCategoryFilters([...categoryFilters, categoryId]);
    }
  };

  const handleSort = (value: string) => setSort(value);
  useEffect(() => {
    console.log(categoryFilters, "kgr");
    console.log(sort, "kga");
  }, [categoryFilters, sort]);
  return (
    <div className={classes.filters}>
      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map((category) => {
            const isSelected = categoryFilters.includes(category.id);

            return (
              <Checkbox
                key={category.id}
                label={category.title}
                value={category.id}
                isSelected={isSelected}
                onClickHandler={() => {
                  handleCategories(category.id);
                }}
              />
            );
          })}
        </div>
        <HR className={classes.hr} />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest"
            value="-createdAt"
            isSelected={sort === "-createdAt"}
            onRadioChange={handleSort}
            groupName="sort"
          />
          <RadioButton
            label="Oldest"
            value="createdAt"
            isSelected={sort === "createdAt"}
            onRadioChange={handleSort}
            groupName="sort"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
