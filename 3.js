/*
 * * * * * * * * * * * * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 *                     * 
 * * * * * * * * * * * * 
*/

var l = 12 ;

for(var x =1 ; x<= l; x++){
    var n = " "
    for(var y =1 ;y<=l;y++){
        if(x==1 || y==1 || x==l || y==l){
            n+= "*"+" "
        }else{
            n+="  "
        }
    }
    console.log(n)
}