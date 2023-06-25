
import React from 'react'

const   FAQ =({ faq, index, toggleFAQ })=> {

  return (
    <>
    <div
      className={`faq sm:m-4  m-2 p-4 rounded-md shadow  ` + (faq.open ? `open` : ``)}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question text-md sm:text-xl">{faq.question}</div>
      <div className="faq-answer sm:text-base text-sm">{faq.answer}</div>
    </div>
    </>
  );
};

export default FAQ
