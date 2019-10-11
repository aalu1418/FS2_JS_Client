const create_content = () => {
  const nums = [1, 5, 10];
  const words = ["question", "comment", "quiz"];
  const id = "content";

  const letter = "q";
  const number = 4;
  let heading1 =
    "<p>list of words with starting letter: " + letter + "</p> <ul>";
  let heading2 =
    "<p>list of numbers that are greater than: " + number + "</p> <ul>";

  words.forEach((elem, index) => {
    // debugger;
    heading1 = elem[0] == letter ? heading1 + "<li>" + elem + "</li>" : heading1;
    heading2 =
      nums[index] > number ? heading2 + "<li>" + nums[index] + "</li>" : heading2;
  });

  heading1 = heading1 + "</ul>";
  heading2 = heading2 + "</ul>";

  try {
    document.getElementById(id).innerHTML = heading1 + heading2;
    console.log("[write successful]");
  } catch (e) {
    console.log("[write failed] " + e);
  } finally {
  }
};

create_content();
