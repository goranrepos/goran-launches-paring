import { ILaunch } from "../../../Types";

export const spacexData: ILaunch[] = [
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/94/f2/NN6Ph45r_o.png"
            }
        },
        "success": false,
        "failures": [
            {
                "time": 33,
                "altitude": null,
                "reason": "merlin engine failure"
            }
        ],
        "payloads": [
            {
                "type": "Satellite",
                "id": "5eb0e4b5b6c3bb0006eeb1e1"
            }
        ],
        "name": "FalconSat",
        "date_utc": "2006-03-24T22:30:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "Merlin1A",
                    "id": "5e9e289df35918033d3b2623"
                }
            }
        ],
        "id": "5eb87cd9ffd86e000604b32a"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/f9/4a/ZboXReNb_o.png"
            }
        },
        "success": false,
        "failures": [
            {
                "time": 301,
                "altitude": 289,
                "reason": "harmonic oscillation leading to premature engine shutdown"
            }
        ],
        "payloads": [
            {
                "type": "Satellite",
                "id": "5eb0e4b6b6c3bb0006eeb1e2"
            }
        ],
        "name": "DemoSat",
        "date_utc": "2007-03-21T01:10:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "Merlin2A",
                    "id": "5e9e289ef35918416a3b2624"
                }
            }
        ],
        "id": "5eb87cdaffd86e000604b32b"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/6c/cb/na1tzhHs_o.png"
            }
        },
        "success": false,
        "failures": [
            {
                "time": 140,
                "altitude": 35,
                "reason": "residual stage-1 thrust led to collision between stage 1 and stage 2"
            }
        ],
        "payloads": [
            {
                "type": "Satellite",
                "id": "5eb0e4b6b6c3bb0006eeb1e3"
            }
        ],
        "name": "Trailblazer",
        "date_utc": "2008-08-03T03:34:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "Merlin1C",
                    "id": "5e9e289ef3591814873b2625"
                }
            }
        ],
        "id": "5eb87cdbffd86e000604b32c"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/95/39/sRqN7rsv_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [
            {
                "type": "Satellite",
                "id": "5eb0e4b7b6c3bb0006eeb1e5"
            }
        ],
        "name": "RatSat",
        "date_utc": "2008-09-28T23:15:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "Merlin2C",
                    "id": "5e9e289ef3591855dc3b2626"
                }
            }
        ],
        "id": "5eb87cdbffd86e000604b32d"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/ab/5a/Pequxd5d_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [
            {
                "type": "Satellite",
                "id": "5eb0e4b7b6c3bb0006eeb1e6"
            }
        ],
        "name": "RazakSat",
        "date_utc": "2009-07-13T03:35:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "Merlin3C",
                    "id": "5e9e289ef359184f103b2627"
                }
            }
        ],
        "id": "5eb87cdcffd86e000604b32e"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/73/7f/u7BKqv2C_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [
            {
                "type": "Dragon Boilerplate",
                "id": "5eb0e4b7b6c3bb0006eeb1e7"
            }
        ],
        "name": "Falcon 9 Test Flight",
        "date_utc": "2010-06-04T18:45:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "B0003",
                    "id": "5e9e289ef359185f2b3b2628"
                }
            }
        ],
        "id": "5eb87cddffd86e000604b32f"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/fa/dc/FOUDQ0Sn_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [
            {
                "type": "Dragon 1.0",
                "id": "5eb0e4b9b6c3bb0006eeb1e8"
            }
        ],
        "name": "COTS 1",
        "date_utc": "2010-12-08T15:43:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "B0004",
                    "id": "5e9e289ef35918187c3b2629"
                }
            }
        ],
        "id": "5eb87cdeffd86e000604b330"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/c5/f4/XfLVgbaO_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [
            {
                "type": "Dragon 1.0",
                "id": "5eb0e4bab6c3bb0006eeb1ea"
            }
        ],
        "name": "COTS 2",
        "date_utc": "2012-05-22T07:44:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "B0005",
                    "id": "5e9e289ef35918f39c3b262a"
                }
            }
        ],
        "id": "5eb87cdfffd86e000604b331"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/3e/91/hlGiK49a_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [],
        "name": "CRS-1",
        "date_utc": "2012-10-08T00:35:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "B0006",
                    "id": "5e9e289ff3591821a73b262b"
                }
            }
        ],
        "id": "5eb87ce0ffd86e000604b332"
    },
    {
        "links": {
            "patch": {
                "small": "https://images2.imgbox.com/bd/fe/lXUYKL28_o.png"
            }
        },
        "success": true,
        "failures": [],
        "payloads": [],
        "name": "CRS-2",
        "date_utc": "2013-03-01T19:10:00.000Z",
        "cores": [
            {
                "core": {
                    "serial": "B0007",
                    "id": "5e9e289ff3591884e03b262c"
                }
            }
        ],
        "id": "5eb87ce1ffd86e000604b333"
    }
];