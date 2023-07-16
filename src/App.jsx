import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  let uniqueCharacters = "";
  let [outputCharacter, setOutputCharacter] = useState("");

  const countOccurrences = (arr, element) => {
    return arr.reduce((count, current) => {
      if (current === element) {
        count++;
      }
      return count;
    }, 0);
  };

  const findFirstUniqueCharacterInWord = (element) => {
    for (const char of element) {
      const charOccurrences = countOccurrences(element.split(""), char);
      if (charOccurrences === 1) {
        return char;
      }
    }
    return null;
  };

  const handleUniqueCharacter = () => {
    if (!text) {
      alert("Please enter text");
      return;
    }
    const words = text.split(/\W+/).filter((word) => word !== "");

    for (const word of words) {
      const firstUniqueCharacterInWord = findFirstUniqueCharacterInWord(word);
      if (firstUniqueCharacterInWord) {
        uniqueCharacters += firstUniqueCharacterInWord;
      }
    }

    const uniqOutputChar = findFirstUniqueCharacterInWord(uniqueCharacters);

    setOutputCharacter(() => uniqOutputChar);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setOutputCharacter("");
    uniqueCharacters = "";
    handleUniqueCharacter();
  };

  return (
    <>
      <p className="text">
        The program takes arbitrary text as input and finds, in each word of the
        text, the first character that is no longer repeated within the analyzed
        word. Then, from the resulting set of characters, the program should
        select the first unique character (i.e., the one that is not encountered
        again in the set) and return it.
      </p>
      <div className="wrap">
        <textarea
          className="textarea"
          type="text"
          value={text}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Find Unique Character</button>
        <div>
          <strong>First Unique Character:</strong> {outputCharacter}
        </div>
      </div>
    </>
  );
}

export default App;
