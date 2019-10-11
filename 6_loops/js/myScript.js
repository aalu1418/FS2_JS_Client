const create_content = () => {
  const nums = [1, 5, 10];
  const words = ["question", "comment", "quiz"];
  const id = "content";

  const letter = "c";
  const number = 6;
  let heading1 =
    "<p>list of words with starting letter: " + letter + " in [" + words + "]</p> <ul>";
  let heading2 =
    "<p>list of numbers that are greater than: " + number + " in [" + nums +  "]</p> <ul>";

  for (let i = 0; i < nums.length; i++){
    heading1 = words[i][0] == letter ? heading1 + "<li>" + words[i] + "</li>" : heading1;
    heading2 = nums[i] > number ? heading2 + "<li>" + nums[i] + "</li>" : heading2;
  }

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
