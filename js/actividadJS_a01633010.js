function findNonRepeating(s){

for (let i=0; i<s.length; i++){
   if (s.indexOf(s[i]) == s.lastIndexOf(s[i])){
      return s[i];
   }}

}

function bubbleSort(l){
    for (let i=0; i<l.length; i++){
        for (let j=0; j<l.length; j++){
            if(l[i] > j[i]){
                var temp = l[i];
                l[i] = j[i];
                j[i] = temp;
            }
        }
}

}




function quickSort(l){
}


function valueReverse(l){
    var newList = [];
    for (let i=l.length-1; i>=0;i--){
        newList.push(l[i]);
    }
    
    return newList;
    
}


function referenceReverse(l){
    let listLength = l.length;
    for (let i=listLength-1; i>=0; i--){
        l.push(l[i]);
    }
    for (let i=0;i<listLength;i++){
        l.shift();
    }
    return;
}


class Vector{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
    
    get magnitude(){
        return this.calcMagnitude();
    }
    
    get unit(){
        return this.unitVector();
    }

    
    sumVector(v){
        return new Vector(this.x+v.x, this.y+v.y, this.y+v.y);
    }
    substractVector(v){
        return new Vector(this.x-v.x, this.y-v.y, this.y-v.y);
    }
    
    multiplyScalar(s){
        return new Vector(this.x*s, this.y*s, this.y*s);
        
    }
    
    calcMagnitude(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2)+Math.pow(this.z,2));
    }
    
    unitVector(){
        return new Vector(this.x/this.magnitude, this.x/this.magnitude, this.z/this.magnitude);
    }
    
    
    
    
}

function areOrthogonalVectors(v1,v2){
    
    let xsum = v1.x * v2.x;
    let ysum = v1.y * v2.y;
    let zsum = v1.z * v2.z;
    
    let dotProduct = xsum + ysum + zsum;
    
    return (dotProduct ? false : true);
    
}


function MCD(n1,n2){
    
    if (n1 == 0 && n2 == 0){
        return 0;
    } else if (n1 == n2){
        return n1;
    } else if (n1 == 0 && n2 != 0){
        return n2;
    } else if (n1 != 0 && n2 == 0){
        return n1;
    } else {
        
        if(n2 > n1){
            if (Math.floor(n2/n1) == 1){
                return n2%n1;
            }
            else {
                return MCD(n1,n2%n1);
            }
        } else {
            if (Math.floor(n1/n2) == 1){
                return n1%n2;
            }
            else {
                return MCD(n2,n1%n2);
            }
        }
        
        
    }

}

function stringTo1337(s){
    
    const leetDict = {
        "a":"4",
        "b":"8",
        "e":"3",
        "g":"6",
        "i":"1",
        "o":"0",
        "s":"5",
        "t":"7",
        "z":"2",
        "A":"4",
        "B":"8",
        "E":"3",
        "G":"6",
        "I":"1",
        "O":"0",
        "S":"5",
        "T":"7",
        "Z":"2",
    }
    
    
    for (let i = 0; i<s.length;i++){
        if(s[i] in leetDict){
        s = s.replace(s[i],leetDict[s[i]])
        } else {
            continue;
        }
    }
    
    return s;
}

function factorize(n){
    let factors = [];
    let divisor = n;
    
    while(divisor!=0){
        
        if ((n%divisor) == 0){
            factors.push(divisor);
            divisor--;
        } else {
            divisor--;
        }
        
    }
    return factors;
    
    
}

function removeDuplicates(l){
    
    for (let i=0; i<l.length; i++){
       if (l.indexOf(l[i]) != l.lastIndexOf(l[i])){
           l.splice(i,1);
       }}
    return l;
    
}




