import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <Container>
      <Typography variant="h4">Contact Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          fullWidth 
          label="Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal" 
        />
        <TextField 
          fullWidth 
          label="Email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal" 
        />
        <TextField 
          fullWidth 
          label="Message" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline 
          rows={4} 
          margin="normal" 
        />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </form>
    </Container>
  );
};

export default Contact;