import { GifExpert } from "./GifExpert";
import { shallow } from "enzyme";

describe("Given GifExpert component", () => {
  describe("When it render", () => {
    test("It should rendered a divTag and olTag", () => {
      const wrapper = shallow(<GifExpert />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  test("It should the number of category", () => {
    const category = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifExpert defaultCategory={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(category.length);
  });
});
