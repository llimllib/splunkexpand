let starttime = Date.now();
// set up the mutation observer
var observer = new MutationObserver((mutations, me) => {
  let expandos = document.querySelectorAll(".jsexpands");
  if (expandos && Date.now() - starttime > 5 * 1000) {
    console.log("time passed, disconnecting");
    me.disconnect();
  } else if (expandos) {
    expandos.forEach(x => x.click());

    // Click on the modal that splunk pops up to clear it
    let modal = document.querySelector(".modalize-table-top");
    if (modal) {
      modal.click();
    }
  }
});

// start observing
observer.observe(document, {
  childList: true,
  subtree: true
});
