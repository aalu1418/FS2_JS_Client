const go_forward = () => {
  try {
    const path = window.location.pathname;
    const url = path.split("/");
    const page = url.pop();

    const new_url = page === "index.html" ? "intermediate.html" : "end.html";
    url.push(new_url);

    window.location = url.join("/");
    console.log("[Forward Success]");
  } catch (e) {
    console.log("[Forward Failed] "+e);
  } finally {

  }
};

const go_to_end = () => {
  try {
    const path = window.location.pathname;
    const url = path.split("/");
    const page = url.pop();

    url.push("end.html");

    window.location = url.join("/");
    console.log("[Go To End Success]");
  } catch (e) {
    console.log("[Go To End Failed] "+e);
  } finally {

  }
};

const submit = () => {
  try {
    const name = document.getElementById("input").value;
    // debugger;
    document.getElementById("hello").innerHTML = "Hello, World! Hello, "+name+"!";
    console.log("[Print Name Sucess]");
  } catch (e) {
    console.log("[Print Name Failed] "+e);
  } finally {

  }
};
