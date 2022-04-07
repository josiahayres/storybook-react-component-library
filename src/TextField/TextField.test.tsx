import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  waitFor,
  cleanup,
  within,
  fireEvent,
} from "@testing-library/react";
import * as stories from "./TextField.stories";

describe("InboxScreen", () => {
  afterEach(() => {
    cleanup();
  });

  const { Primary } = stories;

  it("should pin a task", async () => {
    const { queryByText, getByRole, getByTestId } = render(
      <Primary label="Text Field" data-testid="primary-text-field"></Primary>
    );

    const textField = getByTestId("primary-text-field");
    expect(textField).toBeInTheDocument();
  });
});
