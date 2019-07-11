function showOne() {
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "1";
            }
            
            function showTwo() {
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "2";
            }
            
            function showThree() {
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "3";
            }
            
            function showFour() {
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "4";
            }
            
            function showFive() {
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "5";
            }
            
            function showSix(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "6";
            }
            
            function showSeven(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "7";
            }
            
            function showEight(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "8";
            }
            
            function showNine(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "9";
            }
            
            function showZero(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "0";
            }
            
            function doAdd(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "+";
            }
            
            function doMinus(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "-";
            }
            
            function doMultiplication(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "*";
            }
            
            function doDivide(){
                var x = document.getElementById("display").value;
                document.getElementById("display").value = x + "/";
            }
            
            function doEquals(){
                var x = eval(document.getElementById("display").value);
                document.getElementById("display").value = x;
            }
            
            function doClear(){
                document.getElementById("display").value = "";
            }

            function mClear(){
                document.getElementById("mDisplay").value = "";
            }

            function mSave(){
                var a = document.getElementById("display").value;
                document.getElementById("mDisplay").value = a;
            }

            function mRet(){
                var a = document.getElementById("mDisplay").value;
                document.getElementById("display").value = a;
            }

            function mPlus(){
                var a = eval(document.getElementById("display").value);
                var b = eval(document.getElementById("mDisplay").value);
                var c = a + b;
                
                document.getElementById("mDisplay").value = c;
            }

            function bspace(){
                var str = document.getElementById("display").value;
                var $str = str.length - 1;
                var shw = str.substr(0,$str);
                
                document.getElementById("display").value = shw;
            }