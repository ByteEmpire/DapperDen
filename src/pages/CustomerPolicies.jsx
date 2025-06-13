import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const policiesContent = {
  contact: {
    title: 'Contact Us',
    content: (
      <>
        <p className="mb-2">We’re here to help you 24/7. Reach out to us through the following:</p>
        <ul className="list-disc list-inside">
          <li>Email: support@dapperden.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Address: 123, Fashion Street, Mumbai, India</li>
        </ul>
      </>
    ),
  },
  faq: {
    title: 'Frequently Asked Questions (FAQ)',
    content: (
      <>
        <h3 className="text-lg font-semibold">1. How can I track my order?</h3>
        <p className="mb-4">Go to Track Orders and enter your Order ID.</p>
        <h3 className="text-lg font-semibold">2. What is your return policy?</h3>
        <p className="mb-4">Returns accepted within 7 days of delivery.</p>
        <h3 className="text-lg font-semibold">3. Do you offer Cash on Delivery?</h3>
        <p>Yes, COD is available on selected products.</p>
      </>
    ),
  },
  tnc: {
    title: 'Terms & Conditions',
    content: (
      <>
        <p className="mb-2">By using our platform, you agree to the following terms:</p>
        <ul className="list-disc list-inside">
          <li>Users must be 18+ or under guardian supervision.</li>
          <li>All content is property of DapperDen.</li>
          <li>Misuse of website can result in account termination.</li>
        </ul>
      </>
    ),
  },
  terms: {
    title: 'Terms of Use',
    content: (
      <>
        <p className="mb-2">These terms govern your use of DapperDen:</p>
        <ul className="list-disc list-inside">
          <li>You agree not to duplicate or sell our content.</li>
          <li>We reserve the right to change policies anytime.</li>
        </ul>
      </>
    ),
  },
  track: {
    title: 'Track Orders',
    content: (
      <>
        <p className="mb-4">Enter your Order ID and registered email to get real-time updates:</p>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Order ID</label>
            <input
              type="text"
              placeholder="e.g., #12345"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Track Order
          </button>
        </form>
      </>
    ),
  },
  shipping: {
    title: 'Shipping Policy',
    content: (
      <>
        <p className="mb-2">We ship pan-India with reliable partners:</p>
        <ul className="list-disc list-inside">
          <li>Free shipping on orders over ₹999.</li>
          <li>Delivery within 3-7 business days.</li>
        </ul>
      </>
    ),
  },
  cancellation: {
    title: 'Cancellation Policy',
    content: (
      <>
        <p>Orders can be cancelled before dispatch. Post-dispatch, please refer to our Returns section.</p>
      </>
    ),
  },
  returns: {
    title: 'Returns & Refunds',
    content: (
      <>
        <p>Return within 7 days of delivery. Ensure product is unused and in original packaging. Refund will be processed within 5-7 business days.</p>
      </>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    content: (
      <>
        <p className="mb-2">We care about your privacy:</p>
        <ul className="list-disc list-inside">
          <li>Personal info is encrypted and not shared with third parties.</li>
          <li>We only collect data to improve your shopping experience.</li>
        </ul>
      </>
    ),
  },
  grievance: {
    title: 'Grievance Redressal',
    content: (
      <>
        <p>If you face any issues, contact our Grievance Officer:</p>
        <ul className="list-disc list-inside">
          <li>Name: Mr. Rajesh Kapoor</li>
          <li>Email: grievance@dapperden.com</li>
          <li>Phone: +91 98765 12345</li>
        </ul>
      </>
    ),
  },
};

const CustomerPolicies = () => {
  const { section } = useParams();
  const navigate = useNavigate();  // Hook to navigate programmatically
  const policy = policiesContent[section];

  if (!policy) {
    return <div className="p-10 text-center text-xl">Policy section not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">{policy.title}</h1>
      <div className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-md border">
        {policy.content}
      </div>
      {/* Back to Home Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}  // Navigate back to the homepage
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default CustomerPolicies;
