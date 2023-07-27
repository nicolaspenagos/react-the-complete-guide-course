import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("renders post if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem"); // Returns a promise
    expect(listItemElements).not.toHaveLength(0);
  });
});
