<html>
    <body>
        <script>
        // function add(a,b){
             
        //     alert(a+b)
        // }
        // function sub(a,b){
             
        //       alert(a-b)
        //   }
        //   function mul(a,b){
             
        //       alert(a*b)
        //   }
        //   function div(a,b){
             
        //       alert(a/b)
        //   }
        //   function mod(a,b){
             
        //       alert(a%b)
        //   }
         let a=prompt('enter first number')
         let b=prompt('enter second number')
         let c=prompt('enter operator')
         a=parseInt(a)
         b=parseInt(b)
        //  if(c=='+')
        //  {
        //     add(a,b);
        //  }
        //  if(c=='-')
        //  {
        //     sub(a,b);
        //  }
        //  if(c=='*')
        //  {
        //     mul(a,b);
        //  }
        //  if(c=='/')
        //  {
        //     div(a,b);
        //  }
        //  if(c=='%')
        //  {
        //     mod(a,b);
        //  }
        switch(c){
            case '+':
                alert(a+b);
                break
            case '-':
                alert(a-b);
                break
            case '*':
                alert(a*b);
                break
            case '/':
                alert(a/b);
                break
            case '%':
                alert(a%b);
                break
                default:
                    alert('not an operator')

        }
        </script>
    </body>
</html>