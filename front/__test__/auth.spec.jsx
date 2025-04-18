import {
  cleanup,
  fireEvent,
  render,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import { afterEach, describe, expect, test, vitest } from "vitest";
import SendOTPForm from "../src/feautures/auth/SendOTPForm";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import AuthContainer from "../src/feautures/auth/AuthContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

describe("authentication suite", () => {
  afterEach(() => {
    cleanup();
  });
  test("send OTP -- pending", () => {
    render(
      <SendOTPForm
        isPending={true}
        register={() => {}}
        formState={{ errors: { phoneNumber: "" } }}
        onSubmit={() => {}}
      />
    );
    const buttonElm = screen.queryByRole("button");
    const loaderElm = within(buttonElm).queryByTestId(/Loader/i);
    const buttonText = within(buttonElm).queryByText("ارسال کد تایید");
    expect(loaderElm).toBeInTheDocument();
    expect(loaderElm).toBeVisible();
    expect(buttonText).not.toBeInTheDocument();
  });
  test("send OTP -- not pending", () => {
    render(
      <SendOTPForm
        isPending={false}
        register={() => {}}
        formState={{ errors: { phoneNumber: "" } }}
        onSubmit={() => {}}
      />
    );
    const buttonElm = screen.queryByRole("button");
    const loaderElm = within(buttonElm).queryByTestId(/Loader/i);
    const buttonText = within(buttonElm).queryByText("ارسال کد تایید");
    expect(buttonText).toBeInTheDocument();
    expect(buttonText).toBeVisible();
    expect(loaderElm).not.toBeInTheDocument();
  });
  test("Auth container - integration", async () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <AuthContainer />
        </QueryClientProvider>
      </BrowserRouter>
    );
    //send otp page
    const phoneNumberTextBox = screen.queryByRole("textbox");
    const buttonElm = screen.queryByRole("button");
    expect(buttonElm).toBeInTheDocument();
    expect(buttonElm).toHaveTextContent("ارسال کد تایید");
    expect(phoneNumberTextBox).toBeInTheDocument();
    expect(phoneNumberTextBox).toBeVisible();
    fireEvent.click(phoneNumberTextBox);
    fireEvent.change(phoneNumberTextBox, { target: { value: "09056327763" } });
    expect(phoneNumberTextBox.value).toBe("09056327763");
    // show loader element
    let loaderElm = within(buttonElm).queryByTestId(/Loader/i);
    expect(loaderElm).not.toBeInTheDocument();
    fireEvent.click(buttonElm);
    loaderElm = await within(buttonElm).findByTestId(/Loader/i);
    expect(loaderElm).toBeInTheDocument();

    // check otp page
    await waitForElementToBeRemoved(phoneNumberTextBox, { timeout: 3000 });
    const checkOtpEl = await screen.findByText(/تغییر شماره موبایل ←/i);
    expect(checkOtpEl).toBeInTheDocument();
    const checkOtpTextBoxes = screen.findAllByRole("textbox");
    (await checkOtpTextBoxes).forEach((textbox) => {
      fireEvent.click(textbox);
      fireEvent.change(textbox, { target: { value: 1 } });
      expect(textbox.value).toBe("1");
    });
    const checkOtpButtonElm = screen.queryByText(/ثبت/i);
    expect(checkOtpButtonElm).toBeInTheDocument();
    fireEvent.click(checkOtpButtonElm);
  });
});
