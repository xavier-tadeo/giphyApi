import { AddCategory } from "./AddCategory";
import { shallow } from "enzyme";

describe("Given a AddCategoy component", () => {
  const setCategory = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategory} />);

  describe("When it is render", () => {
    test("It should rendered a h3Tag with name 'Added category' and inputTag", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("When the user writte in the input", () => {
    test("It should change the text in it", () => {
      const value = "Hello word";
      const input = wrapper.find("input");

      input.simulate("change", {
        target: {
          value: value,
        },
      });
    });
  });
});
