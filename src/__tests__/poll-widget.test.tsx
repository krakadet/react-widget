import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from "@testing-library/react";
import PollWidget from '../component/poll-widget';
import { setLocalStorage, getLocalStorage } from '../utils';


jest.mock('../utils' , () => ({
  setLocalStorage: jest.fn(),
  getLocalStorage: jest.fn()
}));

describe('Test poll widdet component', ()=> {

    const mockProps = {
        mainQuestion: 'What is your favorite color?',
        answers: ['Red', 'Blue', 'Green'],
    }

    it('should render initial state with zeros', () => {
        // @ts-ignore
        getLocalStorage.mockImplementation(() => [0, 0, 0]);
        const {container} = render(<PollWidget {...mockProps} />)
        expect(container).toMatchSnapshot()
    });

    it('should render initial state with different voutes', () => {
        // @ts-ignore
        getLocalStorage.mockImplementation(() => [25, 35, 45]);
        const {container, findAllByText, getByText} = render(<PollWidget {...mockProps} />)
        expect(getByText(/25%/i)).toBeInTheDocument()
        expect(getByText(/35%/i)).toBeInTheDocument()
        expect(getByText(/45%/i)).toBeInTheDocument()
    });

    it('should update localStorageVoutes', () => {
        // @ts-ignore
        getLocalStorage.mockImplementation(() => [25, 35, 45]);
        const {container, findAllByText, getByText} = render(<PollWidget {...mockProps} />)
        const firstAnswer = screen.getByText(/25%/i)
        fireEvent.click(firstAnswer)
        expect(setLocalStorage).toHaveBeenCalledWith(mockProps.mainQuestion, [26, 35, 45])
        console.log(screen.debug(container))
        expect(getByText(/26%/i)).toBeInTheDocument()
    });
});