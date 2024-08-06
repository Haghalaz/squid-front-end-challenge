import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

import * as mock from "./__mocks__/mock.json";

import PhotoCard from "@molecules/photo-card/index.tsx";

const mockData: PhotoDetails = mock;

test("Renders the PhotoCard component", async () => {
  await waitFor(() => {
    render(<PhotoCard data={mockData} />);
  });

  expect(true).toBeTruthy();
});

test("Should render and click the Instagram link", async () => {
  await waitFor(() => {
    render(<PhotoCard data={mockData} />);
  });

  const imageElement = screen.getByAltText("Instagram");
  expect(imageElement).toBeInTheDocument();

  const linkElement = screen.getByRole("link", { name: /Instagram/i });
  expect(linkElement).toHaveAttribute("href", mockData.link);

  expect(linkElement).toHaveAttribute("target", "_blank");
  expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
});

test("Should display user mentions when present", async () => {
  if (mockData.metadados.users_in_photo.length === 0) return;

  await waitFor(() => {
    render(<PhotoCard data={mockData} />);
  });

  const userMentionsContainer = screen.getByTestId("user-mentions-container");
  expect(userMentionsContainer).toBeInTheDocument();

  const userMentionsList = screen.getByTestId("user-mentions");
  expect(userMentionsList).toBeInTheDocument();

  for (const user of mockData.metadados.users_in_photo) {
    const johnDoeMention = screen.getByTestId(`user-mention-${user.user.username}`);
    expect(johnDoeMention).toHaveTextContent(`@${user.user.username}`);
  }
});

test("Should not display user mentions when not present", async () => {
  if (mockData.metadados.users_in_photo.length > 0) return;

  const mockDataWithoutMentions = {
    ...mockData,
    metadados: {
      ...mockData.metadados,
      users_in_photo: [],
    },
  };

  await waitFor(() => {
    render(<PhotoCard data={mockDataWithoutMentions} />);
  });

  const userMentionsContainer = screen.queryByTestId("user-mentions-container");
  expect(userMentionsContainer).toBeNull();
});
