function toggleDropdown() {

    let navBarToggle = document.getElementById('navBarToggle');

    if (navBarToggle.className === 'navBarList') {
        navBarToggle.className += 'responsive';
    } else {
        navBarToggle.className = 'navBarList';
    }
}
