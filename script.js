// Add click event to all copy buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling; // the input next to the button
    input.select();
    input.setSelectionRange(0, 99999); // mobile support
    navigator.clipboard.writeText(input.value).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = "Copy", 1000);
    }).catch(() => {
      alert("Failed to copy. Try manually.");
    });
  });
});
