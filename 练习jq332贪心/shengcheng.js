
    $(document).ready(function () {//显示出七个点
        $('#button2').click(function (){
            var red_x0 = Math.random()*800;// - $('#red0').position().left;
            var red_y0 = Math.random()*600; //- $('#red0').position().top;
            var red_x1 = Math.random()*800;//- $('#red1').position().left;
            var red_y1 = Math.random()*600; //- $('#red1').position().top;
            var red_x2 = Math.random()*800; //- $('#red2').position().left;
            var red_y2 = Math.random()*600; //- $('#red2').position().top;
            var green_x0 = Math.random()*800;// - $('#green0').position().left;
            var green_y0 = Math.random()*600; //- $('#green0').position().top;
            var green_x1 = Math.random()*800; //- $('#green1').position().left;
            var green_y1 = Math.random()*600; //- $('#green1').position().top;
            var green_x2 = Math.random()*800; //- $('#green2').position().left;
            var green_y2 = Math.random()*600; //- $('#green2').position().top;
            var blue_x0 = Math.random()*800; //- $('#blue_0').position().left;
            var blue_y0 = Math.random()*600; //- $('#blue_0').position().top;
            var blue_x1 = Math.random()*800; //- $('#blue_1').position().left;
            var blue_y1 = Math.random()*600; //- $('#blue_1').position().top;

            document.getElementById('postext_rx0').value=red_x0 + 9;
            document.getElementById('postext_rx1').value=red_x1 + 9;
            document.getElementById('postext_rx2').value=red_x2 + 9;
            document.getElementById('postext_ry0').value=red_y0 + 9;
            document.getElementById('postext_ry1').value=red_y1 + 9;
            document.getElementById('postext_ry2').value=red_y2 + 9;
            document.getElementById('postext_gx0').value=green_x0 + 9;
            document.getElementById('postext_gx1').value=green_x1 + 9;
            document.getElementById('postext_gx2').value=green_x2 + 9;
            document.getElementById('postext_gy0').value=green_y0 + 9;
            document.getElementById('postext_gy1').value=green_y1 + 9;
            document.getElementById('postext_gy2').value=green_y2 + 9;
            document.getElementById('postext_bx0').value=blue_x0 + 9;
            document.getElementById('postext_bx1').value=blue_x1 + 9;
            document.getElementById('postext_by0').value=blue_y0 + 9;
            document.getElementById('postext_by1').value=blue_y1 + 9;

            
            //$('img').toggleClass('after');
            $('#red0').css("position", "absolute");
            $('#red1').css("position", "absolute");
            $('#red2').css("position", "absolute");
            $('#red0').css("left", red_x0);
            $('#red0').css("top", red_y0);
            $('#red1').css("left", red_x1);
            $('#red1').css("top", red_y1);
            $('#red2').css("left", red_x2);
            $('#red2').css("top", red_y2);
            $('#green0').css("position", "absolute");
            $('#green1').css("position", "absolute");
            $('#green2').css("position", "absolute");
            $('#green0').css("left", green_x0);
            $('#green0').css("top", green_y0);
            $('#green1').css("left", green_x1);
            $('#green1').css("top", green_y1);
            $('#green2').css("left", green_x2);
            $('#green2').css("top", green_y2);  
            $('#blue_0').css("position", "absolute");
            $('#blue_1').css("position", "absolute");   
            $('#blue_0').css("left", blue_x0);
            $('#blue_0').css("top", blue_y0);
            $('#blue_1').css("left", blue_x1);
            $('#blue_1').css("top", blue_y1);
                  
        });
    });