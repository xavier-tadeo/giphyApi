import { AddCategory } from "./AddCategory";
import { shallow } from "enzyme";

describe("Given a AddCategoy component", () => {
  const setCategory = jest.fn();
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategory} />);
  });

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

  describe("When the user touch enter button without info in input", () => {
    test("It should don t post info", () => {
      wrapper.find("form").simulate("submit", { preventDefault() {} });

      expect(setCategory).not.toHaveBeenCalled();
    });
  });

  describe("When the user touch enter button with info", () => {
    test("It should post info and clear the input", () => {
      const value = "Ball dragon";
      const input = wrapper.find("input");

      input.simulate("change", {
        target: {
          value: value,
        },
      });
      wrapper.find("form").simulate("submit", { preventDefault() {} });

      expect(setCategory).toHaveBeenCalled();
      expect(input.prop("value")).toBe("");
      expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
