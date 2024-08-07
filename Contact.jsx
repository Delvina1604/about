// src/Contact.jsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './Navbar'; // Correct the import path if necessary

const theme = {
  colors: {
    white: '#ffffff',
    btn: 'dark blue',
  },
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  margin bottom:-150;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type='submit'] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <br/><br/>
      <h2>FEEL FREE TO CONNECT WITH US!!</h2>
      <Wrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.9774605186335!2d77.29678141435814!3d28.299006905849843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc0b01f0f019%3A0x93e4211b9a200ed0!2sAlchem%20International%20Private%20Limited!5e0!3m2!1sen!2sin!4v1664815246439!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xdojzzlj" method="POST" className="contact-inputs">
              <input type="text" placeholder="username" name="username" required autoComplete="off" />
              <input type="email" name="Email" placeholder="Email" autoComplete="off" required />
              <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your message"></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Contact;
