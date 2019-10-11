const printHello = () => {
  try {
    const text = "Hello, World!";
    const id = "header";
    document.getElementById(id).innerHTML = text;
    console.log("[successful print]");
  } catch (e) {
    console.log("[unsuccessful print] "+e);
  } finally {

  }
};


printHello();
