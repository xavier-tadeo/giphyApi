import { shallow } from "enzyme";
import { GitGridItem } from "./GitGridItem";

describe("Given a GitGridItem component", () => {
  describe("When it render", () => {
    test("Then should rendered a pTag and imgTag", () => {
      const image = "url";
      const title = "Un titulo";

      const wrapper = shallow(<GitGridItem img={image} title={title} />);
      const pExpect = wrapper.find("p").text();

      expect(pExpect).toBe(title);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
