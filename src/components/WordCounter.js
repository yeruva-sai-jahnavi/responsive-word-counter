import { useState } from "react";

function WordCounter() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    function updateCounter(text) {
        let words = text.split(" ");
        setCount(words.length - 1);
    }

    function handleChange(e) {
        setText(e.target.value);
        updateCounter(e.target.value);
    }

    return (
        <div class="mt-5 text-center p-3 w-50 mx-auto bg-info bg-opacity-10 border border-info rounded">
            <h1 className="font-weight-bold p-6">Responsive Word Counter</h1>
            <textarea
                className="form-control w-50 mx-auto mb-3"
                value={text}
                onChange={handleChange}
                rows="5"
            ></textarea>
            <h5>
                Word Count:{" "}
                <span className="badge rounded-pill text-bg-info">{count}</span>
            </h5>
        </div>
    );
}

export default WordCounter;
