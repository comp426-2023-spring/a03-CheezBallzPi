#!/usr/bin/env node

import { rps } from "/lib/rpsls.js"

function print_usage() {
    console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    )
}

function print_rules() {
    console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    )
}

// Get args
const [,, ...args] = process.argv

let player = null

// Parse args
for(let i = 0; i < args.length; i++) {
    switch(args[i]) {
        case "-h":
        case "--help":
            print_usage()
            process.exit(0) 
        case "-r":
        case "--rules":
            print_rules()
            process.exit(0)
    }
}

if(args.length > 0) {
    player = args[0]
}

let result = rps(player)
if(result == null) {
    // out of range
    print_usage()
    print_rules()
} else {
    console.log(JSON.stringify(result))
}