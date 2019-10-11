const make_content = () => {
  const words = ["chips", "cookies", "muffins", "candy", "cakes"];
  const numbers = [10, 2, 5, 0, 6];
  const id = "content";
  let content = "<ul>";

  words.forEach((elem, index) => {
    content = content + "<li>" + numbers[index] + " " + elem + "</li>";
  });
  content = content + "</ul>";
  console.log(content);

  try {
    document.getElementById(id).innerHTML = content;
    console.log("[write success]");
  } catch (e) {
    console.log("[write fail]" + e);
  } finally {
  }
};

make_content();
