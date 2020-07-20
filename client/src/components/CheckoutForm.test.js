import React from "react";
import {
  render,
  fireEvent,
  screen,
  getByLabelText,
} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/Checkout Form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);

  const firsName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByLabelText(/Checkout/i);

  fireEvent.change(firsName, { target: { value: "Donna" } });
  fireEvent.change(lastName, { target: { value: "Ballew" } });
  fireEvent.change(address, { target: { value: "6547 N Academy Blvd, 1091" } });
  fireEvent.change(city, { target: { value: "Colorado Springs" } });
  fireEvent.change(state, { target: { value: "Colorado" } });
  fireEvent.change(zip, { target: { value: "80918" } });
  fireEvent.click(button);

  const grabName = screen.getByText(/Donna/i);
  expect(grabName).toBeInTheDocument();

  const success = screen.getByLabelId(/successMessage/i);
  expect(success).toBeInTheDocument();
});

// UNABLE TO RUN TEST!!!
