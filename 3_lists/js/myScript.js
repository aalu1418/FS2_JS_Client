const print_content = () => {
  try {
    const id = "content";
    const content =
      "<ul>" +
      "<li>Coffee</li>" +
      "<li>Tea</li>" +
      "<li>Milk</li>" +
      "</ul> " +
      "<ol>" +
      "<li>Soda</li>" +
      "<li>Pop</li>" +
      "<li>Cola</li>" +
      "</ol> " +
      "<ul>" +
      "<li>Water</li>" +
      "<li>Juice</li>" +
      "<li>Sugar</li>" +
      "</ul>";
    document.getElementById(id).innerHTML = content;
    alert("lists created, please press ok to view");
    console.log("[print success]");
  } catch (e) {
    console.log("[print error] " + e);
  } finally {
  }
};

print_content();
