import { render, RenderResult } from "@testing-library/react";
import { expectType } from "tsd";
import PyTitle from "~components/PyTitle/PyTitle";
import { PyTitleTag } from "~components/PyTitle/PyTitle.types";

describe("PyScript", (): void => {
  it("Renders component properly", async (): Promise<void> => {
    const { container }: RenderResult = render(
      <PyTitle>Example title</PyTitle>,
    );
    expect(container).toMatchSnapshot();
  });
  it("Has correct type", (): void => {
    expectType<PyTitleTag>(PyTitle);
  });
});
