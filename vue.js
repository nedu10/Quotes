new Vue({
    el: "#app",
    data: {
        playerPercentage: 100,
        monsterPercentage: 100,
        playerWidth: "100%",
        monsterWidth: "100%",
        attack: 2,
        specialAttack: 4,
        heal: 1,
        giveUp: this.width,
        comments: [],
        reverseComments: []
        
    },
    methods: {
        monster: function(){
            var random = Math.random();
            random = random*3;
            random = Math.round(random);
            if (random === 0){
                if (this.playerPercentage > 1) {
                    var att = this.playerWidth;
                    var att1 = att.split("");
                    att1.pop();
                    var att2 = att1.join("");
                    this.playerPercentage = Number(att2)-this.attack;
                    this.comments.push("monster lunch a normal attack");
                    return this.playerWidth = this.playerPercentage+"%"
                    }
                    else{
                        return this.monster();
                    }
            }
            if (random === 1) {
                if (this.playerPercentage > 3) {
                    var specialAtt = this.playerWidth;
                    var specialAtt1 = specialAtt.split("");
                    specialAtt1.pop();
                    var specialAtt2 = specialAtt1.join("");
                    this.playerPercentage = Number(specialAtt2)-this.specialAttack;
                    this.comments.push("monster lunch a special attack");
                    return this.playerWidth = this.playerPercentage+"%"
                    }
                    else{
                        return this.monster();
                    }
            }
            if(random ===2 ){
                if(this.monsterPercentage < 100){
                    var heal = this.monsterPercentage++;
                    this.monsterWidth = heal+"%"
                    this.comments.push("monster heals");
                }
                else{
                    return this.monster();
                }
            }
            if (random === 3) {
                if (this.monsterPercentage <= 10) {
                    this.monsterPercentage = 0;
                    this.monsterWidth = "0%";
                    this.comments.push("monster is tired of the whole shit");
                }
                else{
                    return this.monster();
                }
            }
        },
        reset: function(){
            this.playerWidth = "100%";
            this.monsterWidth = "100%";
            this.playerPercentage = 100;
            this.monsterPercentage = 100;
            this.comments = [];
            this.reverseComments= []
        },
        playerAttac: function(){
            if (this.monsterPercentage > 1) {
                var att = this.monsterWidth;
                var att1 = att.split("");
                att1.pop();
                var att2 = att1.join("");
                this.monsterPercentage = Number(att2)-this.attack;
                this.monsterWidth = this.monsterPercentage+"%";
                var vm = this;
                this.comments.push("you lunch a normal attack");
                setTimeout(function(){
                    vm.monster();
                    vm.reverseComments = vm.comments;
                    vm.reverseComments.reverse();
                }, 200)
                }
        },
        playerSpecialAttac: function(){
            if (this.monsterPercentage > 3) {
                var specialAtt = this.monsterWidth;
                var specialAtt1 = specialAtt.split("");
                specialAtt1.pop();
                var specialAtt2 = specialAtt1.join("");
                this.monsterPercentage = Number(specialAtt2)-this.specialAttack;
                this.monsterWidth = this.monsterPercentage+"%";
                var vm = this;
                this.comments.push("you lunch a normal special attack");
                setTimeout(function(){
                    vm.monster();
                    vm.reverseComments = vm.comments;
                    vm.reverseComments.reverse();
                }, 200)
                }
        },
        playerHeal: function(){
            if(this.playerPercentage < 100){
                var heal = this.playerPercentage++;
                this.playerWidth = heal+"%";
                var vm = this;
                this.comments.push("you just healed youself");
                setTimeout(function(){
                    vm.monster();
                    vm.reverseComments = vm.comments;
                    vm.reverseComments.reverse();
                }, 200)
            }
        },
        givUp: function(){
            this.playerPercentage = 0;
            this.playerWidth = "0%";
            this.comments.push("Are you that scared");
            this.reverseComments = this.comments;
            this.reverseComments.reverse();
        }
        // ,
        // reverseComments: function(){
        //     console.log("got here")
        //     if (this.comments.length > 0) {
        //       var reverseComment =  this.comments;
        //       return reverseComment.reverse();
        //     }  
        //     else{
        //         return [];
        //     }
        // }

    }
})