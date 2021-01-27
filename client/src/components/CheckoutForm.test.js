import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const header = getByText(/Checkout Form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByText, getByTestId, getByDisplayValue } = render(
    <CheckoutForm />
  );

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/state/i);
  const zip = getByLabelText(/zip/i);

  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(address).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(state).toBeInTheDocument();
  expect(zip).toBeInTheDocument();

  fireEvent.change(firstName, { target: { value: "Donna" } });
  fireEvent.change(lastName, { target: { value: "Ballew" } });
  fireEvent.change(address, { target: { value: "6547 N Academy Blvd, 1091" } });
  fireEvent.change(city, { target: { value: "Colorado Springs" } });
  fireEvent.change(state, { target: { value: "CO" } });
  fireEvent.change(zip, { target: { value: "80918" } });

  expect(getByDisplayValue(/Donna/i)).toBeInTheDocument();
  expect(getByDisplayValue(/Ballew/i)).toBeInTheDocument();
  expect(getByDisplayValue(/6547 N Academy Blvd, 1091/i)).toBeInTheDocument();
  expect(getByDisplayValue(/Colorado Springs/i)).toBeInTheDocument();
  expect(getByDisplayValue(/CO/)).toBeInTheDocument();
  expect(getByDisplayValue(/80918/i)).toBeInTheDocument();

  const checkoutSubmit = getByTestId(/submitCheckout/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit);

  const success = getByTestId(/successMessage/i);
  expect(success).toBeInTheDocument();
});
