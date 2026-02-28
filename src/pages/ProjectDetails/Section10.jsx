import './Sections.css';

function Section10() {
  return (
    <section className="container py-5">

  <div className="row g-4 align-items-stretch">

    {/* COL 1 – TITLE */}
    <div className="col-12 col-lg-4">
      <h1 className="feedback-title" style={{color:'#5a5a5a'}}>
        Employer’s <br /> Feedback
      </h1>
    </div>

    {/* COL 2 – FEEDBACK */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="feedback-card">
        <p className="feedback-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et tempore neque veniam. Rem sed animi molestias mollitia ad! Architecto, ex ad eveniet obcaecati quam voluptates perspiciatis! Officiis dolore deleniti fugiat!
        </p>
        <span className="feedback-author">Product Manager</span>
      </div>
    </div>

    {/* COL 3 – FEEDBACK */}
    <div className="col-12 col-md-6 col-lg-4">
      <div className="feedback-card">
        <p className="feedback-text">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores ducimus aliquam similique ea velit voluptatem aut eum repellendus dolore. Ut cupiditate, iste hic illum nihil magnam labore eveniet dolores error.
        </p>
        <span className="feedback-author">UX Lead</span>
      </div>
    </div>

  </div>

  {/* SECOND ROW */}
  <div className="row g-4 mt-1">

    <div className="col-12 col-md-6 col-lg-4">
      <div className="feedback-card">
        <p className="feedback-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo veniam inventore dicta adipisci esse sed nesciunt maxime minus, laudantium placeat iste commodi excepturi! Quibusdam aspernatur quas nihil. Architecto, autem iste!
        </p>
        <span className="feedback-author">Design Manager</span>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="feedback-card">
        <p className="feedback-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ut aliquam soluta inventore mollitia, molestiae corporis eum explicabo laudantium quia numquam accusamus, consectetur quis. Totam nulla libero itaque impedit quisquam.
        </p>
        <span className="feedback-author">Tech Lead</span>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <div className="feedback-card">
        <p className="feedback-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ad fuga impedit saepe? Quod et officiis eum assumenda deleniti veritatis nam nihil omnis vitae ab velit doloribus, suscipit, sit asperiores?
        </p>
        <span className="feedback-author">Startup Founder</span>
      </div>
    </div>

  </div>

</section>
  )
}

export default Section10