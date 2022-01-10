import { shallow } from "enzyme";
import { GitGridItem } from "./GitGridItem";

describe("Given a GitGridItem component", () => {
  describe("When it render", () => {
    const image = "url";
    const title = "Un titulo";
    const wrapper = shallow(<GitGridItem img={image} title={title} />);
    test("Then should rendered a pTag and imgTag", () => {
      const pExpect = wrapper.find("p").text().trim();
      const imgExpect = wrapper.find("img");

      expect(pExpect).toBe(title);
      expect(imgExpect.prop("src")).toBe(image);
      expect(wrapper).toMatchSnapshot();
    });

    test("It should have className 'animate__zoomInDown'", () => {
      const div = wrapper.find("div");

      const className = div.prop("className");

      expect(className.includes("animate__zoomInDown")).toBe(true);
    });
  });
});
