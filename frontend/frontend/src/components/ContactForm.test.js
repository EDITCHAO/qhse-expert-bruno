import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import * as contactsAPI from '../api/contacts';

jest.mock('../api/contacts');

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders contact form', () => {
    render(<ContactForm />);
    expect(screen.getByText('Contactez-moi')).toBeInTheDocument();
    expect(screen.getByLabelText('Nom *')).toBeInTheDocument();
    expect(screen.getByLabelText('Email *')).toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    contactsAPI.default.create.mockResolvedValue({
      data: { success: true }
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Nom *'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Numéro de téléphone *'), {
      target: { value: '1234567890' }
    });
    fireEvent.change(screen.getByLabelText('Sujet *'), {
      target: { value: 'Test' }
    });
    fireEvent.change(screen.getByLabelText('Message *'), {
      target: { value: 'Test message' }
    });

    fireEvent.click(screen.getByText('Envoyer'));

    await waitFor(() => {
      expect(contactsAPI.default.create).toHaveBeenCalledWith({
        nom: 'John Doe',
        email: 'john@example.com',
        numero: '1234567890',
        sujet: 'Test',
        message: 'Test message'
      });
    });
  });

  test('displays error message on submission failure', async () => {
    contactsAPI.default.create.mockRejectedValue({
      response: { data: { message: 'Error' } }
    });

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText('Nom *'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText('Email *'), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText('Numéro de téléphone *'), {
      target: { value: '1234567890' }
    });
    fireEvent.change(screen.getByLabelText('Sujet *'), {
      target: { value: 'Test' }
    });
    fireEvent.change(screen.getByLabelText('Message *'), {
      target: { value: 'Test message' }
    });

    fireEvent.click(screen.getByText('Envoyer'));

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
    });
  });
});
