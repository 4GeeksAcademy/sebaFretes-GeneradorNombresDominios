/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "my"];
  let adjectives = ["favorite", "fabolous"];
  let nouns = ["project", "code"];
  let extension = [".com", ".es"];

  const domainGenerator = () => {
    let domainNames = [];

    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          for (let m = 0; m < extension.length; m++) {
            let domainName;

            let extensionMatch = extension[m].replace(".", "");
            if (nouns[k].endsWith(extensionMatch)) {
              let modifiedNoun = nouns[k].slice(0, -extensionMatch.length);
              domainName =
                pronouns[i] + adjectives[j] + modifiedNoun + extension[m];
            } else {
              domainName =
                pronouns[i] + adjectives[j] + nouns[k] + extension[m];
            }

            domainNames.push(domainName);
          }
        }
      }
    }
    return domainNames;
  };
  let result = domainGenerator();

  result.forEach((value, i) => {
    console.log(value, i);
  });
};
