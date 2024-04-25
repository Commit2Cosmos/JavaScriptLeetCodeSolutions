let height = [0,1,0,2,1,0,1,3,2,1,2,1]

var trap = function(height) {
    var maxLeft = [];
    var maxRight = [];
    var max = 0;
    for(let i=0;i<height.length;i++){
        if(height[i]>max){
            max = height[i];
        }
        maxLeft[i]=max;
    }
    max=0;
    for(let i=height.length-1;i>=0;i--){
        if(height[i]>max){
            max = height[i];
        }
        maxRight[i]=max;
    }
    console.log(maxLeft, maxRight)
    // sum = sum+Math.min(maxLeft[i],maxRight[i])-height[i];
}
trap(height)