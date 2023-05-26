document.addEventListener('DOMContentLoaded', () => {
    // Darkmode
    const darkmode_btn = document.getElementById('darkmode-btn');
    darkmode_btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkmode_btn.innerHTML = '☀';
        }
        else {
            darkmode_btn.innerHTML = '☾';
        }
    });

    // Menue Bar Form
    const form_btn = document.getElementById('form-btn');
    const menue_form = document.getElementById('menue-form');
    form_btn.addEventListener('click', () => {
        menue_form.classList.toggle('menue');
        const whiteboard = document.getElementById('whiteboard');
        setHeight(whiteboard);
        

    });

    // Menue Bar Color
    const color_btn = document.getElementById('color-btn');
    const menue_color = document.getElementById('menue-color');
    color_btn.addEventListener('click', () => {
        menue_color.classList.toggle('menue');
        const whiteboard = document.getElementById('whiteboard');
        setHeight(whiteboard);
        // Colorize the Shapes
        const fuellfarbe_btn = document.getElementById('fuellfarbe-btn');
        const feld = document.getElementById('feld');
        fuellfarbe_btn.addEventListener('click', () => {
            feld.classList.toggle('invisible');

            

    });
        

    });

    // Menue Bar 
    const menue_btn = document.getElementById('menue-btn');
    const menue = document.getElementById('menue');
    menue_btn.addEventListener('click', () => { 
        menue.classList.toggle('menue');
        const whiteboard = document.getElementById('whiteboard');
        setHeight(whiteboard);
        
    });

    //Whitheboard height
    function setHeight(whiteboard) {
        if (!menue.classList.contains('menue') && !menue_color.classList.contains('menue') && !menue_form.classList.contains('menue')) {
            whiteboard.style.height = '70vh';
        } else if (!menue.classList.contains('menue') && !menue_color.classList.contains('menue') && menue_form.classList.contains('menue')) {
            whiteboard.style.height = '75vh';
        } else if (!menue.classList.contains('menue') && menue_color.classList.contains('menue') && !menue_form.classList.contains('menue')) {
            whiteboard.style.height = '75vh';
        } else if (!menue.classList.contains('menue') && menue_color.classList.contains('menue') && menue_form.classList.contains('menue')) {
            whiteboard.style.height = '80vh';
        } else if (menue.classList.contains('menue') && !menue_color.classList.contains('menue') && !menue_form.classList.contains('menue')) {
            whiteboard.style.height = '75vh';
        } else if (menue.classList.contains('menue') && !menue_color.classList.contains('menue') && menue_form.classList.contains('menue')) {
            whiteboard.style.height = '80vh';
        } else if (menue.classList.contains('menue') && menue_color.classList.contains('menue') && !menue_form.classList.contains('menue')) {
            whiteboard.style.height = '80vh';
        } else {
            whiteboard.style.height = '85vh';
        }
        }
    

    // Insert Forms to Whiteboard and edit them
    const einfuegen_btn = document.getElementById('einfuegen-btn');

    einfuegen_btn.addEventListener('click', () => {

        const el = document.createElement('div');

        const whiteboard = document.getElementById('whiteboard');
        const wb = document.getElementById('wb');
        el.classList.add('rectangle');
        el.classList.add('draggable');
        wb.appendChild(el);
        whiteboard.appendChild(wb);
        //create list with all els
        const el_list = [];
        el_list.push(el);


        // for each element in el_list add eventlistener
        el_list.forEach((el) => {
            el.addEventListener('contextmenu', () => {
                el.classList.toggle('r_clicked');
                colorize(el);                
            });
        });

    // Colorize the Shapes
    function colorize(el){
            const BLUE = document.getElementById('BLUE');
            const RED = document.getElementById('RED');
            const GREEN = document.getElementById('GREEN');
            const YELLOW = document.getElementById('YELLOW');
            const ORANGE = document.getElementById('ORANGE');
            const PURPLE = document.getElementById('PURPLE');
            const WHITE = document.getElementById('WHITE');
            const BLACK = document.getElementById('BLACK');

            if(el.classList.contains('r_clicked')) {
                BLUE.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('blue');
                });
                RED.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('red');
                });
                GREEN.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('green');
                });
                YELLOW.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('yellow');
                });
                ORANGE.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('orange');
                });
                PURPLE.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('purple');
                });
                WHITE.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('white');
                });
                BLACK.addEventListener('click', () => {
                    rem_color(el);
                    el.classList.add('black');
                });
            }
    }

    // Function to remove all color classes
    function rem_color(el) {
        // Remove r_clicked class from all elements except el
        el_list.forEach((el) => {
            el.classList.remove('r_clicked');
        });
        
        el.classList.remove('blue');
        el.classList.remove('red');
        el.classList.remove('green');
        el.classList.remove('yellow');
        el.classList.remove('orange');
        el.classList.remove('purple');
        el.classList.remove('white');
        el.classList.remove('black');
    }
            

    

        // Functions for dragging the shapes

        var active = false;
        var currentX;
        var currentY;
        var initialX;
        var initialY;
        var xOffset = 0;
        var yOffset = 0;

        whiteboard.addEventListener("touchstart", dragStart, false);
        whiteboard.addEventListener("touchend", dragEnd, false);
        whiteboard.addEventListener("touchmove", drag, false);

        whiteboard.addEventListener("mousedown", dragStart, false);
        whiteboard.addEventListener("mouseup", dragEnd, false);
        whiteboard.addEventListener("mousemove", drag, false);

        function dragStart(e) {
          if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
          } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
          }
      
          if (e.target === el) {
            active = true;
          }
          }

          function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
      
            active = false;
          }

          function drag(e) {
            if (active) {
            
              e.preventDefault();
            
              if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
              } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
              }
      
              xOffset = currentX;
              yOffset = currentY;
      
              setTranslate(currentX, currentY, el);
            }
          }

          function setTranslate(xPos, yPos, el) {
            el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
          } 
    });
});