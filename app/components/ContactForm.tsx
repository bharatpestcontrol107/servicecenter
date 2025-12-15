"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { PHONE_NUMBER } from "../lib/constants";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    age: "",
    address: "",
    pincode: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const productOptions = [
    "AC Air Conditioner Repairing",
    "Fridge Refrigerator Repairing",
    "Washing Machine Repairing",
    "Microwave Oven Repairing",
    "LED LCD TV Television Repairing",
    "Washer With Dryer Repairing",
    "Dishwasher Repairing",
  ];

  const ageOptions = [
    "1 Month to 12 Months",
    "1 Years to 2 Years",
    "2 Years to 4 Years",
    "4 Years to 7 Years",
    "7 Years to 10 Years",
    "10+ Years",
  ];

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    if (name === "phone" || name === "pincode") {
      const maxLength = name === "phone" ? 10 : 6;
      const digitsOnly = value.replace(/\D/g, "").slice(0, maxLength);
      setForm((f) => ({ ...f, [name]: digitsOnly }));
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    
    const loadingToast = toast.loading("Submitting your request...");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (res.ok) {
        toast.success("Request submitted successfully! We'll contact you soon.", {
          id: loadingToast,
          duration: 4000,
        });
        setForm({
          name: "",
          phone: "",
          product: "",
          age: "",
          address: "",
          pincode: "",
        });
      } else {
        toast.error(data.error || "Submission failed. Please try again.", {
          id: loadingToast,
        });
      }
    } catch (err) {
      toast.error("Network error. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-sand-50 px-6 py-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Left side - Call to Action */}
          <div className="glow-card flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              Just Give Us a Call at
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Express Repair and Home Appliance Services Every Time!
            </h2>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-ink-600">for Immediate Home Appliance Support</p>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-2xl font-bold text-emerald-600 hover:text-emerald-700"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-ink-700">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>24/7 Service Available</span>
              </div>
              <div className="flex items-center gap-3 text-ink-700">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Same-Day Repair Service</span>
              </div>
              <div className="flex items-center gap-3 text-ink-700">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Certified & Experienced Technicians</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="glow-card p-6 sm:p-7">
            <h3 className="text-xl font-semibold text-ink-900">Book a Service</h3>
            <p className="mt-2 text-base text-ink-700">
              Fill in your details and we&apos;ll call you back.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-ink-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="^[0-9]{10}$"
                  maxLength={10}
                  title="Enter a 10-digit phone number"
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700">Product</label>
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select Product Repair Service
                  </option>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700">Product Age</label>
                <select
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Select Product Age
                  </option>
                  {ageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-ink-700">Address</label>
                <textarea
                  name="address"
                  placeholder="Your complete address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-ink-700">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="^[0-9]{6}$"
                  maxLength={6}
                  title="Enter a 6-digit pincode"
                  required
                  className="mt-1 w-full rounded-md border border-ink-200 bg-sand-50 px-3 py-2 text-ink-900 shadow-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 sm:w-auto"
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
}
