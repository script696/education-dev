import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@shared/helpers/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("Button render in document", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
