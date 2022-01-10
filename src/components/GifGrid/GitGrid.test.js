import { GifGrid } from "./GifGrid";
import { shallow } from "enzyme";
import { useFetchGif } from "../../hooks/useFetchGif";
import { GitGridItem } from "../GitGridItem/GitGridItem";

jest.mock("../../hooks/useFetchGif");

describe("Given a GitGrid component", () => {
  describe("When it render", () => {
    test("It should rendered a liTag with name 'categorie' and one divTag", () => {
      const categorie = "Ball dragon";

      useFetchGif.mockReturnValue({
        data: [],
        loading: true,
      });
      const wrapper = shallow(<GifGrid categorie={categorie} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("When it call the function 'useFetchGif'", () => {
    test("It should show images", () => {
      const gifs = [
        {
          id: "ABC",
          url: "url",
          title: "Algo",
        },
      ];
      const categorie = "Ball dragon";

      useFetchGif.mockReturnValue({
        data: gifs,
        loading: false,
      });

      const wrapper = shallow(<GifGrid categorie={categorie} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("p").exists()).toBe(false);
      expect(wrapper.find(GitGridItem).length).toBe(gifs.length);
    });
  });
});
