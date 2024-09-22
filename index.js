document.getElementById('hbtn').onclick = () => {
    // Set the background color to gray initially
    document.getElementById('sm').style.backgroundColor = "#e91e63";

    // After 1 second (1000ms), change it back to black
    setTimeout(() => {
        document.getElementById('sm').style.backgroundColor = "black";
    }, 1500); 
};
