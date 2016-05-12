/*
      思路：其中一种颜色的一个点和另一种颜色的三个点的距离的比较
            而当另一种颜色三个点中有点已经被选过时，则需要放弃处理

            即一对三式选择

            放弃处理的方式：用对应的biaojired和biaojigreen两个数组来记录是否被选中
            若被选中，标记为0，将对应的距离放大化，最短距离的筛选时，该点对应距离就会被淘汰
    */
$(document).ready(function () {
  $('#button1').click(function () {
    //准备区//////////////////////////////////////////////////////////////////////////////
    rx = new Array(3);
    ry = new Array(3);
    gx = new Array(3);
    gy = new Array(3);
    bx = new Array(2);
    by = new Array(2);
    var i,i1,j,k,zhan,min;
    //zhan用来接收返回的下标
    var a,b,c,d,e;
    var lujin_x = new Array(8);
    var lujin_y = new Array(8);
    //lujin用来存储每一步的坐标
    biaojired = new Array(3);
    biaojigreen = new Array(3);
    //biaoji用来标记红绿各个点是否被选中过，选中过就被赋值为0
    var jihaox,jihaoy;
    //jihao用来更新一对三式选择中的  “一”
    for (var i = 0; i < 8; i++) { //初始化
      lujin_x[i] = 0;
      lujin_y[i] = 0;
    }
    for (var i = 0; i < 3; i++) {
      biaojired[i] = 2;
      biaojigreen[i] = 2;
    }
    rx[0] = $('#postext_rx0').val() - 9; //获值
    rx[1] = $('#postext_rx1').val() - 9;
    rx[2] = $('#postext_rx2').val() - 9;
    ry[0] = $('#postext_ry0').val() - 9;
    ry[1] = $('#postext_ry1').val() - 9;
    ry[2] = $('#postext_ry2').val() - 9;
    gx[0] = $('#postext_gx0').val() - 9;
    gx[1] = $('#postext_gx1').val() - 9;
    gx[2] = $('#postext_gx2').val() - 9;
    gy[0] = $('#postext_gy0').val() - 9;
    gy[1] = $('#postext_gy1').val() - 9;
    gy[2] = $('#postext_gy2').val() - 9;
    bx[0] = $('#postext_bx0').val() - 9;
    bx[1] = $('#postext_bx1').val() - 9;
    by[0] = $('#postext_by0').val() - 9;
    by[1] = $('#postext_by1').val() - 9;
    //主函数区//////////////////////////////////////////////////////////////////////////////////////////
    jihaox = bx[0];
    jihaoy = by[0];
    for (k = 0; k < 6; k++) {
      if (k % 2 == 0) {
        zhan = distance(jihaox, jihaoy, rx, ry, k);
        lujin_x[k] = rx[zhan];
        lujin_y[k] = ry[zhan];
        biaojired[zhan] = 0;
        jihaox = rx[zhan];
        jihaoy = ry[zhan];
      } 
      else {
        zhan = distance(jihaox, jihaoy, gx, gy, k);
        lujin_x[k] = gx[zhan];
        lujin_y[k] = gy[zhan];
        biaojigreen[zhan] = 0;
        jihaox = gx[zhan];
        jihaoy = gy[zhan];
      }
    }
    //功能区/////////////////////////////////////////////////////////////////////////////////////////////
    
    function distance(a, b, c, d, e) { 
      //点(a,b)到(c[0],d[0]),(c[1],d[1]),(c[2],d[2])三点的的距离，返回（a,b）到这三个点距离的“有效”最小值时，
      //c和d数组中该点的下标,e用来判断红绿点的顺序
      var dis = new Array(3); 
      //定义数组，装纳三组距离
      var fanhuixiabiao=0;
      for (var j = 0; j < 3; j++) {
      //将对应不同颜色三个点的距离算出放在数组里
        dis[j] = distance1(a, b, c[j], d[j]); 
      }

      min = dis[0];
      for (var i1 = 0; i1 < 3; i1++) {
         if (e % 2 == 0) {  
            if(biaojired[i1]==0) dis[i1]=5555;if(i1==0)min=5555;
          } 
          else {
        if(biaojigreen[i1]==0) dis[i1]=5555;if(i1==0)min=5555;
      }//如果c和d数组中的点已经被选中，则biaojired和biaojigreen数组中与 下标 e  对应的数被赋值为0(和id为“div0”的“0”一致)
       //若被赋值为0,则将改点与（a,b）点的距离放大化，，，，赋值5555(随便)给它

        if (min > dis[i1]) {
          min = dis[i1];
          fanhuixiabiao = i1;
        }
        //找到“有效”最小值时的下标，并返回给参数fanhuixiabiao
      }
      if (e % 2 == 0) {
        biaojired[fanhuixiabiao] = 0;
      } 
      else {
        biaojigreen[fanhuixiabiao] = 0;
      }
      return fanhuixiabiao;
    }
    function distance1(a, b, c, d) 
    //坐标为（a,b）和（c,d）两点的距离函数
    {
      return Math.sqrt((a - c) * (a - c) + (b - d) * (b - d));
    }
    //动画区////////////////////////////////////////////////////////////////////////////////////////

    var div0 = $('#blue_0'); //动画
    var div1=$("#blue_1");
   
    for(var i=0;i<4;i++){//id为div0的蓝点的动画
        div0.animate({
      left: lujin_x[i],
      top: lujin_y[i],
      opacity: '1'
    }, 1000,function(){
        if(i==3) alert(1);
    });
    }
    for(var i=4;i<6;i++){//id为div1的蓝点的动画
        div1.animate({
      left: lujin_x[i],
      top: lujin_y[i],
      opacity: '1'
    }, 1000,function(){
        if(i==5) alert(1);
    });
    }
    div0.animate({//id为div0的蓝点回到原位
      left: bx[0],
      top: by[0],
      opacity: '1'
    }, 1000);
    div1.animate({//id为div1的蓝点回到原位
      left: bx[1],
      top: by[1],
      opacity: '1'
    }, 1000);
  });
});