export default function FAQItem({ question, answer, id }) {
    
    return (
        <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls="flush-collapseOne">
                            {question}
                        </button>
                    </h2>
                    <div id={`flush-collapse${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {answer}
                        </div>
                    </div>
            </div>
    );
}