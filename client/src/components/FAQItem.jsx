export default function FAQItem({ question, answer, id }) {
    
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                    {question}
                </button>
            </h2>
            <div id={`flush-collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                {/* The dangerouslySetInnerHTML is used to make the <strong> text appear bold. But this should not be used if a user is the one entering the content */}
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
        </div>
    );
}