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

    // Prevent Contextmenu
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });

    // Menue Bar Form
    const form_btn = document.getElementById('form-btn');
    const menue_form = document.getElementById('menue-form');
    form_btn.addEventListener('click', () => {
        menue_form.classList.toggle('menue');
        const whiteboard = document.getElementById('whiteboard');
        setHeight(whiteboard);
        // Different Forms
        const einfuegen_btn = document.getElementById('einfuegen-btn');
        const formen = document.getElementById('formen');
        einfuegen_btn.addEventListener('click', () => {
            formen.classList.toggle('invisible');
        })

        

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

    //create list with all els
    const el_list = [];
    const whiteboard = document.getElementById('whiteboard');
    const wb = document.getElementById('wb');


    const text_btn = document.getElementById('text-btn');
    text_btn.addEventListener('click', () => {
        const el = document.createElement('div');
        const text = document.createElement('input');
        text.setAttribute('type', 'text');
        text.setAttribute('placeholder', 'Text');
        text.classList.add('text');
        text.classList.add('draggable');
        el.appendChild(text);
        el.classList.add('draggable');
        el.classList.add('text-box');
        wb.appendChild(el);
        whiteboard.appendChild(wb);
        el_list.push(el);
        el_click(el);
    });

    const rect_btn = document.getElementById('rect-btn');
    rect_btn.addEventListener('click', () => {
        const el = document.createElement('div');
        el.classList.add('rectangle');
        el.classList.add('draggable');
        wb.appendChild(el);
        whiteboard.appendChild(wb);
        el_list.push(el);
        el_click(el);   
    });
    

    const circle_btn = document.getElementById('circle-btn');
    circle_btn.addEventListener('click', () => {
        const el = document.createElement('div');
        el.classList.add('circle');
        el.classList.add('draggable');
        wb.appendChild(el);
        whiteboard.appendChild(wb);
        el_list.push(el);
        el_click(el);
    });

    const triangle_btn = document.getElementById('triangle-btn');
    triangle_btn.addEventListener('click', () => {
        const el = document.createElement('div');
        el.classList.add('triangle');
        el.classList.add('draggable');
        wb.appendChild(el);
        whiteboard.appendChild(wb);
        el_list.push(el);
        el_click(el);
    });

    

    // for each element in el_list add eventlistener
    function el_click(el) {
        el_list.forEach((el) => {
            el.addEventListener('contextmenu', () => {
                if (!el.classList.contains('text-box')) {
                    el.classList.toggle('r_clicked2');
                } else {
                    el.firstChild.classList.toggle('r_clicked2');
                }
                el.classList.toggle('r_clicked');
                
                    if (el.classList.contains('r_clicked')) {
                        const context = document.createElement('div');
                        el.appendChild(context);
                        context.classList.add('context-menu');
                        const delete_btn = document.createElement('button');
                        delete_btn.innerHTML = 'Löschen';
                        const fill_btn = document.createElement('button');
                        fill_btn.innerHTML = 'Füllfarbe';
                        const stroke_btn = document.createElement('button');
                        stroke_btn.innerHTML = 'Linienfarbe';
                        const stroke_width_btn = document.createElement('button');
                        stroke_width_btn.innerHTML = 'Linienbreite';
                        context.appendChild(delete_btn);
                        context.appendChild(fill_btn);
                        context.appendChild(stroke_btn);
                        context.appendChild(stroke_width_btn);
                            if (el.classList.contains('text-box')) {
                                const font_btn = document.createElement('button');
                                font_btn.innerHTML = 'Schriftart';
                                const font_color_btn = document.createElement('button');
                                font_color_btn.innerHTML = 'Schriftfarbe';
                                context.appendChild(font_btn);
                                context.appendChild(font_color_btn);
                            }
                    } else {
                        el.removeChild(el.lastChild);
                    }
                    
                });
        });
    
    


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
      
          if (e.target === el || e.target === el.firstChild|| e.target === el.lastChild ) {
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
        
    } 

       

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

            
                BLUE.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('blue');
                    }
                    
                });
                RED.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('red');
                    }
                    
                }
                );
                GREEN.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('green');
                    }
                    
                }
                );
                YELLOW.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('yellow');
                    }
                    
                }
                );
                ORANGE.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('orange');
                    }
                    
                }
                );
                PURPLE.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('purple');
                    }
                    
                }
                );
                WHITE.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('white');
                    }
                    
                }
                );
                BLACK.addEventListener('click', () => {
                    if (el.classList.contains('r_clicked')) {
                        rem_color(el);
                        el.classList.add('black');
                    }
                    
                }
                );

            
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
            

    

   
    
});