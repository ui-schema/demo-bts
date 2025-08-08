import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import { userEvent } from '@vitest/browser/context'
import App from './App';

test('renders header', async() => {
    const {getByText} = render(<App/>);
    const headerElement = getByText(/UI-Schema \+ Bootstrap Example/i);
    await expect.element(headerElement).toBeInTheDocument();
});

test('Form is interactive', async() => {
    const {getByText, getByLabelText } = render(<App/>);

    const invalidText = getByText(/Form is invalid./i);
    await expect.element(invalidText).toBeInTheDocument();

    const countryInput = getByLabelText (/Country/i);
    await expect.element(countryInput).toBeInTheDocument();
    await userEvent.type(countryInput, 'Moon');

    const validText = getByText(/Form is valid./i);
    await expect.element(validText).toBeInTheDocument();
});
