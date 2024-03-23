import React from 'react';

function Contact() {
  return (
    <div className="container mt-5 pb-5">
      <div className="row gap-12 lg:grid-cols-2 ">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Contact us</h1>
            <p className="text-gray-500 dark:text-gray-400">
              We're here to help. Fill out the form below or contact us using the information on the right.
            </p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="form-label">Name</label>
                <input id="name" className="form-control" type="text" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" className="form-control" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control min-h-[150px]" placeholder="Enter your message"></textarea>
            </div>
            <button className="btn btn-primary mt-5 ">Send message</button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="d-flex align-items-center gap-4">
              <MapPinIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">123 Street Name, City, Country, 12345</p>
            </div>
            <div className="d-flex align-items-center gap-4">
              <PhoneIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">+1 (123) 456-7890</p>
            </div>
            <div className="d-flex align-items-center gap-4">
              <MailIcon className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm text-gray-500 dark:text-gray-400">info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }
  

export default Contact;