import { GifGrid } from "./GifGrid";
import { shallow } from "enzyme";

describe("Given a GitGrid component", () => {
  describe("When it render", () => {
    test("It should rendered a liTag with name 'categorie' and one divTag", () => {
      const categorie = "Ball dragon";

      const wrapper = shallow(<GifGrid categorie={categorie} />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
