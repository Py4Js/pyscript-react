import { render, RenderResult } from "@testing-library/react";
import PyTitle from "~components/base/PyTitle/PyTitle";

describe("PyScript", (): void => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <PyTitle>Example title</PyTitle>,
    );
    expect(container).toMatchSnapshot();
  });
});
