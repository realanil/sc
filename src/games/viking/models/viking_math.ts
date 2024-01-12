import BigNumber from "bignumber.js";
import { PlatformMath } from "../../../libs/platform/base/platform_math";

export class VikingMath extends PlatformMath {

    constructor(){
        super();

        this.defaultgrid = [
            [5, 2, 7],
            [9, 4, 5],
            [9, 1, 10],
            [5, 10, 2],
            [11, 8, 4]
        ];
        this.info = {
            betMultiplier:new BigNumber(20),
            gridLayout:[3, 3, 3, 3, 3],
            wildSymbols:[],
            payLines:[
                [1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0],
                [2, 2, 2, 2, 2],
                [0, 1, 2, 1, 0],
                [2, 1, 0, 1, 2],
                [1, 0, 0, 0, 1],
                [1, 2, 2, 2, 1],
                [0, 0, 1, 2, 2],
                [2, 2, 1, 0, 0],
                [1, 2, 1, 0, 1],
                [1, 0, 1, 2, 1],
                [0, 1, 1, 1, 0],
                [2, 1, 1, 1, 2],
                [0, 1, 0, 1, 0],
                [2, 1, 2, 1, 2],
                [1, 1, 0, 1, 1],
                [1, 1, 2, 1, 1],
                [0, 0, 2, 0, 0],
                [2, 2, 0, 2, 2],
                [0, 2, 2, 2, 0]
            ],
            symbols:[
                { name:"HV1", key:"HIGH", id:1, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(10), this.bd(100), this.bd(500)] },
                { name:"HV2", key:"HIGH", id:2, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(5), this.bd(30), this.bd(150)] },
                { name:"HV3", key:"HIGH", id:3, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(5), this.bd(20), this.bd(100)] },
                { name:"HV4", key:"HIGH", id:4, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(5), this.bd(10), this.bd(50)] },
                { name:"LV1", key:"LOW", id:5, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"LV2", key:"LOW", id:6, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"LV3", key:"LOW", id:7, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"LV4", key:"LOW", id:8, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"LV5", key:"LOW", id:9, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"LV6", key:"LOW", id:10, payout:[ this.bd(0), this.bd(0), this.bd(0), this.bd(2), this.bd(5), this.bd(20)] },
                { name:"Scatter", key:"SCATTER", id:11, payout:[] },
                { name:"Random", key:"RANDSYM", id:12, payout:[] }
            ]
        };

        this.buyBonus = [ { "id" : "buybonus", "cost" : 70 }];

        this.paidReels = [{
            id:"b1", weight:0,
            reels: [
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 6, 7, 8, 4, 9, 1, 10, 3, 6, 11, 5, 2, 7, 10, 10, 4, 8, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 11, 6, 5, 3, 7, 7, 4, 6, 10, 3, 8, 9, 4, 5, 5, 4, 6, 7, 12, 8, 10, 12, 6, 8, 9, 12, 10, 7, 8, 9, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 11, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 6, 11, 7, 8, 4, 9, 1, 10, 3, 6, 5, 2, 7, 10, 10, 4, 8, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 6, 5, 3, 7, 7, 4, 6, 10, 3, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 6, 7, 8, 4, 9, 1, 10, 3, 6, 5, 2, 7, 10, 10, 4, 8, 9, 2, 5, 6, 3, 7, 11, 8, 4, 9, 10, 11, 6, 5, 3, 7, 7, 4, 6, 10, 3, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 9, 1, 7, 3, 8, 2, 5, 3, 9, 1, 10, 5, 4, 7, 3, 1, 9, 5, 11, 7, 9, 1, 9, 3, 8, 6, 4, 5, 10, 2, 7, 9, 5, 3, 7, 9, 11, 5, 3, 7, 7, 3, 9, 5, 4, 5, 2, 7, 7, 9, 9],
                [ 5, 2, 6, 6, 1, 7, 7, 3, 8, 8, 2, 9, 9, 10, 1, 10, 2, 8, 6, 4, 5, 10, 2, 6, 11, 8, 4, 10, 6, 2, 10, 10, 4, 1, 8, 2, 6, 8, 4, 10, 7, 11, 4, 6, 10, 8, 4, 5, 4, 6, 8, 1, 10, 6, 10, 8, 8]
            ]
        }];

        this.reSpinReels = [{
            id:"b2", weight:0,
            reels: [
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 11, 8, 4, 9, 10, 11, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 11, 8, 4, 9, 10, 11, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 11, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 11, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 9, 1, 7, 3, 8, 5, 3, 9, 1, 10, 5, 4, 7, 3, 1, 9, 5, 11, 7, 9, 1, 9, 3, 6, 5, 7, 9, 5, 3, 7, 9, 11, 5, 3, 7, 7, 3, 9, 5, 5, 7, 7, 9, 9],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 9, 10, 10, 2, 8, 6, 4, 10, 2, 6, 11, 8, 4, 10, 6, 2, 10, 10, 4, 8, 2, 6, 8, 4, 10, 11, 4, 6, 10, 8, 4, 4, 6, 8, 10, 6, 10, 8, 8]
            ]
        }]

        this.freeReels = [{
                id:"f1", weight:0,
                reels: [
                    [ 5, 2, 6, 6, 1, 7, 12, 3, 8, 8, 12, 2, 5, 12, 3, 9, 1, 10, 10, 2, 5, 4, 12, 7, 3, 10, 1, 9, 9, 2, 5, 6, 12, 7, 8, 4, 9, 1, 10, 3, 6, 5, 2, 12, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 12, 8, 4, 9, 10, 12, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 12, 9, 4, 5, 5, 4, 6, 7, 12, 8, 10, 12, 6, 8, 9, 12, 10, 7, 12, 8, 9, 9, 8],
                    [ 5, 2, 6, 6, 1, 7, 12, 3, 8, 8, 12, 2, 5, 12, 3, 9, 1, 10, 10, 2, 5, 4, 12, 7, 3, 10, 1, 9, 9, 2, 5, 6, 12, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 12, 8, 4, 9, 10, 6, 12, 5, 3, 7, 7, 4, 6, 12, 10, 3, 12, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 9, 8],
                    [ 5, 2, 6, 6, 1, 7, 12, 3, 8, 8, 12, 2, 5, 12, 3, 9, 1, 10, 10, 2, 5, 4, 12, 7, 3, 10, 1, 9, 9, 2, 5, 6, 12, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 12, 8, 4, 9, 10, 6, 12, 5, 3, 7, 7, 4, 6, 12, 10, 3, 12, 8, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 9, 8],
                    [ 5, 2, 9, 1, 7, 3, 8, 5, 3, 9, 1, 10, 5, 4, 7, 3, 1, 9, 5, 7, 9, 1, 9, 3, 6, 5, 7, 9, 5, 3, 7, 9, 5, 3, 7, 7, 3, 9, 5, 5, 7, 7, 9, 9],
                    [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 9, 10, 10, 2, 8, 6, 4, 10, 2, 6, 8, 4, 10, 6, 2, 10, 10, 4, 8, 2, 6, 8, 4, 10, 4, 6, 10, 8, 4, 4, 6, 8, 10, 6, 10, 8, 8]
                ] 
            }
        ]

        this.freeReSpinReels = [{
            id:"f2", weight:0,
            reels: [
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 12, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 12, 9, 4, 5, 5, 4, 6, 12, 7, 12, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 12, 9, 8],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 5, 3, 9, 1, 10, 10, 12, 2, 5, 4, 7, 3, 10, 1, 9, 9, 2, 5, 12, 6, 7, 8, 4, 9, 1, 10, 3, 6, 12, 5, 2, 7, 10, 10, 4, 8, 12, 9, 2, 5, 6, 3, 7, 8, 4, 9, 10, 6, 5, 3, 7, 7, 4, 6, 12, 10, 3, 8, 12, 9, 4, 5, 5, 4, 6, 12, 7, 8, 12, 10, 6, 12, 8, 9, 12, 10, 7, 12, 8, 9, 9, 8],
                [ 5, 2, 9, 1, 7, 3, 8, 5, 3, 9, 1, 10, 5, 4, 7, 3, 1, 9, 5, 7, 9, 1, 9, 3, 6, 5, 7, 9, 5, 3, 7, 9, 5, 3, 7, 7, 3, 9, 5, 5, 7, 7, 9, 9],
                [ 5, 2, 6, 6, 1, 7, 3, 8, 8, 2, 9, 10, 10, 2, 8, 6, 4, 10, 2, 6, 8, 4, 10, 6, 2, 10, 10, 4, 8, 2, 6, 8, 4, 10, 4, 6, 10, 8, 4, 4, 6, 8, 10, 6, 10, 8, 8]
            ]
        }]


        this.actions["RespinTrigger"] = { triggers:["respin"], id:"respin", spins:1 };
        this.actions["FreeRespinTrigger"] = { triggers:["freerespin"], id:"freerespin", spins:1 };
        this.actions["FreespinTrigger"] = { triggers:["freespin"], id:"freespin", spins:10 };

        this.conditions["FreespinTrigger"] = { id:"freespin", symbol:11, minCount:4 };
        this.conditions["HoldSpin"] = { id:"holdspin" };

        this.collection["multiplies"] = [
            { weight :1, id : "2-3-4-6-16" }, 
            { weight :1, id : "2-4-5-7-16" }, 
            { weight :1, id : "2-3-5-7-16" }, 
            { weight :1, id : "2-4-6-8-16" }, 
            { weight :1, id : "2-3-4-7-16" }, 
            { weight :1, id : "2-4-5-8-16" }, 
            { weight :1, id : "2-3-5-8-16" }, 
            { weight :1, id : "2-4-6-9-16" }, 
            { weight :1, id : "2-3-4-9-16" }, 
            { weight :1, id : "2-4-5-10-16" }, 
            { weight :1, id : "2-3-5-10-16" }, 
            { weight :1, id : "2-4-6-12-16" }, 
            { weight :1, id : "2-3-4-12-16" }, 
            { weight :1, id : "2-4-5-15-20" }, 
            { weight :1, id : "2-3-5-15-20" }, 
            { weight :1, id : "2-4-6-16-20" }, 
            { weight :1, id : "2-3-4-6-20" }, 
            { weight :1, id : "2-4-5-7-20" }, 
            { weight :1, id : "2-3-5-7-20" }, 
            { weight :1, id : "2-4-6-8-20" }, 
            { weight :1, id : "2-3-4-7-20" }, 
            { weight :1, id : "2-4-5-8-20" }, 
            { weight :1, id : "2-3-5-8-20" }, 
            { weight :1, id : "2-4-6-9-20" }, 
            { weight :1, id : "2-3-4-9-20" }, 
            { weight :1, id : "2-4-5-10-20" }, 
            { weight :1, id : "2-3-5-10-20" }, 
            { weight :1, id : "2-4-6-12-20" }, 
            { weight :1, id : "2-3-4-12-20" }, 
            { weight :1, id : "2-4-5-15-25" }, 
            { weight :1, id : "2-3-5-15-25" }, 
            { weight :1, id : "2-4-6-16-25" }, 
            { weight :1, id : "2-3-4-6-25" }, 
            { weight :1, id : "2-4-5-7-25" }, 
            { weight :1, id : "2-3-5-7-25" }, 
            { weight :1, id : "2-4-6-8-25" }, 
            { weight :1, id : "2-3-4-7-25" }, 
            { weight :1, id : "2-4-5-8-25" }, 
            { weight :1, id : "2-3-5-8-25" }, 
            { weight :1, id : "2-4-6-9-25" }, 
            { weight :1, id : "2-3-4-9-25" }, 
            { weight :1, id : "2-4-5-10-25" }, 
            { weight :1, id : "2-3-5-10-25" }, 
            { weight :1, id : "2-4-6-12-25" }, 
            { weight :1, id : "2-3-4-12-25" }, 
            { weight :1, id : "2-4-5-15-100" }, 
            { weight :1, id : "2-3-5-15-100" }, 
            { weight :1, id : "2-4-6-16-100" }
        ]

        this.collection["BuyBonusAward"] = [{ weight:950, count:4}, { weight:50, count:5}]
        
    }

}

