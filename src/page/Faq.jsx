const Faq = () => {
  return (
    <div className="container mx-auto">
      <div className="my-20 py-5">
        <h1 className="text-4xl lg:text-5xl text-[#D31027] font-bold text-center mb-10">
          Frequently Asked Questions
        </h1>

        <div className="collapse collapse-arrow border bg-base-100 mb-3 border-[#D31027] text-start">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl">
            1. How do I make a hotel reservation?
          </div>
          <div className="collapse-content">
            <p>
              To make a hotel reservation, you can visit our website or call our
              reservation hotline. Choose your destination, select your check-in
              and check-out dates, and specify the number of guests and rooms
              needed. You can also customize your search with filters like room
              type, price range, and amenities. Once you find a suitable option,
              follow the prompts to complete your booking.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border mb-3 border-[#D31027] text-start">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl">
            2. What is the cancellation policy for my hotel reservation?
          </div>
          <div className="collapse-content">
            <p>
              Our cancellation policy may vary depending on the specific hotel
              and rate you have chosen. Generally, we offer a range of
              cancellation options, including non-refundable and flexible rates.
              The cancellation policy for your reservation will be clearly
              outlined during the booking process. Please review this
              information carefully before confirming your booking. If you have
              any questions, feel free to contact our customer support.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border mb-3 border-[#D31027] text-start">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl">
            3. Can I modify my hotel reservation after it has been confirmed?
          </div>
          <div className="collapse-content">
            <p>
              {" "}
              Yes, you can typically modify your reservation, such as changing
              your check-in or check-out dates, room type, or the number of
              guests. Log in to your account on our website or contact our
              customer support to make these changes. Keep in mind that
              modifications may be subject to availability and any associated
              fees or rate adjustments.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow border mb-3 border-[#D31027] text-start">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl">
            4. What payment methods are accepted for hotel reservations?
          </div>
          <div className="collapse-content">
            <p>
              We accept various payment methods, including credit cards, debit
              cards, and sometimes alternative options like PayPal. The accepted
              payment methods will be displayed during the booking process.
              Please note that some hotels may require a credit card for
              reservation security, even if you plan to pay in cash or with a
              different method upon check-in. Always check the payment details
              when making your reservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
