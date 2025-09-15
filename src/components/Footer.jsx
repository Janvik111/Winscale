import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} WinScale Consultancy. All rights reserved.
    </footer>
  );
}