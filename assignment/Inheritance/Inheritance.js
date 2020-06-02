const BicycleModule = (function() {
    'use strict' 
    function createBicyclePrototype(){
        let obj = {
            speed: 0,
            applyBrake : function (dec) {
                return this.speed -= dec;
            },
            speedUp : function (inc) {
                return this.speed +=  inc;
            }
        }
        return obj;
    }

    function createMountainBikeProtoype(prototype){
        let obj = Object.create(prototype);
        
        obj.gear = 10;
    
        obj.setGear = function (value) {
            return this.gear = value;
        };    

        return obj;
    }

    function start(){
        let bic_1 = Object.create(createBicyclePrototype());
        let bic_2 = Object.create(createMountainBikeProtoype(createBicyclePrototype()));
        return {bic_1, bic_2}
    }

    let result = start();
    result.bic_1.speedUp(3);
    result.bic_1.applyBrake(2);
    result.bic_2.setGear(3);
    alert(result.bic_1.speed);
    alert(result.bic_2.gear); 

    console.log(result.bic_1.speed);
    console.log(result.bic_2.gear); 
})();



const BicycleModuleES6 = (function() {
    'use strict' 
    class createBicyclePrototype{
        constructor(){
            this.speed = 0;
        }
        applyBrake(dec) {
            return this.speed -= dec;
        }
        speedUp(inc){
            return this.speed += inc;
        }
    }

    class createMountainBikeProtoype extends createBicyclePrototype{
        constructor(){
            super();
            this.gear=10;
        }
        
        setGear(value){
            this.gear= value;
        }

        getGear(value){
            return this.gear;
        }
        
    }

    function start(){
        let bic_1 = new createBicyclePrototype();
        let bic_2 = new createMountainBikeProtoype();
        return {bic_1, bic_2}
    }

    let result = start();

    result.bic_1.speedUp(7);
    result.bic_1.applyBrake(3);
    result.bic_2.setGear(5);
    alert(result.bic_1.speed);
    alert(result.bic_2.gear);  
     
   
    console.log(result.bic_1.speed);
    console.log(result.bic_2.gear); 
})(); 