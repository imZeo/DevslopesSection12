function toggleDropdown() {

    let navBarToggle = document.getElementById("navBarToggle");

    if (navBarToggle.className === 'topnav') {
        navBarToggle.className += ' responsive';
    } else {
        navBarToggle.className = 'topnav';
    }
}
