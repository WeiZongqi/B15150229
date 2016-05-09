
    $(document).ready(function () {//显示出七个点
        $('#show').click(function (){
            var red_x0 = $('#postext_rx0').val() - $('#red0').position().left;
            var red_y0 = $('#postext_ry0').val() - $('#red0').position().top;
            var red_x1 = $('#postext_rx1').val() - $('#red1').position().left;
            var red_y1 = $('#postext_ry1').val() - $('#red1').position().top;
            var red_x2 = $('#postext_rx2').val() - $('#red2').position().left;
            var red_y2 = $('#postext_ry2').val() - $('#red2').position().top;
            var green_x0 = $('#postext_gx0').val() - $('#green0').position().left;
            var green_y0 = $('#postext_gy0').val() - $('#green0').position().top;
            var green_x1 = $('#postext_gx1').val() - $('#green1').position().left;
            var green_y1 = $('#postext_gy1').val() - $('#green1').position().top;
            var green_x2 = $('#postext_gx2').val() - $('#green2').position().left;
            var green_y2 = $('#postext_gy2').val() - $('#green2').position().top;
            var blue_x0 = $('#postext_bx0').val() - $('#blue_0').position().left;
            var blue_y0 = $('#postext_by0').val() - $('#blue_0').position().top;
            var blue_x1 = $('#postext_bx1').val() - $('#blue_1').position().left;
            var blue_y1 = $('#postext_by1').val() - $('#blue_1').position().top;
            
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